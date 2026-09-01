export interface SF2Sample {
  name: string;
  rootKey: number;
  keyLo: number;
  keyHi: number;
  sampleRate: number;
  buffer: Float32Array;
}

export interface SF2ParseResult {
  presetName: string;
  samples: SF2Sample[];
}

export function parseSF2(data: ArrayBuffer): SF2ParseResult {
  const view = new DataView(data);
  const decoder = new TextDecoder("ascii");

  function readStr(offset: number, len: number): string {
    const bytes = new Uint8Array(data, offset, len);
    const end = bytes.indexOf(0);
    return decoder.decode(bytes.subarray(0, end >= 0 ? end : len));
  }

  function readU16(offset: number) { return view.getUint16(offset, true); }
  function readU32(offset: number) { return view.getUint32(offset, true); }
  function readI8(offset: number) { return view.getInt8(offset); }

  if (readStr(0, 4) !== "RIFF") throw new Error("Not a RIFF file");
  if (readStr(8, 4) !== "sfbk") throw new Error("Not a SoundFont file");

  let smplOffset = 0, smplSize = 0;
  const pdtaChunks: Record<string, { offset: number; size: number }> = {};

  let pos = 12;
  const fileEnd = 8 + readU32(4);

  while (pos < fileEnd) {
    const chunkId = readStr(pos, 4);
    const chunkSize = readU32(pos + 4);

    if (chunkId === "LIST") {
      const listType = readStr(pos + 8, 4);
      if (listType === "sdta" || listType === "pdta") {
        let subPos = pos + 12;
        const listEnd = pos + 8 + chunkSize;
        while (subPos < listEnd) {
          const subId = readStr(subPos, 4);
          const subSize = readU32(subPos + 4);
          if (subId === "smpl") {
            smplOffset = subPos + 8;
            smplSize = subSize;
          } else if (listType === "pdta") {
            pdtaChunks[subId] = { offset: subPos + 8, size: subSize };
          }
          subPos += 8 + subSize + (subSize % 2);
        }
      }
    }
    pos += 8 + chunkSize + (chunkSize % 2);
  }

  if (!smplOffset) throw new Error("No sample data found");
  if (!pdtaChunks.shdr) throw new Error("No sample headers found");
  if (!pdtaChunks.phdr) throw new Error("No preset headers found");

  // Parse sample headers (46 bytes each)
  const shdrCount = pdtaChunks.shdr.size / 46;
  const sampleHeaders: Array<{
    name: string; start: number; end: number;
    startLoop: number; endLoop: number;
    sampleRate: number; originalPitch: number;
    pitchCorrection: number; sampleType: number;
  }> = [];

  for (let i = 0; i < shdrCount; i++) {
    const o = pdtaChunks.shdr.offset + i * 46;
    sampleHeaders.push({
      name: readStr(o, 20),
      start: readU32(o + 20),
      end: readU32(o + 24),
      startLoop: readU32(o + 28),
      endLoop: readU32(o + 32),
      sampleRate: readU32(o + 36),
      originalPitch: view.getUint8(o + 40),
      pitchCorrection: readI8(o + 41),
      sampleType: readU16(o + 44),
    });
  }

  // Parse preset headers (38 bytes each)
  const phdrCount = pdtaChunks.phdr.size / 38;
  const presets: Array<{ name: string; bagLo: number; bagHi: number }> = [];
  for (let i = 0; i < phdrCount; i++) {
    const o = pdtaChunks.phdr.offset + i * 38;
    const bagNdx = readU16(o + 24);
    const nextBag = i + 1 < phdrCount ? readU16(pdtaChunks.phdr.offset + (i + 1) * 38 + 24) : bagNdx;
    presets.push({ name: readStr(o, 20), bagLo: bagNdx, bagHi: nextBag });
  }

  // Parse preset bags (4 bytes each)
  const pbagCount = pdtaChunks.pbag ? pdtaChunks.pbag.size / 4 : 0;
  const presetBags: Array<{ genNdx: number }> = [];
  for (let i = 0; i < pbagCount; i++) {
    presetBags.push({ genNdx: readU16(pdtaChunks.pbag.offset + i * 4) });
  }

  // Parse preset generators (4 bytes each)
  const pgenCount = pdtaChunks.pgen ? pdtaChunks.pgen.size / 4 : 0;
  const presetGens: Array<{ oper: number; amount: number }> = [];
  for (let i = 0; i < pgenCount; i++) {
    const o = pdtaChunks.pgen.offset + i * 4;
    presetGens.push({ oper: readU16(o), amount: readU16(o + 2) });
  }

  // Parse instrument headers (22 bytes each)
  const instCount = pdtaChunks.inst ? pdtaChunks.inst.size / 22 : 0;
  const instruments: Array<{ name: string; bagLo: number; bagHi: number }> = [];
  for (let i = 0; i < instCount; i++) {
    const o = pdtaChunks.inst.offset + i * 22;
    const bagNdx = readU16(o + 20);
    const nextBag = i + 1 < instCount ? readU16(pdtaChunks.inst.offset + (i + 1) * 22 + 20) : bagNdx;
    instruments.push({ name: readStr(o, 20), bagLo: bagNdx, bagHi: nextBag });
  }

  // Parse instrument bags (4 bytes each)
  const ibagCount = pdtaChunks.ibag ? pdtaChunks.ibag.size / 4 : 0;
  const instBags: Array<{ genNdx: number }> = [];
  for (let i = 0; i < ibagCount; i++) {
    instBags.push({ genNdx: readU16(pdtaChunks.ibag.offset + i * 4) });
  }

  // Parse instrument generators (4 bytes each)
  const igenCount = pdtaChunks.igen ? pdtaChunks.igen.size / 4 : 0;
  const instGens: Array<{ oper: number; amount: number }> = [];
  for (let i = 0; i < igenCount; i++) {
    const o = pdtaChunks.igen.offset + i * 4;
    instGens.push({ oper: readU16(o), amount: readU16(o + 2) });
  }

  // Find instruments referenced by first non-EOP preset
  const preset = presets.find(p => p.name !== "EOP");
  if (!preset) throw new Error("No usable preset found");

  const instrumentIndices: number[] = [];
  for (let b = preset.bagLo; b < preset.bagHi; b++) {
    const genLo = presetBags[b].genNdx;
    const genHi = b + 1 < presetBags.length ? presetBags[b + 1].genNdx : pgenCount;
    for (let g = genLo; g < genHi; g++) {
      if (presetGens[g].oper === 41) {
        instrumentIndices.push(presetGens[g].amount);
      }
    }
  }

  if (instrumentIndices.length === 0 && instruments.length > 0) {
    instrumentIndices.push(0);
  }

  // Extract sample zones from instruments
  const rawSamples = new Int16Array(data, smplOffset, smplSize / 2);
  const results: SF2Sample[] = [];

  for (const instIdx of instrumentIndices) {
    if (instIdx >= instruments.length) continue;
    const inst = instruments[instIdx];

    for (let b = inst.bagLo; b < inst.bagHi; b++) {
      const genLo = instBags[b].genNdx;
      const genHi = b + 1 < instBags.length ? instBags[b + 1].genNdx : igenCount;

      let keyLo = 0, keyHi = 127, sampleId = -1, rootKeyOverride = -1;

      for (let g = genLo; g < genHi; g++) {
        const gen = instGens[g];
        switch (gen.oper) {
          case 43: // keyRange
            keyLo = gen.amount & 0xff;
            keyHi = (gen.amount >> 8) & 0xff;
            break;
          case 53: // sampleID
            sampleId = gen.amount;
            break;
          case 58: // overridingRootKey
            rootKeyOverride = gen.amount;
            break;
        }
      }

      if (sampleId < 0 || sampleId >= sampleHeaders.length) continue;
      const shdr = sampleHeaders[sampleId];

      // Skip ROM samples and linked right-channel samples
      if (shdr.sampleType & 0x8000) continue;
      if (shdr.sampleType === 2) continue;

      const rootKey = rootKeyOverride >= 0 ? rootKeyOverride : shdr.originalPitch;
      if (rootKey === 255) continue; // unpitched percussion

      const sampleLen = shdr.end - shdr.start;
      if (sampleLen <= 0) continue;

      let float32 = new Float32Array(sampleLen);
      for (let i = 0; i < sampleLen; i++) {
        float32[i] = rawSamples[shdr.start + i] / 32768;
      }

      // Extend samples using SF2 loop points so they sustain until released
      const loopStart = shdr.startLoop - shdr.start;
      const loopEnd = shdr.endLoop - shdr.start;
      const loopLen = loopEnd - loopStart;
      const hasLoop = loopStart >= 0 && loopEnd > loopStart && loopLen > 64 && loopEnd <= sampleLen;

      if (hasLoop) {
        const minSamples = 10 * shdr.sampleRate; // 10 seconds of sustain
        if (sampleLen < minSamples) {
          const loopsNeeded = Math.ceil((minSamples - loopEnd) / loopLen);
          const newLen = loopEnd + loopsNeeded * loopLen;
          const extended = new Float32Array(newLen);
          extended.set(float32.subarray(0, loopEnd));
          for (let i = 0; i < loopsNeeded; i++) {
            extended.set(float32.subarray(loopStart, loopEnd), loopEnd + i * loopLen);
          }
          float32 = extended;
        }
      }

      // Fade out the last 2048 samples to prevent end-of-buffer clicks
      const finalLen = float32.length;
      const fadeLen = Math.min(2048, finalLen);
      for (let i = 0; i < fadeLen; i++) {
        float32[finalLen - 1 - i] *= i / fadeLen;
      }

      results.push({
        name: shdr.name,
        rootKey,
        keyLo,
        keyHi,
        sampleRate: shdr.sampleRate,
        buffer: float32,
      });
    }
  }

  if (results.length === 0) throw new Error("No samples found in preset");

  return { presetName: preset.name, samples: results };
}
