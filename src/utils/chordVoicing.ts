const NOTE_RE = /^([A-G])(#|b)?(-?\d+)$/;
const PC_MAP: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const PC_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export type VoicingDensity = "triad" | "7th" | "9th" | "11th" | "13th";

export const VOICING_DENSITIES: { id: VoicingDensity; label: string }[] = [
  { id: "triad", label: "Triad" },
  { id: "7th", label: "7th" },
  { id: "9th", label: "9th" },
  { id: "11th", label: "11th" },
  { id: "13th", label: "13th" },
];

interface ParsedNote {
  name: string;
  pc: number; // pitch class 0-11
  midi: number;
}

interface AnalyzedChord {
  root: number; // pitch class
  rootMidi: number;
  quality: ChordQuality;
  intervals: number[]; // semitone intervals from root
}

type ChordQuality =
  | "maj"
  | "min"
  | "dom7"
  | "maj7"
  | "min7"
  | "minmaj7"
  | "dim"
  | "dim7"
  | "halfdim7"
  | "aug"
  | "sus4"
  | "sus2"
  | "power"
  | "unknown";

function parseNote(note: string): ParsedNote | null {
  const m = NOTE_RE.exec(note);
  if (!m) return null;
  const letter = m[1];
  const acc = m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0;
  const octave = parseInt(m[3], 10);
  const pc = (PC_MAP[letter] + acc + 12) % 12;
  const midi = (octave + 1) * 12 + PC_MAP[letter] + acc;
  return { name: note, pc, midi };
}

function midiToNoteName(midi: number): string {
  const pc = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return PC_NAMES[pc] + octave;
}

function analyzeChord(notes: string[], chordSymbol?: string): AnalyzedChord | null {
  if (chordSymbol) {
    const parsed = parseChordSymbol(chordSymbol);
    if (parsed) return parsed;
  }

  const parsed = notes.map(parseNote).filter((n): n is ParsedNote => n !== null);
  if (parsed.length < 2) return null;

  const sorted = [...parsed].sort((a, b) => a.midi - b.midi);
  const rootMidi = sorted[0].midi;
  const root = sorted[0].pc;

  const intervals = [...new Set(sorted.map((n) => ((n.pc - root + 12) % 12)))].sort((a, b) => a - b);

  const quality = identifyQuality(intervals);

  return { root, rootMidi, quality, intervals };
}

function identifyQuality(intervals: number[]): ChordQuality {
  const has = (n: number) => intervals.includes(n);

  if (intervals.length === 2 && has(7) && !has(3) && !has(4)) return "power";
  if (has(4) && has(7) && has(11)) return "maj7";
  if (has(3) && has(7) && has(11)) return "minmaj7";
  if (has(4) && has(7) && has(10)) return "dom7";
  if (has(3) && has(7) && has(10)) return "min7";
  if (has(3) && has(6) && has(10)) return "halfdim7";
  if (has(3) && has(6) && has(9)) return "dim7";
  if (has(3) && has(6)) return "dim";
  if (has(4) && has(8)) return "aug";
  if (has(5) && has(7)) return "sus4";
  if (has(2) && has(7)) return "sus2";
  if (has(4) && has(7)) return "maj";
  if (has(3) && has(7)) return "min";
  if (has(4)) return "maj";
  if (has(3)) return "min";

  return "unknown";
}

function parseChordSymbol(sym: string): AnalyzedChord | null {
  const rootMatch = /^([A-G][#b]?)/.exec(sym);
  if (!rootMatch) return null;

  const rootName = rootMatch[1];
  const acc = rootName.length > 1 ? (rootName[1] === "#" ? 1 : -1) : 0;
  const root = (PC_MAP[rootName[0]] + acc + 12) % 12;
  const rootMidi = 48 + root;

  const rest = sym.slice(rootMatch[0].length);

  let quality: ChordQuality = "maj";
  if (/^m(?:in)?(?:maj|M)7/.test(rest)) quality = "minmaj7";
  else if (/^m(?:in)?7/.test(rest) || rest.startsWith("m7")) quality = "min7";
  else if (/^m(?:in)?/.test(rest)) quality = "min";
  else if (/^(?:dim|o)7/.test(rest)) quality = "dim7";
  else if (/^(?:dim|o)/.test(rest)) quality = "dim";
  else if (/^(?:aug|\+)/.test(rest)) quality = "aug";
  else if (/^(?:maj|M)7/.test(rest)) quality = "maj7";
  else if (/^7|^dom/.test(rest)) quality = "dom7";
  else if (/^sus4/.test(rest)) quality = "sus4";
  else if (/^sus2/.test(rest)) quality = "sus2";

  const intervals = getBaseIntervals(quality);
  return { root, rootMidi, quality, intervals };
}

function getBaseIntervals(quality: ChordQuality): number[] {
  switch (quality) {
    case "maj": return [0, 4, 7];
    case "min": return [0, 3, 7];
    case "dom7": return [0, 4, 7, 10];
    case "maj7": return [0, 4, 7, 11];
    case "min7": return [0, 3, 7, 10];
    case "minmaj7": return [0, 3, 7, 11];
    case "dim": return [0, 3, 6];
    case "dim7": return [0, 3, 6, 9];
    case "halfdim7": return [0, 3, 6, 10];
    case "aug": return [0, 4, 8];
    case "sus4": return [0, 5, 7];
    case "sus2": return [0, 2, 7];
    case "power": return [0, 7];
    case "unknown": return [0];
  }
}

function getExtensionNotes(quality: ChordQuality, density: VoicingDensity): number[] {
  const extensions: number[] = [];

  if (density === "triad") return extensions;

  // 7th
  const needs7th = !["dom7", "maj7", "min7", "minmaj7", "halfdim7", "dim7"].includes(quality);
  if (needs7th) {
    switch (quality) {
      case "maj": case "aug": case "sus2": extensions.push(11); break; // maj7
      case "min": case "sus4": extensions.push(10); break; // b7
      case "dim": extensions.push(10); break; // b7 (half-dim)
      case "power": extensions.push(10); break;
      default: break;
    }
  }
  if (density === "7th") return extensions;

  // 9th
  switch (quality) {
    case "min": case "min7": case "dom7": case "halfdim7":
    case "maj": case "maj7": case "sus4": case "sus2":
    case "minmaj7": case "aug": case "power":
      extensions.push(14); // natural 9th
      break;
    case "dim": case "dim7":
      extensions.push(13); // b9
      break;
    default:
      extensions.push(14);
  }
  if (density === "9th") return extensions;

  // 11th
  switch (quality) {
    case "maj": case "maj7": case "dom7": case "aug":
      extensions.push(18); // #11 for major-quality chords
      break;
    default:
      extensions.push(17); // natural 11
  }
  if (density === "11th") return extensions;

  // 13th
  switch (quality) {
    case "min": case "min7": case "halfdim7": case "dim": case "dim7":
      extensions.push(20); // b13 for minor-quality
      break;
    default:
      extensions.push(21); // natural 13
  }

  return extensions;
}

export function extendChordNotes(
  notes: string[],
  density: VoicingDensity,
  chordSymbol?: string
): string[] {
  if (density === "triad") return notes;

  const analysis = analyzeChord(notes, chordSymbol);
  if (!analysis) return notes;

  const { quality, rootMidi, intervals } = analysis;

  // Don't extend single notes, power chords played as single notes, or already-dense chords
  if (notes.length < 2) return notes;

  // Find the highest note in the original voicing to place extensions above it
  const parsed = notes.map(parseNote).filter((n): n is ParsedNote => n !== null);
  const highestMidi = Math.max(...parsed.map((n) => n.midi));

  const extensionIntervals = getExtensionNotes(quality, density);
  const newNotes = [...notes];

  for (const interval of extensionIntervals) {
    if (intervals.includes(interval % 12)) continue;

    // Place the extension above the highest existing note
    let extMidi = rootMidi + interval;
    while (extMidi <= highestMidi) extMidi += 12;
    // Keep it within reasonable range
    if (extMidi > 96) continue; // C7 cap

    newNotes.push(midiToNoteName(extMidi));
  }

  return newNotes;
}
