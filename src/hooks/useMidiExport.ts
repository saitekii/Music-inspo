import { useCallback } from "react";
import { Midi } from "@tonejs/midi";
import * as Tone from "tone";
import type { AudioData } from "../types/concept";

function sanitizeFilename(name: string): string {
  return `${name.replace(/[^a-zA-Z0-9-_ ]/g, "").replace(/\s+/g, "-")}.mid`;
}

function midiToBlob(midi: Midi): Blob {
  const arr = midi.toArray();
  return new Blob([new Uint8Array(arr.buffer as ArrayBuffer, arr.byteOffset, arr.byteLength)], { type: "audio/midi" });
}

function buildMidi(name: string, audio: AudioData): Midi {
  const midi = new Midi();
  midi.header.setTempo(audio.tempo);
  if (audio.timeSignature) {
    midi.header.timeSignatures.push({
      ticks: 0,
      timeSignature: audio.timeSignature,
      measures: 0,
    });
  }
  const track = midi.addTrack();
  track.name = name;
  let currentTicks = 0;
  for (const event of audio.events) {
    const durationTicks = Tone.Time(event.duration).toTicks();
    for (const note of event.notes) {
      track.addNote({
        midi: Tone.Frequency(note).toMidi(),
        ticks: currentTicks,
        durationTicks,
        velocity: event.velocity ?? 0.7,
      });
    }
    currentTicks += durationTicks;
  }
  return midi;
}

export function useMidiExport() {
  const exportMidi = useCallback((name: string, audio: AudioData) => {
    const midi = buildMidi(name, audio);
    const blob = midiToBlob(midi);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = sanitizeFilename(name);
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  function getMidiDragUrl(name: string, audio: AudioData): string {
    const midi = buildMidi(name, audio);
    const blob = midiToBlob(midi);
    const url = URL.createObjectURL(blob);
    const filename = sanitizeFilename(name);
    return `audio/midi:${filename}:${url}`;
  }

  return { exportMidi, getMidiDragUrl };
}
