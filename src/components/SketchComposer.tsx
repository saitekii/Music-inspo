import { useCallback, useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import {
  SYNTH_PRESETS,
  type SynthPresetId,
  createSynth,
  getLimiter,
} from "../hooks/useAudioPlayer";
import type { AudioData } from "../types/concept";
import {
  KEYS,
  SCALES,
  TIME_SIGS,
  KEY_TO_PC,
  SCALE_INTERVALS,
  type InspirationSet,
} from "./InspirationGenerator";

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const PITCH_COLORS = [
  "#e8524e", "#5088d0", "#dbb830", "#8850c8", "#42b862",
  "#e05480", "#42c4d0", "#e8883a", "#5c58b8", "#90c040",
  "#c24aa2", "#42b09e",
];

const BLACK_KEYS = new Set([1, 3, 6, 8, 10]);

const ROW_H = 14;
const LABEL_W = 44;
const BEAT_W = 60;
const PPQ = 192;
const MIN_MIDI = 36;
const MAX_MIDI = 83;
const PITCH_RANGE = MAX_MIDI - MIN_MIDI + 1;
const RESIZE_ZONE = 14;
const DRAG_THRESHOLD = 3;

const QUANTIZE_OPTIONS = [
  { label: "1/4", ticks: PPQ },
  { label: "1/8", ticks: PPQ / 2 },
  { label: "1/16", ticks: PPQ / 4 },
  { label: "1/32", ticks: PPQ / 8 },
];

interface SketchNote {
  id: number;
  midi: number;
  startTick: number;
  lengthTicks: number;
  velocity: number;
}

interface DragInfo {
  noteId: number;
  edge: "body" | "resize";
  moved: boolean;
  startX: number;
  startY: number;
  grabOffset: number;
  origTick: number;
  origMidi: number;
  origLength: number;
  currentTick: number;
  currentMidi: number;
  currentLength: number;
  multiOriginals?: Map<number, { startTick: number; midi: number; lengthTicks: number }>;
}

interface MarqueeInfo {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const TRACK_NAMES = ["Melody", "Chords", "Bass"];
const TRACK_DEFAULT_PRESETS: SynthPresetId[] = ["soft-pad", "soft-pad", "fm-bass"];

interface TrackData {
  notes: SketchNote[];
  preset: SynthPresetId;
  history: SketchNote[][];
  historyIdx: number;
}

function makeEmptyTrack(preset: SynthPresetId): TrackData {
  return { notes: [], preset, history: [[]], historyIdx: 0 };
}

interface SavedSketch {
  id: string;
  name: string;
  notes: SketchNote[];
  tracks?: { notes: SketchNote[]; preset: SynthPresetId }[];
  bpm: number;
  measures: number;
  beatsPerMeasure: number;
  beatUnit: number;
  keyRoot: number;
  scaleName: string;
  inspoContrast?: string;
  inspoConstraint?: string;
  savedAt: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  importAudio?: AudioData | null;
  onImportDone?: () => void;
  inspoSettings?: InspirationSet | null;
  onInspoApplied?: () => void;
}

function midiToLabel(midi: number): string {
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}

const NOTE_TO_PC: Record<string, number> = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3,
  E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8,
  A: 9, "A#": 10, Bb: 10, B: 11,
};

function noteNameToMidi(note: string): number {
  const m = /^([A-G][#b]?)(-?\d+)$/.exec(note);
  if (!m) return 60;
  const pc = NOTE_TO_PC[m[1]] ?? 0;
  return (parseInt(m[2], 10) + 1) * 12 + pc;
}

function durToTicks(dur: string): number {
  try {
    return Tone.Time(dur).toTicks();
  } catch {
    const map: Record<string, number> = {
      "1n": PPQ * 4, "2n": PPQ * 2, "4n": PPQ, "8n": PPQ / 2,
      "16n": PPQ / 4, "32n": PPQ / 8, "2n.": PPQ * 3,
      "4n.": PPQ * 1.5, "8n.": PPQ * 0.75,
    };
    return map[dur] ?? PPQ;
  }
}

function loadSavedSketches(): SavedSketch[] {
  try {
    const saved = localStorage.getItem("saved-sketches");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function SketchComposer({ open, onClose, importAudio, onImportDone, inspoSettings, onInspoApplied }: Props) {
  const [notes, setNotes] = useState<SketchNote[]>([]);
  const [bpm, setBpm] = useState(120);
  const [measures, setMeasures] = useState(4);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [beatUnit, setBeatUnit] = useState(4);
  const [quantizeIdx, setQuantizeIdx] = useState(1);
  const [synthPreset, setSynthPreset] = useState<SynthPresetId>("soft-pad");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [keyRoot, setKeyRoot] = useState(-1);
  const [scaleName, setScaleName] = useState("");
  const [inspoContrast, setInspoContrast] = useState("");
  const [inspoConstraint, setInspoConstraint] = useState("");
  const [showInspoPanel, setShowInspoPanel] = useState(false);
  const [showSaveInput, setShowSaveInput] = useState(false);
  const [sketchSaveName, setSketchSaveName] = useState("");
  const [showLoadMenu, setShowLoadMenu] = useState(false);
  const [savedSketches, setSavedSketches] = useState<SavedSketch[]>([]);
  const [activeTrack, setActiveTrack] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<Tone.PolySynth | null>(null);
  const activePresetRef = useRef<SynthPresetId>("soft-pad");
  const playSynthsRef = useRef<Tone.PolySynth[]>([]);
  const nextIdRef = useRef(1);
  const hoverRef = useRef<{ midi: number; tick: number } | null>(null);
  const animRef = useRef(0);
  const scheduledRef = useRef<number[]>([]);
  const notesRef = useRef(notes);
  notesRef.current = notes;
  const dragRef = useRef<DragInfo | null>(null);
  const selectedRef = useRef<Set<number>>(new Set());
  const marqueeRef = useRef<MarqueeInfo | null>(null);
  const clipboardRef = useRef<SketchNote[]>([]);
  const isLoopingRef = useRef(false);
  isLoopingRef.current = isLooping;
  const importedRef = useRef<AudioData | null>(null);
  const historyRef = useRef<SketchNote[][]>([[]]);
  const historyIdxRef = useRef(0);
  const tracksRef = useRef<TrackData[]>(
    TRACK_DEFAULT_PRESETS.map((p) => makeEmptyTrack(p))
  );
  const activeTrackRef = useRef(0);

  const commit = useCallback((newNotes: SketchNote[]) => {
    historyRef.current = historyRef.current.slice(0, historyIdxRef.current + 1);
    historyRef.current.push(newNotes);
    historyIdxRef.current = historyRef.current.length - 1;
    notesRef.current = newNotes;
    setNotes(newNotes);
    const t = tracksRef.current[activeTrackRef.current];
    t.notes = newNotes;
    t.history = historyRef.current;
    t.historyIdx = historyIdxRef.current;
  }, []);

  const undo = useCallback(() => {
    if (historyIdxRef.current <= 0) return;
    historyIdxRef.current--;
    const prev = historyRef.current[historyIdxRef.current];
    notesRef.current = prev;
    setNotes(prev);
    selectedRef.current = new Set();
    const t = tracksRef.current[activeTrackRef.current];
    t.notes = prev;
    t.historyIdx = historyIdxRef.current;
  }, []);

  const redo = useCallback(() => {
    if (historyIdxRef.current >= historyRef.current.length - 1) return;
    historyIdxRef.current++;
    const next = historyRef.current[historyIdxRef.current];
    notesRef.current = next;
    setNotes(next);
    selectedRef.current = new Set();
    const t = tracksRef.current[activeTrackRef.current];
    t.notes = next;
    t.historyIdx = historyIdxRef.current;
  }, []);

  const switchTrack = useCallback((newIdx: number) => {
    if (newIdx === activeTrackRef.current) return;
    const old = tracksRef.current[activeTrackRef.current];
    old.notes = notesRef.current;
    old.preset = synthPreset;
    old.history = historyRef.current;
    old.historyIdx = historyIdxRef.current;

    const next = tracksRef.current[newIdx];
    notesRef.current = next.notes;
    setNotes(next.notes);
    setSynthPreset(next.preset);
    historyRef.current = next.history;
    historyIdxRef.current = next.historyIdx;
    selectedRef.current = new Set();
    activeTrackRef.current = newIdx;
    setActiveTrack(newIdx);
  }, [synthPreset]);

  const quantizeTicks = QUANTIZE_OPTIONS[quantizeIdx].ticks;
  const ticksPerBeat = PPQ * 4 / beatUnit;
  const ticksPerMeasure = beatsPerMeasure * ticksPerBeat;
  const totalTicks = measures * ticksPerMeasure;
  const pxPerTick = BEAT_W / PPQ;
  const gridW = totalTicks * pxPerTick;
  const gridH = PITCH_RANGE * ROW_H;

  const scaleNotes = keyRoot >= 0 && scaleName && SCALE_INTERVALS[scaleName]
    ? new Set(SCALE_INTERVALS[scaleName].map((iv) => (keyRoot + iv) % 12))
    : null;

  // Import concept patterns
  useEffect(() => {
    if (importAudio && importAudio !== importedRef.current) {
      importedRef.current = importAudio;
      const existingEnd = notesRef.current.reduce(
        (max, n) => Math.max(max, n.startTick + n.lengthTicks), 0
      );
      const startOffset = existingEnd > 0
        ? Math.ceil(existingEnd / ticksPerMeasure) * ticksPerMeasure
        : 0;
      const newNotes: SketchNote[] = [];
      let tick = startOffset;
      for (const event of importAudio.events) {
        const len = durToTicks(event.duration);
        for (const noteName of event.notes) {
          const midi = noteNameToMidi(noteName);
          if (midi >= MIN_MIDI && midi <= MAX_MIDI) {
            newNotes.push({
              id: nextIdRef.current++,
              midi,
              startTick: tick,
              lengthTicks: len,
              velocity: event.velocity ?? 0.7,
            });
          }
        }
        tick += len;
      }
      commit([...notesRef.current, ...newNotes]);
      setBpm(importAudio.tempo);
      const needed = Math.ceil(tick / ticksPerMeasure);
      setMeasures((prev) => Math.max(prev, needed));
      onImportDone?.();
    }
  }, [importAudio, onImportDone, commit, ticksPerMeasure]);

  // Apply inspiration settings
  const inspoAppliedRef = useRef<InspirationSet | null>(null);
  useEffect(() => {
    if (inspoSettings && inspoSettings !== inspoAppliedRef.current) {
      inspoAppliedRef.current = inspoSettings;
      setBpm(inspoSettings.bpm);
      const [num, den] = inspoSettings.timeSig.split("/").map(Number);
      if (num && den) {
        setBeatsPerMeasure(num);
        setBeatUnit(den);
      }
      const pc = KEY_TO_PC[inspoSettings.key];
      if (pc !== undefined) setKeyRoot(pc);
      if (inspoSettings.scale) setScaleName(inspoSettings.scale);
      if (inspoSettings.contrast) {
        setInspoContrast(inspoSettings.contrast);
        setShowInspoPanel(true);
      }
      if (inspoSettings.constraint) {
        setInspoConstraint(inspoSettings.constraint);
        setShowInspoPanel(true);
      }

      if (inspoSettings.chordProgression) {
        // Switch to Chords track before importing
        const oldTrack = tracksRef.current[activeTrackRef.current];
        oldTrack.notes = notesRef.current;
        oldTrack.preset = synthPreset;
        oldTrack.history = historyRef.current;
        oldTrack.historyIdx = historyIdxRef.current;

        const chordsTrack = tracksRef.current[1];
        notesRef.current = chordsTrack.notes;
        historyRef.current = chordsTrack.history;
        historyIdxRef.current = chordsTrack.historyIdx;
        setSynthPreset(chordsTrack.preset);
        activeTrackRef.current = 1;
        setActiveTrack(1);

        const audio = inspoSettings.chordProgression.audio;
        const existingEnd = notesRef.current.reduce(
          (max, n) => Math.max(max, n.startTick + n.lengthTicks), 0
        );
        const tpm = (num && den) ? num * (PPQ * 4 / den) : ticksPerMeasure;
        const startOffset = existingEnd > 0
          ? Math.ceil(existingEnd / tpm) * tpm
          : 0;
        const newNotes: SketchNote[] = [];
        let tick = startOffset;
        for (const event of audio.events) {
          const len = durToTicks(event.duration);
          for (const noteName of event.notes) {
            const midi = noteNameToMidi(noteName);
            if (midi >= MIN_MIDI && midi <= MAX_MIDI) {
              newNotes.push({
                id: nextIdRef.current++,
                midi,
                startTick: tick,
                lengthTicks: len,
                velocity: event.velocity ?? 0.7,
              });
            }
          }
          tick += len;
        }
        const merged = [...notesRef.current, ...newNotes];
        commit(merged);
        const needed = Math.ceil(tick / tpm);
        setMeasures((prev) => Math.max(prev, needed));
      }

      onInspoApplied?.();
    }
  }, [inspoSettings, onInspoApplied, commit, ticksPerMeasure, synthPreset]);

  // Hit test: find note under canvas coordinates
  const hitTest = useCallback(
    (x: number, y: number): { note: SketchNote; edge: "body" | "resize" } | null => {
      for (let i = notesRef.current.length - 1; i >= 0; i--) {
        const n = notesRef.current[i];
        const nx = LABEL_W + n.startTick * pxPerTick;
        const nw = n.lengthTicks * pxPerTick;
        const ny = (MAX_MIDI - n.midi) * ROW_H;
        if (x >= nx && x <= nx + nw && y >= ny && y < ny + ROW_H) {
          return { note: n, edge: x >= nx + nw - RESIZE_ZONE ? "resize" : "body" };
        }
      }
      return null;
    },
    [pxPerTick]
  );

  // Canvas coordinate helpers
  const getCanvasXY = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      const w = LABEL_W + gridW;
      const h = gridH;
      return {
        x: (clientX - rect.left) * (w / rect.width),
        y: (clientY - rect.top) * (h / rect.height),
      };
    },
    [gridW, gridH]
  );

  const snapTick = useCallback(
    (rawTick: number) => Math.round(rawTick / quantizeTicks) * quantizeTicks,
    [quantizeTicks]
  );

  const previewNote = useCallback((midi: number) => {
    if (isPlaying) return;
    const doPreview = () => {
      if (!synthRef.current || activePresetRef.current !== synthPreset) {
        synthRef.current?.disconnect();
        synthRef.current?.dispose();
        synthRef.current = createSynth(synthPreset).connect(getLimiter());
        activePresetRef.current = synthPreset;
      }
      synthRef.current.releaseAll();
      synthRef.current.triggerAttackRelease(midiToLabel(midi), "32n", undefined, 0.5);
    };
    if (Tone.getContext().state !== "running") {
      Tone.start().then(doPreview);
    } else {
      doPreview();
    }
  }, [isPlaying, synthPreset]);

  // Draw
  const draw = useCallback(
    (playheadTick?: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = LABEL_W + gridW;
      const h = gridH;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, w, h);

      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      // Row backgrounds and labels
      for (let i = 0; i < PITCH_RANGE; i++) {
        const midi = MAX_MIDI - i;
        const y = i * ROW_H;
        const pc = midi % 12;
        const isBlack = BLACK_KEYS.has(pc);

        ctx.fillStyle = isLight
          ? (isBlack ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.02)")
          : (isBlack ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)");
        ctx.fillRect(LABEL_W, y, gridW, ROW_H);

        // Scale tone highlighting
        if (scaleNotes && scaleNotes.has(pc)) {
          ctx.fillStyle = isLight
            ? (pc === keyRoot ? "rgba(30, 150, 80, 0.22)" : "rgba(30, 150, 80, 0.12)")
            : (pc === keyRoot ? "rgba(100, 220, 140, 0.18)" : "rgba(100, 220, 140, 0.10)");
          ctx.fillRect(LABEL_W, y, gridW, ROW_H);
        }

        ctx.fillStyle = isLight ? (isBlack ? "#d0d0d0" : "#e4e4e4") : (isBlack ? "#333" : "#222");
        ctx.fillRect(0, y, LABEL_W, ROW_H);
        if (pc === 0) {
          ctx.fillStyle = isLight ? "rgba(124,109,240,0.12)" : "rgba(124,109,240,0.15)";
          ctx.fillRect(0, y, LABEL_W, ROW_H);
        }
        if (scaleNotes && scaleNotes.has(pc)) {
          ctx.fillStyle = isLight
            ? (pc === keyRoot ? "rgba(30, 150, 80, 0.30)" : "rgba(30, 150, 80, 0.15)")
            : (pc === keyRoot ? "rgba(100, 220, 140, 0.25)" : "rgba(100, 220, 140, 0.12)");
          ctx.fillRect(0, y, LABEL_W, ROW_H);
        }

        ctx.fillStyle = isLight ? (isBlack ? "#666" : "#444") : (isBlack ? "#888" : "#aaa");
        ctx.font = "10px monospace";
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(midiToLabel(midi), LABEL_W - 4, y + ROW_H / 2);

        ctx.strokeStyle = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.04)";
        ctx.beginPath();
        ctx.moveTo(LABEL_W, y + ROW_H);
        ctx.lineTo(w, y + ROW_H);
        ctx.stroke();

        if (pc === 0) {
          ctx.strokeStyle = isLight ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.12)";
          ctx.beginPath();
          ctx.moveTo(LABEL_W, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Vertical grid lines
      for (let tick = 0; tick <= totalTicks; tick += quantizeTicks) {
        const x = LABEL_W + tick * pxPerTick;
        const isMeasure = tick % ticksPerMeasure === 0;
        const isBeat = tick % ticksPerBeat === 0;
        ctx.strokeStyle = isMeasure
          ? (isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.2)")
          : isBeat
            ? (isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.1)")
            : (isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.04)");
        ctx.lineWidth = isMeasure ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
        ctx.lineWidth = 1;
      }

      // Measure numbers
      ctx.fillStyle = isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.25)";
      ctx.font = "9px monospace";
      ctx.textAlign = "left";
      for (let m = 0; m < measures; m++) {
        ctx.fillText(String(m + 1), LABEL_W + m * ticksPerMeasure * pxPerTick + 3, 10);
      }

      // Pitch-class highlighting: show all rows of the same pitch class
      let focusedPC: number | null = null;
      let focusedNoteId: number | null = null;
      {
        const d = dragRef.current;
        const sel = selectedRef.current;
        if (d) {
          focusedPC = (d.edge === "resize" ? d.origMidi : d.currentMidi) % 12;
          focusedNoteId = d.noteId;
        } else if (sel.size === 1) {
          const selId = [...sel][0];
          const selNote = notesRef.current.find((n) => n.id === selId);
          if (selNote) {
            focusedPC = selNote.midi % 12;
            focusedNoteId = selId;
          }
        }
      }

      if (focusedPC !== null) {
        const pcColor = PITCH_COLORS[focusedPC];
        for (let i = 0; i < PITCH_RANGE; i++) {
          const midi = MAX_MIDI - i;
          if (midi % 12 === focusedPC) {
            const y = i * ROW_H;
            ctx.fillStyle = pcColor;
            ctx.globalAlpha = isLight ? 0.16 : 0.13;
            ctx.fillRect(LABEL_W, y, gridW, ROW_H);
            ctx.globalAlpha = isLight ? 0.22 : 0.18;
            ctx.fillRect(0, y, LABEL_W, ROW_H);
            ctx.globalAlpha = 1;
          }
        }
      }

      // Inactive track notes (dimmed)
      for (let ti = 0; ti < tracksRef.current.length; ti++) {
        if (ti === activeTrackRef.current) continue;
        const trackNotes = tracksRef.current[ti].notes;
        for (const note of trackNotes) {
          const row = MAX_MIDI - note.midi;
          const ny = row * ROW_H + 1;
          const nx = LABEL_W + note.startTick * pxPerTick;
          const noteW = Math.max(2, note.lengthTicks * pxPerTick - 1);
          const noteH = ROW_H - 2;
          const color = PITCH_COLORS[note.midi % 12];
          ctx.fillStyle = color;
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          ctx.roundRect(nx, ny, noteW, noteH, 2);
          ctx.fill();
          ctx.globalAlpha = 1;

          if (focusedPC !== null && note.midi % 12 === focusedPC) {
            ctx.strokeStyle = PITCH_COLORS[focusedPC];
            ctx.globalAlpha = 0.65;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(nx, ny, noteW, noteH, 2);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Notes with drag preview
      const drag = dragRef.current;
      const selected = selectedRef.current;
      for (const note of notesRef.current) {
        let { midi, startTick, lengthTicks } = note;
        let isDragging = false;

        if (drag && drag.moved) {
          if (drag.noteId === note.id) {
            isDragging = true;
            if (drag.edge === "resize") {
              lengthTicks = drag.currentLength;
            } else {
              startTick = drag.currentTick;
              midi = drag.currentMidi;
            }
          } else if (drag.multiOriginals?.has(note.id)) {
            isDragging = true;
            const orig = drag.multiOriginals.get(note.id)!;
            if (drag.edge === "resize") {
              const deltaLength = drag.currentLength - drag.origLength;
              lengthTicks = Math.max(quantizeTicks, orig.lengthTicks + deltaLength);
            } else {
              const deltaTick = drag.currentTick - drag.origTick;
              const deltaMidi = drag.currentMidi - drag.origMidi;
              startTick = Math.max(0, orig.startTick + deltaTick);
              midi = Math.max(MIN_MIDI, Math.min(MAX_MIDI, orig.midi + deltaMidi));
            }
          }
        }

        const row = MAX_MIDI - midi;
        const y = row * ROW_H + 1;
        const x = LABEL_W + startTick * pxPerTick;
        const noteW = Math.max(2, lengthTicks * pxPerTick - 1);
        const noteH = ROW_H - 2;
        const color = PITCH_COLORS[midi % 12];
        const isSelected = selected.has(note.id);

        ctx.fillStyle = color;
        ctx.globalAlpha = isDragging ? 0.9 : 0.5 + note.velocity * 0.5;
        ctx.beginPath();
        ctx.roundRect(x, y, noteW, noteH, 2);
        ctx.fill();

        if (isDragging || isSelected) {
          ctx.strokeStyle = isSelected ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)";
          ctx.lineWidth = isSelected ? 1.5 : 1;
          ctx.stroke();
          ctx.lineWidth = 1;
        }

        // Resize handle
        if (noteW > 6) {
          ctx.fillStyle = "rgba(255,255,255,0.2)";
          ctx.fillRect(x + noteW - 2, y, 2, noteH);
        }

        // Pitch-class match indicator (colored outline, distinct from white selection border)
        if (focusedPC !== null && midi % 12 === focusedPC && note.id !== focusedNoteId) {
          ctx.strokeStyle = PITCH_COLORS[focusedPC];
          ctx.globalAlpha = 0.8;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(x, y, noteW, noteH, 2);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        ctx.globalAlpha = 1;
      }

      // Hover ghost (only when not dragging)
      const hover = hoverRef.current;
      if (hover && !drag && !isPlaying) {
        const row = MAX_MIDI - hover.midi;
        const hy = row * ROW_H + 1;
        const hx = LABEL_W + hover.tick * pxPerTick;
        const noteW = Math.max(2, quantizeTicks * pxPerTick - 1);
        const noteH = ROW_H - 2;
        const existing = notesRef.current.some(
          (n) => n.midi === hover.midi && n.startTick === hover.tick
        );
        ctx.fillStyle = existing ? "rgba(255,80,80,0.3)" : (isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.15)");
        ctx.beginPath();
        ctx.roundRect(hx, hy, noteW, noteH, 2);
        ctx.fill();
      }

      // Marquee selection rectangle
      const marquee = marqueeRef.current;
      if (marquee) {
        const mx = Math.min(marquee.startX, marquee.endX);
        const my = Math.min(marquee.startY, marquee.endY);
        const mw = Math.abs(marquee.endX - marquee.startX);
        const mh = Math.abs(marquee.endY - marquee.startY);
        ctx.fillStyle = "rgba(124, 109, 240, 0.1)";
        ctx.fillRect(mx, my, mw, mh);
        ctx.strokeStyle = "rgba(124, 109, 240, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(mx, my, mw, mh);
      }

      // Playhead
      if (playheadTick !== undefined && playheadTick >= 0) {
        const px = LABEL_W + playheadTick * pxPerTick;
        ctx.strokeStyle = "rgba(124, 109, 240, 0.9)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, h);
        ctx.stroke();
        ctx.lineWidth = 1;
      }

      // Label border
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath();
      ctx.moveTo(LABEL_W, 0);
      ctx.lineTo(LABEL_W, h);
      ctx.stroke();
    },
    [gridW, gridH, totalTicks, measures, quantizeTicks, pxPerTick, isPlaying, ticksPerMeasure, ticksPerBeat, scaleNotes, keyRoot]
  );

  // Redraw when notes or settings change
  useEffect(() => {
    if (!open) return;
    draw();
  }, [open, draw, notes]);

  // Mouse interaction: unified mousedown handler with multi-select
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (isPlaying) return;
      e.preventDefault();

      const xy = getCanvasXY(e.clientX, e.clientY);
      if (!xy || xy.x < LABEL_W) return;

      const hit = hitTest(xy.x, xy.y);
      const canvas = canvasRef.current;
      if (!canvas) return;

      const capturedPxPerTick = pxPerTick;
      const capturedQuantize = quantizeTicks;
      const capturedTotalTicks = totalTicks;

      if (hit) {
        const isShift = e.shiftKey;
        const noteId = hit.note.id;
        const wasSelected = selectedRef.current.has(noteId);

        if (isShift) {
          const next = new Set(selectedRef.current);
          if (wasSelected) next.delete(noteId);
          else next.add(noteId);
          selectedRef.current = next;
          draw();
          return;
        }

        if (!wasSelected) {
          selectedRef.current = new Set([noteId]);
          draw();
        }

        const multiOriginals = new Map<number, { startTick: number; midi: number; lengthTicks: number }>();
        for (const id of selectedRef.current) {
          if (id === noteId) continue;
          const n = notesRef.current.find((note) => note.id === id);
          if (n) multiOriginals.set(id, { startTick: n.startTick, midi: n.midi, lengthTicks: n.lengthTicks });
        }

        const grabOffset = xy.x - (LABEL_W + hit.note.startTick * capturedPxPerTick);
        const drag: DragInfo = {
          noteId,
          edge: hit.edge,
          moved: false,
          startX: xy.x,
          startY: xy.y,
          grabOffset,
          origTick: hit.note.startTick,
          origMidi: hit.note.midi,
          origLength: hit.note.lengthTicks,
          currentTick: hit.note.startTick,
          currentMidi: hit.note.midi,
          currentLength: hit.note.lengthTicks,
          multiOriginals: multiOriginals.size > 0 ? multiOriginals : undefined,
        };
        dragRef.current = drag;

        canvas.style.cursor = hit.edge === "resize" ? "ew-resize" : "grabbing";
        let lastDragMidi = hit.note.midi;

        const onMove = (ev: MouseEvent) => {
          const mxy = getCanvasXY(ev.clientX, ev.clientY);
          if (!mxy) return;
          const dx = mxy.x - drag.startX;
          const dy = mxy.y - drag.startY;

          if (!drag.moved && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
          drag.moved = true;

          if (drag.edge === "resize") {
            const endTick = snapTick((mxy.x - LABEL_W) / capturedPxPerTick);
            drag.currentLength = Math.max(capturedQuantize, endTick - drag.origTick);
          } else {
            const rawTick = (mxy.x - LABEL_W - drag.grabOffset) / capturedPxPerTick;
            const snapped = snapTick(rawTick);
            drag.currentTick = Math.max(
              0,
              Math.min(capturedTotalTicks - drag.origLength, snapped)
            );
            drag.currentMidi = Math.max(
              MIN_MIDI,
              Math.min(MAX_MIDI, MAX_MIDI - Math.floor(mxy.y / ROW_H))
            );
            if (drag.currentMidi !== lastDragMidi) {
              lastDragMidi = drag.currentMidi;
              previewNote(drag.currentMidi);
            }
          }
          draw();
        };

        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);

          if (drag.moved) {
            const deltaTick = drag.currentTick - drag.origTick;
            const deltaMidi = drag.currentMidi - drag.origMidi;
            const deltaLength = drag.currentLength - drag.origLength;

            commit(
              notesRef.current.map((n) => {
                if (n.id === drag.noteId) {
                  return drag.edge === "resize"
                    ? { ...n, lengthTicks: drag.currentLength }
                    : { ...n, startTick: drag.currentTick, midi: drag.currentMidi };
                }
                if (drag.multiOriginals?.has(n.id)) {
                  const orig = drag.multiOriginals.get(n.id)!;
                  if (drag.edge === "resize") {
                    return { ...n, lengthTicks: Math.max(capturedQuantize, orig.lengthTicks + deltaLength) };
                  }
                  return {
                    ...n,
                    startTick: Math.max(0, orig.startTick + deltaTick),
                    midi: Math.max(MIN_MIDI, Math.min(MAX_MIDI, orig.midi + deltaMidi)),
                  };
                }
                return n;
              })
            );
          } else {
            previewNote(drag.origMidi);
          }

          dragRef.current = null;
          canvas.style.cursor = "crosshair";
          draw();
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      } else {
        // Empty space: marquee select on drag, create note on click
        const startXY = { ...xy };
        const isShift = e.shiftKey;
        let isMarquee = false;

        if (!isShift) {
          selectedRef.current = new Set();
          draw();
        }

        const baseSelection = new Set(selectedRef.current);

        const onMove = (ev: MouseEvent) => {
          const mxy = getCanvasXY(ev.clientX, ev.clientY);
          if (!mxy) return;
          if (!isMarquee && Math.abs(mxy.x - startXY.x) + Math.abs(mxy.y - startXY.y) > DRAG_THRESHOLD) {
            isMarquee = true;
          }
          if (isMarquee) {
            marqueeRef.current = { startX: startXY.x, startY: startXY.y, endX: mxy.x, endY: mxy.y };
            const mx1 = Math.min(startXY.x, mxy.x);
            const mx2 = Math.max(startXY.x, mxy.x);
            const my1 = Math.min(startXY.y, mxy.y);
            const my2 = Math.max(startXY.y, mxy.y);
            const next = new Set(baseSelection);
            for (const n of notesRef.current) {
              const nx = LABEL_W + n.startTick * capturedPxPerTick;
              const nw = n.lengthTicks * capturedPxPerTick;
              const ny = (MAX_MIDI - n.midi) * ROW_H;
              if (nx + nw > mx1 && nx < mx2 && ny + ROW_H > my1 && ny < my2) {
                next.add(n.id);
              }
            }
            selectedRef.current = next;
            draw();
          }
        };

        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);

          if (isMarquee) {
            marqueeRef.current = null;
            draw();
            return;
          }

          const tick = snapTick((startXY.x - LABEL_W) / capturedPxPerTick);
          const midi = MAX_MIDI - Math.floor(startXY.y / ROW_H);
          if (midi < MIN_MIDI || midi > MAX_MIDI || tick < 0 || tick >= capturedTotalTicks)
            return;

          commit([
            ...notesRef.current,
            {
              id: nextIdRef.current++,
              midi,
              startTick: tick,
              lengthTicks: capturedQuantize,
              velocity: 0.7,
            },
          ]);
          previewNote(midi);
          draw();
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      }
    },
    [isPlaying, getCanvasXY, hitTest, pxPerTick, quantizeTicks, totalTicks, snapTick, draw, commit, previewNote]
  );

  // Hover + cursor
  const handleHover = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (dragRef.current) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const xy = getCanvasXY(e.clientX, e.clientY);
      if (!xy || xy.x < LABEL_W) {
        hoverRef.current = null;
        canvas.style.cursor = "default";
        draw();
        return;
      }

      const hit = hitTest(xy.x, xy.y);
      if (hit) {
        canvas.style.cursor = hit.edge === "resize" ? "ew-resize" : "grab";
        hoverRef.current = null;
      } else {
        canvas.style.cursor = "crosshair";
        const tick = snapTick((xy.x - LABEL_W) / pxPerTick);
        const midi = MAX_MIDI - Math.floor(xy.y / ROW_H);
        if (midi >= MIN_MIDI && midi <= MAX_MIDI && tick >= 0 && tick < totalTicks) {
          hoverRef.current = { midi, tick };
        } else {
          hoverRef.current = null;
        }
      }
      draw();
    },
    [getCanvasXY, hitTest, snapTick, pxPerTick, totalTicks, draw]
  );

  const handleMouseLeave = useCallback(() => {
    if (dragRef.current) return;
    hoverRef.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "crosshair";
    draw();
  }, [draw]);

  // Playback
  const stop = useCallback(() => {
    scheduledRef.current.forEach((id) => Tone.getTransport().clear(id));
    scheduledRef.current = [];
    Tone.getTransport().stop();
    Tone.getTransport().loop = false;
    Tone.getTransport().position = 0;
    synthRef.current?.releaseAll();
    for (const s of playSynthsRef.current) {
      s.releaseAll();
      s.disconnect();
      s.dispose();
    }
    playSynthsRef.current = [];
    cancelAnimationFrame(animRef.current);
    setIsPlaying(false);
    draw();
  }, [draw]);

  const play = useCallback(() => {
    stop();

    const startPlayback = () => {
      // Save active track state to tracksRef before reading all tracks
      const at = tracksRef.current[activeTrackRef.current];
      at.notes = notesRef.current;
      at.preset = synthPreset;

      // Create one synth per track
      const trackSynths: Tone.PolySynth[] = [];
      for (const track of tracksRef.current) {
        if (track.notes.length > 0) {
          const s = createSynth(track.preset).connect(getLimiter());
          trackSynths.push(s);
        } else {
          trackSynths.push(null!);
        }
      }
      playSynthsRef.current = trackSynths.filter(Boolean);

      // Keep the preview synth up to date
      if (!synthRef.current || activePresetRef.current !== synthPreset) {
        synthRef.current?.disconnect();
        synthRef.current?.dispose();
        synthRef.current = createSynth(synthPreset).connect(getLimiter());
        activePresetRef.current = synthPreset;
      }

      const transport = Tone.getTransport();
      transport.bpm.value = bpm;
      transport.position = 0;

      const totalSec = (totalTicks / Tone.Transport.PPQ) * (60 / bpm);
      const looping = isLoopingRef.current;

      if (looping) {
        transport.loop = true;
        transport.loopStart = 0;
        transport.loopEnd = totalSec;
      }

      // Schedule notes from all tracks
      for (let ti = 0; ti < tracksRef.current.length; ti++) {
        const track = tracksRef.current[ti];
        const instrument = trackSynths[ti];
        if (!instrument || track.notes.length === 0) continue;
        for (const note of track.notes) {
          const timeSec = Tone.Time(note.startTick, "i").toSeconds();
          const durSec = Tone.Time(note.lengthTicks, "i").toSeconds();
          const name = midiToLabel(note.midi);
          const id = transport.schedule((t) => {
            instrument.triggerAttackRelease(name, durSec, t, note.velocity);
          }, timeSec);
          scheduledRef.current.push(id);
        }
      }

      if (!looping) {
        const endId = transport.schedule(() => stop(), totalSec + 0.3);
        scheduledRef.current.push(endId);
      }

      setIsPlaying(true);
      transport.start();

      const capturedTotalTicks = totalTicks;
      const animate = () => {
        let tick = Tone.getTransport().ticks;
        if (looping && capturedTotalTicks > 0) tick = tick % capturedTotalTicks;
        draw(tick);
        if (scrollRef.current) {
          const px = LABEL_W + tick * pxPerTick;
          const sl = scrollRef.current.scrollLeft;
          const vw = scrollRef.current.clientWidth;
          if (px > sl + vw - 60 || px < sl) {
            scrollRef.current.scrollLeft = Math.max(0, px - vw / 3);
          }
        }
        animRef.current = requestAnimationFrame(animate);
      };
      animRef.current = requestAnimationFrame(animate);
    };

    if (Tone.getContext().state !== "running") {
      Tone.start().then(startPlayback);
    } else {
      startPlayback();
    }
  }, [stop, synthPreset, bpm, totalTicks, pxPerTick, draw]);

  // MIDI export
  const exportMidi = useCallback(() => {
    const at = tracksRef.current[activeTrackRef.current];
    at.notes = notesRef.current;

    const midi = new Midi();
    midi.header.setTempo(bpm);
    midi.header.timeSignatures.push({ ticks: 0, timeSignature: [beatsPerMeasure, beatUnit], measures: 0 });
    for (let ti = 0; ti < tracksRef.current.length; ti++) {
      const trackData = tracksRef.current[ti];
      if (trackData.notes.length === 0) continue;
      const track = midi.addTrack();
      track.name = TRACK_NAMES[ti];
      track.channel = ti;
      for (const note of trackData.notes) {
        track.addNote({
          midi: note.midi,
          ticks: note.startTick,
          durationTicks: note.lengthTicks,
          velocity: note.velocity,
        });
      }
    }
    const blob = new Blob([midi.toArray()], { type: "audio/midi" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sketch.mid";
    a.click();
    URL.revokeObjectURL(url);
  }, [bpm, beatsPerMeasure, beatUnit]);

  // Save/Load sketches
  const handleSaveSketch = useCallback(() => {
    if (!sketchSaveName.trim()) return;
    const at = tracksRef.current[activeTrackRef.current];
    at.notes = notesRef.current;
    at.preset = synthPreset;

    const totalNotes = tracksRef.current.reduce((sum, t) => sum + t.notes.length, 0);
    const sketch: SavedSketch = {
      id: Date.now().toString(36),
      name: sketchSaveName.trim(),
      notes: notesRef.current,
      tracks: tracksRef.current.map((t) => ({ notes: [...t.notes], preset: t.preset })),
      bpm,
      measures,
      beatsPerMeasure,
      beatUnit,
      keyRoot,
      scaleName,
      inspoContrast: inspoContrast || undefined,
      inspoConstraint: inspoConstraint || undefined,
      savedAt: Date.now(),
    };
    void totalNotes;
    const existing = loadSavedSketches();
    existing.unshift(sketch);
    localStorage.setItem("saved-sketches", JSON.stringify(existing.slice(0, 20)));
    setSavedSketches(existing.slice(0, 20));
    setSketchSaveName("");
    setShowSaveInput(false);
  }, [sketchSaveName, bpm, measures, beatsPerMeasure, beatUnit, keyRoot, scaleName, inspoContrast, inspoConstraint, synthPreset]);

  const handleLoadSketch = useCallback((sketch: SavedSketch) => {
    if (sketch.tracks) {
      for (let ti = 0; ti < tracksRef.current.length; ti++) {
        const src = sketch.tracks[ti] || { notes: [], preset: TRACK_DEFAULT_PRESETS[ti] };
        tracksRef.current[ti] = {
          notes: src.notes,
          preset: src.preset,
          history: [src.notes],
          historyIdx: 0,
        };
      }
      const active = tracksRef.current[activeTrackRef.current];
      notesRef.current = active.notes;
      setNotes(active.notes);
      setSynthPreset(active.preset);
      historyRef.current = active.history;
      historyIdxRef.current = 0;
    } else {
      commit(sketch.notes);
    }
    setBpm(sketch.bpm);
    setMeasures(sketch.measures);
    setBeatsPerMeasure(sketch.beatsPerMeasure);
    setBeatUnit(sketch.beatUnit);
    setKeyRoot(sketch.keyRoot);
    setScaleName(sketch.scaleName);
    if (sketch.inspoContrast) {
      setInspoContrast(sketch.inspoContrast);
      setShowInspoPanel(true);
    }
    if (sketch.inspoConstraint) {
      setInspoConstraint(sketch.inspoConstraint);
      setShowInspoPanel(true);
    }
    const allNotes = sketch.tracks
      ? sketch.tracks.flatMap((t) => t.notes)
      : sketch.notes;
    nextIdRef.current = Math.max(1, ...allNotes.map((n) => n.id)) + 1;
    selectedRef.current = new Set();
    setShowLoadMenu(false);
  }, [commit]);

  const handleDeleteSketch = useCallback((id: string) => {
    const updated = loadSavedSketches().filter((s) => s.id !== id);
    localStorage.setItem("saved-sketches", JSON.stringify(updated));
    setSavedSketches(updated);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedRef.current.size > 0) {
          selectedRef.current = new Set();
          draw();
        } else if (isPlaying) stop();
        else onClose();
      }
      if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        if (isPlaying) stop();
        else play();
      }
      if ((e.key === "Delete" || e.key === "Backspace") && selectedRef.current.size > 0) {
        e.preventDefault();
        const sel = selectedRef.current;
        commit(notesRef.current.filter((n) => !sel.has(n.id)));
        selectedRef.current = new Set();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        e.preventDefault();
        selectedRef.current = new Set(notesRef.current.map((n) => n.id));
        draw();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "c") {
        e.preventDefault();
        if (selectedRef.current.size > 0) {
          clipboardRef.current = notesRef.current.filter((n) => selectedRef.current.has(n.id));
        }
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "v") {
        e.preventDefault();
        const clip = clipboardRef.current;
        if (clip.length === 0) return;
        const minTick = Math.min(...clip.map((n) => n.startTick));
        const existingEnd = notesRef.current.reduce((max, n) => Math.max(max, n.startTick + n.lengthTicks), 0);
        const pasteAt = snapTick(Math.max(existingEnd, minTick + (clip[0].lengthTicks)));
        const newNotes = clip.map((n) => ({
          ...n,
          id: nextIdRef.current++,
          startTick: n.startTick - minTick + pasteAt,
        }));
        commit([...notesRef.current, ...newNotes]);
        selectedRef.current = new Set(newNotes.map((n) => n.id));
        const maxEnd = Math.max(...newNotes.map((n) => n.startTick + n.lengthTicks));
        setMeasures((prev) => Math.max(prev, Math.ceil(maxEnd / ticksPerMeasure)));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "d") {
        e.preventDefault();
        const sel = selectedRef.current;
        if (sel.size === 0) return;
        const selNotes = notesRef.current.filter((n) => sel.has(n.id));
        if (selNotes.length === 0) return;
        const minTick = Math.min(...selNotes.map((n) => n.startTick));
        const maxEnd = Math.max(...selNotes.map((n) => n.startTick + n.lengthTicks));
        const offset = maxEnd - minTick;
        const newNotes = selNotes.map((n) => ({
          ...n,
          id: nextIdRef.current++,
          startTick: n.startTick + offset,
        }));
        commit([...notesRef.current, ...newNotes]);
        selectedRef.current = new Set(newNotes.map((n) => n.id));
        const newEnd = Math.max(...newNotes.map((n) => n.startTick + n.lengthTicks));
        setMeasures((prev) => Math.max(prev, Math.ceil(newEnd / ticksPerMeasure)));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, isPlaying, play, stop, onClose, undo, redo, draw, commit, snapTick, ticksPerMeasure]);

  // Cleanup
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animRef.current);
      scheduledRef.current.forEach((id) => Tone.getTransport().clear(id));
      synthRef.current?.releaseAll();
      for (const s of playSynthsRef.current) {
        s.releaseAll();
        s.disconnect();
        s.dispose();
      }
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="sketch-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="sketch-modal">
        <div className="sketch-header">
          <h2 className="sketch-title">Sketch</h2>
          <div className="sketch-transport">
            <button
              className={`btn-play ${isPlaying ? "playing" : ""}`}
              onClick={isPlaying ? stop : play}
              title={isPlaying ? "Stop (Space)" : "Play (Space)"}
            >
              {isPlaying ? "■" : "▶"}
            </button>
            <button
              className={`sketch-btn sketch-loop${isLooping ? " active" : ""}`}
              onClick={() => setIsLooping(!isLooping)}
              title="Loop playback"
            >
              Loop
            </button>
          </div>
          <div className="sketch-tracks">
            {TRACK_NAMES.map((name, i) => (
              <button
                key={name}
                className={`sketch-track-tab${activeTrack === i ? " active" : ""}${tracksRef.current[i]?.notes.length > 0 && activeTrack !== i ? " has-notes" : ""}`}
                onClick={() => switchTrack(i)}
                disabled={isPlaying}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="sketch-controls">
            <label>
              BPM
              <input
                type="number"
                className="sketch-input"
                value={bpm}
                min={20}
                max={300}
                onChange={(e) => setBpm(Number(e.target.value) || 120)}
              />
            </label>
            <label>
              Time
              <select
                className="sketch-select"
                value={`${beatsPerMeasure}/${beatUnit}`}
                onChange={(e) => {
                  const [n, d] = e.target.value.split("/").map(Number);
                  setBeatsPerMeasure(n);
                  setBeatUnit(d);
                }}
              >
                {TIME_SIGS.map((ts) => (
                  <option key={ts} value={ts}>{ts}</option>
                ))}
              </select>
            </label>
            <label>
              Bars
              <input
                type="number"
                className="sketch-input"
                value={measures}
                min={1}
                max={32}
                onChange={(e) => {
                  const v = Math.max(1, Math.min(32, Number(e.target.value) || 4));
                  setMeasures(v);
                }}
              />
            </label>
            <label>
              Key
              <select
                className="sketch-select"
                value={keyRoot}
                onChange={(e) => setKeyRoot(Number(e.target.value))}
              >
                <option value={-1}>--</option>
                {KEYS.map((k) => (
                  <option key={k} value={KEY_TO_PC[k]}>{k}</option>
                ))}
              </select>
            </label>
            <label>
              Scale
              <select
                className="sketch-select sketch-select-wide"
                value={scaleName}
                onChange={(e) => setScaleName(e.target.value)}
              >
                <option value="">--</option>
                {SCALES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>
            <label>
              Snap
              <select
                className="sketch-select"
                value={quantizeIdx}
                onChange={(e) => setQuantizeIdx(Number(e.target.value))}
              >
                {QUANTIZE_OPTIONS.map((q, i) => (
                  <option key={q.label} value={i}>{q.label}</option>
                ))}
              </select>
            </label>
            <label>
              Sound
              <select
                className="sketch-select"
                value={synthPreset}
                onChange={(e) => {
                  const p = e.target.value as SynthPresetId;
                  setSynthPreset(p);
                  tracksRef.current[activeTrackRef.current].preset = p;
                }}
              >
                {SYNTH_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="sketch-actions">
            <button
              className="sketch-btn"
              onClick={undo}
              title="Undo (Ctrl+Z)"
              disabled={historyIdxRef.current <= 0}
            >
              Undo
            </button>
            <button
              className="sketch-btn"
              onClick={redo}
              title="Redo (Ctrl+Y)"
              disabled={historyIdxRef.current >= historyRef.current.length - 1}
            >
              Redo
            </button>
            <button className="sketch-btn" onClick={() => commit([])} title="Clear active track">
              Clear
            </button>
            <button
              className="sketch-btn"
              onClick={exportMidi}
              title="Export as MIDI file"
              disabled={notes.length === 0 && tracksRef.current.every((t) => t.notes.length === 0)}
            >
              MIDI
            </button>
            <button
              className="sketch-btn"
              onClick={() => setShowSaveInput(!showSaveInput)}
              title="Save sketch"
            >
              Save
            </button>
            <button
              className="sketch-btn"
              onClick={() => {
                setShowLoadMenu(!showLoadMenu);
                if (!showLoadMenu) setSavedSketches(loadSavedSketches());
              }}
              title="Load sketch"
            >
              Load
            </button>
            {(inspoContrast || inspoConstraint) && (
              <button
                className={`sketch-btn${showInspoPanel ? " active" : ""}`}
                onClick={() => setShowInspoPanel(!showInspoPanel)}
                title="Inspiration reference"
              >
                Inspo
              </button>
            )}
            <button className="sketch-close" onClick={onClose} title="Close (Esc)">
              &times;
            </button>
          </div>
        </div>

        {showSaveInput && (
          <div className="sketch-save-row">
            <input
              className="sketch-save-input"
              type="text"
              value={sketchSaveName}
              onChange={(e) => setSketchSaveName(e.target.value)}
              placeholder="Name this sketch..."
              autoFocus
              onKeyDown={(e) => { if (e.key === "Enter") handleSaveSketch(); if (e.key === "Escape") setShowSaveInput(false); }}
            />
            <button className="sketch-save-confirm" onClick={handleSaveSketch} disabled={!sketchSaveName.trim()}>
              Save
            </button>
          </div>
        )}

        {showLoadMenu && (
          <div className="sketch-load-menu">
            {savedSketches.length === 0 ? (
              <p className="sketch-load-empty">No saved sketches yet</p>
            ) : (
              savedSketches.map((s) => (
                <div key={s.id} className="sketch-load-item">
                  <button className="sketch-load-btn" onClick={() => handleLoadSketch(s)}>
                    <span className="sketch-load-name">{s.name}</span>
                    <span className="sketch-load-meta">
                      {s.bpm} BPM · {s.beatsPerMeasure}/{s.beatUnit} · {s.tracks ? s.tracks.reduce((sum, t) => sum + t.notes.length, 0) : s.notes.length} notes
                    </span>
                  </button>
                  <button className="sketch-load-delete" onClick={() => handleDeleteSketch(s.id)} title="Delete">
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {showInspoPanel && (inspoContrast || inspoConstraint) && (
          <div className="sketch-inspo-panel">
            {inspoContrast && (
              <div className="sketch-inspo-item">
                <span className="sketch-inspo-label">Contrast:</span> {inspoContrast}
              </div>
            )}
            {inspoConstraint && (
              <div className="sketch-inspo-item">
                <span className="sketch-inspo-label">Constraint:</span> {inspoConstraint}
              </div>
            )}
          </div>
        )}

        <div className="sketch-editor" ref={scrollRef}>
          <canvas
            ref={canvasRef}
            className="sketch-canvas"
            onMouseDown={handleMouseDown}
            onMouseMove={handleHover}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}
