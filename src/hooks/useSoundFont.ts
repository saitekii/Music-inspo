import { useCallback, useRef, useState } from "react";
import * as Tone from "tone";
import { parseSF2 } from "../lib/sf2-parser";
import { getLimiter } from "./useAudioPlayer";

const MIDI_NOTES = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
];

function midiToNoteName(midi: number): string {
  const octave = Math.floor(midi / 12) - 1;
  return MIDI_NOTES[midi % 12] + octave;
}

export function useSoundFont() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [presetName, setPresetName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const samplerRef = useRef<Tone.Sampler | null>(null);

  const load = useCallback(async (file: File) => {
    setLoading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = parseSF2(arrayBuffer);

      // Dispose old sampler
      samplerRef.current?.dispose();

      const ctx = Tone.getContext();
      const buffers: Record<string, Tone.ToneAudioBuffer> = {};

      for (const sample of result.samples) {
        const noteName = midiToNoteName(sample.rootKey);
        if (buffers[noteName]) continue;

        const audioBuffer = ctx.createBuffer(1, sample.buffer.length, sample.sampleRate);
        audioBuffer.copyToChannel(sample.buffer, 0);
        buffers[noteName] = new Tone.ToneAudioBuffer(audioBuffer);
      }

      const sampler = new Tone.Sampler({
        urls: buffers as unknown as Record<string, string>,
        release: 0.3,
        volume: -12,
      }).connect(getLimiter());

      samplerRef.current = sampler;
      setFileName(file.name);
      setPresetName(result.presetName);
    } catch (e) {
      console.error("Failed to load SoundFont:", e);
      alert("Failed to load SoundFont: " + (e instanceof Error ? e.message : "Unknown error"));
    } finally {
      setLoading(false);
    }
  }, []);

  const unload = useCallback(() => {
    samplerRef.current?.dispose();
    samplerRef.current = null;
    setFileName(null);
    setPresetName(null);
  }, []);

  return { fileName, presetName, loading, load, unload, samplerRef };
}
