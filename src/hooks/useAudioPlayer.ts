import { useCallback, useRef, useState } from "react";
import * as Tone from "tone";
import type { AudioData } from "../types/concept";
import { extendChordNotes, type VoicingDensity } from "../utils/chordVoicing";

const NOTE_RE = /^([A-G][#b]?)(-?\d+)$/;
const MIN_MIDI = 48; // C3

export const SYNTH_PRESETS = [
  { id: "soft-pad", label: "🎹 Soft Pad" },
  { id: "ep", label: "🎵 Electric Piano" },
  { id: "warm", label: "🌊 Warm Pad" },
  { id: "organ", label: "⛪ Organ" },
  { id: "bright", label: "✨ Bright Keys" },
  { id: "bell", label: "🔔 Bell / Vibes" },
  { id: "retro", label: "👾 Retro Square" },
] as const;

export type SynthPresetId = (typeof SYNTH_PRESETS)[number]["id"];

export interface PlaybackOptions {
  transpose: number;
  tuningHz: number;
  tempoOverride: number | null;
  synthPreset: SynthPresetId;
  voicingDensity: VoicingDensity;
}

export function createSynth(presetId: SynthPresetId): Tone.PolySynth {
  switch (presetId) {
    case "soft-pad":
      return new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "triangle" },
        envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 0.8 },
        volume: -8,
      });
    case "ep":
      return new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 1,
        modulationIndex: 3.5,
        oscillator: { type: "sine" } as any,
        envelope: { attack: 0.001, decay: 1.0, sustain: 0.3, release: 1.5 },
        modulation: { type: "sine" } as any,
        modulationEnvelope: { attack: 0.001, decay: 0.3, sustain: 0.1, release: 0.5 },
        volume: -8,
      }) as unknown as Tone.PolySynth;
    case "warm":
      return new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "fattriangle", count: 3, spread: 25 } as any,
        envelope: { attack: 0.08, decay: 0.4, sustain: 0.6, release: 1.5 },
        volume: -10,
      });
    case "organ":
      return new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "sine" },
        envelope: { attack: 0.005, decay: 0.05, sustain: 0.9, release: 0.1 },
        volume: -6,
      });
    case "bright":
      return new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "sawtooth" },
        envelope: { attack: 0.01, decay: 0.4, sustain: 0.25, release: 0.6 },
        volume: -18,
      });
    case "bell":
      return new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 5.07,
        modulationIndex: 12,
        oscillator: { type: "sine" } as any,
        envelope: { attack: 0.001, decay: 1.2, sustain: 0.05, release: 2.0 },
        modulation: { type: "sine" } as any,
        modulationEnvelope: { attack: 0.001, decay: 0.4, sustain: 0, release: 0.8 },
        volume: -10,
      }) as unknown as Tone.PolySynth;
    case "retro":
      return new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: "square" },
        envelope: { attack: 0.005, decay: 0.2, sustain: 0.5, release: 0.3 },
        volume: -18,
      });
  }
}

function transposeNote(note: string, semitones: number): string {
  if (semitones === 0) return note;
  const midi = Tone.Frequency(note).toMidi() + semitones;
  return Tone.Frequency(Math.max(0, Math.min(127, midi)), "midi").toNote();
}

function clampChord(notes: string[]): string[] {
  let lowestMidi = 127;
  for (const note of notes) {
    const midi = Tone.Frequency(note).toMidi();
    if (midi < lowestMidi) lowestMidi = midi;
  }
  if (lowestMidi >= MIN_MIDI) return notes;
  const octaveShift = Math.ceil((MIN_MIDI - lowestMidi) / 12);
  return notes.map((note) => {
    const m = NOTE_RE.exec(note);
    if (!m) return note;
    return m[1] + (parseInt(m[2], 10) + octaveShift);
  });
}

let limiter: Tone.Limiter | null = null;
export function getLimiter(): Tone.Limiter {
  if (!limiter) {
    limiter = new Tone.Limiter(-3).toDestination();
  }
  return limiter;
}

export function useAudioPlayer(
  externalSampler?: React.RefObject<Tone.Sampler | null>,
  optionsRef?: React.RefObject<PlaybackOptions>
) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const activePresetRef = useRef<SynthPresetId>("soft-pad");
  const scheduledEvents = useRef<number[]>([]);

  const stop = useCallback(() => {
    scheduledEvents.current.forEach((id) => Tone.getTransport().clear(id));
    scheduledEvents.current = [];
    Tone.getTransport().stop();
    Tone.getTransport().position = 0;
    synthRef.current?.releaseAll();
    externalSampler?.current?.releaseAll();
    setPlayingId(null);
  }, [externalSampler]);

  const play = useCallback(
    (conceptId: string, audio: AudioData) => {
      stop();

      const opts = optionsRef?.current ?? {
        transpose: 0,
        tuningHz: 440,
        tempoOverride: null,
        synthPreset: "soft-pad" as SynthPresetId,
        voicingDensity: "triad" as VoicingDensity,
      };

      const startPlayback = () => {
        const useSampler = externalSampler?.current?.loaded;
        let instrument: Tone.PolySynth | Tone.Sampler;

        if (useSampler) {
          instrument = externalSampler.current!;
        } else {
          if (!synthRef.current || activePresetRef.current !== opts.synthPreset) {
            synthRef.current?.disconnect();
            synthRef.current?.dispose();
            synthRef.current = createSynth(opts.synthPreset).connect(getLimiter());
            activePresetRef.current = opts.synthPreset;
          }
          instrument = synthRef.current;
        }

        const transport = Tone.getTransport();
        const bpm = opts.tempoOverride ?? audio.tempo;
        transport.bpm.value = bpm;
        transport.position = 0;

        const tuningRatio = opts.tuningHz / 440;

        let currentTime = 0;
        for (const event of audio.events) {
          const time = currentTime;
          let notes = event.notes;
          if (opts.voicingDensity !== "triad") {
            notes = extendChordNotes(notes, opts.voicingDensity, event.chordSymbol);
          }
          if (opts.transpose !== 0) {
            notes = notes.map((n) => transposeNote(n, opts.transpose));
          }
          notes = clampChord(notes);

          const finalNotes: (string | number)[] =
            tuningRatio === 1
              ? notes
              : notes.map((n) => Tone.Frequency(n).toFrequency() * tuningRatio);

          const id = transport.schedule((t) => {
            instrument.triggerAttackRelease(
              finalNotes as string[],
              event.duration,
              t,
              event.velocity ?? 0.7
            );
          }, Tone.Time(time, "i").toSeconds());
          scheduledEvents.current.push(id);
          currentTime += Tone.Time(event.duration).toTicks();
        }

        const totalTicks = currentTime;
        const totalSeconds = (totalTicks / Tone.Transport.PPQ) * (60 / bpm);
        const endId = transport.schedule(() => {
          stop();
        }, totalSeconds + 0.5);
        scheduledEvents.current.push(endId);

        setPlayingId(conceptId);
        transport.start();
      };

      if (Tone.getContext().state !== "running") {
        Tone.start().then(startPlayback);
      } else {
        startPlayback();
      }
    },
    [stop, externalSampler, optionsRef]
  );

  return { play, stop, playingId };
}
