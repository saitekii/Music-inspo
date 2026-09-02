const SHARP_NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_NOTES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const NOTE_TO_SEMI: Record<string, number> = {};
for (let i = 0; i < 12; i++) {
  NOTE_TO_SEMI[SHARP_NOTES[i]] = i;
  NOTE_TO_SEMI[FLAT_NOTES[i]] = i;
}

const FLAT_KEYS = new Set(["F", "Bb", "Eb", "Ab", "Db", "Gb"]);

export function semiToNote(semi: number, keyCtx = "C"): string {
  const arr = FLAT_KEYS.has(keyCtx) ? FLAT_NOTES : SHARP_NOTES;
  return arr[((semi % 12) + 12) % 12];
}

function midiToNote(midi: number): string {
  return SHARP_NOTES[midi % 12] + (Math.floor(midi / 12) - 1);
}

export const CHORD_INTERVALS: Record<string, number[]> = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
  dim: [0, 3, 6],
  aug: [0, 4, 8],
  maj7: [0, 4, 7, 11],
  m7: [0, 3, 7, 10],
  "7": [0, 4, 7, 10],
  mMaj7: [0, 3, 7, 11],
  m7b5: [0, 3, 6, 10],
  dim7: [0, 3, 6, 9],
  sus4: [0, 5, 7],
  sus2: [0, 2, 7],
  "7sus4": [0, 5, 7, 10],
  "6": [0, 4, 7, 9],
  m6: [0, 3, 7, 9],
  "9": [0, 4, 7, 10, 14],
  maj9: [0, 4, 7, 11, 14],
  m9: [0, 3, 7, 10, 14],
  m11: [0, 3, 7, 10, 17],
  add9: [0, 4, 7, 14],
  "7b9": [0, 4, 7, 10, 13],
  "7#9": [0, 4, 7, 10, 15],
  "13": [0, 4, 7, 10, 14, 21],
  m7add4: [0, 3, 5, 7, 10],
  "7sus2": [0, 2, 7, 10],
  maj13sus2: [0, 2, 7, 11, 21],
};

export function generateVoicing(root: string, quality: string, bass?: string): string[] {
  const rootSemi = NOTE_TO_SEMI[root];
  if (rootSemi === undefined) return [];
  const intervals = CHORD_INTERVALS[quality];
  if (!intervals) return [];

  const bassSemi = NOTE_TO_SEMI[bass ?? root];
  if (bassSemi === undefined) return [];
  const bassMidi = bassSemi + 36;

  let rootMidi = rootSemi + 48;
  let upper = intervals.map((i) => rootMidi + i);
  if (Math.max(...upper) > 72) upper = upper.map((n) => n - 12);

  const bassPC = bassMidi % 12;
  const filtered = upper.length > 3 ? upper.filter((n) => n % 12 !== bassPC) : upper;

  const all = [bassMidi, ...filtered];
  return [...new Set(all)].sort((a, b) => a - b).map(midiToNote);
}

const Q_DISPLAY: Record<string, string> = {
  major: "", minor: "m", dim: "°", aug: "+",
  maj7: "maj7", m7: "m7", "7": "7", mMaj7: "(maj7)",
  m7b5: "m7♭5", dim7: "°7", sus4: "sus4", sus2: "sus2",
  "7sus4": "7sus4", "6": "6", m6: "m6", "9": "9",
  maj9: "maj9", m9: "m9", m11: "m11", add9: "add9",
  "7b9": "7♭9", "7#9": "7♯9", "13": "13",
  m7add4: "m7add4", "7sus2": "7sus2", maj13sus2: "maj13sus2",
};

export function chordName(root: string, quality: string, bass?: string): string {
  const q = Q_DISPLAY[quality] ?? quality;
  const s = bass && bass !== root ? `/${bass}` : "";
  return `${root}${q}${s}`;
}

export const ROOTS = ["C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G", "Ab", "A", "Bb", "B"];

export const QUALITIES: { id: string; label: string; group: string }[] = [
  { id: "major", label: "Major", group: "Basic" },
  { id: "minor", label: "Minor", group: "Basic" },
  { id: "dim", label: "Dim", group: "Basic" },
  { id: "aug", label: "Aug", group: "Basic" },
  { id: "7", label: "7", group: "7th" },
  { id: "maj7", label: "Maj7", group: "7th" },
  { id: "m7", label: "m7", group: "7th" },
  { id: "mMaj7", label: "m(Maj7)", group: "7th" },
  { id: "m7b5", label: "m7♭5", group: "7th" },
  { id: "dim7", label: "°7", group: "7th" },
  { id: "sus4", label: "Sus4", group: "Sus" },
  { id: "sus2", label: "Sus2", group: "Sus" },
  { id: "7sus4", label: "7sus4", group: "Sus" },
  { id: "6", label: "6", group: "6th" },
  { id: "m6", label: "m6", group: "6th" },
  { id: "9", label: "9", group: "Ext" },
  { id: "maj9", label: "Maj9", group: "Ext" },
  { id: "m9", label: "m9", group: "Ext" },
  { id: "m11", label: "m11", group: "Ext" },
  { id: "add9", label: "add9", group: "Ext" },
  { id: "7b9", label: "7♭9", group: "Alt" },
  { id: "7#9", label: "7♯9", group: "Alt" },
  { id: "13", label: "13", group: "Ext" },
  { id: "m7add4", label: "m7add4", group: "Ext" },
  { id: "7sus2", label: "7sus2", group: "Sus" },
  { id: "maj13sus2", label: "maj13sus2", group: "Ext" },
];

export interface BuilderChord {
  root: string;
  quality: string;
  bass: string;
  duration: string;
}

export function chordsToAudio(chords: BuilderChord[], tempo: number) {
  return {
    tempo,
    events: chords.map((c) => ({
      notes: generateVoicing(c.root, c.quality, c.bass || undefined),
      duration: c.duration,
    })),
  };
}

// ── Techniques ──────────────────────────────────────────────

export function lineClicheMinor(keyRoot: string): BuilderChord[] {
  const viRoot = semiToNote((NOTE_TO_SEMI[keyRoot] + 8) % 12, keyRoot);
  return [
    { root: keyRoot, quality: "mMaj7", bass: "", duration: "1n" },
    { root: keyRoot, quality: "m7", bass: "", duration: "1n" },
    { root: keyRoot, quality: "m6", bass: "", duration: "1n" },
    { root: viRoot, quality: "maj7", bass: keyRoot, duration: "1n" },
  ];
}

export function minorIiV(keyRoot: string): BuilderChord[] {
  const r = NOTE_TO_SEMI[keyRoot];
  return [
    { root: semiToNote((r + 2) % 12, keyRoot), quality: "m7b5", bass: "", duration: "2n" },
    { root: semiToNote((r + 7) % 12, keyRoot), quality: "7", bass: "", duration: "2n" },
  ];
}

export function majorIiV(keyRoot: string): BuilderChord[] {
  const r = NOTE_TO_SEMI[keyRoot];
  return [
    { root: semiToNote((r + 2) % 12, keyRoot), quality: "m7", bass: "", duration: "2n" },
    { root: semiToNote((r + 7) % 12, keyRoot), quality: "7", bass: "", duration: "2n" },
  ];
}

export function passingDimBelow(lastRoot: string, keyCtx: string): BuilderChord[] {
  const semi = (NOTE_TO_SEMI[lastRoot] - 1 + 12) % 12;
  return [{ root: semiToNote(semi, keyCtx), quality: "dim7", bass: "", duration: "2n" }];
}

export function majorMinorFlip(keyRoot: string): BuilderChord[] {
  const third = semiToNote((NOTE_TO_SEMI[keyRoot] + 4) % 12, keyRoot);
  return [{ root: keyRoot, quality: "maj9", bass: third, duration: "1n" }];
}

export function secondaryDom(targetRoot: string, keyCtx: string): BuilderChord[] {
  const v = semiToNote((NOTE_TO_SEMI[targetRoot] + 7) % 12, keyCtx);
  return [{ root: v, quality: "7", bass: "", duration: "2n" }];
}

// ── Next-chord suggestions ─────────────────────────────────

export interface ChordSuggestion {
  root: string;
  quality: string;
  bass: string;
  reason: string;
}

export function suggestNext(
  last: BuilderChord | null,
  keyRoot: string,
  keyQuality: "major" | "minor"
): ChordSuggestion[] {
  const kr = NOTE_TO_SEMI[keyRoot];
  const m = keyQuality === "minor";
  const out: ChordSuggestion[] = [];
  const seen = new Set<string>();

  function add(deg: number, quality: string, reason: string, bassDeg?: number) {
    const root = semiToNote((kr + ((deg % 12) + 12) % 12) % 12, keyRoot);
    const bass = bassDeg != null ? semiToNote((kr + ((bassDeg % 12) + 12) % 12) % 12, keyRoot) : "";
    const k = root + quality + bass;
    if (seen.has(k)) return;
    seen.add(k);
    out.push({ root, quality, bass, reason });
  }

  if (!last) {
    if (m) {
      add(0, "minor", "Tonic");
      add(3, "major", "III — relative major");
      add(8, "major", "VI — bright start");
      add(5, "minor", "iv — subdominant");
      add(7, "minor", "v — dominant");
      add(10, "major", "VII — subtonic");
    } else {
      add(0, "major", "Tonic");
      add(9, "minor", "vi — moody start");
      add(5, "major", "IV — subdominant");
      add(7, "major", "V — dominant");
      add(4, "minor", "iii — mediant");
      add(2, "minor", "ii — step up");
    }
    return out;
  }

  const deg = ((NOTE_TO_SEMI[last.root] - kr) + 12) % 12;
  const isDom = ["7", "7b9", "7#9", "13", "9"].includes(last.quality);
  const isSus = ["sus4", "7sus4"].includes(last.quality);
  const isDim = ["dim7", "dim"].includes(last.quality);

  if (isSus) {
    const resolved = last.quality === "7sus4" ? "7" : "major";
    add(deg, resolved, "Resolve suspension");
  }

  if (isDom) {
    const res = (deg + 5) % 12;
    add(res, m ? (res === 0 ? "minor" : "minor") : "major", "Resolve");
    if (res === 0 && m) add(0, "major", "Picardy — major resolve");
    if (res === 0) add(m ? 8 : 9, m ? "major" : "minor", "Deceptive cadence");
    add(res, m ? "maj9" : "maj7", "Resolve (lush)", m && res === 0 ? 4 : undefined);
    if (last.quality === "7") add(deg, "7b9", "Intensify — add ♭9");
  }

  if (isDim) {
    add((deg + 1) % 12, "minor", "Resolve up ½ step");
    add((deg + 11) % 12, "major", "Resolve down ½ step");
  }

  if (m) {
    switch (deg) {
      case 0:
        add(3, "major", "III — relative major");
        add(5, "minor", "iv — subdominant");
        add(7, "7", "V7 — dominant");
        add(8, "major", "VI — submediant");
        add(10, "major", "VII — subtonic");
        add(2, "m7b5", "ii° — start ii-V");
        add(0, "maj9", "Tonic as major", 4);
        break;
      case 2:
        add(7, "7", "V7 — classic ii-V");
        add(5, "minor", "iv — step up");
        add(0, "minor", "i — home");
        add(3, "major", "III");
        break;
      case 3:
        add(5, "minor", "iv — step up");
        add(0, "minor", "i — return home");
        add(8, "major", "VI — relative");
        add(10, "major", "VII — step up");
        add(7, "7", "V7 — dominant");
        add(4, "dim7", "Passing dim → iv");
        break;
      case 5:
        add(7, "7", "V7 — dominant push");
        add(0, "minor", "i — plagal home");
        add(3, "major", "III — relative");
        add(10, "major", "VII — climb");
        add(2, "m7b5", "ii° — pre-dominant");
        break;
      case 7:
        if (!isDom) {
          add(0, "minor", "i — resolve home");
          add(8, "major", "VI — deceptive");
          add(3, "major", "III — relative");
          add(5, "minor", "iv — step down");
          add(0, "maj9", "I major — surprise", 4);
        }
        break;
      case 8:
        add(10, "major", "VII — step up");
        add(5, "minor", "iv — drop a 3rd");
        add(3, "major", "III — relative");
        add(0, "minor", "i — home");
        add(7, "7", "V7 — dominant");
        add(2, "m7b5", "ii° — pre-dominant");
        break;
      case 10:
        add(0, "minor", "i — resolve up");
        add(3, "major", "III — mediant");
        add(8, "major", "VI — step down");
        add(5, "minor", "iv — drop");
        add(7, "7", "V7 — dominant");
        add(2, "m7b5", "ii° — pre-dominant");
        break;
      default:
        add((deg + 5) % 12, "minor", "Circle of fifths");
        add((deg + 3) % 12, "major", "Up a 3rd");
        add((deg + 10) % 12, "major", "Step down");
        add((deg + 1) % 12, "dim7", "Chromatic tension");
        add(0, "minor", "Return home");
        add(7, "7", "V7 — dominant");
        add(8, "major", "VI");
        add(3, "major", "III");
    }
  } else {
    switch (deg) {
      case 0:
        add(5, "major", "IV — subdominant");
        add(5, "major", "IV/vi — smooth bass ↓", 9);
        add(7, "major", "V — dominant");
        add(9, "minor", "vi — relative minor");
        add(2, "minor", "ii — step up");
        add(0, "major", "I/3rd — bass lift", 4);
        add(5, "m6", "iv6 — borrowed (dark)");
        add(7, "7sus4", "V7sus4 — build tension");
        add(2, "7", "V/V — secondary dominant");
        add(4, "7", "V/vi — secondary dominant");
        break;
      case 2:
        add(7, "7", "V7 — classic ii-V");
        add(7, "7sus4", "V7sus4 — delay resolve");
        add(5, "major", "IV — step up");
        add(0, "major", "I — home");
        add(9, "minor", "vi — relative");
        add(2, "7", "II7 — secondary dom");
        break;
      case 4:
        add(9, "minor", "vi — step up");
        add(5, "major", "IV — step up");
        add(0, "major", "I — home");
        add(5, "m6", "iv6 — borrowed color");
        add(4, "dim7", "Passing dim ↓");
        break;
      case 5:
        add(7, "major", "V — dominant");
        add(0, "major", "I — plagal home");
        add(0, "major", "I/3rd — ↑bass", 4);
        add(2, "minor", "ii — pre-dominant");
        add(5, "minor", "iv — borrow to minor");
        add(5, "m6", "iv6 — dark color");
        add(7, "7sus4", "V7sus4 — tension");
        add(4, "dim7", "#iv° — passing dim");
        break;
      case 7:
        if (!isDom && !isSus) {
          add(0, "major", "I — resolve");
          add(9, "minor", "vi — deceptive");
          add(5, "major", "IV — retrogression");
          add(0, "major", "I/3rd — soft resolve", 4);
          add(7, "7sus4", "V7sus4 — suspend first");
        }
        break;
      case 9:
        add(5, "major", "IV — classic");
        add(2, "minor", "ii — pre-dominant");
        add(0, "major", "I — home");
        add(7, "7", "V7 — dominant");
        add(4, "minor", "iii — step down");
        add(8, "dim7", "Passing dim ↓");
        add(5, "m6", "iv6 — borrowed");
        add(2, "7", "V/V — secondary dom");
        break;
      case 11:
        add(0, "major", "I — resolve up");
        add(7, "7", "V7 — dominant");
        add(5, "major", "IV");
        add(9, "minor", "vi");
        break;
      default: {
        add((deg + 5) % 12, "major", "Circle of fifths");
        const secDom = (deg + 7) % 12;
        add(secDom, "7", "Secondary V7 →");
        add((deg + 2) % 12, "minor", "Step up");
        add((deg + 10) % 12, "major", "Step down");
        add((deg + 1) % 12, "dim7", "Passing dim");
        add(0, "major", "Return home");
        add(7, "7", "V7 — dominant");
      }
    }
  }

  if (m) {
    add(5, "major", "Borrowed IV (bright)");
    add((deg + 4) % 12, "major", "Chromatic mediant ↑");
  } else {
    add(5, "m6", "iv6 — borrowed minor");
    add(5, "minor", "iv — borrowed minor");
    add(8, "major", "♭VI — borrowed");
    add(10, "major", "♭VII — borrowed");
  }

  if (!isSus && !isDom && !isDim) {
    add(deg, "7sus4", "Suspend (add tension)");
  }

  return out.slice(0, 12);
}

export function getDiatonicChords(keyRoot: string, keyQuality: "major" | "minor") {
  const r = NOTE_TO_SEMI[keyRoot];
  const degs =
    keyQuality === "minor"
      ? [
          { i: 0, q: "minor", l: "i" },
          { i: 2, q: "dim", l: "ii°" },
          { i: 3, q: "major", l: "III" },
          { i: 5, q: "minor", l: "iv" },
          { i: 7, q: "minor", l: "v" },
          { i: 8, q: "major", l: "VI" },
          { i: 10, q: "major", l: "VII" },
        ]
      : [
          { i: 0, q: "major", l: "I" },
          { i: 2, q: "minor", l: "ii" },
          { i: 4, q: "minor", l: "iii" },
          { i: 5, q: "major", l: "IV" },
          { i: 7, q: "major", l: "V" },
          { i: 9, q: "minor", l: "vi" },
          { i: 11, q: "dim", l: "vii°" },
        ];
  return degs.map((d) => ({
    root: semiToNote((r + d.i) % 12, keyRoot),
    quality: d.q,
    roman: d.l,
  }));
}

export interface ColorVariant {
  quality: string;
  mood: string;
}

export interface ColorGroup {
  label: string;
  variants: ColorVariant[];
}

export function getColorGroups(): ColorGroup[] {
  return [
    {
      label: "Bright",
      variants: [
        { quality: "major", mood: "Bright" },
        { quality: "maj7", mood: "Warm" },
        { quality: "add9", mood: "Dreamy" },
        { quality: "6", mood: "Vintage" },
      ],
    },
    {
      label: "Open",
      variants: [
        { quality: "sus2", mood: "Open" },
        { quality: "sus4", mood: "Yearning" },
        { quality: "7sus2", mood: "Floating" },
        { quality: "7sus4", mood: "Building" },
        { quality: "maj13sus2", mood: "Ethereal" },
      ],
    },
    {
      label: "Dark",
      variants: [
        { quality: "minor", mood: "Dark" },
        { quality: "m7", mood: "Mellow" },
        { quality: "m6", mood: "Bittersweet" },
        { quality: "m9", mood: "Deep" },
      ],
    },
    {
      label: "Tense",
      variants: [
        { quality: "7", mood: "Driving" },
        { quality: "7b9", mood: "Gritty" },
        { quality: "dim7", mood: "Unstable" },
        { quality: "m7b5", mood: "Fragile" },
        { quality: "aug", mood: "Eerie" },
      ],
    },
    {
      label: "Lush",
      variants: [
        { quality: "maj9", mood: "Lush" },
        { quality: "9", mood: "Funky" },
        { quality: "13", mood: "Full" },
        { quality: "mMaj7", mood: "Noir" },
      ],
    },
  ];
}

export function getBassOptions(
  root: string,
  quality: string,
  keyRoot: string
): { bass: string; label: string }[] {
  const rootSemi = NOTE_TO_SEMI[root];
  const intervals = CHORD_INTERVALS[quality];
  if (!intervals || rootSemi === undefined) return [];

  const options: { bass: string; label: string }[] = [
    { bass: "", label: "Root" },
  ];

  if (intervals.length >= 2) {
    const thirdSemi = (rootSemi + (intervals[1] % 12)) % 12;
    const note = semiToNote(thirdSemi, keyRoot);
    options.push({ bass: note, label: `/${note} (1st inv)` });
  }

  if (intervals.length >= 3) {
    const fifthSemi = (rootSemi + (intervals[2] % 12)) % 12;
    const note = semiToNote(fifthSemi, keyRoot);
    options.push({ bass: note, label: `/${note} (2nd inv)` });
  }

  return options;
}
