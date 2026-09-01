export interface NoteEvent {
  notes: string[];
  duration: string;
  velocity?: number;
  chordSymbol?: string;
}

export interface AudioData {
  tempo: number;
  timeSignature?: [number, number];
  events: NoteEvent[];
}

export type Category =
  | "cadences"
  | "progressions"
  | "scales-modes"
  | "harmonic-devices"
  | "voice-leading"
  | "melodic-devices"
  | "modulation"
  | "film-scoring"
  | "orchestration"
  | "rhythm"
  | "funk"
  | "gospel"
  | "bass"
  | "form"
  | "texture"
  | "guitar"
  | "vocals"
  | "microtonality";

export interface Concept {
  id: string;
  name: string;
  category: Category;
  description: string;
  tags: string[];
  audio: AudioData;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  cadences: "🎯 Cadences",
  progressions: "🔗 Chord Progressions",
  "scales-modes": "🎹 Scales & Modes",
  "harmonic-devices": "💎 Harmonic Devices",
  "voice-leading": "🧭 Voice Leading",
  "melodic-devices": "🎶 Melodic Devices",
  modulation: "🔀 Modulation",
  "film-scoring": "🎬 Film Scoring",
  orchestration: "🎻 Orchestration & Texture",
  rhythm: "🥁 Rhythm & Meter",
  funk: "🕺 Funk & Groove",
  gospel: "🙏 Gospel Harmony",
  bass: "🎸 Bass",
  form: "🏗️ Form & Structure",
  texture: "🌊 Texture & Atmosphere",
  guitar: "⚡ Guitar & Riffs",
  vocals: "🎤 Vocals",
  microtonality: "🔬 Microtonality",
};
