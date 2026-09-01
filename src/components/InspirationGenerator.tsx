import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { concepts } from "../data/concepts";
import type { AudioData, Concept } from "../types/concept";

// ─── Shared Constants (exported for SketchComposer) ──────────

export const KEYS = [
  "C", "C#/Db", "D", "Eb", "E", "F", "F#/Gb", "G", "Ab", "A", "Bb", "B",
];

export const SCALES = [
  "Major (Ionian)", "Natural Minor (Aeolian)", "Dorian", "Phrygian",
  "Lydian", "Mixolydian", "Locrian", "Harmonic Minor", "Melodic Minor",
  "Whole Tone", "Pentatonic Major", "Pentatonic Minor", "Blues",
  "Diminished (H-W)", "Diminished (W-H)", "Hirajoshi", "Hungarian Minor",
  "Lydian Dominant", "Phrygian Dominant", "Augmented",
];

export const TIME_SIGS = [
  "4/4", "3/4", "2/4", "6/8", "5/4", "7/8", "5/8",
  "9/8", "11/8", "7/4", "12/8", "3/8",
];

export const KEY_TO_PC: Record<string, number> = {
  C: 0, "C#/Db": 1, D: 2, Eb: 3, E: 4, F: 5,
  "F#/Gb": 6, G: 7, Ab: 8, A: 9, Bb: 10, B: 11,
};

export const SCALE_INTERVALS: Record<string, number[]> = {
  "Major (Ionian)": [0, 2, 4, 5, 7, 9, 11],
  "Natural Minor (Aeolian)": [0, 2, 3, 5, 7, 8, 10],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Locrian: [0, 1, 3, 5, 6, 8, 10],
  "Harmonic Minor": [0, 2, 3, 5, 7, 8, 11],
  "Melodic Minor": [0, 2, 3, 5, 7, 9, 11],
  "Whole Tone": [0, 2, 4, 6, 8, 10],
  "Pentatonic Major": [0, 2, 4, 7, 9],
  "Pentatonic Minor": [0, 3, 5, 7, 10],
  Blues: [0, 3, 5, 6, 7, 10],
  "Diminished (H-W)": [0, 1, 3, 4, 6, 7, 9, 10],
  "Diminished (W-H)": [0, 2, 3, 5, 6, 8, 9, 11],
  Hirajoshi: [0, 2, 3, 7, 8],
  "Hungarian Minor": [0, 2, 3, 6, 7, 8, 11],
  "Lydian Dominant": [0, 2, 4, 6, 7, 9, 10],
  "Phrygian Dominant": [0, 1, 4, 5, 7, 8, 10],
  Augmented: [0, 3, 4, 7, 8, 11],
};

// ─── Inspiration Data Types ──────────

export interface InspirationSet {
  key: string;
  scale: string;
  timeSig: string;
  bpm: number;
  tempoLabel: string;
  contrast: string;
  constraint: string;
  chordProgression?: { name: string; audio: AudioData };
}

interface SavedInspiration {
  id: string;
  name: string;
  slots: Slot[];
  savedAt: number;
}

// ─── Private Constants ──────────

const TEMPO_RANGES = [
  { label: "Grave", min: 35, max: 50 },
  { label: "Largo", min: 50, max: 66 },
  { label: "Adagio", min: 66, max: 76 },
  { label: "Andante", min: 76, max: 100 },
  { label: "Moderato", min: 100, max: 120 },
  { label: "Allegretto", min: 120, max: 138 },
  { label: "Allegro", min: 138, max: 168 },
  { label: "Vivace", min: 168, max: 192 },
  { label: "Presto", min: 192, max: 220 },
];

const CONTRASTS = [
  "Loud vs. Soft — use extreme dynamic shifts",
  "Fast vs. Slow — change tempo between sections",
  "Consonant vs. Dissonant — juxtapose sweet and crunchy",
  "Thick vs. Thin — full ensemble against a solo voice",
  "Busy vs. Sparse — hyperactive runs vs. whole notes with space",
  "Acoustic vs. Electronic — organic vs. synthesized textures",
  "Clean vs. Distorted — pure signal vs. harmonic saturation",
  "Major vs. Minor — bright and dark color shifts",
  "Legato vs. Staccato — flowing lines vs. short detached notes",
  "Rhythmic unison vs. Independence — all parts locked vs. each on their own",
  "Wide stereo vs. Mono center — panoramic vs. focused",
  "Repetition vs. Variation — establish a pattern then subvert it",
  "Tension vs. Release — build unresolved energy then resolve",
  "Aggressive vs. Tender — raw power vs. gentle vulnerability",
  "Familiar vs. Foreign — musically 'home' vs. unexpected",
  "High register vs. Low register — soaring vs. deep",
  "Straight vs. Swung — rigid subdivision vs. shuffle feel",
  "Vocal vs. Instrumental melody — different emotional weight",
  "Wet (reverb) vs. Dry — drenched space vs. intimate closeness",
  "Predictable form vs. Surprising form — standard vs. unexpected",
];

const CONSTRAINTS = [
  "Use only 3 different pitches",
  "No root position chords",
  "Start with 4 bars of silence",
  "Every phrase must be a different length",
  "Melody moves only by step — no leaps wider than a 2nd",
  "Use one rhythmic motif for the entire piece",
  "Start at the climax — then deconstruct",
  "No downbeat attacks for 8 bars",
  "Layer one instrument at a time (additive arrangement)",
  "Use only the black keys",
  "Limit yourself to one octave",
  "Use only two chords for the whole piece",
  "Leave at least 50% of each bar empty (rests)",
  "Write the bass line first — derive everything from it",
  "No repeating any bar exactly — every bar must be unique",
  "Use only intervals of a 4th and 5th (quartal)",
  "Write a 12-bar form in the rolled time signature",
  "Use hocket — alternate notes between two voices",
  "Every section must use a different dynamic level",
  "Make the longest note the most important",
  "Use polyrhythm — layer 3 against 2 or 4 against 3",
  "Compose away from your instrument — sing it first",
  "Use only arpeggiated chords — no block voicings",
  "End on an unresolved chord",
  "The melody can only go up — no descending motion",
  "Use call and response between two registers",
  "Write in AABA form",
  "Use metric modulation — shift the felt pulse mid-piece",
  "Play everything one octave lower than feels natural",
  "Use silence as a rhythmic instrument",
];

const PROGRESSION_CONCEPTS = concepts.filter((c) => c.category === "progressions" && c.audio);

// ─── Utility ──────────

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomTempo(): { bpm: number; label: string } {
  const range = pick(TEMPO_RANGES);
  const bpm = Math.floor(Math.random() * (range.max - range.min)) + range.min;
  return { bpm, label: range.label };
}

interface Slot {
  category: string;
  value: string;
  icon: string;
}

function rollAll(): Slot[] {
  const tempo = randomTempo();
  const prog = pick(PROGRESSION_CONCEPTS);
  return [
    { category: "Key & Scale", value: `${pick(KEYS)} ${pick(SCALES)}`, icon: "🎹" },
    { category: "Time Signature", value: pick(TIME_SIGS), icon: "🥁" },
    { category: "Tempo", value: `${tempo.bpm} BPM (${tempo.label})`, icon: "⏱️" },
    { category: "Chord Progression", value: prog.name, icon: "🔗" },
    { category: "Contrast", value: pick(CONTRASTS), icon: "↕️" },
    { category: "Constraint", value: pick(CONSTRAINTS), icon: "🎯" },
  ];
}

function rerollOne(slots: Slot[], idx: number): Slot[] {
  const next = [...slots];
  if (idx === 0) {
    next[0] = { ...next[0], value: `${pick(KEYS)} ${pick(SCALES)}` };
  } else if (idx === 1) {
    next[1] = { ...next[1], value: pick(TIME_SIGS) };
  } else if (idx === 2) {
    const tempo = randomTempo();
    next[2] = { ...next[2], value: `${tempo.bpm} BPM (${tempo.label})` };
  } else if (idx === 3) {
    next[3] = { ...next[3], value: pick(PROGRESSION_CONCEPTS).name };
  } else if (idx === 4) {
    next[4] = { ...next[4], value: pick(CONTRASTS) };
  } else if (idx === 5) {
    next[5] = { ...next[5], value: pick(CONSTRAINTS) };
  }
  return next;
}

// ─── Concept Matching ──────────

const MUSICAL_TERMS = [
  "polyrhythm", "hemiola", "syncopation", "ostinato", "call and response",
  "hocket", "metric modulation", "staccato", "legato", "counterpoint",
  "pedal", "suspension", "arpeggio", "quartal", "pentatonic",
  "chromatic", "sequence", "modulation", "diminution", "augmentation",
  "displacement", "additive",
];

function findRelatedConcepts(slot: Slot): Concept[] {
  const matched = new Set<string>();
  const results: Concept[] = [];

  const addMatch = (c: Concept) => {
    if (!matched.has(c.id)) {
      matched.add(c.id);
      results.push(c);
    }
  };

  if (slot.category === "Chord Progression") {
    const exact = concepts.find((c) => c.name === slot.value);
    if (exact) addMatch(exact);
    return results.slice(0, 3);
  }

  if (slot.category === "Key & Scale") {
    const parts = slot.value.split(/\s+/);
    const scalePart = parts.slice(1).join(" ");
    const mainTerm = scalePart.replace(/\s*\(.*?\)\s*/g, "").trim().toLowerCase();
    const parenTerm = scalePart.match(/\(([^)]+)\)/)?.[1]?.trim().toLowerCase();

    for (const c of concepts) {
      const name = c.name.toLowerCase();
      if (mainTerm.length > 2 && name.includes(mainTerm)) addMatch(c);
      else if (parenTerm && parenTerm.length > 2 && name.includes(parenTerm)) addMatch(c);
    }
  } else if (slot.category === "Time Signature") {
    const sig = slot.value;
    for (const c of concepts) {
      const name = c.name.toLowerCase();
      if (name.includes(sig)) addMatch(c);
      if (
        !["4/4", "3/4", "2/4", "6/8", "12/8"].includes(sig) &&
        name.includes("odd meter")
      ) {
        addMatch(c);
      }
    }
  } else if (slot.category === "Contrast" || slot.category === "Constraint") {
    const lower = slot.value.toLowerCase();
    const matchedTerms = MUSICAL_TERMS.filter((t) => lower.includes(t));
    if (matchedTerms.length > 0) {
      for (const c of concepts) {
        const name = c.name.toLowerCase();
        if (matchedTerms.some((t) => name.includes(t))) addMatch(c);
      }
    }
  }

  return results.slice(0, 3);
}

// ─── Saved Inspirations ──────────

function loadSavedInspirations(): SavedInspiration[] {
  try {
    const saved = localStorage.getItem("saved-inspirations");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function persistInspiration(name: string, slots: Slot[]): void {
  const saved = loadSavedInspirations();
  saved.unshift({
    id: Date.now().toString(36),
    name,
    slots: [...slots],
    savedAt: Date.now(),
  });
  localStorage.setItem("saved-inspirations", JSON.stringify(saved.slice(0, 20)));
}

function deleteSavedInspiration(id: string): void {
  const saved = loadSavedInspirations().filter((s) => s.id !== id);
  localStorage.setItem("saved-inspirations", JSON.stringify(saved));
}

// ─── Parse Slots → InspirationSet ──────────

function slotsToInspirationSet(slots: Slot[]): InspirationSet {
  const keyScale = slots[0].value;
  const firstSpace = keyScale.indexOf(" ");
  const key = firstSpace > 0 ? keyScale.slice(0, firstSpace) : keyScale;
  const scale = firstSpace > 0 ? keyScale.slice(firstSpace + 1) : "";

  const tempoMatch = slots[2].value.match(/^(\d+)\s*BPM\s*\(([^)]+)\)/);
  const bpm = tempoMatch ? parseInt(tempoMatch[1]) : 120;
  const tempoLabel = tempoMatch ? tempoMatch[2] : "";

  const progName = slots[3].value;
  const progConcept = concepts.find((c) => c.name === progName && c.audio);
  const chordProgression = progConcept
    ? { name: progConcept.name, audio: progConcept.audio }
    : undefined;

  return {
    key,
    scale,
    timeSig: slots[1].value,
    bpm,
    tempoLabel,
    contrast: slots[4].value,
    constraint: slots[5].value,
    chordProgression,
  };
}

// ─── Component ──────────

interface Props {
  open: boolean;
  onClose: () => void;
  onApplyToSketch?: (data: InspirationSet) => void;
  onNavigateToConcept?: (conceptId: string) => void;
}

export function InspirationGenerator({
  open,
  onClose,
  onApplyToSketch,
  onNavigateToConcept,
}: Props) {
  const [slots, setSlots] = useState<Slot[]>(rollAll);
  const [savedList, setSavedList] = useState<SavedInspiration[]>([]);
  const [showSaved, setShowSaved] = useState(false);
  const [saveName, setSaveName] = useState("");
  const [showSaveInput, setShowSaveInput] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const conceptMatches = useMemo(
    () => slots.map((slot) => findRelatedConcepts(slot)),
    [slots]
  );

  const handleRollAll = useCallback(() => setSlots(rollAll()), []);

  const handleApply = useCallback(() => {
    if (onApplyToSketch) {
      onApplyToSketch(slotsToInspirationSet(slots));
    }
  }, [slots, onApplyToSketch]);

  const handleSave = useCallback(() => {
    if (saveName.trim()) {
      persistInspiration(saveName.trim(), slots);
      setSavedList(loadSavedInspirations());
      setSaveName("");
      setShowSaveInput(false);
    }
  }, [saveName, slots]);

  const handleLoadSaved = useCallback((saved: SavedInspiration) => {
    setSlots(saved.slots);
    setShowSaved(false);
  }, []);

  const handleDeleteSaved = useCallback((id: string) => {
    deleteSavedInspiration(id);
    setSavedList(loadSavedInspirations());
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showSaveInput) setShowSaveInput(false);
        else if (showSaved) setShowSaved(false);
        else onClose();
      }
      if (e.key === "r" && !e.ctrlKey && !e.metaKey && !showSaveInput)
        handleRollAll();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose, handleRollAll, showSaveInput, showSaved]);

  if (!open) return null;

  return (
    <div
      className="inspo-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="inspo-modal">
        <div className="inspo-header">
          <h2 className="inspo-title">Random Inspiration</h2>
          <div className="inspo-header-actions">
            <button
              className={`inspo-icon-btn${showSaveInput ? " active" : ""}`}
              onClick={() => setShowSaveInput(!showSaveInput)}
              title="Save this set"
            >
              Save
            </button>
            <button
              className={`inspo-icon-btn${showSaved ? " active" : ""}`}
              onClick={() => {
                setShowSaved(!showSaved);
                if (!showSaved) setSavedList(loadSavedInspirations());
              }}
              title="Saved sets"
            >
              Load
            </button>
            <button
              className="inspo-close"
              onClick={onClose}
              title="Close (Esc)"
            >
              &times;
            </button>
          </div>
        </div>

        {showSaveInput && (
          <div className="inspo-save-row">
            <input
              className="inspo-save-input"
              type="text"
              value={saveName}
              onChange={(e) => setSaveName(e.target.value)}
              placeholder="Name this inspiration..."
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave();
              }}
            />
            <button
              className="inspo-save-confirm"
              onClick={handleSave}
              disabled={!saveName.trim()}
            >
              Save
            </button>
          </div>
        )}

        {showSaved && (
          <div className="inspo-saved-list">
            {savedList.length === 0 ? (
              <p className="inspo-saved-empty">No saved inspirations yet</p>
            ) : (
              savedList.map((saved) => (
                <div key={saved.id} className="inspo-saved-item">
                  <button
                    className="inspo-saved-load"
                    onClick={() => handleLoadSaved(saved)}
                  >
                    <span className="inspo-saved-name">{saved.name}</span>
                    <span className="inspo-saved-preview">
                      {saved.slots.map((s) => s.value).join(" · ")}
                    </span>
                  </button>
                  <button
                    className="inspo-saved-delete"
                    onClick={() => handleDeleteSaved(saved.id)}
                    title="Delete"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        <div className="inspo-slots">
          {slots.map((slot, i) => (
            <div key={slot.category} className="inspo-slot">
              <div className="inspo-slot-head">
                <span className="inspo-slot-icon">{slot.icon}</span>
                <span className="inspo-slot-cat">{slot.category}</span>
                <button
                  className="inspo-reroll"
                  onClick={() => setSlots((s) => rerollOne(s, i))}
                  title="Re-roll"
                >
                  🎲
                </button>
              </div>
              <div className="inspo-slot-value">{slot.value}</div>
              {conceptMatches[i].length > 0 && (
                <div className="inspo-concept-links">
                  {conceptMatches[i].map((c) => (
                    <button
                      key={c.id}
                      className="inspo-concept-link"
                      onClick={() => onNavigateToConcept?.(c.id)}
                      title={c.description}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="inspo-footer">
          <button
            className="inspo-roll-all"
            onClick={handleRollAll}
            title="Roll all (R)"
          >
            🎲 Roll All
          </button>
          {onApplyToSketch && (
            <button
              className="inspo-apply"
              onClick={handleApply}
              title="Apply settings and open sketch"
            >
              Apply to Sketch
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
