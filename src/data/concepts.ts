import type { Concept } from "../types/concept";
import { PROGRESSION_NOVELTY } from "./novelty";

const _concepts: Concept[] = [
  // ── Cadences ──────────────────────────────────────────────
  {
    id: "authentic-cadence",
    name: "Authentic Cadence (V → I)",
    category: "cadences",
    description:
      "The strongest resolution in tonal music. The dominant chord resolves to the tonic, creating a sense of finality and closure.",
    tags: ["cadence", "resolution", "dominant", "tonic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "plagal-cadence",
    name: "Plagal Cadence (IV → I)",
    category: "cadences",
    description:
      'Often called the "Amen cadence." The subdominant resolves to tonic with a softer, more hymn-like quality than the authentic cadence.',
    tags: ["cadence", "resolution", "subdominant", "amen"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "half-cadence",
    name: "Half Cadence (I → V)",
    category: "cadences",
    description:
      "Ends on the dominant chord, creating tension and an open, unresolved feeling. Often used at the midpoint of a phrase.",
    tags: ["cadence", "tension", "dominant", "open"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "deceptive-cadence",
    name: "Deceptive Cadence (V → vi)",
    category: "cadences",
    description:
      "The dominant resolves to the submediant instead of the expected tonic. Creates surprise while maintaining harmonic logic.",
    tags: ["cadence", "surprise", "deceptive", "submediant"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
      ],
    },
  },

  {
    id: "cadential-six-four",
    name: "Cadential 6/4",
    category: "cadences",
    description:
      "The tonic chord in second inversion (scale degree 5 in the bass) placed right before V. The 6th and 4th above the bass resolve down by step into the dominant chord, making the cadence feel inevitable. The secret weapon behind every powerful classical ending.",
    tags: ["cadence", "6/4", "inversion", "predominant", "resolution"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "C4", "E4", "G4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "picardy-third",
    name: "Picardy Third",
    category: "cadences",
    description:
      "Ending a phrase or piece in a minor key on a major tonic chord by raising the third. The unexpected brightness creates a luminous, uplifting resolution out of darkness.",
    tags: ["cadence", "minor", "major third", "resolution", "baroque"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n" },
        { notes: ["A3", "C#4", "E4", "A4"], duration: "2n" },
      ],
    },
  },

  // ── Chord Progressions ───────────────────────────────────
  {
    id: "i-iv-v-i",
    name: "I → IV → V → I",
    category: "progressions",
    description:
      "The most fundamental progression in Western music. Establishes tonic, moves to subdominant, builds tension on the dominant, and resolves home.",
    tags: ["pop", "rock", "folk", "tonal", "functional harmony"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "i-v-vi-iv",
    name: "I → V → vi → IV",
    category: "progressions",
    description:
      'The "pop progression." Used in countless hit songs. The move from vi to IV gives it an emotional, bittersweet quality.',
    tags: ["pop", "emotional", "common"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "ii-v-i",
    name: "ii → V → I (Jazz)",
    category: "progressions",
    description:
      "The backbone of jazz harmony. The ii-V creates strong forward motion through the circle of fifths into the tonic. Often played with 7th chords.",
    tags: ["jazz", "circle of fifths", "seventh chords"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "i-vi-iv-v",
    name: "I → vi → IV → V (50s Progression)",
    category: "progressions",
    description:
      'The classic doo-wop / 1950s progression. Also called the "Heart and Soul" changes. Endlessly singable.',
    tags: ["doo-wop", "50s", "classic"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "12-bar-blues",
    name: "12-Bar Blues",
    category: "progressions",
    description:
      "The foundation of blues, rock, and jazz. A 12-bar form built on I, IV, and V with dominant 7th chords throughout.",
    tags: ["blues", "rock", "12-bar", "dominant seventh"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "andalusian-cadence",
    name: "Andalusian Cadence (i → VII → VI → V)",
    category: "progressions",
    description:
      "A descending progression from the natural minor scale. Evokes Spanish/flamenco character. The bass line descends stepwise from tonic to dominant.",
    tags: ["minor", "flamenco", "spanish", "descending"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "2n" },
      ],
    },
  },

  {
    id: "backdoor-ii-v",
    name: "Backdoor Progression (iv → ♭VII7 → I)",
    category: "progressions",
    description:
      "An alternative to the standard ii-V-I that approaches the tonic from a whole step above instead of a half step. The bVII7 shares two notes with V7 but resolves with a warmer, less expected quality.",
    tags: ["jazz", "backdoor", "bVII", "substitution"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F3", "Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },

  {
    id: "puff-schema",
    name: "Puff Schema (I → ♯III → IV)",
    category: "progressions",
    description:
      "A progression where a major III chord (borrowed from the parallel minor or as V/vi) moves to IV. The III# creates a deceptive-motion feel without going to vi. Named for its use in \"Puff the Magic Dragon.\" Common in indie and folk-pop.",
    tags: ["pop", "schema", "chromatic mediant", "deceptive"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "galant-prinner",
    name: "Prinner (Galant Schema)",
    category: "progressions",
    description:
      "A descending stepwise schema from the 18th century: scale degrees 6-5-4-3 in the melody over 4-3-2-1 in the bass. Still shows up everywhere as a graceful closing gesture. One of the most satisfying four-chord moves in tonal music.",
    tags: ["galant", "schema", "classical", "descending"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F3", "A3", "D4"], duration: "2n" },
        { notes: ["E3", "G3", "C4"], duration: "2n" },
        { notes: ["D3", "F3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "galant-meyer",
    name: "Meyer (Galant Schema)",
    category: "progressions",
    description:
      "An opening schema with a characteristic melodic shape: 1-7-4-3 over a I-V-I bass. Creates a strong opening gesture that establishes the key with melodic interest. A building block of classical phrase construction.",
    tags: ["galant", "schema", "classical", "opening"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G2", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "lament-bass",
    name: "Lament Bass (1 → ♭7 → ♭6 → 5)",
    category: "progressions",
    description:
      "A chromatic descending bass line from tonic down to dominant: 1-7-b7-6-b6-5. Each half step in the bass generates a new chord above it. One of the most emotionally powerful patterns in music, from Purcell to Radiohead.",
    tags: ["baroque", "pop", "chromatic", "bass line", "lament", "descending", "passing chords"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
        { notes: ["G#3", "C4", "E4", "G#4"], duration: "2n" },
        { notes: ["G3", "C4", "E4", "G4"], duration: "2n" },
        { notes: ["F#3", "C4", "D4", "F#4"], duration: "2n" },
        { notes: ["F3", "C4", "D4", "F4"], duration: "2n" },
        { notes: ["E3", "B3", "E4", "G#4"], duration: "2n" },
      ],
    },
  },

  // ── Scales & Modes ────────────────────────────────────────
  {
    id: "dorian-mode",
    name: "Dorian Mode",
    category: "scales-modes",
    description:
      "A minor mode with a raised 6th degree. Brighter than natural minor. Common in jazz, funk, and folk. Think of the ii chord's sound world.",
    tags: ["mode", "minor", "jazz", "raised sixth"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["D3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "4n" },
      ],
    },
  },
  {
    id: "mixolydian-mode",
    name: "Mixolydian Mode",
    category: "scales-modes",
    description:
      "A major mode with a lowered 7th degree. Dominant sound. Essential for blues, rock, and funk. Think of the V chord's sound world.",
    tags: ["mode", "major", "blues", "dominant", "flat seven"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "lydian-mode",
    name: "Lydian Mode",
    category: "scales-modes",
    description:
      "A major mode with a raised 4th degree. Dreamy, floating, otherworldly quality. Used heavily in film scoring and progressive music.",
    tags: ["mode", "major", "film", "sharp four"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "4n" },
      ],
    },
  },
  {
    id: "phrygian-mode",
    name: "Phrygian Mode",
    category: "scales-modes",
    description:
      "A minor mode with a lowered 2nd degree. Dark, exotic, and tense. The half-step from root to b2 gives it a distinctive Spanish/Middle-Eastern flavor.",
    tags: ["mode", "minor", "dark", "spanish", "flat two"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "harmonic-minor",
    name: "Harmonic Minor Scale",
    category: "scales-modes",
    description:
      "Natural minor with a raised 7th degree. Creates a leading tone for stronger V→i resolution. The augmented 2nd between b6 and 7 gives it a distinctive character.",
    tags: ["scale", "minor", "leading tone", "augmented second"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G#4"], duration: "8n" },
        { notes: ["A4"], duration: "4n" },
      ],
    },
  },
  {
    id: "whole-tone-scale",
    name: "Whole Tone Scale",
    category: "scales-modes",
    description:
      "A six-note symmetrical scale built entirely of whole steps. No strong tonal center. Creates a floating, dreamlike, impressionistic quality. Debussy's signature sound.",
    tags: ["scale", "symmetrical", "impressionist", "debussy", "augmented"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G#4"], duration: "8n" },
        { notes: ["A#4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },

  {
    id: "acoustic-scale",
    name: "Acoustic Scale / Lydian Dominant",
    category: "scales-modes",
    description:
      "Lydian mode with a b7: the overtone series as a scale. Combines the brightness of the #4 with the tension of the b7. The sound of fusion, Allan Holdsworth, and basically any dominant chord you want to make sound huge and modern.",
    tags: ["scale", "lydian dominant", "overtone", "fusion", "holdsworth"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["Bb4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },
  {
    id: "octatonic-scale",
    name: "Octatonic Scale (Diminished Scale)",
    category: "scales-modes",
    description:
      "An eight-note symmetrical scale alternating half and whole steps (or whole and half). Generates diminished 7th chords and dominant 7th chords on every other degree. A go-to for outside sounds in jazz, prog, and film scoring.",
    tags: ["scale", "symmetrical", "diminished", "jazz", "outside"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["Bb4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },
  {
    id: "blues-scale",
    name: "Blues Scale",
    category: "scales-modes",
    description:
      "The minor pentatonic with an added b5 (the \"blue note\"). Six notes that define the sound of blues, rock, and funk. The tension between the b3 and the b5 against major-key harmony is what gives blues its character.",
    tags: ["scale", "blues", "pentatonic", "blue note", "funk"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["Bb4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },
  {
    id: "hexatonic-scale",
    name: "Augmented Scale (Hexatonic)",
    category: "scales-modes",
    description:
      "A six-note symmetrical scale alternating minor 3rds and half steps. Contains two interlocking augmented triads. Used by Coltrane, Ligeti, and in film scoring for its shimmering, otherworldly quality.",
    tags: ["scale", "symmetrical", "augmented", "coltrane", "hexatonic"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D#4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["G#4"], duration: "8n" },
        { notes: ["B4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },

  // ── Harmonic Devices ──────────────────────────────────────
  {
    id: "borrowed-bvi",
    name: "Borrowed bVI in Major",
    category: "harmonic-devices",
    description:
      "A major chord on the lowered 6th degree, borrowed from the parallel minor. Adds a dramatic, cinematic quality to major key progressions. Often moves to bVII or V.",
    tags: ["borrowed chord", "major key", "chromatic"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "borrowed-bvii",
    name: "Borrowed bVII in Major",
    category: "harmonic-devices",
    description:
      "A major chord on the lowered 7th degree, borrowed from Mixolydian or the parallel minor. Common in rock and pop. Creates a plagal-like resolution without the subdominant.",
    tags: ["borrowed chord", "major key", "rock"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "quartal-harmony",
    name: "Quartal Harmony",
    category: "harmonic-devices",
    description:
      "Chords built by stacking perfect 4ths instead of 3rds. Creates an open, ambiguous, modern sound. Foundational to McCoy Tyner's playing and much post-bop and modern jazz.",
    tags: ["quartal", "fourths", "jazz", "modern", "open voicing"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "F3", "Bb3"], duration: "2n" },
        { notes: ["D3", "G3", "C4"], duration: "2n" },
        { notes: ["E3", "A3", "D4"], duration: "2n" },
        { notes: ["F3", "Bb3", "Eb4"], duration: "2n" },
      ],
    },
  },
  {
    id: "quintal-harmony",
    name: "Quintal Harmony",
    category: "harmonic-devices",
    description:
      "Chords built by stacking perfect 5ths instead of 3rds. Similar openness to quartal voicings (5ths are inverted 4ths) but with a wider, more spacious character. Used in orchestral and ambient music.",
    tags: ["quintal", "fifths", "open voicing", "modern", "spacious"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "G3", "D4"], duration: "2n" },
        { notes: ["D3", "A3", "E4"], duration: "2n" },
        { notes: ["E3", "B3", "F#4"], duration: "2n" },
        { notes: ["F3", "C4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary dominant",
    name: "Secondary Dominant (V/V)",
    category: "harmonic-devices",
    description:
      "A dominant chord that temporarily tonicizes a non-tonic chord. V/V (D major in key of C) resolves to V, adding chromatic color and forward motion.",
    tags: ["chromatic", "tonicization", "dominant", "secondary"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary-leading-tone",
    name: "Secondary Leading-Tone (vii°7/x)",
    category: "harmonic-devices",
    description:
      "A fully diminished 7th chord that functions as a secondary dominant. Every note is a half step from a chord tone of the target. More subtle and darker than V/x, with smoother voice leading.",
    tags: ["chromatic", "secondary", "diminished", "tonicization"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary-dominant-b9",
    name: "Altered Secondary Dominant (V7♭9/x)",
    category: "harmonic-devices",
    description:
      "A secondary dominant with a flatted 9th, adding extra tension and a darker color before resolution. The b9 interval creates a minor 2nd against the root, intensifying the pull toward the target chord.",
    tags: ["chromatic", "secondary", "altered", "dominant", "tension"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "tritone-substitution",
    name: "Tritone Substitution",
    category: "harmonic-devices",
    description:
      "Replacing a dominant chord with the dominant a tritone away. Works because both chords share the same tritone interval (3rd and 7th swap). Creates chromatic bass motion.",
    tags: ["jazz", "chromatic", "substitution", "tritone sub"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "tritone-sub-of-ii",
    name: "Tritone Sub of V7/ii",
    category: "harmonic-devices",
    description:
      "Applying tritone substitution to the secondary dominant of ii. Instead of A7 → Dm, use Eb7 → Dm. The chromatic bass descent (Eb → D) creates a smooth, sophisticated approach to the ii chord.",
    tags: ["jazz", "chromatic", "substitution", "tritone sub", "secondary"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "planing",
    name: "Planing (Parallel Voicing Motion)",
    category: "harmonic-devices",
    description:
      "Moving a chord voicing in parallel to positions outside its home key, keeping the shape identical. The unchanged intervals create coherence while the non-diatonic root motion creates freshness. A quick way to generate outside-sounding progressions from familiar shapes.",
    tags: ["parallel", "planing", "outside", "voicing", "non-functional"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "common-tone-voice-leading",
    name: "Common-Tone Voice Leading",
    category: "harmonic-devices",
    description:
      "Holding one or more notes in common between chords while moving the remaining voices. The anchored tones create a smooth connection even between unrelated chords. Distinct from chromatic voice leading where all voices move by half step.",
    tags: ["voice-leading", "common tone", "smooth", "anchor"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F3", "Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["E3", "Ab3", "B3", "Eb4"], duration: "2n" },
        { notes: ["Eb3", "Gb3", "Bb3", "Db4"], duration: "2n" },
        { notes: ["D3", "Gb3", "A3", "Db4"], duration: "2n" },
      ],
    },
  },
  {
    id: "non-functional-harmony",
    name: "Non-Functional Harmony",
    category: "harmonic-devices",
    description:
      "Chord progressions built on sound and voice motion rather than key-center relationships. Chords are chosen for color, texture, and intervallic interest instead of tonal function. Creates obstacles for melody writing that can yield unexpected, ear-catching results.",
    tags: ["non-functional", "outside", "harmonic color", "experimental"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "D#4"], duration: "2n" },
        { notes: ["Eb3", "Gb3", "Bb3", "C4"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C#4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "rhythmic-displacement",
    name: "Rhythmic Displacement of Changes",
    category: "harmonic-devices",
    description:
      "Alternating chord changes between downbeats and offbeats instead of placing every change on beat one. Creates pockets for the band to rest in, builds drama, and keeps the harmonic rhythm playful and unpredictable.",
    tags: ["rhythm", "displacement", "offbeat", "phrasing", "pocket"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n." },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n." },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "pandiatonicism",
    name: "Pandiatonicism",
    category: "harmonic-devices",
    description:
      "Using all seven diatonic notes freely without functional chord progressions. Notes from the key are combined in any voicing without regard to traditional root motion or resolution. Creates open, floating, Copland-esque Americana or ambient textures.",
    tags: ["diatonic", "non-functional", "open", "copland", "ambient"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "F3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "metric-modulation",
    name: "Metric Modulation",
    category: "harmonic-devices",
    description:
      "Changing tempo by reinterpreting a subdivision as the new beat. A triplet subdivision at 120 bpm becomes the new pulse at 180 bpm (or vice versa). The tempo shifts but feels connected because a rhythmic value carries over. Peak Louis Cole / Snarky Puppy energy.",
    tags: ["rhythm", "tempo", "modulation", "metric", "polyrhythm"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4t" },
        { notes: ["F3", "A3", "C4"], duration: "4t" },
        { notes: ["F3", "A3", "C4"], duration: "4t" },
        { notes: ["G3", "B3", "D4"], duration: "4t" },
        { notes: ["G3", "B3", "D4"], duration: "4t" },
        { notes: ["G3", "B3", "D4"], duration: "4t" },
        { notes: ["C3", "E3", "G3"], duration: "4t" },
        { notes: ["C3", "E3", "G3"], duration: "4t" },
        { notes: ["C3", "E3", "G3"], duration: "4t" },
      ],
    },
  },
  {
    id: "jazz-turnaround",
    name: "Jazz Turnaround",
    category: "harmonic-devices",
    description:
      "A short chord progression at the end of a section that creates momentum back to the top. The classic is I → vi → ii → V, but countless variations exist: tritone subs, backdoor approaches, Coltrane changes. The turnaround IS the groove in a lot of jazz.",
    tags: ["jazz", "turnaround", "cycle", "momentum", "form"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["A3", "C4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
      ],
    },
  },
  {
    id: "pedal-point",
    name: "Pedal Point",
    category: "harmonic-devices",
    description:
      "A sustained or repeated bass note held while the harmony changes above it. Creates tension as chords move away from the pedal tone, then resolution when they return.",
    tags: ["bass", "sustained", "tension", "organ point"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "neapolitan-chord",
    name: "Neapolitan Chord (bII)",
    category: "harmonic-devices",
    description:
      "A major triad built on the lowered 2nd degree, typically in first inversion. Used as a pre-dominant chord with a dark, dramatic quality. Common in minor keys.",
    tags: ["chromatic", "predominant", "minor", "dramatic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
        { notes: ["F3", "Bb3", "Db4", "F4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
      ],
    },
  },

  {
    id: "augmented-sixth-chords",
    name: "Augmented Sixth Chords (It/Fr/Ger)",
    category: "harmonic-devices",
    description:
      "Chromatic pre-dominant chords built on b6 with a #4, creating an augmented 6th interval that resolves outward to the octave on scale degree 5. Italian (3 notes), French (adds #2), German (adds b3). Among the most dramatic sounds in classical and film harmony.",
    tags: ["chromatic", "predominant", "augmented sixth", "classical", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Ab3", "C4", "F#4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["Ab3", "C4", "D4", "F#4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "F#4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "common-tone-dim7",
    name: "Common-Tone Diminished 7th (CT°7)",
    category: "harmonic-devices",
    description:
      "A diminished 7th chord that shares a common tone with the chord it embellishes. Built a half step above the root of the target chord. Creates a shimmering chromatic neighbor effect — the chord briefly destabilizes before snapping back.",
    tags: ["embellishing", "diminished", "common tone", "chromatic", "harmonic color", "passing chords"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-mediants",
    name: "Chromatic Mediant Relations",
    category: "harmonic-devices",
    description:
      "Chords a major or minor 3rd apart that share one common tone but differ in quality. C major to E major, or C major to Ab major. Creates a vivid key-color shift without traditional dominant function. Foundational to film scoring and prog.",
    tags: ["chromatic", "mediant", "third relation", "film", "harmonic color"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-sequence",
    name: "Chromatic Sequence",
    category: "harmonic-devices",
    description:
      "A repeating harmonic pattern transposed chromatically. Descending-fifths sequences with applied dominants are the most common: each chord becomes V7 of the next, pulling you through keys in rapid succession. Creates unstoppable forward momentum.",
    tags: ["sequence", "chromatic", "descending fifths", "momentum", "applied"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "4n" },
      ],
    },
  },
  {
    id: "omnibus-progression",
    name: "Omnibus Progression",
    category: "harmonic-devices",
    description:
      "A chromatic pattern where the outer voices move in contrary motion by half step while inner voices hold or move minimally. Generates a chain of dominant-quality chords. Named for its ability to pass through many keys like an omnibus (bus) passing stops.",
    tags: ["chromatic", "contrary motion", "dominant", "classical", "sequence", "passing chords"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["B2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Bb2", "E3", "G3", "C#4"], duration: "2n" },
        { notes: ["A2", "E3", "G3", "Eb4"], duration: "2n" },
        { notes: ["Ab2", "Eb3", "Gb3", "Eb4"], duration: "2n" },
      ],
    },
  },
  {
    id: "neo-riemannian",
    name: "Neo-Riemannian Transformations (L, P, R)",
    category: "harmonic-devices",
    description:
      "Moving between triads by changing one note at a time: Parallel (P) flips major/minor, Relative (R) shifts to the relative major/minor, Leading-tone (L) moves the root down a half step. Chains of these create smooth chromatic progressions with no functional harmony required.",
    tags: ["neo-riemannian", "transformation", "chromatic", "triadic", "modern"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["Ab3", "Eb4", "Ab4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["E3", "B3", "E4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "altered-extended-dominants",
    name: "Altered & Extended Dominants",
    category: "harmonic-devices",
    description:
      "Dominant 7th chords with added tensions (9, 11, 13) and/or chromatic alterations (b9, #9, #11, b13). Each alteration changes the color and intensity. The fully altered dominant (b9, #9, #11, b13) is the most outside — pure tension before resolution.",
    tags: ["dominant", "altered", "extensions", "jazz", "tension"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["G3", "B3", "F4", "A4"], duration: "2n" },
        { notes: ["G3", "B3", "F4", "Ab4"], duration: "2n" },
        { notes: ["G3", "B3", "F4", "A#4"], duration: "2n" },
        { notes: ["G3", "B3", "F4", "C#5"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "minor-iv-in-major",
    name: "Minor iv in Major Key",
    category: "harmonic-devices",
    description:
      "Borrowing the minor iv chord from the parallel minor into a major key context. The b6 scale degree adds instant melancholy. One of the most emotionally effective single-chord borrowings — Radiohead, Beatles, and every soundtrack ever.",
    tags: ["borrowed chord", "minor iv", "emotional"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "pentatonic-harmony",
    name: "Pentatonic Harmony",
    category: "harmonic-devices",
    description:
      "Building chords from pentatonic scale tones only — stacked 4ths and 5ths rather than 3rds. Avoids half-step tensions entirely, creating an open, folk-like or ambient quality. The harmonic backbone of a lot of modern worship, ambient, and lo-fi music.",
    tags: ["pentatonic", "quartal", "open", "ambient", "folk"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "D3", "G3"], duration: "2n" },
        { notes: ["A2", "D3", "E3"], duration: "2n" },
        { notes: ["G2", "C3", "D3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "fragile-tonic",
    name: "Fragile, Absent & Emergent Tonics",
    category: "harmonic-devices",
    description:
      "Progressions that weaken, delay, or avoid the tonic chord entirely. A fragile tonic appears but is undermined by context. An absent tonic never sounds — the key is implied. An emergent tonic builds toward a key center that only crystallizes later. Creates ambiguity and tension.",
    tags: ["tonic", "ambiguity", "pop", "modern", "absence"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "harmonic-elision",
    name: "Harmonic Elision",
    category: "harmonic-devices",
    description:
      "Skipping an expected chord in a progression — the harmony jumps over a step. V doesn't go to I, it leaps somewhere unexpected. Creates a compressed, accelerated feeling. Can be used to avoid cliches or to build surprise into otherwise predictable motion.",
    tags: ["elision", "surprise", "skip", "compression", "unexpected"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "enharmonic-dim7-modulation",
    name: "Enharmonic Dim7 Reinterpretation",
    category: "harmonic-devices",
    description:
      "A fully diminished 7th chord divides the octave into equal minor 3rds, so any note can be treated as the root. Respelling one note reinterprets the chord as a leading-tone chord in a completely different key. Allows instant modulation to keys a minor 3rd apart.",
    tags: ["diminished", "enharmonic", "modulation", "reinterpretation", "symmetrical"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "D3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "D3", "F3", "Ab3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "equal-division-octave",
    name: "Equal Divisions of the Octave",
    category: "harmonic-devices",
    description:
      "Dividing the octave into equal intervals creates symmetrical structures: tritone (2 divisions), augmented triad (3), diminished 7th (4), whole-tone scale (6). These structures have no single tonal center, creating floating, directionless, or kaleidoscopic harmony.",
    tags: ["symmetrical", "augmented", "diminished", "tritone sub", "whole-tone"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "F#3"], duration: "2n" },
        { notes: ["C3", "E3", "G#3"], duration: "2n" },
        { notes: ["C3", "Eb3", "F#3", "A3"], duration: "2n" },
        { notes: ["C3", "D3", "E3", "F#3", "G#3", "A#3"], duration: "2n" },
      ],
    },
  },
  {
    id: "parallel-chromatic-sequence",
    name: "Parallel Chromatic Sequences",
    category: "harmonic-devices",
    description:
      "Moving the same chord type in parallel chromatic motion — parallel dominant 7ths, parallel major triads in first inversion, or parallel augmented triads. Breaks all voice-leading rules and sounds incredible. Think Debussy, Danny Elfman, or any Owane riff.",
    tags: ["parallel", "chromatic", "sequence", "planing", "impressionist"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["B3", "D#4", "F#4", "A4"], duration: "4n" },
        { notes: ["Bb3", "D4", "F4", "Ab4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["Ab3", "C4", "Eb4", "Gb4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },

  // ── Voice Leading ─────────────────────────────────────────
  {
    id: "contrary-motion",
    name: "Contrary Motion",
    category: "voice-leading",
    description:
      "Two voices moving in opposite directions. Creates independence between parts and a sense of expanding or contracting harmonic space.",
    tags: ["voice-leading", "counterpoint", "independence"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "C4"], duration: "4n" },
        { notes: ["B2", "D4"], duration: "4n" },
        { notes: ["Bb2", "E4"], duration: "4n" },
        { notes: ["A2", "F4"], duration: "4n" },
        { notes: ["G2", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "voice-exchange",
    name: "Voice Exchange",
    category: "voice-leading",
    description:
      "Two voices swap notes. The bass takes the soprano's note and vice versa. Maintains the same harmony while creating melodic motion in both parts.",
    tags: ["voice-leading", "counterpoint", "swap"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["E3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-voice-leading",
    name: "Chromatic Voice Leading",
    category: "voice-leading",
    description:
      "Moving between chords by half-step motion in one or more voices. Minimizes movement and creates smooth connections even between distantly related chords.",
    tags: ["voice-leading", "chromatic", "smooth", "half-step"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "D3", "F#3", "A3"], duration: "2n" },
        { notes: ["B2", "D3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },

  // ── Modulation ────────────────────────────────────────────
  {
    id: "pivot-chord-modulation",
    name: "Pivot Chord Modulation",
    category: "modulation",
    description:
      "Modulating to a new key using a chord that exists in both the old and new keys. The smoothest type of modulation because the pivot chord sounds natural in both contexts.",
    tags: ["modulation", "pivot", "common chord", "smooth"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["D3", "F#3", "A3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "direct-modulation",
    name: "Direct Modulation (Truck Driver's Modulation)",
    category: "modulation",
    description:
      "An abrupt shift to a new key, usually up a half or whole step. No preparation — just jumps. Common in pop songs for the final chorus. Instant energy boost.",
    tags: ["modulation", "abrupt", "pop", "key change"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
      ],
    },
  },
  {
    id: "modulation-up-fourth",
    name: "Modulation Up a 4th (IV Pivot)",
    category: "modulation",
    description:
      "Modulate up a perfect 4th by treating the I chord as V of the new key, landing on IV of the new key. The tonic becomes a dominant, giving instant forward motion into the new tonal center.",
    tags: ["modulation", "fourth", "pivot", "subdominant"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-modulation",
    name: "Chromatic Modulation",
    category: "modulation",
    description:
      "Modulating by chromatically altering a note in a chord to create a chord in the new key. The chromatic motion provides the link between keys.",
    tags: ["modulation", "chromatic", "alteration"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "A3"], duration: "2n" },
        { notes: ["C3", "E3", "A3", "C#4"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "common-tone-modulation",
    name: "Common-Tone Modulation",
    category: "modulation",
    description:
      "Sustaining a single note while the harmony shifts to a new key that also contains that note. The held tone is the thread connecting two otherwise unrelated keys. Smoother than a pivot chord because the listener literally hears the connection.",
    tags: ["modulation", "common tone", "sustained", "smooth"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "G4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "G4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "G4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "G4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Eb4"], duration: "2n" },
      ],
    },
  },

  // ── Golden Age Progressions ───────────────────────────────
  {
    id: "circle-progression",
    name: "Circle Progression (I → vi → ii → V → I)",
    category: "progressions",
    description:
      "Chords descending by thirds then fifths through the diatonic cycle. The backbone of Great American Songbook harmony. Every chord has maximum common tones with its neighbor, creating effortless flow.",
    tags: ["jazz", "standards", "circle", "golden age", "diatonic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "extended-circle",
    name: "Extended Circle (I → iii → vi → ii → V → I)",
    category: "progressions",
    description:
      "The full diatonic circle of thirds/fifths. Adding iii before vi creates a longer, more luxurious harmonic journey. The kind of progression that makes a 32-bar standard feel like it floats.",
    tags: ["jazz", "standards", "circle", "golden age", "extended"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary-dominant-circle",
    name: "Secondary Dominant Circle (I → VI7 → ii7 → V7 → I)",
    category: "progressions",
    description:
      "The circle progression supercharged with a secondary dominant: VI7 (A7) tonicizes the ii chord, creating a chain of dominant-to-tonic resolutions. The chromatic F# adds warmth and sophistication. Pure golden age Hollywood.",
    tags: ["jazz", "swing", "secondary dominant", "golden age", "chromatic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "passing-diminished",
    name: "Passing Diminished (I → #IV°7 → V → I)",
    category: "progressions",
    description:
      "A diminished 7th chord on the raised 4th degree connects I to V with a chromatic bass line (C→C#→D→C in the bass with V in inversion, or C→F#→G). The diminished chord creates delicious tension that melts into the dominant. Hollywood loves this move.",
    tags: ["jazz", "barbershop", "diminished", "passing chords", "chromatic"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "double-borrowed-plagal",
    name: "Double Plagal / Chromatic Plagal (I → ♭VI → ♭VII → I)",
    category: "progressions",
    description:
      "Two borrowed chords from the parallel minor resolving back to the major tonic. The bVI adds drama, the bVII adds lift, and the return to I feels triumphant. A cinematic staple — think John Williams fanfares.",
    tags: ["borrowed chord", "plagal", "cinematic"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "Ab4"], duration: "2n" },
        { notes: ["Bb3", "D4", "F4", "Bb4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-mediant-chain",
    name: "Chromatic Mediant Chain (I → bIII → bVI → bII → V → I)",
    category: "progressions",
    description:
      "A progression moving through chromatic mediants — each chord a third away from the last, connected by common tones and chromatic bass motion. Creates an epic, sweeping harmonic arc. Pure Max Steiner / Bernard Herrmann territory.",
    tags: ["chromatic mediant", "film", "golden age", "epic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "line-cliche",
    name: "Line Cliché (I → Imaj7 → I7 → IV)",
    category: "progressions",
    description:
      "A chromatic descent within the tonic chord: the root stays put while an inner voice walks down (8→maj7→b7→6 or into IV). Creates forward motion without changing the bass. The James Bond progression, \"My Funny Valentine,\" and countless film cues.",
    tags: ["pop", "broadway", "chromatic", "inner voice", "line cliche", "passing chords"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },

  // ── Golden Age Harmonic Colors ────────────────────────────
  {
    id: "major-sixth-chord",
    name: "Major 6th Chord (Imaj6)",
    category: "harmonic-devices",
    description:
      "A major triad with an added 6th — the definitive golden age tonic sound. Warmer and more nostalgic than a plain major triad, less jazzy than a maj7. The 6th adds color without tension. Think of every 1940s film ending.",
    tags: ["sixth", "golden age", "tonic", "harmonic color"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "A3"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "A3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-bass-motion",
    name: "Chromatic Bass Motion",
    category: "harmonic-devices",
    description:
      "A bass line moving by half steps underneath changing harmonies. Each semitone step generates its own chord above, creating a smooth, inevitable pull. Ascending chromatic bass builds tension; descending creates pathos. The spine of golden age Hollywood orchestration.",
    tags: ["bass", "chromatic", "golden age", "motion", "stepwise", "passing chords"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["D#3", "F#3", "A3", "C4"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dominant-sus-resolution",
    name: "Dominant Sus Resolution (V7sus4 → V7 → I)",
    category: "harmonic-devices",
    description:
      "Suspending the 4th over the dominant before resolving it to the 3rd, then resolving the whole chord to tonic. A two-stage resolution that heightens anticipation. The sus4 softens the dominant, the resolution to V7 sharpens it, then I arrives with full release.",
    tags: ["dominant", "suspension", "resolution", "anticipation"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "C4", "D4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "backcycling",
    name: "Backcycling",
    category: "harmonic-devices",
    description:
      "Working backwards from a target chord through the circle of fifths, adding ii-V pairs before each chord. Want to get to Dm? Back up: Am7→D7→Gm7→C7→Dm. Creates elaborate harmonic paths to simple destinations. A jazz arranger's secret weapon.",
    tags: ["jazz", "circle of fifths", "ii-V", "reharmonization", "approach"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "diatonic-sequence",
    name: "Diatonic Sequence",
    category: "harmonic-devices",
    description:
      "A melodic or harmonic pattern repeated at different scale degrees within the same key. Unlike chromatic sequences, each repetition adjusts intervals to stay diatonic. Creates a sense of inevitability and direction while maintaining tonal coherence.",
    tags: ["sequence", "diatonic", "pattern", "repetition", "direction"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["B2", "D3", "F3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "4n" },
        { notes: ["A2", "C3", "E3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "circle-of-fifths-sequence",
    name: "Circle-of-Fifths Sequence",
    category: "harmonic-devices",
    description:
      "A diatonic sequence where each chord's root falls a 5th (or rises a 4th) to the next. The strongest directional force in tonal music. Can span the entire key in a few bars. Baroque composers built entire movements on this; jazz musicians comp over it nightly.",
    tags: ["sequence", "circle of fifths", "diatonic", "baroque", "direction"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["B2", "D3", "F3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "4n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },

  // ── Melodic Devices ───────────────────────────────────────
  {
    id: "chromatic-approach-tones",
    name: "Chromatic Approach Tones",
    category: "melodic-devices",
    description:
      "Approaching a target note from a half step above or below, regardless of the key. Adds tension and sophistication to melodies. A half-step approach from below is a leading tone; from above it's a chromatic upper neighbor. Jazz and film melodies are saturated with these.",
    tags: ["chromatic", "approach", "tension", "jazz"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "enclosure",
    name: "Enclosure",
    category: "melodic-devices",
    description:
      "Surrounding a target note with notes above and below before resolving to it. Typically a half step above then a diatonic step below (or vice versa). Creates a pinching motion that makes the target note sound inevitable. Bebop's signature melodic gesture.",
    tags: ["enclosure", "bebop", "approach", "target"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["Db4"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["D#4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "appoggiatura",
    name: "Appoggiatura",
    category: "melodic-devices",
    description:
      "A non-chord tone that arrives on a strong beat by leap, then resolves by step. Lands hard on a \"wrong\" note before melting into the right one. Creates an aching, expressive quality. The dissonance is accented, making it emotionally potent. Mozart and Adele's favorite device.",
    tags: ["non-chord tone", "expressive", "accented", "resolution"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "A4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "suspension",
    name: "Suspension",
    category: "melodic-devices",
    description:
      "A note from the previous chord is held (suspended) into the new chord, creating a dissonance that resolves downward by step. Named by the intervals formed: 4-3 suspension, 7-6, 9-8. The preparation-suspension-resolution cycle is one of music's most satisfying gestures.",
    tags: ["suspension", "dissonance", "resolution", "voice-leading"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "B3"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "G4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "4n" },
      ],
    },
  },
  {
    id: "anticipation",
    name: "Anticipation",
    category: "melodic-devices",
    description:
      "A note from the upcoming chord arrives early, before the harmony changes. The opposite of a suspension — instead of holding back, it pushes forward. Creates excitement and forward momentum. Common in pop melodies and cadential approaches.",
    tags: ["anticipation", "non-chord tone", "forward motion", "momentum"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["F3", "A3", "C4", "G4"], duration: "4n." },
        { notes: ["E4"], duration: "8n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
      ],
    },
  },

  // ── Voice Leading (additions) ─────────────────────────────
  {
    id: "inner-voice-chromaticism",
    name: "Inner-Voice Chromaticism",
    category: "voice-leading",
    description:
      "Chromatic motion in the inner voices (alto/tenor) while the outer voices hold or move diatonically. The chromatic movement is half-hidden, creating a subtle shimmer. The golden age arrangers' go-to for adding warmth and sophistication without disturbing the melody or bass.",
    tags: ["voice-leading", "chromatic", "inner voice", "golden age", "arranging"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "D3", "F#3", "C4"], duration: "2n" },
        { notes: ["C3", "D3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "descending-inner-voice",
    name: "Descending Inner Voice",
    category: "voice-leading",
    description:
      "A stepwise descending line in an inner voice connecting chords while bass and melody stay relatively still. The descending line can be diatonic or chromatic. Creates a sense of gravity and longing. Think of every romantic film score cue ever written.",
    tags: ["voice-leading", "inner voice", "descending", "chromatic", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "G3", "C4", "E4"], duration: "2n" },
        { notes: ["C3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["C3", "G3", "Bb3", "E4"], duration: "2n" },
        { notes: ["C3", "F3", "A3", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "rootless-voicings",
    name: "Rootless Voicings",
    category: "voice-leading",
    description:
      "Seventh chord voicings that omit the root, relying on the bass player or context to supply it. Built from the 3rd, 5th, 7th, and 9th (or other extensions). Sounds more sophisticated and less \"blocky\" than root-position chords. Essential for jazz piano comping.",
    tags: ["voicing", "rootless", "jazz", "piano", "comping"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["F3", "A3", "B3", "E4"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "drop-voicings",
    name: "Drop-2 & Drop-3 Voicings",
    category: "voice-leading",
    description:
      "Taking a close-position chord and dropping the 2nd (or 3rd) voice from the top down an octave. Creates wider, more open voicings that sit better on guitar and in arrangements. Drop-2 is the most common jazz guitar voicing; drop-3 adds even more spread.",
    tags: ["voicing", "drop-2", "drop-3", "guitar", "arranging"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["E3", "G3", "B3", "C4"], duration: "2n" },
        { notes: ["G3", "C4", "E4", "B4"], duration: "2n" },
        { notes: ["C3", "G3", "B3", "E4"], duration: "2n" },
      ],
    },
  },

  // ── Film Scoring ──────────────────────────────────────────
  {
    id: "leitmotif",
    name: "Leitmotif",
    category: "film-scoring",
    description:
      "A short musical theme associated with a character, place, or idea that recurs throughout a score. Can be transformed in rhythm, harmony, orchestration, or mode to reflect narrative changes. Wagner invented it; Williams perfected it. Darth Vader's theme IS this concept.",
    tags: ["film", "theme", "character", "wagner", "williams"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["G3"], duration: "4n" },
        { notes: ["Eb4"], duration: "4n." },
        { notes: ["D4"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["Bb3"], duration: "8n" },
        { notes: ["Ab4"], duration: "4n." },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "motivic-transformation",
    name: "Motivic Transformation",
    category: "film-scoring",
    description:
      "Taking a motif and altering it — inversion, retrograde, augmentation, diminution, mode change, reharmonization — while keeping it recognizable. A hero's theme in major becomes minor for their defeat; a love theme slowed down becomes tragic. How film scores tell stories without words.",
    tags: ["film", "motif", "transformation", "development", "narrative"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["Eb4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "ostinato",
    name: "Ostinato",
    category: "film-scoring",
    description:
      "A short pattern repeated persistently throughout a passage. Can be melodic, rhythmic, or harmonic. Creates drive, tension, or hypnotic atmosphere. From Ravel's Bolero to Hans Zimmer's entire career. The engine that keeps a cue moving.",
    tags: ["film", "repetition", "pattern", "drive", "tension"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "C4"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "C4"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
      ],
    },
  },
  {
    id: "cadential-extension",
    name: "Cadential Extension",
    category: "film-scoring",
    description:
      "Stretching out a cadence by inserting extra chords, deceptive motions, or prolonging the dominant before finally resolving. Delays the payoff to build emotion. A 2-chord cadence becomes 8 bars of aching anticipation. How film composers make endings feel monumental.",
    tags: ["film", "cadence", "extension", "delay", "dramatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["G3", "C4", "E4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "tonic-avoidance",
    name: "Tonic Avoidance",
    category: "film-scoring",
    description:
      "Deliberately withholding the tonic chord to maintain tension and forward momentum. Progressions circle around the key center without landing. Deceptive cadences, elisions, and interrupted resolutions keep the listener in suspense. The harmonic equivalent of a cliffhanger.",
    tags: ["film", "tension", "avoidance", "deceptive", "suspense"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "2n" },
      ],
    },
  },

  // ── Orchestration & Texture ───────────────────────────────
  {
    id: "waltz-bass",
    name: "Waltz Bass",
    category: "orchestration",
    description:
      "Bass note on beat 1, chord on beats 2 and 3 in 3/4 time. The most iconic accompaniment pattern in triple meter. Creates an elegant, swaying feel. From Strauss to Disney to every music box ever made.",
    tags: ["accompaniment", "waltz", "triple meter", "pattern", "elegant"],
    audio: {
      tempo: 150,
      timeSignature: [3, 4],
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["B3", "D4"], duration: "4n" },
        { notes: ["B3", "D4"], duration: "4n" },
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "oom-pah",
    name: "Oom-Pah Accompaniment",
    category: "orchestration",
    description:
      "Alternating bass note and chord, typically in 2/4 or 4/4 time. The bass on strong beats and the chord on weak beats creates a bouncy, march-like feel. The foundation of polka, ragtime, stride piano, and countless film score accompaniments.",
    tags: ["accompaniment", "bass-chord", "stride", "ragtime", "pattern"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["A3", "C4"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["B3", "D4"], duration: "4n" },
      ],
    },
  },
  {
    id: "wide-orchestral-spacing",
    name: "Wide Orchestral Spacing",
    category: "orchestration",
    description:
      "Spreading chord tones across a wide range — wide intervals in the bass, closer intervals up top. Mimics the overtone series and how orchestras naturally voice chords. Creates a full, powerful, cinematic sound that close-position voicings can't match.",
    tags: ["voicing", "spacing", "orchestral", "cinematic", "overtone"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "G3", "E4", "G4", "C5"], duration: "1n" },
        { notes: ["F3", "C4", "A4", "C5"], duration: "1n" },
        { notes: ["G3", "D4", "B4", "D5"], duration: "1n" },
        { notes: ["C3", "G3", "E4", "G4", "C5"], duration: "1n" },
      ],
    },
  },

  // ── Jazz/Fusion Chord Types ───────────────────────────────
  {
    id: "minor-major-7",
    name: "Minor-Major 7th (mMaj7)",
    category: "harmonic-devices",
    description:
      "A minor triad with a major 7th — the most unsettling of the basic seventh chords. The clash between the minor 3rd and major 7th creates a noir-ish, mysterious tension. Common as a passing chord in minor key descending lines (i → imaj7 → i7). Bernard Herrmann and spy movie scores live here.",
    tags: ["minor-major", "tension", "noir", "jazz"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "Eb3", "G3", "B3"], duration: "1n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "1n" },
        { notes: ["C3", "Eb3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "major-7-sharp-11",
    name: "Major 7♯11 (Lydian)",
    category: "harmonic-devices",
    description:
      "A major 7th chord with a raised 11th — the characteristic Lydian chord. The #11 opens up the sound, removing the \"avoid note\" and creating a bright, floating, sophisticated quality. Pat Metheny's signature harmonic color. The chord that sounds like sunlight through clouds.",
    tags: ["lydian", "sharp-11", "bright", "fusion"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
        { notes: ["C3", "E3", "F#3", "B3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "six-nine-chord",
    name: "6/9 Chord",
    category: "harmonic-devices",
    description:
      "A major triad with both the 6th and 9th added. Warmer than a maj7, more colorful than a triad, no tritone tension. The ultimate resting chord in jazz — more final than Imaj7. Steely Dan endings, bossa nova, and every golden age Hollywood final frame.",
    tags: ["6/9", "jazz", "resting", "warm"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "A3", "D4"], duration: "1n" },
        { notes: ["F3", "A3", "C4", "D4", "G4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "A3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "upper-structure-triads",
    name: "Upper-Structure Triads",
    category: "harmonic-devices",
    description:
      "Playing a simple triad over a different bass note or chord to create complex extensions. Eb major over C7 gives you C7#9#11. Simpler to think about than naming every extension, and easier to voice on any instrument. The fusion player's shortcut to complex harmony.",
    tags: ["upper structure", "fusion", "extensions", "voicing"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "Bb3", "Eb4", "G4", "Bb4"], duration: "2n" },
        { notes: ["C3", "Bb3", "E4", "G#4", "B4"], duration: "2n" },
        { notes: ["C3", "Bb3", "D4", "F#4", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "polychords",
    name: "Polychords",
    category: "harmonic-devices",
    description:
      "Two distinct triads or chords stacked on top of each other — not just extensions, but two independent harmonic identities sounding simultaneously. Creates rich, bitonal textures. Stravinsky used them for raw power; jazz arrangers use them for sophistication.",
    tags: ["polychord", "bitonal", "stacking", "complex"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "D4", "F#4", "A4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "Db4", "F4", "Ab4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "Eb4", "G4", "Bb4"], duration: "1n" },
      ],
    },
  },
  {
    id: "coltrane-changes",
    name: "Coltrane Changes",
    category: "progressions",
    description:
      "Dividing the octave into three equal parts (major thirds) and cycling through ii-V-I's in each key. The \"Giant Steps\" substitution: instead of ii-V-I in one key, you pass through three keys a major third apart. The most famous harmonic innovation in jazz history.",
    tags: ["coltrane", "major thirds", "substitution", "jazz"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["B3", "D#4", "F#4", "A4"], duration: "2n" },
        { notes: ["D3", "G3", "B3", "F4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F#4"], duration: "4n" },
        { notes: ["Bb3", "D4", "F4", "A4"], duration: "2n" },
        { notes: ["F#3", "B3", "D#4", "A4"], duration: "4n" },
        { notes: ["B3", "D#4", "F#4", "A#4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F#4"], duration: "2n" },
      ],
    },
  },
  {
    id: "side-slipping",
    name: "Side-Slipping (Chromatic Displacement)",
    category: "harmonic-devices",
    description:
      "Shifting an entire voicing or melodic idea up or down a half step from where it \"should\" be, then resolving back. Creates momentary harmonic disorientation followed by release. Like stepping outside the key for just a second. A fusion and bebop essential.",
    tags: ["chromatic", "displacement", "tension", "outside", "fusion"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["Db3", "E3", "Ab3", "B3"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["Eb3", "Gb3", "Bb3", "Db4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "constant-structure",
    name: "Constant-Structure Harmony",
    category: "harmonic-devices",
    description:
      "Moving the same chord quality (same shape) chromatically or through some interval pattern, ignoring diatonic function. The chord identity stays fixed; only the root moves. Herbie Hancock's \"Maiden Voyage\" uses sus chords this way. Thinking in shapes instead of functions.",
    tags: ["constant structure", "planing", "shapes", "non-functional", "fusion"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["D3", "G3", "C4", "F4"], duration: "2n" },
        { notes: ["F3", "Bb3", "Eb4", "Ab4"], duration: "2n" },
        { notes: ["Eb3", "Ab3", "Db4", "Gb4"], duration: "2n" },
        { notes: ["D3", "G3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "triad-pairs",
    name: "Triad Pairs",
    category: "harmonic-devices",
    description:
      "Using two triads a step apart as melodic material over a single chord. For example, C and D triads over Cmaj7 give you all the Lydian notes. Simpler to think about than scales, more structured than running changes. Creates angular, modern-sounding melodies.",
    tags: ["triad", "pairs", "melodic", "modern", "fusion"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "modal-vamp",
    name: "Modal Vamp",
    category: "progressions",
    description:
      "A one- or two-chord pattern repeated to establish a mode rather than a key. No functional progression — the harmony is static and the mode is the entire sound world. Miles Davis's \"So What\" is Dm7 for 16 bars. The foundation of modal jazz and most ambient/electronic music.",
    tags: ["jazz", "modal", "vamp", "static", "miles davis"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3", "G3", "C4", "F4"], duration: "2n" },
        { notes: ["D3", "G3", "C4", "F4"], duration: "2n" },
        { notes: ["D3", "A3", "C4", "E4"], duration: "2n" },
        { notes: ["D3", "G3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "pentatonic-superimposition",
    name: "Pentatonic Superimposition",
    category: "harmonic-devices",
    description:
      "Playing a pentatonic scale from a different root over a chord to highlight specific extensions. Eb major pentatonic over Cmaj7 emphasizes the b3, 5, b7, 9, and 11. Different pentatonic choices over the same chord create completely different moods. Simpler than thinking in modes.",
    tags: ["pentatonic", "superimposition", "extensions", "fusion", "improvisation"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["Ab4"], duration: "8n" },
        { notes: ["Bb4"], duration: "8n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },

  // ── Voice Leading (more additions) ────────────────────────
  {
    id: "shell-voicings",
    name: "Shell Voicings (Guide Tones)",
    category: "voice-leading",
    description:
      "The absolute minimum voicing: just root, 3rd, and 7th (no 5th). These two intervals (3rd and 7th) define the chord quality and create the strongest voice leading between chords — the 3rd of one chord becomes the 7th of the next. The skeleton of jazz comping.",
    tags: ["voicing", "shell", "guide tones", "minimal", "jazz"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "B3"], duration: "2n" },
        { notes: ["F3", "A3", "E4"], duration: "2n" },
        { notes: ["B2", "D3", "A3"], duration: "2n" },
        { notes: ["E3", "G#3", "D4"], duration: "2n" },
        { notes: ["A3", "C4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "upper-structure-voicings",
    name: "Upper-Structure Voicings",
    category: "voice-leading",
    description:
      "Voicings where the left hand plays the shell (3rd and 7th) while the right hand plays a triad that creates the extensions. For G7alt: left hand plays B and F, right hand plays Eb triad (Eb, G, Bb = #5, #9, #11). Complex chords from simple shapes.",
    tags: ["voicing", "upper structure", "two-hand", "extensions", "jazz"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["B3", "F4", "Eb4", "G4", "Bb4"], duration: "2n" },
        { notes: ["E3", "Bb3", "Db4", "F4", "Ab4"], duration: "2n" },
        { notes: ["E3", "B3", "C4", "E4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "cluster-voicings",
    name: "Cluster Voicings",
    category: "voice-leading",
    description:
      "Chords with notes bunched together in seconds rather than spread in thirds. Three or more adjacent scale tones sounding simultaneously. Creates a dense, buzzing, modern texture. McCoy Tyner's left hand, Debussy's tone clusters, and every sci-fi underscore.",
    tags: ["voicing", "cluster", "dense", "modern", "seconds"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4", "D4", "E4", "F4"], duration: "2n" },
        { notes: ["Bb3", "C4", "D4", "Eb4"], duration: "2n" },
        { notes: ["Ab3", "Bb3", "C4", "Db4"], duration: "2n" },
        { notes: ["C4", "D4", "E4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "so-what-voicing",
    name: "So What Voicing",
    category: "voice-leading",
    description:
      "Three perfect fourths stacked with a major third on top (D-G-C-F-A for Dm11). Named after Miles Davis's \"So What\" where Bill Evans plays it. A quartal voicing with one deviation. Dark, open, modern. The sound of modal jazz crystallized in one chord shape.",
    tags: ["voicing", "so what", "quartal", "modal", "bill evans"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["D3", "G3", "C4", "F4", "A4"], duration: "1n" },
        { notes: ["Eb3", "Ab3", "Db4", "Gb4", "Bb4"], duration: "1n" },
        { notes: ["D3", "G3", "C4", "F4", "A4"], duration: "1n" },
      ],
    },
  },

  // ── Rhythm & Meter ────────────────────────────────────────
  {
    id: "odd-meters",
    name: "Odd Meters (5/8, 7/8, 11/8)",
    category: "rhythm",
    description:
      "Time signatures that don't divide evenly into groups of 2 or 3. 7/8 might feel like 2+2+3 or 3+2+2. 5/4 is 3+2 or 2+3. Creates a lopsided, propulsive groove that feels off-balance in the best way. Owane lives in 7/8; Tool lives in literally everything odd.",
    tags: ["meter", "odd", "asymmetric", "7/8", "5/4"],
    audio: {
      tempo: 180,
      timeSignature: [7, 8],
      events: [
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
      ],
    },
  },
  {
    id: "polyrhythm",
    name: "Polyrhythm",
    category: "rhythm",
    description:
      "Two or more conflicting rhythmic patterns played simultaneously. 3 against 2 is the most common: one layer plays triplets while another plays straight 8ths. Creates rhythmic tension and complexity. West African drumming is built on this; so is Louis Cole's entire approach to groove.",
    tags: ["polyrhythm", "3:2", "tension", "layering"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["E4"], duration: "4t" },
        { notes: ["E4"], duration: "4t" },
        { notes: ["C3", "G3"], duration: "4t" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C3", "G3"], duration: "4t" },
        { notes: ["E4"], duration: "4t" },
        { notes: ["E4"], duration: "4t" },
        { notes: ["C3", "G3", "E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "cross-rhythm",
    name: "Cross-Rhythm",
    category: "rhythm",
    description:
      "A rhythmic pattern that contradicts the established meter — imposing a different grouping over the pulse. Playing groups of 3 in 4/4 time makes the accents drift across bar lines. The listener hears two competing meters. The heartbeat of Afro-Cuban music and progressive rock.",
    tags: ["cross-rhythm", "grouping", "accent", "afro-cuban"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E4"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["C3", "E4"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["C3", "E4"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["C3", "E4"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
      ],
    },
  },
  {
    id: "hemiola",
    name: "Hemiola",
    category: "rhythm",
    description:
      "Regrouping 6 beats from 3×2 to 2×3 (or vice versa). In 3/4 time: two bars of three suddenly feel like three bars of two. A metric illusion where the time signature doesn't change but the feel flips. Bernstein's \"America\" is the most famous example.",
    tags: ["hemiola", "regrouping", "3 vs 2", "metric"],
    audio: {
      tempo: 140,
      timeSignature: [3, 4],
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n." },
        { notes: ["G3", "B3", "D4"], duration: "4n." },
        { notes: ["C3", "E3", "G3"], duration: "4n." },
        { notes: ["G3", "B3", "D4"], duration: "4n." },
      ],
    },
  },
  {
    id: "ghost-notes",
    name: "Ghost Notes",
    category: "rhythm",
    description:
      "Very soft, almost inaudible notes played between the main beats. They don't carry melodic information — they carry feel. Ghost notes on snare fill in the 16th-note grid and make a groove feel alive. The difference between a drum machine and a human drummer.",
    tags: ["ghost notes", "feel", "dynamics", "groove"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.2 },
        { notes: ["G3"], duration: "16n", velocity: 0.2 },
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.15 },
        { notes: ["G3"], duration: "16n", velocity: 0.15 },
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.2 },
        { notes: ["G3"], duration: "16n", velocity: 0.2 },
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "metric-displacement",
    name: "Metric Displacement",
    category: "rhythm",
    description:
      "Shifting an entire pattern forward or backward by a subdivision — typically an 8th or 16th note. The pattern itself doesn't change; it just starts \"wrong.\" Creates a disoriented, floating feeling. A Meshuggah riff is often just a simple pattern displaced by one 16th note.",
    tags: ["displacement", "shift", "pattern", "progressive"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E3", "B3", "E4"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "4n" },
        { notes: ["A3", "E4"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "4n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["E3", "B3", "E4"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "4n" },
        { notes: ["A3", "E4"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "8n" },
      ],
    },
  },
  {
    id: "syncopation",
    name: "Syncopation",
    category: "rhythm",
    description:
      "Accenting beats or subdivisions that are normally weak — the \"ands\" and \"e's\" instead of the downbeats. Pulls the rhythmic gravity off-center. The engine of funk, jazz, Latin, and most popular music. Without syncopation, music marches; with it, music grooves.",
    tags: ["syncopation", "accent", "off-beat", "groove"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "8n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "8n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "8n" },
        { notes: ["E3", "G3"], duration: "4n." },
        { notes: ["C3", "E3", "G3"], duration: "8n" },
        { notes: ["E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "microtiming-pocket",
    name: "Microtiming & Pocket",
    category: "rhythm",
    description:
      "The tiny, sub-millisecond timing deviations that make a groove feel human. Playing slightly behind the beat (laid back) or ahead (pushing). \"Pocket\" is when every player's microtiming locks together. D'Angelo's \"Voodoo\" is the textbook — every note is late, and it's perfect.",
    tags: ["microtiming", "pocket", "feel", "human"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["G3", "Bb3", "Eb4"], duration: "8n" },
        { notes: ["G3", "Bb3"], duration: "8n" },
        { notes: ["C3"], duration: "4n." },
        { notes: ["G3", "Bb3", "Eb4"], duration: "8n" },
        { notes: ["C3"], duration: "4n" },
        { notes: ["G3", "Bb3", "Eb4"], duration: "8n" },
        { notes: ["G3", "Bb3"], duration: "8n" },
      ],
    },
  },
  {
    id: "additive-rhythm",
    name: "Additive Rhythm",
    category: "rhythm",
    description:
      "Building a meter from unequal groups rather than dividing it evenly. 2+3+2+3 instead of 4+4 over 10 beats. Each group has its own internal pulse. Bulgarian folk music, Bartók, and prog rock all use this. The asymmetry creates a lurching, driving energy that straight time can't match.",
    tags: ["additive", "asymmetric", "grouping", "bulgarian"],
    audio: {
      tempo: 160,
      events: [
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["E3", "B3"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["G3", "D4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["A3", "E4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "8n" },
      ],
    },
  },
  {
    id: "half-double-time",
    name: "Half-Time & Double-Time Feel",
    category: "rhythm",
    description:
      "Changing the feel without changing the tempo. Half-time makes the snare hit on beat 3 instead of 2 and 4 — everything feels twice as slow. Double-time doubles the subdivision density. The tempo stays the same; the energy transforms. A bridge in half-time can make the chorus explode.",
    tags: ["half-time", "double-time", "feel", "energy"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["C3"], duration: "2n" },
        { notes: ["G3", "E4"], duration: "2n" },
      ],
    },
  },

  // ── Funk & Groove ─────────────────────────────────────────
  {
    id: "bass-drum-interlock",
    name: "Bass/Drum Interlock",
    category: "funk",
    description:
      "The bass and kick drum locking together on the same rhythmic hits while the snare fills the gaps. The bass doesn't just play notes — it plays the same rhythm as the kick. Creates a massive, unified low-end groove. The foundation of every James Brown record and everything Louis Cole does.",
    tags: ["funk", "bass", "drums", "interlock", "groove"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["E2", "E3"], duration: "8n", velocity: 0.9 },
        { notes: ["G3", "B3"], duration: "16n", velocity: 0.3 },
        { notes: ["G3", "B3"], duration: "16n", velocity: 0.3 },
        { notes: ["E2", "E3"], duration: "8n", velocity: 0.9 },
        { notes: ["G3", "B3"], duration: "8n", velocity: 0.5 },
        { notes: ["E2", "E3"], duration: "16n", velocity: 0.9 },
        { notes: ["G3", "B3"], duration: "16n", velocity: 0.3 },
        { notes: ["E2", "E3"], duration: "8n", velocity: 0.9 },
        { notes: ["G3", "B3"], duration: "16n", velocity: 0.3 },
        { notes: ["G3", "B3"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "vamp",
    name: "Vamp",
    category: "funk",
    description:
      "A short harmonic loop — usually 1-4 chords — repeated indefinitely while the band improvises, builds, or grooves over it. The foundation of funk, soul, and jam-band music. It's not about where the harmony goes; it's about what happens rhythmically and dynamically over a fixed loop.",
    tags: ["funk", "vamp", "loop", "groove", "repetition"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "8n" },
        { notes: ["A3", "C4", "E4"], duration: "8n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "8n" },
        { notes: ["A3", "C4", "E4"], duration: "8n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "stop-time",
    name: "Stop-Time",
    category: "funk",
    description:
      "The entire band plays a hit together then drops to silence, leaving space for a solo, a vocal, or just the impact of nothing. The silence is the point — it creates anticipation and makes the next hit feel massive. James Brown's \"Get Up (I Feel Like Being a) Sex Machine\" is all stop-time.",
    tags: ["funk", "stop-time", "silence", "hits", "tension"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n.", velocity: 0.05 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n.", velocity: 0.05 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "16n", velocity: 0.9 },
        { notes: ["G3", "B3", "D4"], duration: "16n", velocity: 0.9 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "one-chord-funk",
    name: "One-Chord Funk",
    category: "funk",
    description:
      "An entire section or song built on a single chord. The interest comes entirely from rhythm, dynamics, texture, and interaction — not harmony. Forces every musician to dig deep into groove rather than hiding behind chord changes. \"Chameleon\" by Herbie Hancock. Peak minimalism, maximum funk.",
    tags: ["funk", "one-chord", "minimal", "groove", "rhythm"],
    audio: {
      tempo: 105,
      events: [
        { notes: ["Bb2"], duration: "8n", velocity: 0.9 },
        { notes: ["Bb3", "D4", "F4"], duration: "16n", velocity: 0.4 },
        { notes: ["Bb3", "D4"], duration: "16n", velocity: 0.3 },
        { notes: ["Bb2"], duration: "8n", velocity: 0.8 },
        { notes: ["Bb3", "D4", "F4"], duration: "8n", velocity: 0.5 },
        { notes: ["Bb2"], duration: "16n", velocity: 0.9 },
        { notes: ["Bb3", "D4"], duration: "16n", velocity: 0.3 },
        { notes: ["Bb2"], duration: "8n", velocity: 0.8 },
        { notes: ["Bb3", "D4", "F4"], duration: "16n", velocity: 0.5 },
        { notes: ["Bb3", "D4"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "ensemble-hits",
    name: "Ensemble Hits (Stabs)",
    category: "funk",
    description:
      "The entire band hitting a chord or note at exactly the same rhythmic point — often syncopated, often with silence before and after. Creates punctuation marks in the groove. Horn stabs, unison band hits, and rhythmic punches that make a groove feel like it has teeth.",
    tags: ["funk", "hits", "stabs", "unison", "punctuation"],
    audio: {
      tempo: 115,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3", "C4", "E4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "8n.", velocity: 0.05 },
        { notes: ["C3", "E3", "G3", "Bb3", "C4", "E4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "4n", velocity: 0.05 },
        { notes: ["C3", "E3", "G3", "Bb3", "C4", "E4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "16n", velocity: 0.05 },
        { notes: ["C3", "E3", "G3", "Bb3", "C4", "E4"], duration: "8n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "call-and-response",
    name: "Call and Response",
    category: "funk",
    description:
      "One voice (or section) plays a phrase, and another answers it. The call is a question; the response is the answer. Can be between singer and band, horn section and rhythm section, or melody and bass. The oldest musical structure in human history, and still the most exciting.",
    tags: ["funk", "call and response", "interaction", "phrase", "dialogue"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["G4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["Bb4"], duration: "8n" },
        { notes: ["Ab4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "4n" },
      ],
    },
  },
  {
    id: "linear-funk",
    name: "Linear Funk",
    category: "funk",
    description:
      "A groove where no two limbs (kick, snare, hi-hat) hit at the same time — every note fills a different slot in the 16th-note grid. Creates an intricate, flowing pattern with no stacked hits. The opposite of a rock backbeat. David Garibaldi and Louis Cole's drumming vocabulary.",
    tags: ["funk", "linear", "drums", "groove", "intricate"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3"], duration: "16n", velocity: 0.9 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["E4"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.9 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["C3"], duration: "16n", velocity: 0.9 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["E4"], duration: "16n", velocity: 0.5 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["C3"], duration: "16n", velocity: 0.9 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["G3"], duration: "16n", velocity: 0.3 },
        { notes: ["E4"], duration: "16n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "funk-ostinato",
    name: "Funk Ostinato (Bass Riff)",
    category: "funk",
    description:
      "A short, syncopated bass pattern that repeats as the foundation of a groove. Unlike a classical ostinato which is a compositional device, a funk ostinato IS the song — everything else orbits around it. Bootsy Collins, Thundercat, Louis Cole's bass lines. The riff is the groove.",
    tags: ["funk", "ostinato", "bass", "riff", "syncopated"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.5 },
        { notes: ["G2"], duration: "16n", velocity: 0.7 },
        { notes: ["A2"], duration: "8n", velocity: 0.8 },
        { notes: ["B2"], duration: "16n", velocity: 0.6 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.5 },
        { notes: ["G2"], duration: "16n", velocity: 0.7 },
        { notes: ["A2"], duration: "8n", velocity: 0.8 },
        { notes: ["G2"], duration: "16n", velocity: 0.7 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
      ],
    },
  },

  // ── Late Romantic / Mahler / Golden Age (additions) ───────
  {
    id: "progressive-tonality",
    name: "Progressive Tonality",
    category: "modulation",
    description:
      "Beginning a piece in one key and ending in a completely different one — not a temporary modulation, but a permanent tonal journey. Mahler's specialty: his 2nd Symphony starts in C minor and ends in Eb major. The key itself tells the story. Rejection of classical \"home key\" symmetry.",
    tags: ["modulation", "mahler", "tonal journey", "romantic", "structure"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["G3", "Bb3", "D4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["Bb3", "D4", "F4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Eb4"], duration: "1n" },
      ],
    },
  },
  {
    id: "tristan-chord",
    name: "Tristan Chord",
    category: "harmonic-devices",
    description:
      "Wagner's famous chord from Tristan und Isolde: F-B-D#-G#. An augmented 6th that wants to resolve but doesn't — at least not for four hours. It broke tonal music open. Every unresolved, ambiguous, yearning chord in film scoring traces back to this moment. The Big Bang of modern harmony.",
    tags: ["wagner", "tristan", "unresolved", "romantic"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["F3", "B3", "D#4", "G#4"], duration: "1n" },
        { notes: ["E3", "B3", "D4", "G#4"], duration: "1n" },
        { notes: ["F3", "B3", "D#4", "G#4"], duration: "1n" },
      ],
    },
  },
  {
    id: "enharmonic-modulation",
    name: "Enharmonic Modulation",
    category: "modulation",
    description:
      "Reinterpreting a chord by respelling it enharmonically to pivot to a distant key. A German augmented 6th in C (Ab-C-Eb-F#) is enharmonically a dominant 7th in Db (Ab-C-Eb-Gb). Same sound, completely different destination. The ultimate trick for reaching remote keys without awkward transitions.",
    tags: ["modulation", "enharmonic", "reinterpretation", "pivot", "distant keys"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "F#4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "Gb4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "Db4"], duration: "1n" },
      ],
    },
  },
  {
    id: "suspension-chain",
    name: "Suspension Chain",
    category: "voice-leading",
    description:
      "A series of suspensions where the resolution of one suspension becomes the preparation for the next. Creates cascading waves of tension and release — an unbroken chain of yearning. The sound of Romantic longing distilled into voice leading. Mahler, Barber, and every aching film score cadence.",
    tags: ["voice-leading", "suspension", "chain", "romantic", "longing"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "B3"], duration: "4n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["E3", "G3", "B3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "stinger-chord",
    name: "Stinger Chord",
    category: "film-scoring",
    description:
      "A sudden, loud, dissonant chord used for shock or dramatic emphasis — the jump-scare chord. Usually a dense cluster or a sforzando diminished/augmented chord with the whole orchestra. Bernard Herrmann's Psycho shower scene is the most famous. Pure visceral impact, no subtlety required.",
    tags: ["film", "stinger", "shock", "dissonant", "herrmann"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["F3", "Ab3", "B3", "D4", "F4", "Ab4"], duration: "4n", velocity: 1.0 },
        { notes: ["E3", "G3", "Bb3", "Db4", "E4", "G4"], duration: "2n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "dies-irae",
    name: "Dies Irae",
    category: "film-scoring",
    description:
      "A 13th-century plainchant melody (Day of Wrath) that has become the universal musical symbol for death and doom. Quoted in Berlioz, Rachmaninoff, The Shining, Star Wars, The Lion King, and hundreds of other scores. Three descending notes — you've heard them a thousand times without knowing.",
    tags: ["film", "dies irae", "death", "quotation", "medieval"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["D4"], duration: "4n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["B3"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "brass-chorale",
    name: "Brass Chorale",
    category: "orchestration",
    description:
      "A hymn-like passage scored for the brass section in 4-part harmony. Slow, majestic, and overwhelmingly powerful. The climax of every Mahler symphony, every John Williams finale, every epic film moment where the hero triumphs. Nothing in music hits harder than a full brass chorale in a major key.",
    tags: ["brass", "chorale", "majestic", "mahler"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "horn-call",
    name: "Horn Call",
    category: "orchestration",
    description:
      "A heroic, open-interval melody for solo horn — typically built on the notes of the harmonic series (octaves, fifths, fourths). Evokes nature, distance, nobility, and adventure. Mahler 1 and 3 open with iconic horn calls; Williams uses them for every hero. The most emotionally direct sound in the orchestra.",
    tags: ["horns", "heroic", "nature", "mahler"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C4"], duration: "4n." },
        { notes: ["G4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["G3"], duration: "2n" },
        { notes: ["C4"], duration: "4n." },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "klangfarbenmelodie",
    name: "Klangfarbenmelodie (Tone-Color Melody)",
    category: "orchestration",
    description:
      "A melody where each note (or group of notes) is played by a different instrument, so the timbre changes constantly while the pitch line continues. The color itself becomes melodic. Webern developed it, Mahler anticipated it, and film composers use it constantly — a flute starts a phrase, a clarinet continues it, strings finish it.",
    tags: ["timbre", "harmonic color", "webern", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["Eb4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["Ab4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "landler",
    name: "Ländler",
    category: "orchestration",
    description:
      "An Austrian folk dance in 3/4 time — slower, heavier, and more rustic than a waltz. Mahler was obsessed with it: he'd quote a simple Ländler then gradually distort it into something grotesque or tragic. The collision of folk simplicity with symphonic weight. A dance that carries the weight of the world.",
    tags: ["dance", "ländler", "mahler", "folk", "triple meter"],
    audio: {
      tempo: 110,
      timeSignature: [3, 4],
      events: [
        { notes: ["G3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["D3", "C4"], duration: "4n" },
        { notes: ["D3", "C4"], duration: "4n" },
        { notes: ["B3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["D3", "A3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
      ],
    },
  },

  // ── Melodic Minor System ──────────────────────────────────
  {
    id: "melodic-minor-scale",
    name: "Melodic Minor Scale",
    category: "scales-modes",
    description:
      "A minor scale with raised 6th and 7th degrees — essentially a major scale with a flat 3rd. In jazz, it's used ascending AND descending (unlike classical practice). The parent scale of the altered scale, lydian dominant, and the entire modern jazz harmonic system. Learn this one scale and you unlock seven modes that define fusion.",
    tags: ["scale", "melodic minor", "jazz", "fusion", "parent scale"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["D3"], duration: "8n" },
        { notes: ["Eb3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["Eb3"], duration: "8n" },
        { notes: ["D3"], duration: "8n" },
        { notes: ["C3"], duration: "4n" },
      ],
    },
  },
  {
    id: "altered-scale",
    name: "Altered Scale (Super-Locrian)",
    category: "scales-modes",
    description:
      "The 7th mode of melodic minor — every extension is altered: b9, #9, #11, b13. THE scale for dominant 7th chords that want maximum tension before resolving. Play Ab melodic minor over G7 and you get every altered note. The sound of modern jazz tension.",
    tags: ["scale", "altered", "super-locrian", "dominant", "tension"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["G3"], duration: "8n" },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["Bb3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["G3", "B3", "Eb4", "Ab4"], duration: "2n" },
      ],
    },
  },
  {
    id: "lydian-augmented",
    name: "Lydian Augmented",
    category: "scales-modes",
    description:
      "The 3rd mode of melodic minor — Lydian with a raised 5th. Bright and otherworldly, even more open than regular Lydian. The #4 and #5 together create a floating, expansive quality. Used over maj7#5 chords. The sound of wonder and vastness in film scores.",
    tags: ["scale", "lydian", "augmented", "bright", "melodic minor"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["D3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G#3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["C3", "E3", "G#3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dorian-b2",
    name: "Dorian ♭2",
    category: "scales-modes",
    description:
      "The 2nd mode of melodic minor — Dorian with a flatted 2nd degree. A dark, exotic sound with a Phrygian-like opening half step but the raised 6th of Dorian keeping it from going fully dark. Common in flamenco-influenced jazz and Middle Eastern-tinged fusion.",
    tags: ["scale", "dorian", "flat-2", "exotic", "melodic minor"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["D3"], duration: "8n" },
        { notes: ["Eb3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "mixolydian-b6",
    name: "Mixolydian ♭6 (Hindu Scale)",
    category: "scales-modes",
    description:
      "The 5th mode of melodic minor — Mixolydian with a flatted 6th. A dominant scale with a darker, more melancholic quality than regular Mixolydian. The b6 adds a bittersweet color. Used over dominant chords that resolve to minor. Common in Indian classical music and jazz ballads.",
    tags: ["scale", "mixolydian", "flat-6", "dominant", "melodic minor"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "half-whole-diminished",
    name: "Half-Whole Diminished Scale",
    category: "scales-modes",
    description:
      "An 8-note symmetrical scale alternating half steps and whole steps. Built on the diminished chord but used over dominant 7th chords — gives you b9, #9, #11, and natural 13. The \"dominant diminished\" scale. Darker and more angular than the altered scale. A bebop and fusion staple.",
    tags: ["scale", "diminished", "symmetrical", "dominant", "8-note"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["Db3"], duration: "8n" },
        { notes: ["Eb3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["Bb3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["C3", "E3", "Bb3", "Db4"], duration: "2n" },
      ],
    },
  },

  // ── Bebop Scales ──────────────────────────────────────────
  {
    id: "bebop-dominant",
    name: "Bebop Dominant Scale",
    category: "scales-modes",
    description:
      "A Mixolydian scale with an added natural 7th — 8 notes that line up perfectly with 8th-note lines so that chord tones always land on downbeats. The extra chromatic passing tone between b7 and root is the secret to why bebop lines sound so smooth and swinging. Charlie Parker's DNA.",
    tags: ["scale", "bebop", "dominant", "chromatic", "8-note"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["G3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "bebop-major",
    name: "Bebop Major Scale",
    category: "scales-modes",
    description:
      "A major scale with an added #5 (or b6) — another 8-note scale that keeps chord tones on strong beats during 8th-note runs. The chromatic passing tone between 5 and 6 adds a bluesy shimmer without disturbing the major tonality. Essential for smooth jazz and bop-influenced playing.",
    tags: ["scale", "bebop", "major", "chromatic", "passing tone"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["D3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["G#3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
      ],
    },
  },

  // ── Non-Chord Tones (Melodic Devices) ─────────────────────
  {
    id: "neighbor-tone",
    name: "Neighbor Tone",
    category: "melodic-devices",
    description:
      "A non-chord tone that steps away from a chord tone by a half or whole step, then returns to the same note. Upper neighbor goes up then back; lower neighbor goes down then back. The simplest ornament — a brief departure and return. Adds motion without going anywhere.",
    tags: ["neighbor", "ornament", "non-chord tone", "step"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["G4"], duration: "4n." },
      ],
    },
  },
  {
    id: "passing-tone",
    name: "Passing Tone",
    category: "melodic-devices",
    description:
      "A non-chord tone that connects two chord tones by stepwise motion — it \"passes\" between them. Can be diatonic or chromatic. The most fundamental melodic connector. Without passing tones, melodies would jump from chord tone to chord tone like a robot. They're the glue of smooth melodic writing.",
    tags: ["passing tone", "stepwise", "connector", "non-chord tone"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "escape-tone",
    name: "Escape Tone (Échappée)",
    category: "melodic-devices",
    description:
      "A non-chord tone that steps away from a chord tone in one direction, then leaps in the opposite direction to a new chord tone. The reverse of an appoggiatura — instead of leaping in and stepping out, it steps out and leaps away. Creates a little melodic hiccup, an unexpected skip.",
    tags: ["escape", "leap", "non-chord tone", "echappee"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["D4"], duration: "4n." },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["E4"], duration: "4n." },
      ],
    },
  },
  {
    id: "double-neighbor",
    name: "Double Neighbor (Changing Tones)",
    category: "melodic-devices",
    description:
      "Two neighbor tones in succession — one above and one below the target note (or vice versa) before resolving. A four-note figure: chord tone → upper neighbor → lower neighbor → chord tone. Creates a circling, ornamental motion around the target. Common in Classical and Romantic melodies.",
    tags: ["double neighbor", "ornament", "changing tones", "circling"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "sigh-motif",
    name: "Sigh Motif",
    category: "melodic-devices",
    description:
      "A two-note descending figure — typically a dissonance resolving down by step. An appoggiatura that \"sighs\" downward. The melodic embodiment of grief, longing, or tenderness. Mozart, Chopin, and every Romantic composer's go-to for emotional expression. Two notes, infinite sadness.",
    tags: ["sigh", "descending", "expressive", "romantic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["Eb4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "intervallic-melody",
    name: "Intervallic Melody",
    category: "melodic-devices",
    description:
      "A melody built on wide leaps rather than stepwise motion — 4ths, 5ths, 6ths, 7ths. Creates an angular, modern sound. The opposite of smooth, scalar writing. Owane's tapping lines, modern jazz saxophone, and Stravinsky all lean heavily on intervallic melodies. The wider the leaps, the more striking the line.",
    tags: ["intervals", "wide", "angular", "modern"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["Ab4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["Bb4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["B3"], duration: "4n" },
      ],
    },
  },
  {
    id: "melodic-sequence",
    name: "Melodic Sequence",
    category: "melodic-devices",
    description:
      "A melodic pattern repeated at a different pitch level — transposed up or down by a consistent interval. Can be exact (real) or adjusted to stay in key (tonal). Creates momentum and direction. The listener hears the pattern, expects the repetition, and is carried forward. Baroque and jazz improvisers' bread and butter.",
    tags: ["sequence", "pattern", "transposition", "momentum"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
      ],
    },
  },

  // ── Gospel Harmony ────────────────────────────────────────
  {
    id: "gospel-walk-up",
    name: "Gospel Walk-Up",
    category: "gospel",
    description:
      "A chromatic or diatonic bass line walking upward between chords, with passing chords built on each step. IV to V becomes IV → #IVdim7 → V. I to IV becomes I → I#dim → II → bIII → IV. Every step gets its own harmony. The bass line IS the progression. The sound of a church pianist heading to the altar.",
    tags: ["gospel", "walk-up", "bass line", "chromatic", "passing chords"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "4n" },
        { notes: ["Eb3", "Gb3", "Bb3"], duration: "4n" },
        { notes: ["E3", "G3", "Bb3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "gospel-walk-down",
    name: "Gospel Walk-Down",
    category: "gospel",
    description:
      "The reverse of the walk-up — a stepwise descending bass line connecting chords, with harmonies built on each chromatic step down. I → I/7 → I/b7 → I/6 (or I → VII → bVII → VI). Creates a gravitational pull downward. The sound of every soulful outro and worship song breakdown.",
    tags: ["gospel", "walk-down", "bass line", "descending", "chromatic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["B2", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["Bb2", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["A2", "E3", "A3", "C4"], duration: "4n" },
        { notes: ["Ab2", "D3", "F3", "Ab3"], duration: "4n" },
        { notes: ["G2", "D3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "gospel-passing-chords",
    name: "Gospel Passing Chords",
    category: "gospel",
    description:
      "Chromatic chords inserted between diatonic chords to create smooth voice leading and constant harmonic motion. Diminished 7ths, chromatic dominants, and augmented chords fill every gap. A simple I-IV-V becomes a 12-chord journey. Gospel musicians think in passing chords the way jazz musicians think in substitutions.",
    tags: ["gospel", "passing chords", "chromatic", "voice-leading", "church"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "8n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n." },
        { notes: ["D#3", "F#3", "A3", "C4"], duration: "8n" },
        { notes: ["E3", "G3", "Bb3", "C4"], duration: "4n." },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "gospel-turnaround",
    name: "Gospel Turnaround",
    category: "gospel",
    description:
      "A cadential pattern at the end of a phrase that circles back to the top — typically IV → iv → I or a more elaborate chromatic descent. The minor iv chord (borrowed from the parallel minor) adds a bittersweet, \"amen\" quality. Often extended with walk-downs and passing diminished chords. The emotional climax of every gospel performance.",
    tags: ["gospel", "turnaround", "cadence", "minor iv", "return", "passing chords"],
    audio: {
      tempo: 75,
      events: [
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "F4"], duration: "2n" },
        { notes: ["E3", "G3", "Bb3", "C4"], duration: "4n" },
        { notes: ["Eb3", "Gb3", "A3", "C4"], duration: "4n" },
        { notes: ["D3", "F3", "Ab3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n." },
      ],
    },
  },

  // ── Rhythm (additions) ────────────────────────────────────
  {
    id: "polymeter",
    name: "Polymeter",
    category: "rhythm",
    description:
      "Two different meters happening simultaneously — not just different accent patterns (polyrhythm) but different actual bar lengths. A 3/4 pattern against a 4/4 pattern means the downbeats align only every 12 beats. Creates a constantly shifting relationship between layers. Meshuggah's signature: guitar in 33/16 against drums in 4/4.",
    tags: ["polymeter", "simultaneous meters", "meshuggah", "layering"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3", "B3"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["E3", "B3"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["E3", "B3"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["E3", "B3"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n." },
      ],
    },
  },
  {
    id: "clave",
    name: "Clave (3-2 / 2-3)",
    category: "rhythm",
    description:
      "A 2-bar rhythmic pattern that organizes an entire groove — 3 hits in one bar, 2 in the next (3-2), or reversed (2-3). The DNA of Afro-Cuban music, but also the hidden skeleton of funk, R&B, and hip-hop. Once you hear the clave in a groove, you can't unhear it. It's the rhythmic key that unlocks why a groove works.",
    tags: ["clave", "afro-cuban", "pattern", "groove"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["C3"], duration: "4n" },
        { notes: ["C3", "G3"], duration: "4n." },
        { notes: ["C3", "G3"], duration: "4n." },
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["C3"], duration: "2n" },
      ],
    },
  },
  {
    id: "metric-ambiguity",
    name: "Metric Ambiguity",
    category: "rhythm",
    description:
      "Music where the listener can't tell what the meter is — the downbeat is deliberately obscured or multiple interpretations are equally valid. Is it 6/8 or 3/4? Is beat 1 where you think it is? Radiohead, Aphex Twin, and Owane all use this to keep listeners off-balance. The groove exists in a quantum state.",
    tags: ["ambiguity", "downbeat", "obscured", "interpretation"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E3", "B3"], duration: "4n." },
        { notes: ["G3", "D4"], duration: "4n" },
        { notes: ["A3", "E4"], duration: "4n." },
        { notes: ["E3", "B3"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "4n." },
        { notes: ["A3", "E4"], duration: "4n" },
        { notes: ["E3", "B3"], duration: "4n." },
      ],
    },
  },
  {
    id: "rhythmic-augmentation-diminution",
    name: "Rhythmic Augmentation & Diminution",
    category: "rhythm",
    description:
      "Stretching a rhythm to twice its length (augmentation) or compressing it to half (diminution). The pitches stay the same; the durations transform. Augmentation creates grandeur and weight; diminution creates urgency and excitement. Bach used it in fugues; film composers use it to transform themes.",
    tags: ["augmentation", "diminution", "transformation", "duration"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "odd-groupings",
    name: "Odd Groupings (Quintuplets, Septuplets)",
    category: "rhythm",
    description:
      "Subdividing the beat into 5, 7, or other non-standard groupings instead of the usual 2, 3, or 4. Quintuplets divide a beat into 5 equal parts; septuplets into 7. Creates a floating, between-the-cracks feel that doesn't align with any standard grid. The rhythmic equivalent of microtonal harmony.",
    tags: ["tuplets", "quintuplet", "septuplet", "subdivision"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["C4"], duration: "8t" },
        { notes: ["D4"], duration: "8t" },
        { notes: ["E4"], duration: "8t" },
        { notes: ["F4"], duration: "8t" },
        { notes: ["G4"], duration: "8t" },
        { notes: ["C4"], duration: "4n" },
      ],
    },
  },

  // ── Funk (additions) ──────────────────────────────────────
  {
    id: "dead-notes",
    name: "Dead Notes (Muted Notes)",
    category: "funk",
    description:
      "Notes that are muted so they produce a percussive click with no pitch — \"x\" in notation. On guitar: fret-hand mutes the strings. On bass: fingers rest on the string. They fill rhythmic space with texture instead of tone. The skeleton of funk guitar and the secret ingredient in slap bass. All rhythm, no pitch.",
    tags: ["funk", "dead notes", "muted", "percussive", "texture"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.6 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3", "G3", "B3"], duration: "16n", velocity: 0.6 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
        { notes: ["E3"], duration: "16n", velocity: 0.08 },
      ],
    },
  },
  {
    id: "sixteenth-note-funk",
    name: "16th-Note Funk Subdivision",
    category: "funk",
    description:
      "The 16th-note grid as the fundamental pulse of funk — every instrument thinks in 16ths, placing notes and rests within that grid. The difference between funk and rock is the subdivision: rock thinks in 8ths, funk thinks in 16ths. The entire groove lives in those tiny spaces between the 16th notes.",
    tags: ["funk", "16th note", "subdivision", "grid", "pulse"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E2"], duration: "16n", velocity: 0.7 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
        { notes: ["G2"], duration: "16n", velocity: 0.7 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["A2"], duration: "16n", velocity: 0.7 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["G2"], duration: "16n", velocity: 0.7 },
        { notes: ["E2"], duration: "16n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "breakdown",
    name: "Breakdown",
    category: "funk",
    description:
      "A section where the arrangement strips down to bare essentials — usually just bass and drums, or even just drums alone. Everything drops out, tension builds, and then the full band comes crashing back in. The moment in a funk or soul performance where the groove gets naked. James Brown invented modern music with this concept.",
    tags: ["funk", "breakdown", "stripped", "tension", "arrangement"],
    audio: {
      tempo: 105,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n", velocity: 0.9 },
        { notes: ["E3", "G3", "B3"], duration: "8n", velocity: 0.7 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "4n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.5 },
        { notes: ["G2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2"], duration: "4n", velocity: 0.8 },
        { notes: ["E3", "G3", "B3", "D4", "G4"], duration: "4n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "horn-stabs",
    name: "Horn Stabs",
    category: "funk",
    description:
      "Short, punchy chords played by a horn section — usually in tight rhythmic unison with the rhythm section. Placed on syncopated beats for maximum impact. The horns act as a rhythmic weapon, not a melodic one. Tower of Power, Earth Wind & Fire, and every Motown hit. The exclamation point in a funk arrangement.",
    tags: ["funk", "horns", "stabs", "arrangement", "punchy"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C4", "E4", "G4", "Bb4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "8n.", velocity: 0.05 },
        { notes: ["C3"], duration: "4n", velocity: 0.05 },
        { notes: ["C4", "E4", "G4", "Bb4"], duration: "8n", velocity: 0.95 },
        { notes: ["C4", "Eb4", "G4", "Bb4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "8n.", velocity: 0.05 },
        { notes: ["C4", "E4", "G4", "Bb4"], duration: "16n", velocity: 0.95 },
        { notes: ["C3"], duration: "16n", velocity: 0.05 },
        { notes: ["C4", "E4", "G4", "C5"], duration: "4n", velocity: 0.95 },
      ],
    },
  },

  // ── Bass ──────────────────────────────────────────────────
  {
    id: "walking-bass",
    name: "Walking Bass",
    category: "bass",
    description:
      "A bass line that moves in steady quarter notes, stepping through chord tones and passing tones, connecting each chord to the next. The foundation of jazz rhythm sections. A good walking bass line implies the harmony, drives the rhythm, and creates forward motion all at once. The bass player's equivalent of a pilot flying the plane.",
    tags: ["bass", "walking", "jazz", "quarter notes", "motion"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["C3"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-approach-bass",
    name: "Chromatic Approach Bass",
    category: "bass",
    description:
      "Approaching the root of the next chord by a half step from above or below on the last beat of the bar. The chromatic note creates a strong pull into the target. A half step from below is a leading tone; from above is an upper chromatic neighbor. The most fundamental bass line technique in jazz and gospel.",
    tags: ["bass", "chromatic", "approach", "leading tone", "jazz"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["B3"], duration: "4n" },
        { notes: ["C3"], duration: "2n" },
      ],
    },
  },
  {
    id: "octave-bass",
    name: "Octave Bass",
    category: "bass",
    description:
      "A bass pattern that jumps between the same note in two octaves — low root on the beat, upper octave on the offbeat or vice versa. Creates a bouncing, energetic feel with more movement than a static bass note. Jaco Pastorius, disco bass lines, and Thundercat all use octave bass extensively.",
    tags: ["bass", "octave", "bounce", "energy", "disco"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E2"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["G2"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["A2"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
      ],
    },
  },
  {
    id: "bass-chord-independence",
    name: "Bass/Chord Independence",
    category: "bass",
    description:
      "The bass playing in a different harmonic world from the upper structures — the bass implies one chord while the keys or guitar play another. Not just slash chords, but genuinely independent contrapuntal motion. Creates rich, ambiguous harmony. The foundation of modern keyboard and guitar arranging. Think Herbie Hancock's left hand vs. right hand.",
    tags: ["bass", "independence", "counterpoint", "ambiguity", "modern"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "2n" },
        { notes: ["E4", "G4", "B4"], duration: "2n" },
        { notes: ["Bb2"], duration: "2n" },
        { notes: ["E4", "G4", "B4"], duration: "2n" },
        { notes: ["Ab2"], duration: "2n" },
        { notes: ["E4", "G4", "B4"], duration: "2n" },
      ],
    },
  },

  // ── Orchestration (additions) ─────────────────────────────
  {
    id: "tremolo-strings",
    name: "Tremolo Strings",
    category: "orchestration",
    description:
      "Rapid, unmeasured back-and-forth bowing that creates a shimmering, sustained wash of sound. The most versatile suspense and atmosphere tool in the orchestra. Quiet tremolo = unease and mystery. Loud tremolo = terror and intensity. Tremolo under a melody = emotional amplifier. Herrmann, Hitchcock, and horror films — tremolo is the tension.",
    tags: ["tremolo", "strings", "suspense", "atmospheric"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["E3", "B3", "E4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
        { notes: ["F3", "C4", "F4"], duration: "16n" },
      ],
    },
  },
  {
    id: "brass-fanfare",
    name: "Brass Fanfare",
    category: "orchestration",
    description:
      "A triumphant, rhythmic brass passage built on open intervals — typically perfect 4ths, 5ths, and octaves. Announces something important: a king, a hero, a new scene. Rhythmically active unlike the chorale. Think of every Olympic theme, Star Wars opening, or royal entrance in a film. The sound of arrival.",
    tags: ["brass", "fanfare", "triumphant", "heroic"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "4n" },
        { notes: ["F4", "A4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "4n" },
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "8n" },
        { notes: ["C4", "G4"], duration: "4n" },
        { notes: ["G4", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "orchestral-tutti",
    name: "Orchestral Tutti",
    category: "orchestration",
    description:
      "The entire orchestra playing together at full force — every section united on the same rhythmic and harmonic material. The maximum sonic weight available in acoustic music. Used for climaxes, arrivals, and moments of overwhelming emotion. When Mahler writes \"tutti\" after 20 minutes of building, buildings shake.",
    tags: ["tutti", "full", "climax", "power"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "G3", "C4", "E4", "G4", "C5"], duration: "2n", velocity: 1.0 },
        { notes: ["F3", "C4", "F4", "A4", "C5"], duration: "2n", velocity: 1.0 },
        { notes: ["G3", "D4", "G4", "B4", "D5"], duration: "2n", velocity: 1.0 },
        { notes: ["C3", "G3", "C4", "E4", "G4", "C5"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "underscoring",
    name: "Underscoring",
    category: "film-scoring",
    description:
      "Music that supports a scene without drawing attention to itself — quiet, atmospheric, and subordinate to the dialogue and action. The opposite of a big thematic statement. Sustained strings, gentle harmonic motion, ambient textures. 90% of a film score is underscoring. The art of being felt but not heard.",
    tags: ["film", "underscore", "atmospheric", "subtle", "support"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "G3", "E4"], duration: "1n" },
        { notes: ["D3", "A3", "F4"], duration: "1n" },
        { notes: ["C3", "G3", "E4"], duration: "1n" },
      ],
    },
  },

  // ── Harmonic Devices (additions) ──────────────────────────
  {
    id: "tonicization",
    name: "Tonicization",
    category: "harmonic-devices",
    description:
      "Temporarily treating a non-tonic chord as if it WERE the tonic — by preceding it with its own V7 or ii-V. Unlike modulation, you don't stay in the new key — you visit and return. Every secondary dominant is a tonicization. It's like opening a door to another key, peeking inside, and walking back. The most common source of chromaticism in tonal music.",
    tags: ["tonicization", "secondary dominant", "temporary", "chromatic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dominant-pedal-upper-structures",
    name: "Dominant Pedal with Changing Upper Structures",
    category: "harmonic-devices",
    description:
      "Holding the dominant note in the bass while the chords above it shift chromatically or modally. The sustained bass creates enormous tension and anticipation while the upper voices explore different harmonic colors. The moment before the big resolution in every symphonic and film-score climax. Maximum tension, maximum payoff.",
    tags: ["pedal", "dominant", "upper structure", "tension", "climax"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["G2", "C4", "Eb4", "Ab4"], duration: "2n" },
        { notes: ["G2", "Bb3", "Db4", "E4"], duration: "2n" },
        { notes: ["G2", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },

  // ── Form & Structure ──────────────────────────────────────
  {
    id: "aaba-form",
    name: "AABA / 32-Bar Song Form",
    category: "form",
    description:
      "The dominant song form of the Great American Songbook: four 8-bar sections where A is the main theme, repeated twice, B is a contrasting bridge, and A returns. 32 bars total. \"Over the Rainbow,\" \"Fly Me to the Moon,\" \"Body and Soul.\" If you love 40s/50s music, you're hearing AABA constantly.",
    tags: ["form", "AABA", "32-bar", "standard", "song form"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "2n" },
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "2n" },
        { notes: ["F4", "A4"], duration: "4n" },
        { notes: ["G4", "B4"], duration: "4n" },
        { notes: ["A4", "C5"], duration: "2n" },
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "verse-chorus-form",
    name: "Verse-Chorus Form",
    category: "form",
    description:
      "The dominant form of pop and rock: alternating verses (same music, different lyrics) and choruses (same music AND lyrics). The verse tells the story; the chorus delivers the hook. Optional pre-chorus builds anticipation. The most commercially successful musical structure ever invented.",
    tags: ["form", "verse", "chorus", "pop", "song structure"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "through-composed",
    name: "Through-Composed",
    category: "form",
    description:
      "Music that never repeats a section — continuous, evolving material from start to finish. No verse-chorus, no AABA, no da capo. Every moment is new. The opposite of repetition-based form. Schubert's \"Erlkönig,\" prog rock epics, and many film cues are through-composed. Maximum narrative, minimum predictability.",
    tags: ["form", "through-composed", "continuous", "non-repeating", "narrative"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["D3", "F3", "Ab3"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "4n" },
        { notes: ["E3", "Ab3", "B3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["D3", "G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "theme-and-variations",
    name: "Theme and Variations",
    category: "form",
    description:
      "A theme is stated, then repeated in altered versions — each variation changes something (harmony, rhythm, key, texture, tempo) while keeping the theme recognizable. A form that's about transformation rather than contrast. Beethoven, Brahms, jazz standards (the head IS the theme; each solo chorus is a variation).",
    tags: ["form", "theme", "variations", "transformation", "classical"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "bridge-prechorus",
    name: "Bridge & Pre-Chorus",
    category: "form",
    description:
      "Connective sections that create contrast and build anticipation. A bridge (or \"middle 8\") provides a departure from the main material — new chords, new melody, new energy. A pre-chorus builds tension between the verse and chorus, often with rising harmony or increasing rhythmic density. The glue that makes song structures feel inevitable.",
    tags: ["form", "bridge", "pre-chorus", "contrast", "transition"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["B3", "D4", "F4"], duration: "4n" },
        { notes: ["C4", "E4", "G4"], duration: "4n" },
        { notes: ["D4", "F4", "A4"], duration: "4n" },
        { notes: ["E4", "G4", "B4"], duration: "4n" },
        { notes: ["F4", "A4", "C5"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
      ],
    },
  },

  // ── Extended Chords & Sonorities ────────────────────────
  {
    id: "major-9th-chord",
    name: "Major 9th Chord",
    category: "harmonic-devices",
    description:
      "A major 7th chord with the 9th added. Lush, open, and sophisticated — the workhorse of jazz ballads and neo-soul. More colorful than a plain maj7, less tense than a #11. The sound of a city at night.",
    tags: ["extended", "9th", "jazz", "neo-soul"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "minor-9th-chord",
    name: "Minor 9th Chord",
    category: "harmonic-devices",
    description:
      "A minor 7th chord with the 9th added. Warm, melancholic, and spacious — the 9th softens the minor quality without removing it. Essential for jazz ii chords, R&B, and any context where you want sadness with sophistication.",
    tags: ["extended", "9th", "minor", "jazz"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "A3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "minor-6th-chord",
    name: "Minor 6th Chord",
    category: "harmonic-devices",
    description:
      "A minor triad with a major 6th. A bittersweet sonority — the major 6th against the minor 3rd creates tension without dominant function. The tonic chord of melodic minor. Think film noir, tango, and the final chord of a Chet Baker ballad.",
    tags: ["minor", "6th", "bittersweet", "melodic minor"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "Eb3", "G3", "A3"], duration: "1n" },
      ],
    },
  },
  {
    id: "minor-11th-chord",
    name: "Minor 11th Chord",
    category: "harmonic-devices",
    description:
      "A minor 7th chord with 9th and 11th. Open, floating, quartal-sounding — the 11th reinforces the minor quality while the 9th adds breadth. The classic Herbie Hancock left-hand voicing. One chord that sounds like an entire mood.",
    tags: ["extended", "11th", "minor", "quartal"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "A3", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "major-13th-chord",
    name: "Major 13th Chord",
    category: "harmonic-devices",
    description:
      "A major 7th chord with 9th and 13th. Rich, warm, fully stacked — the 13th (same as the 6th) adds a golden top note. In practice, the 11th is omitted or raised to #11 to avoid clashing with the 3rd. The definitive 'lush jazz ending' chord.",
    tags: ["extended", "13th", "major", "lush"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "B3", "D4", "A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "minor-13th-chord",
    name: "Minor 13th Chord",
    category: "harmonic-devices",
    description:
      "A minor 7th chord with 9th, 11th, and 13th. A massive Dorian-flavored stack — the natural 13th distinguishes it from Aeolian. The chord that turns a ii chord into a landscape. Common in modal jazz and sophisticated R&B.",
    tags: ["extended", "13th", "minor", "dorian"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "C4", "E4", "G4", "B4"], duration: "1n" },
      ],
    },
  },
  {
    id: "dominant-13th-chord",
    name: "Dominant 13th Chord",
    category: "harmonic-devices",
    description:
      "A dominant 7th chord with 9th and 13th. The fullest expression of dominant function — all the tension of the tritone plus the warmth of the 13th. The sound of Count Basie's band hitting the final chord. Omit the 11th to keep it from getting muddy.",
    tags: ["extended", "13th", "dominant", "big band"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "B3", "F4", "A4", "E5"], duration: "1n" },
      ],
    },
  },
  {
    id: "sus-chords",
    name: "7sus4 / 9sus4 / 13sus4",
    category: "harmonic-devices",
    description:
      "Dominant chords with the 4th replacing the 3rd. Suspended dominants remove the leading tone, softening the resolution. 7sus4 is the basic form; 9sus4 adds color; 13sus4 is the lush McCoy Tyner / Herbie Hancock sound. Half dominant, half quartal.",
    tags: ["sus", "suspended", "quartal", "modal"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G2", "C3", "F3", "Bb3"], duration: "2n" },
        { notes: ["G2", "C3", "F3", "A3", "Bb3"], duration: "2n" },
        { notes: ["G2", "C3", "F3", "A3", "Bb3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "modal-interchange",
    name: "Modal Interchange",
    category: "harmonic-devices",
    description:
      "Borrowing chords from parallel modes — not just parallel minor, but Dorian, Phrygian, Lydian, Mixolydian, and beyond. The general principle behind borrowed chords. Radiohead borrows from Aeolian and Phrygian; Steely Dan from Lydian and Dorian. Understanding this as a system rather than individual tricks unlocks the entire palette.",
    tags: ["borrowed chord", "parallel modes", "system"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "sequential-tonicization",
    name: "Sequential Tonicization",
    category: "modulation",
    description:
      "Tonicizing a series of chords in sequence — each one gets its own V7 or vii° before it. Creates a chain of momentary key centers moving in a pattern (often by step or by thirds). The engine behind chromatic sequences in Romantic music and the bridge sections of Broadway standards.",
    tags: ["modulation", "tonicization", "sequence", "chromatic", "chain"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["F#3", "A#3", "C#4", "E4"], duration: "4n" },
        { notes: ["B3", "D#4", "F#4", "B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary-diminished",
    name: "Secondary Diminished Chords",
    category: "harmonic-devices",
    description:
      "Diminished 7th chords that function as leading-tone chords to diatonic scale degrees other than I. Like secondary dominants but with the extra chromatic bite of a fully diminished sonority. #i°7 → ii, #ii°7 → iii, #iv°7 → V. The secret ingredient behind smooth jazz and gospel passing chords.",
    tags: ["diminished", "secondary", "leading tone", "chromatic", "passing chords"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["D#3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "dominant-prolongation",
    name: "Dominant Prolongation",
    category: "harmonic-devices",
    description:
      "Extending the dominant harmony across multiple beats or bars before resolving. Dominant pedals, cadential 6/4, passing chords over a V bass — all ways to stretch the tension. The longer the prolongation, the bigger the payoff. Beethoven symphonies live here.",
    tags: ["dominant", "prolongation", "tension", "cadence", "passing chords"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G2", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["G2", "C4", "E4", "G4"], duration: "4n" },
        { notes: ["G2", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["G2", "A3", "D4", "F#4"], duration: "4n" },
        { notes: ["G2", "B3", "D4", "G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "tonic-prolongation",
    name: "Tonic Prolongation",
    category: "harmonic-devices",
    description:
      "Extending the tonic harmony through neighbor chords, passing chords, and pedal tones. The tonic stays in control even as surface harmonies move. I → V4/3 → I6, I → vii°6 → I, or simply a tonic pedal under changing upper voices. The foundation of tonal stability.",
    tags: ["tonic", "prolongation", "pedal", "stability", "passing chords"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C3", "D3", "F3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "linear-harmony",
    name: "Linear Harmony",
    category: "harmonic-devices",
    description:
      "Harmony that emerges from independent melodic lines rather than from block chord progressions. The chords are a byproduct of counterpoint, not the starting point. Bach chorales, Debussy inner voices, and Louis Cole arrangements all share this — the vertical sonorities are rich because the horizontal lines are strong.",
    tags: ["linear", "counterpoint", "melodic", "louis cole"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["D3", "D4"], duration: "4n" },
        { notes: ["E3", "C4"], duration: "4n" },
        { notes: ["F3", "B3"], duration: "4n" },
        { notes: ["G3", "C4"], duration: "2n" },
      ],
    },
  },

  // ── Gospel (additional) ──────────────────────────────────
  {
    id: "gospel-chromatic-bass",
    name: "Gospel Chromatic Bass",
    category: "gospel",
    description:
      "A chromatic bass line connecting chords in gospel style — every half step gets its own harmony on top. The bass walks chromatically while the upper voices build lush passing chords. Distinct from classical lament bass because the harmonies above are thick jazz voicings, not simple triads. The sound of a church organist who studied jazz.",
    tags: ["gospel", "chromatic", "bass line", "passing chords", "church"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "4n" },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "gospel-4-part-voicing",
    name: "Gospel 4-Part Voicing",
    category: "gospel",
    description:
      "Close-position four-part harmony in gospel style — soprano, alto, tenor, and bass voices moving together in rich, chromatic block chords. Every chord is a full voicing, every voice moves by the smallest interval possible. The technique behind mass choir arrangements and the thick, warm sound of traditional gospel.",
    tags: ["gospel", "voicing", "4-part", "choir", "block chords"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C3", "Eb3", "Ab3", "C4"], duration: "4n" },
        { notes: ["B2", "D3", "G3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "amen-cadence",
    name: "Amen Cadence",
    category: "gospel",
    description:
      "The plagal cadence (IV → I) as used in gospel and hymn tradition — but extended, decorated, and repeated with chromatic passing chords. Not just two chords but a whole cadential vocabulary built around the subdominant resolving to tonic. The 'Amen' at the end of every hymn, stretched into an art form.",
    tags: ["gospel", "cadence", "plagal", "amen", "hymn", "passing chords"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4", "F4"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3", "Db4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },

  // ── Guide-Tone Voice Leading ─────────────────────────────
  {
    id: "guide-tone-voice-leading",
    name: "Guide-Tone Voice Leading",
    category: "voice-leading",
    description:
      "The movement of 3rds and 7ths through chord changes — the two notes that define chord quality and function. In a ii-V-I, the guide tones move by half step: Dm7 (F, C) → G7 (F→F, C→B) → Cmaj7 (E, B). Master this and you hear the skeleton of every jazz progression. The foundation of comp voicings, walking bass, and improvised lines.",
    tags: ["voice-leading", "guide tones", "3rds", "7ths", "jazz"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["F3", "C4"], duration: "2n" },
        { notes: ["F3", "B3"], duration: "2n" },
        { notes: ["E3", "B3"], duration: "1n" },
      ],
    },
  },

  // ── Counterpoint ────────────────────────────────────────
  {
    id: "species-counterpoint",
    name: "Species Counterpoint",
    category: "voice-leading",
    description:
      "The systematic study of two-voice writing in five graduated species: note-against-note, two-against-one, four-against-one, syncopated, and free (florid). Each species adds rhythmic complexity while maintaining consonance rules. The gym workout that builds voice-leading intuition. Fux wrote the textbook in 1725; it still works.",
    tags: ["counterpoint", "species", "two-voice", "fux", "classical"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["D3", "D4"], duration: "2n" },
        { notes: ["E3", "C4"], duration: "2n" },
        { notes: ["F3", "A3"], duration: "2n" },
        { notes: ["G3", "B3"], duration: "2n" },
        { notes: ["C3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "contrapuntal-imitation",
    name: "Contrapuntal Imitation",
    category: "voice-leading",
    description:
      "One voice states a melody, then another voice enters with the same or similar melody at a different pitch or time. The foundation of canons, fugues, and inventions. Also shows up constantly in film scoring — a theme in the strings answered by the woodwinds is imitation.",
    tags: ["counterpoint", "imitation", "fugue", "canon", "orchestral"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C3", "F4"], duration: "4n" },
        { notes: ["D3", "E4"], duration: "4n" },
        { notes: ["E3", "D4"], duration: "4n" },
        { notes: ["F3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "canon",
    name: "Canon",
    category: "voice-leading",
    description:
      "Strict imitation — a melody in one voice is exactly replicated in another voice after a delay. The second voice follows the first like a shadow, creating harmony through time displacement. Pachelbel's Canon is famous but reductive; Bach's canons in the Art of Fugue are the real masterclass.",
    tags: ["counterpoint", "canon", "imitation", "strict", "classical"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4", "C3"], duration: "4n" },
        { notes: ["E4", "E3"], duration: "4n" },
        { notes: ["C4", "G3"], duration: "4n" },
        { notes: ["E4", "E3"], duration: "4n" },
        { notes: ["C4", "C3"], duration: "2n" },
      ],
    },
  },
  {
    id: "invertible-counterpoint",
    name: "Invertible Counterpoint",
    category: "voice-leading",
    description:
      "Two melodies designed so either one can be on top or bottom — swap their octaves and the result is still good counterpoint. Requires careful interval planning (no parallel 5ths in either configuration). Bach's inventions are built on this. A compositional superpower for development sections.",
    tags: ["counterpoint", "invertible", "double", "bach", "invention"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["D3", "F4"], duration: "4n" },
        { notes: ["E3", "G4"], duration: "4n" },
        { notes: ["F3", "A4"], duration: "4n" },
        { notes: ["E4", "C3"], duration: "4n" },
        { notes: ["F4", "D3"], duration: "4n" },
        { notes: ["G4", "E3"], duration: "4n" },
        { notes: ["A4", "F3"], duration: "2n" },
      ],
    },
  },
  {
    id: "contrary-counterpoint",
    name: "Contrary Counterpoint",
    category: "voice-leading",
    description:
      "Two voices moving in opposite directions — when one goes up, the other goes down. The most fundamental type of good counterpoint and the strongest way to create independence between voices. Contrary motion automatically avoids parallel 5ths and octaves.",
    tags: ["counterpoint", "contrary", "opposite motion", "independence"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "C4"], duration: "4n" },
        { notes: ["B2", "D4"], duration: "4n" },
        { notes: ["A2", "E4"], duration: "4n" },
        { notes: ["G2", "F4"], duration: "4n" },
        { notes: ["F2", "G4"], duration: "4n" },
        { notes: ["C3", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "oblique-counterpoint",
    name: "Oblique Counterpoint",
    category: "voice-leading",
    description:
      "One voice holds a note (or repeats it) while the other moves. The held voice becomes a pedal or anchor while the moving voice creates changing intervals. A cornerstone of tonal music — pedal points, drones, and ostinato bass lines are all oblique motion in action.",
    tags: ["counterpoint", "oblique", "pedal", "drone", "anchor"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["C3", "F4"], duration: "4n" },
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["C3", "A4"], duration: "4n" },
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["C3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "contrapuntal-ostinato",
    name: "Contrapuntal Ostinato",
    category: "voice-leading",
    description:
      "A repeating pattern in one voice with a free melody above or below it. The ostinato provides structure while the free voice provides expression. Purcell's ground basses, Bach's Passacaglia in C minor, and any funk bass riff with a vocal melody on top are all contrapuntal ostinato.",
    tags: ["counterpoint", "ostinato", "ground bass", "passacaglia", "repeating"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["D3", "G4"], duration: "4n" },
        { notes: ["E3", "F4"], duration: "4n" },
        { notes: ["G3", "E4"], duration: "4n" },
        { notes: ["C3", "D4"], duration: "4n" },
        { notes: ["D3", "C4"], duration: "4n" },
        { notes: ["E3", "B3"], duration: "4n" },
        { notes: ["G3", "C4"], duration: "4n" },
      ],
    },
  },
  {
    id: "fugato",
    name: "Fugato",
    category: "voice-leading",
    description:
      "A passage written in fugal style — staggered entries of a subject in different voices — without committing to a full fugue. Common in orchestral development sections, film scores, and even prog rock. A way to build intensity and complexity by layering the same idea across registers.",
    tags: ["counterpoint", "fugato", "fugue", "staggered entry", "development"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["C3", "E4"], duration: "8n" },
        { notes: ["D3", "D4"], duration: "8n" },
        { notes: ["E3", "C4"], duration: "8n" },
        { notes: ["G3", "E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "linear-counterpoint",
    name: "Linear Counterpoint",
    category: "voice-leading",
    description:
      "Counterpoint where the horizontal melodic lines take priority over vertical consonance. The harmony is a result, not a goal — lines may clash momentarily because each voice follows its own melodic logic. Hindemith, Bartók, and Stravinsky write this way. Also relevant to jazz horn arranging where each part has a strong individual line.",
    tags: ["counterpoint", "linear", "horizontal", "modern", "dissonance"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["F3", "Db4"], duration: "4n" },
        { notes: ["D3", "G4"], duration: "4n" },
        { notes: ["G3", "Eb4"], duration: "4n" },
        { notes: ["E3", "F4"], duration: "4n" },
        { notes: ["C3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "countermelody",
    name: "Countermelody",
    category: "voice-leading",
    description:
      "A secondary melody played simultaneously with the main theme. It must be interesting enough to stand alone but subordinate enough not to compete. The best countermelodies complement the main melody rhythmically (moving when it rests) and intervallically (filling its gaps). John Williams, Earth Wind & Fire horn lines, and gospel organ — all masters of this.",
    tags: ["counterpoint", "countermelody", "orchestration"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4", "G3"], duration: "2n" },
        { notes: ["E4", "A3"], duration: "4n" },
        { notes: ["D4", "B3"], duration: "4n" },
        { notes: ["C4", "C4"], duration: "4n" },
        { notes: ["E4", "A3"], duration: "4n" },
        { notes: ["G4", "G3"], duration: "2n" },
      ],
    },
  },

  // ── Rhythm (additional) ──────────────────────────────────
  {
    id: "rhythmic-superimposition",
    name: "Rhythmic Superimposition",
    category: "rhythm",
    description:
      "Playing a phrase or pattern that implies a different meter or subdivision over the existing groove. Not changing the time signature — the underlying pulse stays — but your phrase cycles at a different rate, creating tension until it realigns. The Louis Cole / Snarky Puppy / Meshuggah fundamental concept.",
    tags: ["superimposition", "implied meter", "tension", "fusion"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "subdivisional-superimposition",
    name: "Subdivisional Superimposition",
    category: "rhythm",
    description:
      "Superimposing one subdivision over another — playing triplets over a straight-16th groove, or straight 8ths over a shuffle. The underlying subdivision stays but your part implies a different one, creating a controlled friction between two rhythmic grids. Essential to Owane and modern fusion guitar.",
    tags: ["subdivision", "superimposition", "friction", "fusion"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n", velocity: 0.9 },
        { notes: ["E4"], duration: "8t", velocity: 0.6 },
        { notes: ["G4"], duration: "8t", velocity: 0.6 },
        { notes: ["E4"], duration: "8t", velocity: 0.6 },
        { notes: ["C4"], duration: "4n", velocity: 0.9 },
        { notes: ["G4"], duration: "8t", velocity: 0.6 },
        { notes: ["E4"], duration: "8t", velocity: 0.6 },
        { notes: ["C4"], duration: "8t", velocity: 0.6 },
      ],
    },
  },
  {
    id: "3-2-polyrhythm",
    name: "3:2 Polyrhythm",
    category: "rhythm",
    description:
      "Three evenly spaced notes against two — the most fundamental polyrhythm. The '3' divides the beat into triplets while the '2' divides it in half. The basis of the Afro-Cuban clave, swing feel, and the hemiola. If you can feel 3:2 in your bones, every other polyrhythm becomes a variation.",
    tags: ["polyrhythm", "3:2", "fundamental", "afro-cuban"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "C4"], duration: "4n", velocity: 0.9 },
        { notes: ["C4"], duration: "4n.+8n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.7 },
        { notes: ["C4"], duration: "4n.+8n", velocity: 0.7 },
        { notes: ["C3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "4-3-polyrhythm",
    name: "4:3 Polyrhythm",
    category: "rhythm",
    description:
      "Four evenly spaced notes against three. Subtler than 3:2 — the two grids almost align but never quite do, creating a floating, ambiguous feel. Common in West African drumming and Chopin's piano music. The phrase 'pass the golden butter' helps you feel 4-over-3.",
    tags: ["polyrhythm", "4:3", "african", "chopin"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E4"], duration: "4n", velocity: 0.9 },
        { notes: ["E4"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.7 },
        { notes: ["C3", "E4"], duration: "4n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "5-4-polyrhythm",
    name: "5:4 Polyrhythm",
    category: "rhythm",
    description:
      "Five evenly spaced notes against four — quintuplets against a straight 16th grid. Complex enough to sound 'wrong' to untrained ears but completely natural in West African and Indian music. Owane and Animals as Leaders use this extensively. The 5-side creates a lopsided, tumbling quality.",
    tags: ["polyrhythm", "5:4", "quintuplet", "progressive"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["C3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["C3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "4n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "7-4-polyrhythm",
    name: "7:4 Polyrhythm",
    category: "rhythm",
    description:
      "Seven evenly spaced notes against four — septuplets against a quarter-note grid. Deeply disorienting and almost impossible to feel intuitively without practice. The 7-side has a lurching, unpredictable quality. Used in progressive metal, Indian classical music, and experimental electronic music.",
    tags: ["polyrhythm", "7:4", "septuplet", "progressive"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "tuplet-superimposition",
    name: "Tuplet Superimposition",
    category: "rhythm",
    description:
      "Laying irregular tuplets (quintuplets, septuplets, etc.) over a regular subdivision. Not a polyrhythm per se — the tuplet group replaces the expected subdivision for a phrase, then returns to the grid. Creates a momentary speeding-up or slowing-down illusion. The Tigran Hamasyan / Louis Cole rhythmic sleight of hand.",
    tags: ["tuplet", "superimposition", "irregular", "illusion"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n", velocity: 0.9 },
        { notes: ["D4"], duration: "16n", velocity: 0.6 },
        { notes: ["E4"], duration: "16n", velocity: 0.6 },
        { notes: ["F4"], duration: "16n", velocity: 0.6 },
        { notes: ["G4"], duration: "16n", velocity: 0.6 },
        { notes: ["A4"], duration: "16n", velocity: 0.6 },
        { notes: ["G4"], duration: "4n", velocity: 0.9 },
        { notes: ["C4"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "beat-phase-displacement",
    name: "Beat-Phase Displacement",
    category: "rhythm",
    description:
      "Shifting the perceived downbeat by starting a repeating pattern at a different point in the bar. The pattern doesn't change — its relationship to the barline does. Like picking up a tile pattern and placing it one square over. Steve Reich's phasing technique taken to the groove context.",
    tags: ["phase", "displacement", "downbeat", "reich"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "backbeat-displacement",
    name: "Backbeat Displacement",
    category: "rhythm",
    description:
      "Moving the snare/accent off beats 2 and 4 to create a shifted groove — accenting the 'and' of 2 and 4, or beats 1 and 3, or any non-standard position. The groove feels familiar but wrong in a compelling way. J Dilla, Questlove, and Louis Cole all displace the backbeat to create signature feels.",
    tags: ["backbeat", "displacement", "groove", "dilla"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "subdivisional-modulation",
    name: "Subdivisional Modulation",
    category: "rhythm",
    description:
      "Changing the underlying subdivision — switching from straight 8ths to triplets, or from 16ths to sextuplets — while keeping the same tempo and pulse. Different from metric modulation (which changes tempo). The groove transforms its texture without speeding up or slowing down. Common in gospel, fusion, and hip-hop.",
    tags: ["subdivision", "modulation", "texture", "gospel"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8t", velocity: 0.9 },
        { notes: ["E3"], duration: "8t", velocity: 0.5 },
        { notes: ["G3"], duration: "8t", velocity: 0.5 },
        { notes: ["C3"], duration: "8t", velocity: 0.7 },
        { notes: ["E3"], duration: "8t", velocity: 0.5 },
        { notes: ["G3"], duration: "8t", velocity: 0.5 },
      ],
    },
  },
  {
    id: "rhythmic-cells",
    name: "Rhythmic Cells",
    category: "rhythm",
    description:
      "Short, repeating rhythmic units (2-4 notes) that can be combined, rotated, and layered to build complex grooves. Think of them as rhythmic atoms — each cell has its own character, and assembling them creates molecules. Morse code for drummers. The way African drumming traditions build polyrhythmic textures from simple interlocking cells.",
    tags: ["cells", "building blocks", "african", "modular"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["C3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["C3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "rhythmic-ostinato",
    name: "Rhythmic Ostinato",
    category: "rhythm",
    description:
      "A repeating rhythmic pattern that anchors a piece — distinct from a melodic ostinato because the rhythm is the identity, not the notes. The notes can change while the rhythm stays fixed. Bo Diddley beat, Bolero snare, minimalist pulsing 8ths — all rhythmic ostinati. The rhythm IS the composition.",
    tags: ["ostinato", "repeating", "pattern", "anchor"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "4n", velocity: 0.7 },
        { notes: ["E3"], duration: "4n", velocity: 0.6 },
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "4n", velocity: 0.7 },
        { notes: ["E3"], duration: "4n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "layered-ostinati",
    name: "Layered Ostinati",
    category: "rhythm",
    description:
      "Multiple ostinato patterns of different lengths running simultaneously, creating a shifting rhythmic tapestry. A 3-beat pattern against a 4-beat pattern against a 5-beat pattern — each cycle realigns differently. The engine of minimalism (Steve Reich, Philip Glass) and Afrobeat (Fela Kuti). Complexity from simplicity.",
    tags: ["ostinato", "layering", "minimalism", "polyrhythm"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E4"], duration: "4n", velocity: 0.9 },
        { notes: ["G3"], duration: "4n", velocity: 0.6 },
        { notes: ["E4"], duration: "4n", velocity: 0.6 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["G3", "E4"], duration: "4n", velocity: 0.6 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E4"], duration: "4n", velocity: 0.6 },
        { notes: ["G3"], duration: "4n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "rhythmic-unison",
    name: "Rhythmic Unison",
    category: "rhythm",
    description:
      "Every instrument hits the exact same rhythm simultaneously, often with different pitches or timbres. The band becomes one giant percussion instrument. The power comes from precision — any looseness and it falls apart. Louis Cole's arrangements are precision-engineered rhythmic unison machines. Also fundamental to big band kicks and prog ensemble passages.",
    tags: ["unison", "ensemble", "precision", "louis cole"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E4", "G4", "C5"], duration: "8n", velocity: 0.9 },
        { notes: ["C3", "E4", "G4", "C5"], duration: "8n", velocity: 0.4 },
        { notes: ["C3", "E4", "G4", "C5"], duration: "4n", velocity: 0.9 },
        { notes: ["C3", "E4", "G4", "C5"], duration: "8n", velocity: 0.9 },
        { notes: ["C3", "E4", "G4", "C5"], duration: "8n", velocity: 0.4 },
        { notes: ["C3", "E4", "G4", "C5"], duration: "2n", velocity: 0.9 },
      ],
    },
  },

  // ── Bass (additional) ────────────────────────────────────
  {
    id: "syncopated-bass",
    name: "Syncopated Bass",
    category: "bass",
    description:
      "A bass line that consistently lands on offbeats, anticipating chord changes and creating forward momentum. The bass arrives before the downbeat, pulling the band forward. Fundamental to funk, reggae, and Latin music. James Jamerson's Motown lines are the textbook — the bass is almost never on the beat.",
    tags: ["bass", "syncopation", "offbeat", "funk", "jamerson"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.4 },
        { notes: ["G3"], duration: "8n", velocity: 0.9 },
        { notes: ["F3"], duration: "8n", velocity: 0.4 },
        { notes: ["F3"], duration: "8n", velocity: 0.9 },
        { notes: ["A3"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "pedal-bass",
    name: "Pedal Bass",
    category: "bass",
    description:
      "The bass holds or repeats a single note while chords change above it. Creates harmonic tension as the chords move away from the bass note and release when they return. A dominant pedal builds anticipation; a tonic pedal provides stability over surface motion. Organ music, orchestral climaxes, and EDM builds all use pedal bass.",
    tags: ["bass", "pedal", "drone", "tension", "stability"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["C2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["C2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C2", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["C2", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "stepwise-bass",
    name: "Stepwise Bass",
    category: "bass",
    description:
      "A bass line that moves by step (half steps or whole steps) connecting chord roots. Creates smooth, linear motion in the lowest voice. Ascending stepwise bass builds energy; descending stepwise bass creates gravity. Distinct from walking bass because it's composed, not improvised, and each step may span multiple beats.",
    tags: ["bass", "stepwise", "linear", "smooth", "composed"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "bass-anticipation",
    name: "Bass Anticipation",
    category: "bass",
    description:
      "The bass arrives on the new chord root an 8th note (or 16th note) before the rest of the band changes. Creates a pulling, forward-leaning groove. The bass is always slightly ahead, dragging the harmony into the future. Essential in funk, R&B, and Latin styles. The opposite of a lazy, behind-the-beat feel.",
    tags: ["bass", "anticipation", "forward motion", "groove", "latin"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["F3"], duration: "8n", velocity: 0.8 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.7 },
        { notes: ["G3"], duration: "8n", velocity: 0.8 },
        { notes: ["G3", "B3", "D4"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "8n", velocity: 0.8 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "bass-line-reharmonization",
    name: "Bass-Line Reharmonization",
    category: "bass",
    description:
      "Reharmonizing a progression by changing the bass note while keeping the upper structure — or vice versa. A C major chord over a Bb bass becomes Cmaj7/Bb, implying Bbmaj9. The bass voice alone can redefine the harmonic function of every chord. Jazz pianists and gospel organists think this way constantly.",
    tags: ["bass", "reharmonization", "slash chord", "function", "jazz"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Bb2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["A2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Ab2", "Eb3", "G3", "C4"], duration: "2n" },
        { notes: ["G2", "D3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "bass-ostinato",
    name: "Bass Ostinato",
    category: "bass",
    description:
      "A repeating bass pattern — melodic, not just rhythmic — that forms the harmonic and rhythmic foundation of a piece. Differs from a riff because it's specifically in the bass register and from a pedal because it moves. Chameleon by Herbie Hancock, Seven Nation Army, every Afrobeat bass line. The bass pattern IS the song.",
    tags: ["bass", "ostinato", "repeating", "riff", "foundation"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["Eb3"], duration: "8n", velocity: 0.6 },
        { notes: ["F3"], duration: "8n", velocity: 0.7 },
        { notes: ["G3"], duration: "8n", velocity: 0.9 },
        { notes: ["F3"], duration: "8n", velocity: 0.6 },
        { notes: ["Eb3"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
      ],
    },
  },

  // ── Melodic Devices (additional) ─────────────────────────
  {
    id: "chromatic-passing-tone",
    name: "Chromatic Passing Tone",
    category: "melodic-devices",
    description:
      "A non-chord tone that fills a whole-step gap with a chromatic half step. Smoother than a diatonic passing tone because every motion is a semitone. Adds color and momentum without changing the harmonic direction. The backbone of bebop lines — Charlie Parker fills every gap with chromatic passing tones.",
    tags: ["chromatic", "passing tone", "bebop", "ornament"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["C#4"], duration: "8n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["D#4"], duration: "8n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "upper-neighbor",
    name: "Upper Neighbor",
    category: "melodic-devices",
    description:
      "A non-chord tone one step above the main note, returning immediately. The upper neighbor adds a small 'dip' ornament — the note goes up one step and comes back. Gentler than an appoggiatura because it's usually on a weak beat. Combined with lower neighbor, it creates the double neighbor or turn figure.",
    tags: ["neighbor", "ornament", "step", "diatonic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["C4"], duration: "4n." },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "turn-figure",
    name: "Turn Figure",
    category: "melodic-devices",
    description:
      "A four-note ornament that circles around the main note: upper neighbor → main note → lower neighbor → main note. The musical equivalent of a flourish or a signature. Written as a squiggle above the note in classical music. Chopin, Mozart, and every R&B melisma uses turns constantly.",
    tags: ["turn", "ornament", "classical", "flourish"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "16n" },
        { notes: ["C4"], duration: "16n" },
        { notes: ["B3"], duration: "16n" },
        { notes: ["C4"], duration: "4n." },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "16n" },
        { notes: ["E4"], duration: "16n" },
        { notes: ["D4"], duration: "16n" },
        { notes: ["E4"], duration: "4n." },
      ],
    },
  },
  {
    id: "motivic-development",
    name: "Motivic Development",
    category: "melodic-devices",
    description:
      "Taking a short musical idea (a motif) and transforming it throughout a piece — transposing, inverting, augmenting, fragmenting, retrograding, re-harmonizing. The glue that makes a composition feel unified rather than like a series of disconnected ideas. Beethoven's 5th Symphony: four notes, developed into an entire symphony.",
    tags: ["motif", "development", "transformation", "composition"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["G4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["Eb4"], duration: "2n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "motivic-inversion",
    name: "Motivic Inversion",
    category: "melodic-devices",
    description:
      "Flipping a motif upside down — every ascending interval becomes the same descending interval and vice versa. The contour is mirrored. C-E-G (up a 3rd, up a 3rd) becomes C-Ab-F (down a 3rd, down a 3rd). Creates a related but distinct melodic idea. Bach, Bartók, and serial composers use inversion systematically.",
    tags: ["inversion", "mirror", "transformation", "serial"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["Ab3"], duration: "4n" },
        { notes: ["F3"], duration: "2n" },
      ],
    },
  },
  {
    id: "motivic-augmentation",
    name: "Motivic Augmentation",
    category: "melodic-devices",
    description:
      "Stretching a motif in time — each note becomes proportionally longer. A motif in 8th notes becomes the same motif in quarter notes or half notes. Slows the idea down, making it grander or more contemplative. Used in fugue stretto, orchestral climaxes, and film scoring to create a sense of expansion.",
    tags: ["augmentation", "stretch", "time", "fugue"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "motivic-diminution",
    name: "Motivic Diminution",
    category: "melodic-devices",
    description:
      "Compressing a motif in time — each note becomes proportionally shorter. A motif in quarter notes becomes the same motif in 8th notes. Speeds the idea up, creating urgency and excitement. Common in fugue development and as a building technique toward climaxes. The inverse of augmentation.",
    tags: ["diminution", "compress", "speed", "fugue"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
      ],
    },
  },

  // ── Orchestration (additional) ───────────────────────────
  {
    id: "string-divisi",
    name: "String Divisi",
    category: "orchestration",
    description:
      "Splitting a string section so that each desk or group plays a different note, rather than everyone playing the same line. Turns one section into multiple independent voices. Creates lush, wide chords impossible for a single player. Mahler, Strauss, and every film composer rely on divisi for those enormous, shimmering string chords.",
    tags: ["strings", "divisi", "voicing", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G3", "B3", "D4", "G4", "B4", "D5"], duration: "1n" },
        { notes: ["F3", "A3", "C4", "F4", "A4", "C5"], duration: "1n" },
      ],
    },
  },
  {
    id: "string-doubling",
    name: "String Doubling",
    category: "orchestration",
    description:
      "Having two or more string sections play the same line in unison or octaves. Violin 1 + violin 2 in unison doubles the body; violins + cellos in octaves creates power. Doubling is how you go from a chamber sound to a symphonic sound. The most basic orchestration tool and the most effective.",
    tags: ["strings", "doubling", "unison", "octave"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "C4"], duration: "4n" },
        { notes: ["D3", "D4"], duration: "4n" },
        { notes: ["E3", "E4"], duration: "4n" },
        { notes: ["F3", "F4"], duration: "4n" },
        { notes: ["G3", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "octave-doubling",
    name: "Octave Doubling",
    category: "orchestration",
    description:
      "Reinforcing a line by doubling it one or more octaves above or below. Adds weight, brilliance, or depth depending on direction. Flute doubling violin an octave up adds sparkle. Bassoon doubling cello an octave below adds gravity. The fastest way to change the color of a line without changing the notes.",
    tags: ["octave", "doubling", "weight", "harmonic color"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "C4", "C5"], duration: "4n" },
        { notes: ["E3", "E4", "E5"], duration: "4n" },
        { notes: ["G3", "G4"], duration: "4n" },
        { notes: ["C3", "C4", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "unison-doubling",
    name: "Unison Doubling",
    category: "orchestration",
    description:
      "Two or more different instruments playing the same line at the same octave. Unlike octave doubling, unison doubling creates a new composite timbre — clarinet + flute in unison sounds like neither instrument alone. The timbres blend into something richer. Ravel was the master of unexpected unison doublings.",
    tags: ["unison", "doubling", "timbre", "ravel"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4", "C4"], duration: "4n" },
        { notes: ["D4", "D4"], duration: "4n" },
        { notes: ["E4", "E4"], duration: "4n" },
        { notes: ["G4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-pads",
    name: "Horn Pads",
    category: "orchestration",
    description:
      "Sustained horn chords providing harmonic foundation — the 'glue' that holds the orchestral middle register together. French horns are uniquely suited to this: warm enough to blend with strings, strong enough to blend with brass. The sound of every sweeping landscape shot in cinema. John Williams and Howard Shore use horn pads constantly.",
    tags: ["horns", "pads", "sustained", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "1n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "woodwind-doubling",
    name: "Woodwind Doubling",
    category: "orchestration",
    description:
      "Reinforcing a melodic line with woodwinds — oboe adds a nasal edge, clarinet adds warmth, flute adds brightness. Each woodwind changes the color of whatever it doubles. Doubling a string melody with clarinet softens it; with oboe, it becomes more plaintive; with flute, more ethereal. Rimsky-Korsakov's orchestration treatise is still the reference.",
    tags: ["woodwind", "doubling", "harmonic color", "timbre"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E4", "E5"], duration: "4n" },
        { notes: ["F4", "F5"], duration: "4n" },
        { notes: ["G4", "G5"], duration: "4n" },
        { notes: ["A4", "A5"], duration: "4n" },
        { notes: ["G4", "G5"], duration: "2n" },
      ],
    },
  },
  {
    id: "cross-section-doubling",
    name: "Cross-Section Doubling",
    category: "orchestration",
    description:
      "Doubling a line across different orchestral families — strings + woodwinds, brass + strings, etc. Each family contributes its character: strings for sustain, brass for power, woodwinds for color. The composite sound is bigger than any one section. A Mahler forte passage might have the melody in violins, horns, and clarinets simultaneously.",
    tags: ["doubling", "cross-section", "composite", "mahler"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "C4", "C5"], duration: "4n" },
        { notes: ["D3", "D4", "D5"], duration: "4n" },
        { notes: ["E3", "E4", "E5"], duration: "4n" },
        { notes: ["G3", "G4", "G5"], duration: "2n" },
      ],
    },
  },
  {
    id: "orchestral-unison",
    name: "Orchestral Unison",
    category: "orchestration",
    description:
      "The entire orchestra (or a large portion) playing the same line in unison or octaves. Maximum weight, maximum intensity. Often used for main themes, climactic statements, and dramatic entrances. The effect is physical — you feel it in your chest. Mahler, Shostakovich, and John Williams save this for the biggest moments.",
    tags: ["unison", "tutti", "power", "climax"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "C4", "C5"], duration: "4n" },
        { notes: ["D3", "D4", "D5"], duration: "4n" },
        { notes: ["E3", "E4", "E5"], duration: "4n" },
        { notes: ["F3", "F4", "F5"], duration: "4n" },
        { notes: ["G3", "G4", "G5"], duration: "1n" },
      ],
    },
  },
  {
    id: "close-orchestral-spacing",
    name: "Close Orchestral Spacing",
    category: "orchestration",
    description:
      "Voicing chords with all notes within a single octave or close to it. Creates a dense, concentrated, intense sound — the opposite of wide spacing. Close spacing in the low register sounds muddy; in the upper register it sounds bright and tight. Big band sax soli, gospel choir voicings, and Stravinsky's wind writing all use close spacing deliberately.",
    tags: ["spacing", "close", "dense", "voicing"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4", "B4"], duration: "2n" },
        { notes: ["D4", "F4", "A4", "C5"], duration: "2n" },
        { notes: ["E4", "G4", "B4", "D5"], duration: "2n" },
        { notes: ["C4", "E4", "G4", "C5"], duration: "1n" },
      ],
    },
  },
  {
    id: "orchestral-hit",
    name: "Orchestral Hit",
    category: "orchestration",
    description:
      "A single, massive chord from the full orchestra on a rhythmic accent — then silence. The musical equivalent of a punch. Used for emphasis, surprise, and rhythmic articulation. The Rite of Spring opening chords, every action movie trailer hit, and the sampled 'orch hit' in 80s pop all descend from this technique.",
    tags: ["hit", "accent", "stabs", "dramatic"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "8n", velocity: 1.0 },
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "8n", velocity: 1.0 },
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "4n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "portamento-strings",
    name: "Portamento Strings",
    category: "orchestration",
    description:
      "A string technique where the finger slides along the string between notes, creating a continuous pitch glide. Adds expressiveness, yearning, or eeriness depending on context. Golden age Hollywood used portamento strings for romance; horror scores use it for unease. The 'swooping' violin sound.",
    tags: ["strings", "portamento", "slide", "expressive"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "2n" },
        { notes: ["E4"], duration: "2n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C5"], duration: "1n" },
      ],
    },
  },
  {
    id: "string-glissando",
    name: "String Glissando",
    category: "orchestration",
    description:
      "A rapid slide across many notes — faster and more dramatic than portamento. The string section sweeps up or down in a glittering cascade. Ascending glissando for excitement and magic; descending for collapse or comedy. Ravel's 'Daphnis et Chloé' sunrise glissando is one of the most famous moments in orchestral music.",
    tags: ["strings", "glissando", "sweep", "ravel"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "16n" },
        { notes: ["D4"], duration: "16n" },
        { notes: ["E4"], duration: "16n" },
        { notes: ["F4"], duration: "16n" },
        { notes: ["G4"], duration: "16n" },
        { notes: ["A4"], duration: "16n" },
        { notes: ["B4"], duration: "16n" },
        { notes: ["C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "harmonic-doubling",
    name: "Harmonic Doubling",
    category: "orchestration",
    description:
      "Doubling a line not at the unison or octave, but at a fixed harmonic interval — 3rds, 6ths, or 10ths. Two trumpets in 3rds, two flutes in 6ths, violins and violas in 10ths. Thickens the melody into a two-part harmony. The sound of mariachi trumpets, big band saxes, and Iron Maiden guitar harmonies.",
    tags: ["doubling", "harmony", "3rds", "6ths"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "4n" },
        { notes: ["F4", "A4"], duration: "4n" },
        { notes: ["G4", "B4"], duration: "4n" },
        { notes: ["C4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "hit-point-writing",
    name: "Hit-Point Writing",
    category: "orchestration",
    description:
      "Constructing an arrangement around precise rhythmic and harmonic accent points — every hit is planned, every accent is a compositional decision. Not improvised, not loose — precision-engineered. Film composers use hit points to sync music to picture. Louis Cole uses this approach to build arrangements that feel like tightly wound clocks.",
    tags: ["hit point", "precision", "arrangement", "louis cole"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E4", "G4"], duration: "8n", velocity: 0.9 },
        { notes: ["D3", "F4", "A4"], duration: "16n", velocity: 0.9 },
        { notes: ["E3", "G4", "B4"], duration: "4n", velocity: 0.9 },
        { notes: ["F3", "A4", "C5"], duration: "8n", velocity: 0.6 },
        { notes: ["G3", "B4", "D5"], duration: "2n", velocity: 0.9 },
      ],
    },
  },

  // ── Jazz Harmony (additional) ────────────────────────────
  {
    id: "applied-ii-v",
    name: "Applied ii-V",
    category: "progressions",
    description:
      "A ii-V that resolves to a chord other than I — targeting any diatonic degree. Em7 → A7 → Dm7 is a ii-V/ii. Each target chord gets its own mini ii-V approach. The way jazz musicians think about tonicization — not as isolated secondary dominants but as complete ii-V units aimed at temporary key centers.",
    tags: ["jazz", "ii-V", "applied", "tonicization"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "jazz-blues",
    name: "Jazz Blues",
    category: "progressions",
    description:
      "The 12-bar blues reharmonized with jazz substitutions: a iv chord in bar 6, a ii-V turnaround in bars 9-10, tritone subs, diminished passing chords, and secondary dominants throughout. Charlie Parker's version adds so many changes that the original I-IV-V skeleton is barely visible. The bridge between blues and bebop.",
    tags: ["jazz", "blues", "reharmonization", "bebop", "passing chords"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "Bb3"], duration: "4n" },
        { notes: ["F3", "A3", "Eb4"], duration: "4n" },
        { notes: ["C3", "E3", "Bb3"], duration: "4n" },
        { notes: ["E3", "G#3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "Bb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "secondary-ii-v",
    name: "Secondary ii-V",
    category: "progressions",
    description:
      "A ii-V pair targeting a non-tonic chord — the jazz-specific way of thinking about secondary function. Not just V/ii but the full ii-V/ii package. In C: Em7-A7 resolving to Dm7 is ii-V/ii. Standards are built from chains of these. Understanding this unlocks sophisticated film-song harmony and Great American Songbook changes.",
    tags: ["jazz", "secondary", "ii-V", "standards"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "sequential-ii-v",
    name: "Sequential ii-V",
    category: "progressions",
    description:
      "A chain of ii-V pairs moving in a pattern — typically descending by whole step or half step. Each ii-V targets the next ii chord rather than resolving to its expected I. The harmony slides through key centers without ever arriving. The engine behind many jazz standard bridge sections and Coltrane's approach to rapid modulation.",
    tags: ["jazz", "ii-V", "sequence", "chain"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["Bb2", "Db3", "F3", "Ab3"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "2n" },
      ],
    },
  },
  {
    id: "bebop-minor-scale",
    name: "Bebop Scale: Minor",
    category: "scales-modes",
    description:
      "The Dorian scale with a chromatic passing tone between the 7th and root — eight notes that align chord tones with strong beats when playing continuous 8th notes. The minor equivalent of the bebop dominant scale. Essential for making lines 'swing' over minor chords because the chromatic note falls on weak beats.",
    tags: ["scale", "bebop", "minor", "dorian", "chromatic"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["B4"], duration: "8n" },
        { notes: ["C5"], duration: "8n" },
        { notes: ["C#5"], duration: "8n" },
        { notes: ["D5"], duration: "4n" },
      ],
    },
  },
  {
    id: "bebop-dorian-scale",
    name: "Bebop Scale: Dorian",
    category: "scales-modes",
    description:
      "A Dorian scale with a chromatic passing tone between the 3rd and 4th — keeping the minor 3rd on strong beats. An alternative to the bebop minor scale with slightly different melodic character. Both solve the same problem (chord-tone alignment) from different angles.",
    tags: ["scale", "bebop", "dorian", "chromatic", "alignment"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["F#4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["B4"], duration: "8n" },
        { notes: ["C5"], duration: "8n" },
        { notes: ["D5"], duration: "4n" },
      ],
    },
  },
  {
    id: "added-note-chords",
    name: "Added-Note Chords",
    category: "harmonic-devices",
    description:
      "Chords with added tones (add9, add11, add13) that are NOT extended chords — the 7th is absent. Cadd9 is C-E-G-D, not C-E-G-B-D. The missing 7th keeps the sound open and bright, less jazzy than full extensions. The indie/pop/worship harmony staple. Radiohead, Coldplay, and every worship band live here.",
    tags: ["added note", "add9", "pop", "open"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "G4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chord-substitution",
    name: "Chord Substitution",
    category: "harmonic-devices",
    description:
      "Replacing a chord with a different chord that shares enough common tones or function to work in the same context. Tritone subs, diatonic subs (iii for I, vi for IV), and quality changes (minor for major) are all types. The general principle behind reharmonization — any chord can be replaced if you understand why it was there.",
    tags: ["substitution", "reharmonization", "common tones", "function"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },

  // ── Melodic Minor System ─────────────────────────────────
  {
    id: "locrian-natural-2",
    name: "Locrian ♮2",
    category: "scales-modes",
    description:
      "The 6th mode of melodic minor — a Locrian scale with a natural 2nd instead of a flat 2nd. The natural 2nd removes the harshest dissonance of regular Locrian while keeping the diminished quality (b3, b5). The go-to scale for m7b5 (half-diminished) chords in jazz. Makes ii chords in minor keys sound sophisticated instead of ugly.",
    tags: ["scale", "mode", "locrian", "melodic minor", "half-diminished"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["B3"], duration: "8n" },
        { notes: ["C#4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "8n" },
        { notes: ["B4"], duration: "4n" },
      ],
    },
  },
  {
    id: "melodic-minor-chord-scale-system",
    name: "Melodic Minor Chord-Scale System",
    category: "scales-modes",
    description:
      "The seven modes of melodic minor as a complete harmonic system: melodic minor (Im), Dorian ♭2 (iisus), Lydian augmented (♭IIImaj7#5), Lydian dominant (IV7), Mixolydian ♭6 (V7), Locrian ♮2 (vim7♭5), altered (vii). Knowing the parent scale for each mode lets you navigate the entire system from one set of notes. The second most important chord-scale system after major.",
    tags: ["scale", "system", "melodic minor", "modes", "chord-scale"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "Eb3", "G3", "B3"], duration: "4n" },
        { notes: ["D3", "F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["Eb3", "G3", "B3", "D4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4", "F4"], duration: "4n" },
        { notes: ["A3", "C4", "Eb4", "G4"], duration: "4n" },
        { notes: ["B3", "D4", "F4", "Ab4"], duration: "2n" },
      ],
    },
  },

  // ── Scales & Modes additions ─────────────────────────────

  {
    id: "aeolian-mode",
    name: "Aeolian Mode (Natural Minor)",
    category: "scales-modes",
    description:
      "The natural minor scale — the 6th mode of major. Darker than Dorian (no raised 6th), brighter than Phrygian (no lowered 2nd). The default minor sound in rock, metal, and pop. Counterparts and metalcore live here. The absence of a leading tone (♮7 instead of #7) means dominant chords don't pull as hard to the tonic — minor key progressions can wander more freely.",
    tags: ["scale", "minor", "mode", "rock", "metal", "fundamental"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G4"], duration: "8n" },
        { notes: ["A4"], duration: "4n" },
      ],
    },
  },
  {
    id: "phrygian-dominant",
    name: "Phrygian Dominant (5th Mode of Harmonic Minor)",
    category: "scales-modes",
    description:
      "Phrygian with a raised 3rd — the exotic-sounding scale built on the 5th degree of harmonic minor. The ♭2 gives it Phrygian darkness, the major 3rd gives it a dominant function, and the augmented 2nd gap between ♭2 and 3 creates that unmistakable Middle Eastern / Spanish flavor. Metalcore and prog use it for dramatic riffs; Shimomura uses it for villain themes.",
    tags: ["scale", "mode", "harmonic minor", "exotic", "metal", "spanish"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G#3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "hungarian-minor",
    name: "Hungarian Minor (Double Harmonic Minor)",
    category: "scales-modes",
    description:
      "Harmonic minor with a raised 4th — two augmented 2nd intervals give it an intensely exotic, dramatic quality. 1 2 ♭3 #4 5 ♭6 7. Sounds like harmonic minor turned up to 11. Used in film scoring for heightened drama, in metal for technical riff writing, and in Eastern European folk traditions. The #4 to 5 resolution adds a Lydian brightness inside an otherwise dark scale.",
    tags: ["scale", "exotic", "dramatic", "film", "metal"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["D3"], duration: "8n" },
        { notes: ["Eb3"], duration: "8n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
      ],
    },
  },
  {
    id: "double-harmonic-major",
    name: "Double Harmonic Major (Byzantine Scale)",
    category: "scales-modes",
    description:
      "Major scale with both ♭2 and ♭6 — two augmented 2nd intervals in a major context. 1 ♭2 3 4 5 ♭6 7. Sounds simultaneously exotic and bright, unlike anything in the major/minor system. No diatonic dominant chord (the V is diminished), so it resists standard functional harmony. Used in Middle Eastern and Balkan music, film scoring for ancient/mystical settings, and by metal bands looking for unusual tonalities.",
    tags: ["scale", "exotic", "byzantine", "film", "metal", "eastern"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["Db3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
      ],
    },
  },
  {
    id: "hirajoshi-scale",
    name: "Hirajoshi Scale",
    category: "scales-modes",
    description:
      "A Japanese pentatonic scale: 1 2 ♭3 5 ♭6. Five notes that immediately evoke Japan without sounding like a cliché if used with care. The minor 3rd and minor 6th create tension, but the pentatonic spacing keeps it open and uncluttered. Shimomura draws from this palette. Works beautifully for ambient textures, melodic fragments, and as a modal color over minor chords.",
    tags: ["scale", "pentatonic", "japanese", "ambient", "modal", "eastern"],
    audio: {
      tempo: 75,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["Eb3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["Ab3"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "in-scale",
    name: "In Scale (Miyako-Bushi)",
    category: "scales-modes",
    description:
      "The other essential Japanese pentatonic: 1 ♭2 4 5 ♭6. More dissonant and dramatic than Hirajoshi — the ♭2 gives it a Phrygian bite. The scale behind countless JRPG battle and boss themes. Shimomura uses it alongside Western harmony to create that distinctly Japanese RPG sound that's simultaneously familiar and foreign.",
    tags: ["scale", "pentatonic", "japanese", "dramatic", "jrpg", "eastern"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["B3"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "lydian-minor",
    name: "Lydian ♭7 (Overtone Scale)",
    category: "scales-modes",
    description:
      "Already listed as Acoustic Scale / Lydian Dominant, but worth knowing as the overtone scale — the first seven unique pitches of the harmonic series approximate this scale. 1 2 3 #4 5 6 ♭7. The #4 lifts, the ♭7 grounds. Louis Cole uses this sound constantly — it's bright but not resolved, energetic but not tense. The scale of funk-jazz fusion.",
    tags: ["scale", "mode", "overtone", "funk", "jazz", "louis cole"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["E3", "G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["F#3", "A3", "C4", "E4"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4", "F#4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prometheus-scale",
    name: "Prometheus Scale",
    category: "scales-modes",
    description:
      "A six-note synthetic scale: 1 2 3 #4 6 ♭7. Like Lydian dominant with the 5th removed — creating an ambiguous, floating quality. Scriabin invented it for his later works. No perfect 5th means no strong tonic anchor; the harmony drifts. Useful for atmospheric passages where you want harmonic color without functional gravity. Works well over dominant 7(#11) chords.",
    tags: ["scale", "synthetic", "atmospheric", "floating", "scriabin"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["F#3"], duration: "4n" },
        { notes: ["A3"], duration: "4n" },
        { notes: ["Bb3"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },

  // ── Modal Interchange / Borrowed Chords additions ───────

  {
    id: "borrowed-ii-minor",
    name: "Borrowed iiø from Minor",
    category: "harmonic-devices",
    description:
      "The half-diminished ii chord borrowed from the parallel minor — iiø7 replacing the diatonic ii7 in a major key. Darkens the pre-dominant area without fully committing to minor. The ♭5 of the chord (♭6 of the key) is the same note that makes minor iv so effective. Common in jazz and film scoring as a darker ii-V-I approach.",
    tags: ["borrowed chord", "predominant", "jazz", "film"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "borrowed-biii",
    name: "Borrowed ♭III in Major",
    category: "harmonic-devices",
    description:
      "A major chord on the lowered 3rd degree — borrowed from the parallel minor (Aeolian). Creates a sudden darkening that feels like stepping into a shadow. Moves naturally to ♭VI, IV, or back to I. Shimomura uses ♭III → ♭VI → ♭VII → I chains for that JRPG grandeur. In rock, ♭III is everywhere — Led Zeppelin, Radiohead, and every metalcore band.",
    tags: ["borrowed chord", "chromatic mediant", "rock", "jrpg"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "borrowed-from-lydian",
    name: "Borrowing from Lydian",
    category: "harmonic-devices",
    description:
      "Using chords built on the #4 degree of Lydian in an otherwise Ionian context — the II major chord (instead of ii minor) and the vii minor chord (instead of viiø). The II chord especially adds a bright, floating lift. Not just 'making the ii chord major' — it's borrowing an entire tonal color from a parallel mode. Steely Dan, Owane, and Japanese RPG composers reach for this constantly.",
    tags: ["borrowed chord", "lydian", "bright", "fusion"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C#4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F#4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "borrowed-from-dorian",
    name: "Borrowing from Dorian",
    category: "harmonic-devices",
    description:
      "In a minor key, using the natural 6th degree from Dorian instead of the ♭6 from Aeolian — most commonly heard as a major IV chord in a minor key (instead of minor iv). Brighter than Aeolian minor, less dark than Phrygian. The Dorian IV is the engine of funk, soul, and R&B minor key grooves — Chaka Khan, Stevie Wonder, D'Angelo all live here.",
    tags: ["borrowed chord", "dorian", "funk", "soul", "rnb"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "borrowed-from-phrygian",
    name: "Borrowing from Phrygian",
    category: "harmonic-devices",
    description:
      "Using the ♭II chord (Neapolitan relationship) or ♭ii from Phrygian in a minor key context. The ♭2 scale degree is the most exotic single-note color you can borrow. In metalcore (Counterparts, Architects), the ♭II power chord creates menacing tension. In film scoring, the ♭II major chord in root position is the Neapolitan — dramatic and stately.",
    tags: ["borrowed chord", "phrygian", "metal", "film", "dramatic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "2n" },
        { notes: ["A2", "C3", "E3"], duration: "1n" },
      ],
    },
  },
  {
    id: "mode-mixture-chains",
    name: "Modal Mixture Chain",
    category: "harmonic-devices",
    description:
      "Stringing together multiple borrowed chords from different parallel modes in sequence — ♭VII (Mixolydian) → ♭VI (Aeolian) → ♭II (Phrygian) → I. Each chord comes from a different mode, but the chromatic bass motion and common tones make it sound coherent. The key doesn't modulate — it shimmers between parallel modes. Shimomura does this constantly: a single phrase might touch three different parallel modes before resolving.",
    tags: ["borrowed chord", "chain", "mixture", "chromatic", "jrpg", "film"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },

  // ── Modulation additions ────────────────────────────────

  {
    id: "chromatic-mediant-modulation",
    name: "Chromatic Mediant Modulation",
    category: "modulation",
    description:
      "Modulating by chromatic third — C major to E major, C major to Ab major, C major to Eb major, or C major to A major. The root moves by a major or minor 3rd, and at least one note is chromatically altered. Shimomura's signature move: the key shifts by a third and suddenly you're in a completely different emotional world, but the transition feels natural because third relationships are so fundamental to harmony.",
    tags: ["modulation", "chromatic mediant", "shimomura", "film", "jrpg"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "D#4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "semitone-modulation",
    name: "Semitone Modulation (Half-Step Key Change)",
    category: "modulation",
    description:
      "Shifting the entire key up or down by a half step — the maximum tonal distance for the minimum pitch distance. Up a half step feels like a sudden surge of energy (pop key changes, the classic pre-final-chorus lift). Down a half step feels eerie and destabilizing. The keys share almost no diatonic chords, so the shift is always dramatic. Used in pop, musical theater, and metalcore (Counterparts shifts keys between sections).",
    tags: ["modulation", "semitone", "dramatic", "pop", "metal"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "deceptive-modulation",
    name: "Deceptive Modulation",
    category: "modulation",
    description:
      "Setting up a resolution to one key but landing in another — the harmonic equivalent of a plot twist. A ii-V that resolves not to the expected I but to a chord that becomes the new tonic. The listener's expectations are built and then redirected. Coltrane and Shimomura both exploit this: you think you know where the harmony is going, and the arrival in the 'wrong' key creates wonder rather than confusion.",
    tags: ["modulation", "deceptive", "surprise", "jazz", "film"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "G4"], duration: "1n" },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "modal-modulation",
    name: "Modal Modulation (Same Root, Different Mode)",
    category: "modulation",
    description:
      "Keeping the same tonic but shifting to a different mode — C Dorian to C Lydian, C Aeolian to C Mixolydian. Not a key change in the traditional sense, but the emotional color shifts dramatically. The tonal center stays grounded while the entire harmonic palette transforms around it. Louis Cole does this mid-song: a section in C minor suddenly becomes C Lydian and the mood flips from brooding to euphoric without any sense of having 'moved.'",
    tags: ["modulation", "modal", "mode change", "harmonic color", "louis cole"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["F#3", "A3", "C#4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "pivot-tone-modulation",
    name: "Pivot Tone Modulation",
    category: "modulation",
    description:
      "A single sustained note shared between the old and new key — the harmony changes around it while one voice holds still. Unlike pivot chord modulation (where an entire chord has dual function), here just one pitch bridges the gap. That sustained note is the listener's lifeline: everything else transforms, but that one thread of continuity makes the shift feel organic rather than arbitrary.",
    tags: ["modulation", "pivot", "common tone", "voice-leading", "smooth"],
    audio: {
      tempo: 75,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n" },
        { notes: ["A3", "C#4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "abrupt-modulation",
    name: "Abrupt Modulation (Gear Shift)",
    category: "modulation",
    description:
      "A key change with zero preparation — the new key simply starts, no pivot chord, no common tone, no transition. Raw and disorienting or exhilarating depending on context. DnB and electronic music do this at section boundaries; metalcore does it between verses and choruses. The lack of preparation IS the effect: the listener is thrown into new territory with no warning. Works best when the new key is distantly related.",
    tags: ["modulation", "abrupt", "dramatic", "electronic", "metal"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F#3", "A#3", "C#4"], duration: "4n" },
        { notes: ["F#3", "A#3", "C#4"], duration: "4n" },
        { notes: ["B2", "D#3", "F#3"], duration: "2n" },
      ],
    },
  },

  // ── Bass (additional) ────────────────────────────────────
  {
    id: "chromatic-bass-enclosure",
    name: "Chromatic Bass Enclosure",
    category: "bass",
    description:
      "Approaching a target bass note from a half step above AND below — enclosing it chromatically before landing. The bass circles the target note like a hawk before striking. Creates maximum anticipation and a strong sense of arrival. A walking bass fundamental that also appears in gospel, funk, and R&B bass lines.",
    tags: ["bass", "enclosure", "chromatic", "approach", "walking"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["Db3"], duration: "8n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["Gb3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F3"], duration: "4n", velocity: 0.9 },
        { notes: ["Ab3"], duration: "8n" },
        { notes: ["F#3"], duration: "8n" },
        { notes: ["G3"], duration: "4n", velocity: 0.9 },
      ],
    },
  },

  // ── Rhythm (additional) ──────────────────────────────────
  {
    id: "hypermetric-displacement",
    name: "Hypermetric Displacement",
    category: "rhythm",
    description:
      "Shifting where the 'strong bar' falls in a multi-bar phrase — the hypermeter is the meter of measures, not beats. If a 4-bar phrase normally accents bar 1, hypermetric displacement moves that accent to bar 2 or 3. The listener feels disoriented at the phrase level, not the beat level. Stravinsky, Bartók, and sophisticated pop arrangers use this.",
    tags: ["hypermeter", "displacement", "phrase", "stravinsky"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "metrical-dissonance",
    name: "Metrical Dissonance",
    category: "rhythm",
    description:
      "A conflict between two or more simultaneous metric layers — one part implies one meter while another implies a different one. Not polyrhythm (which shares a common downbeat) but genuine metric friction where the layers disagree about where '1' is. The technical term for what makes Louis Cole grooves feel so unsettled yet compelling. Harald Krebs's concept, essential for modern rhythmic analysis.",
    tags: ["metrical dissonance", "conflict", "layering", "krebs"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "changing-meter",
    name: "Changing Meter",
    category: "rhythm",
    description:
      "Switching time signatures from bar to bar — 4/4 to 3/4 to 5/4 to 4/4. Each bar is internally regular but the barline moves. Creates an organic, speech-like rhythmic flow. Stravinsky's Rite of Spring is the extreme case; Dave Brubeck, Radiohead, and progressive rock use it constantly. Different from asymmetrical meter (which stays in one odd time).",
    tags: ["changing meter", "time signature", "stravinsky", "progressive"],
    audio: {
      tempo: 120,
      timeSignature: [4, 4],
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["E3"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "asymmetrical-meter",
    name: "Asymmetrical Meter",
    category: "rhythm",
    description:
      "A meter that can't be divided into equal groups — 5/8, 7/8, 11/8, etc. The bar subdivides into unequal groups: 7/8 might be 2+2+3 or 3+2+2. Each grouping creates a different rhythmic feel. Balkan folk music, Brubeck's 'Take Five' (5/4), and progressive rock live in asymmetrical meters. The 'limping' quality is the whole point.",
    tags: ["asymmetrical", "odd meter", "balkan", "brubeck"],
    audio: {
      tempo: 120,
      timeSignature: [7, 8],
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "ametric-free-meter",
    name: "Ametric / Free Meter",
    category: "rhythm",
    description:
      "Music without a discernible regular pulse or barline — rhythms are free, elastic, and determined by the performer or the natural contour of the melody. Gregorian chant, free jazz, ambient music, and rubato cadenzas are all ametric. Not chaos — the performer shapes time intuitively rather than counting it. The absence of meter IS the expression.",
    tags: ["free", "ametric", "rubato", "ambient"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C4"], duration: "2n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "1n" },
        { notes: ["F4"], duration: "4n." },
        { notes: ["D4"], duration: "2n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "layered-meter",
    name: "Layered Meter",
    category: "rhythm",
    description:
      "Multiple instruments each playing in their own meter simultaneously — the drums in 4/4, the bass in 3/4, the keyboard in 5/4. Like polymeter but more pervasive — the entire texture is a mosaic of different time signatures. Charles Ives, Conlon Nancarrow, and experimental electronic music. The result is a constantly shifting rhythmic surface.",
    tags: ["layering", "simultaneous meters", "ives", "experimental"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E4"], duration: "4n", velocity: 0.9 },
        { notes: ["G3"], duration: "4n.", velocity: 0.6 },
        { notes: ["E4"], duration: "4n", velocity: 0.6 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["G3", "E4"], duration: "4n", velocity: 0.6 },
        { notes: ["C3"], duration: "4n.", velocity: 0.9 },
      ],
    },
  },

  // ── Groove Vocabulary ────────────────────────────────────
  {
    id: "hi-hat-displacement",
    name: "Hi-Hat Displacement",
    category: "funk",
    description:
      "Moving hi-hat accents off the standard 8th or 16th-note grid — opening the hi-hat on unusual beats, accenting 'e' and 'a' instead of '1' and '2'. The hi-hat is the rhythmic compass of a groove; displacing it reorients the entire feel. J Dilla, Questlove, and Nate Smith use hi-hat displacement to create signature grooves.",
    tags: ["groove", "hi-hat", "displacement", "drums", "dilla"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.8 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.8 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "kick-snare-independence",
    name: "Kick/Snare Independence",
    category: "funk",
    description:
      "The kick drum and snare operating as independent melodic voices rather than a fixed pattern. The kick weaves around the bass line; the snare responds to the vocals or horns. Neither is locked to a grid — both react to the musical context. The difference between a drum machine and a great drummer. Clyde Stubblefield, Bernard Purdie, and Louis Cole.",
    tags: ["groove", "drums", "independence", "kick", "snare"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.9 },
        { notes: ["E4"], duration: "8n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["C2"], duration: "8n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n", velocity: 0.9 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["E4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "dead-note-placement",
    name: "Dead-Note Placement",
    category: "funk",
    description:
      "The art of where to place muted (dead) notes in a bass line or guitar part. Dead notes add percussive texture without pitch — they fill rhythmic gaps and define the groove's skeleton. The difference between a bass line that grooves and one that just plays notes. Bootsy Collins and Larry Graham build entire grooves from the interplay of pitched notes and dead notes.",
    tags: ["groove", "dead notes", "muted", "percussion", "funk bass"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["C3"], duration: "16n", velocity: 0.15 },
        { notes: ["C3"], duration: "16n", velocity: 0.15 },
        { notes: ["Eb3"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "16n", velocity: 0.15 },
        { notes: ["G3"], duration: "16n", velocity: 0.9 },
        { notes: ["C3"], duration: "16n", velocity: 0.15 },
        { notes: ["C3"], duration: "16n", velocity: 0.15 },
        { notes: ["F3"], duration: "8n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "funk-guitar-muting",
    name: "Funk Guitar Muting",
    category: "funk",
    description:
      "Using the fretting hand to mute strings between chord stabs, creating a percussive 'chick' sound. The muted strums are as important as the voiced chords — they define the 16th-note grid. Nile Rodgers, Jimmy Nolen, and Prince built entire careers on the relationship between open and muted strums. The guitar becomes a rhythm instrument first, a harmonic instrument second.",
    tags: ["groove", "guitar", "muting", "percussive", "rhythm guitar"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E4", "A4", "D5"], duration: "16n", velocity: 0.9 },
        { notes: ["C4"], duration: "16n", velocity: 0.15 },
        { notes: ["C4"], duration: "16n", velocity: 0.15 },
        { notes: ["E4", "A4", "D5"], duration: "16n", velocity: 0.7 },
        { notes: ["C4"], duration: "16n", velocity: 0.15 },
        { notes: ["E4", "A4", "D5"], duration: "16n", velocity: 0.9 },
        { notes: ["C4"], duration: "16n", velocity: 0.15 },
        { notes: ["C4"], duration: "16n", velocity: 0.15 },
      ],
    },
  },
  {
    id: "drum-orchestration",
    name: "Drum Orchestration",
    category: "rhythm",
    description:
      "Distributing a rhythmic pattern across different drums and cymbals — the same rhythm played on hi-hat, ride, toms, or cowbell creates completely different musical effects. The rhythm stays the same; the timbre changes. Tony Williams, Steve Gadd, and Vinnie Colaiuta orchestrate the kit like a composer orchestrates a symphony.",
    tags: ["drums", "orchestration", "timbre", "kit"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.9 },
        { notes: ["A4"], duration: "8n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["A4"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "8n", velocity: 0.9 },
        { notes: ["A4"], duration: "8n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.9 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "pocket-displacement",
    name: "Pocket Displacement",
    category: "funk",
    description:
      "Deliberately playing ahead of or behind the metronomic pulse — not by accident but as an expressive choice. Playing slightly behind the beat creates a laid-back, heavy feel; slightly ahead creates urgency and drive. The pocket isn't on the grid — it's in the space around it. D'Angelo's 'Voodoo' album is the masterclass in behind-the-beat pocket.",
    tags: ["groove", "pocket", "timing", "feel", "dangelo"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.9 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
      ],
    },
  },

  // ── Form (additional) ────────────────────────────────────
  {
    id: "sentence-form",
    name: "Sentence Form",
    category: "form",
    description:
      "An 8-bar phrase structure: 2-bar basic idea, 2-bar repetition (possibly varied), then 4-bar continuation that fragments, sequences, and drives to a cadence. The 'presentation + continuation' shape. Beethoven's themes are almost all sentences. The sentence builds momentum by breaking its opening idea into smaller pieces — compression creates energy.",
    tags: ["form", "sentence", "phrase", "beethoven", "classical"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["A4"], duration: "2n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "period-form",
    name: "Period Form",
    category: "form",
    description:
      "An 8-bar phrase structure made of two 4-bar halves: the antecedent (question) ends on a half cadence, and the consequent (answer) ends on an authentic cadence. The two halves share similar beginnings but diverge at the end. Mozart's themes are almost all periods. The most balanced, symmetrical phrase structure in tonal music.",
    tags: ["form", "period", "antecedent", "consequent", "mozart"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "hybrid-phrase",
    name: "Hybrid Phrase",
    category: "form",
    description:
      "A phrase that mixes elements of sentence and period — an antecedent followed by a continuation, or a presentation followed by a consequent. Real music rarely conforms perfectly to textbook models. Hybrid phrases are the norm, not the exception. Recognizing the hybrid helps you see which parts of the phrase are doing 'sentence work' and which are doing 'period work.'",
    tags: ["form", "hybrid", "phrase", "analysis", "flexible"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "phrase-expansion",
    name: "Phrase Expansion",
    category: "form",
    description:
      "Stretching a phrase beyond its expected length — adding extra bars through repetition, cadential extension, deceptive cadences, or interpolated material. An 8-bar phrase becomes 10 or 12. Creates surprise because the listener's internal clock expects the phrase to end but it keeps going. Beethoven stretches phrases like taffy; Mahler stretches them into entire paragraphs.",
    tags: ["form", "expansion", "extension", "phrase", "surprise"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "phrase-contraction",
    name: "Phrase Contraction",
    category: "form",
    description:
      "Shortening a phrase below its expected length — compressing material, truncating endings, or eliding one phrase into the next. An 8-bar phrase becomes 6 or 7. Creates urgency and forward momentum because the listener doesn't get the expected breathing room. Beethoven's development sections use contraction to build dramatic tension.",
    tags: ["form", "contraction", "truncation", "urgency", "elision"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "rounded-binary",
    name: "Rounded Binary",
    category: "form",
    description:
      "A two-part form (A-B) where the B section brings back material from A near its end: A || B-A'. The 'rounding' creates a satisfying return without the full weight of a recapitulation. The direct ancestor of sonata form. Most Baroque dance movements, minuets, and simple classical themes use rounded binary.",
    tags: ["form", "binary", "rounded", "return", "baroque"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["D4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "rondo",
    name: "Rondo",
    category: "form",
    description:
      "A form built around a recurring main theme (the refrain) alternating with contrasting episodes: A-B-A-C-A or A-B-A-C-A-B-A. The refrain returns in the home key each time, providing anchoring familiarity while the episodes explore new material. Classical finales, pop music with recurring choruses, and film score main titles all use rondo principles.",
    tags: ["form", "rondo", "refrain", "episodes", "recurring"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "strophic-form",
    name: "Strophic Form",
    category: "form",
    description:
      "The same music repeated for each verse with different lyrics — AAA form. The simplest and oldest song structure. Folk songs, hymns, 'Amazing Grace,' and most campfire songs are strophic. The music doesn't develop; the text does. Powerful in its simplicity — the unchanging music becomes a vessel for changing meaning.",
    tags: ["form", "strophic", "verse", "simple", "folk"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "tag-ending",
    name: "Tag Ending",
    category: "form",
    description:
      "Repeating the last phrase (or last few bars) of a song multiple times at the end, often with variations — fading out, intensifying, or modulating up. The song could have ended but it tags on extra repetitions for emotional emphasis. The classic pop/gospel/jazz ending technique. 'Hey Jude' is the most famous tag ending ever written.",
    tags: ["form", "tag", "ending", "repetition", "coda"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "false-ending",
    name: "False Ending",
    category: "form",
    description:
      "The music sounds like it's over — a big final cadence, silence, maybe even applause — then it comes back for more. A compositional prank. Creates surprise, humor, or dramatic intensity depending on context. Haydn's 'Joke' Quartet is the classical example; rock concerts, Beethoven codas, and gospel services all use false endings.",
    tags: ["form", "false ending", "surprise", "joke", "haydn"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },

  // ── Counterpoint (additional) ────────────────────────────
  {
    id: "fauxbourdon",
    name: "Fauxbourdon",
    category: "voice-leading",
    description:
      "Parallel first-inversion triads moving in stepwise motion — all three voices move in the same direction by the same interval. Technically 'illegal' in strict counterpoint (parallel motion everywhere) but the resulting sound is lush and hymn-like. Medieval in origin, but the same texture appears in Debussy, Ravel, and golden age Hollywood. The bridge between parallel harmony and counterpoint.",
    tags: ["counterpoint", "fauxbourdon", "parallel", "first inversion", "medieval"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "A3"], duration: "4n" },
        { notes: ["D3", "F3", "B3"], duration: "4n" },
        { notes: ["E3", "G3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "E4"], duration: "4n" },
        { notes: ["A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "free-counterpoint",
    name: "Free Counterpoint",
    category: "voice-leading",
    description:
      "Counterpoint freed from strict species rules — voices move independently with rhythmic variety, occasional dissonance, and flexible treatment of consonance. The real-world application of counterpoint training. Bach's fugues are 'free' counterpoint (they follow principles, not rigid species rules). Any well-crafted multi-voice texture in any style uses free counterpoint.",
    tags: ["counterpoint", "free", "flexible", "bach", "practical"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G3", "E4"], duration: "4n" },
        { notes: ["F3", "D4"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["D3", "F4"], duration: "4n" },
        { notes: ["C3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "contrapuntal-dissonance",
    name: "Contrapuntal Dissonance",
    category: "voice-leading",
    description:
      "Dissonance created by the movement of independent voices — passing tones, suspensions, and anticipations that clash momentarily before resolving. In counterpoint, dissonance isn't a mistake; it's a tool with strict rules about how it's approached and resolved. Controlled contrapuntal dissonance is what makes polyphonic music expressive. Without it, counterpoint is just parallel motion.",
    tags: ["counterpoint", "dissonance", "resolution", "suspension", "tension"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["C3", "F4"], duration: "4n" },
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["B2", "D4"], duration: "2n" },
        { notes: ["C3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "counterpoint-with-chromaticism",
    name: "Counterpoint with Chromaticism",
    category: "voice-leading",
    description:
      "Using chromatic tones within contrapuntal writing — chromatic passing tones, chromatic neighbor tones, and cross-relations between voices. Adds expressive intensity and harmonic richness. Bach's late works (The Art of Fugue, Musical Offering) push chromatic counterpoint to its limit. Also the foundation of Wagner's and Mahler's orchestral writing, where chromatic lines create constantly shifting harmony.",
    tags: ["counterpoint", "chromatic", "bach", "wagner", "expressive"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["C#3", "Eb4"], duration: "4n" },
        { notes: ["D3", "D4"], duration: "4n" },
        { notes: ["Eb3", "C#4"], duration: "4n" },
        { notes: ["E3", "C4"], duration: "4n" },
        { notes: ["F3", "B3"], duration: "4n" },
        { notes: ["G3", "C4"], duration: "2n" },
      ],
    },
  },

  // ── Orchestration (additional) ───────────────────────────
  {
    id: "register-doubling",
    name: "Register Doubling",
    category: "orchestration",
    description:
      "Doubling a line in a specific register to change its character — a melody doubled in the high register sparkles; in the low register it darkens. Not just octave doubling but deliberately choosing which register to reinforce. The same melody in violins + piccolo vs. violins + bassoon creates completely different emotional effects. Register choice IS orchestration.",
    tags: ["register", "doubling", "harmonic color", "range"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "C5"], duration: "4n" },
        { notes: ["D3", "D5"], duration: "4n" },
        { notes: ["E3", "E5"], duration: "4n" },
        { notes: ["G3", "G5"], duration: "2n" },
      ],
    },
  },
  {
    id: "timbre-voice-leading",
    name: "Timbre-Based Voice Leading",
    category: "orchestration",
    description:
      "Moving a melody between instruments as a compositional technique — the melody passes from flute to oboe to clarinet, each handoff creating a color change while the line continues. The voice leading isn't between pitches but between timbres. Ravel's Boléro is the textbook example. Webern, Schoenberg (Klangfarbenmelodie), and film composers use this constantly.",
    tags: ["timbre", "voice-leading", "harmonic color", "ravel"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "timbre-structural-form",
    name: "Timbre as Structural Form",
    category: "orchestration",
    description:
      "Using orchestral color changes to articulate form — the A section is strings, the B section is winds, the return to A brings back strings with added brass. The instrumentation itself becomes the formal signpost. Listeners hear form through timbre changes even when they can't follow harmonic structure. Golden age Hollywood used this powerfully — each scene's emotional shift was marked by a new instrumental color.",
    tags: ["timbre", "form", "structure", "hollywood"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C4", "E4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "divisi-voice-leading",
    name: "Divisi Voice Leading",
    category: "orchestration",
    description:
      "Voice leading within a divisi string section — each desk's part moves smoothly to its next note, creating the effect of a single section breathing through chord changes. The individual voice-leading lines are invisible to the listener; they hear a shimmering chord that transforms. Mahler, Strauss, and John Williams create their most emotional moments this way.",
    tags: ["divisi", "voice-leading", "strings", "mahler"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "G4", "B4"], duration: "1n" },
        { notes: ["G3", "C4", "E4", "G4", "C5"], duration: "1n" },
        { notes: ["F3", "A3", "C4", "F4", "A4"], duration: "1n" },
      ],
    },
  },

  // ── Melody Against Harmony ──────────────────────────────
  {
    id: "diatonic-melody-chromatic-harmony",
    name: "Diatonic Melody over Chromatic Harmony",
    category: "melodic-devices",
    description:
      "A simple, singable diatonic melody supported by rich chromatic harmony beneath it. The melody stays in one key while the chords wander through chromatic substitutions, borrowed chords, and modulations. The simplicity of the melody makes the harmonic complexity accessible. Broadway standards, Jobim bossa novas, and golden age Hollywood themes use this constantly.",
    tags: ["harmony", "diatonic", "chromatic", "contrast"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "C4", "F4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-melody-diatonic-harmony",
    name: "Chromatic Melody over Diatonic Harmony",
    category: "melodic-devices",
    description:
      "A chromatic, angular, or adventurous melody over stable diatonic chords. The harmony provides a safe harmonic bed while the melody explores chromatic passing tones, enclosures, and alterations. The tension between the wandering melody and the grounded harmony creates interest without chaos. Bebop improvisation over standards is exactly this.",
    tags: ["harmony", "chromatic", "diatonic", "bebop"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
        { notes: ["G3", "B3", "D4", "F#4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "non-chord-tone-emphasis",
    name: "Non-Chord Tone Emphasis",
    category: "melodic-devices",
    description:
      "Deliberately placing non-chord tones on strong beats for expressive effect — the melody lands on the 9th, 11th, 13th, or altered tones instead of chord tones. Creates tension and color because the melody 'leans' into dissonance. The difference between a melody that outlines chords (simple) and one that plays against them (sophisticated). Wayne Shorter's melodies are built on this.",
    tags: ["non-chord tone", "tension", "harmonic color", "shorter"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "B4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "upper-extension-melody",
    name: "Upper-Extension Melody",
    category: "melodic-devices",
    description:
      "A melody built primarily from chord extensions (9ths, 11ths, 13ths) rather than roots, 3rds, and 5ths. The melody floats above the chord, connected to it but not outlining it. Creates a modern, sophisticated, 'floating' quality. Chick Corea, Pat Metheny, and film composers use upper-extension melodies to create themes that sound both angular and beautiful.",
    tags: ["extensions", "upper structure", "floating", "modern"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["F#4"], duration: "4n" },
        { notes: ["A4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melodic-reharmonization",
    name: "Melodic Reharmonization",
    category: "harmonic-devices",
    description:
      "Keeping the melody unchanged while completely altering the harmony beneath it. The same tune over different chords becomes a different song emotionally. A melody note that was a chord tone becomes a tension; a resolution becomes a suspension. Jazz musicians reharmonize standards as a creative practice. Film composers reharmonize themes to reflect changing dramatic contexts.",
    tags: ["reharmonization", "melody", "interpretation", "jazz"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "D4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4", "E4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "contrafact",
    name: "Contrafact",
    category: "melodic-devices",
    description:
      "A new melody written over an existing chord progression. The chords stay; the tune changes. Charlie Parker wrote 'Anthropology' over 'I Got Rhythm' changes; 'Donna Lee' over 'Indiana.' The entire bebop repertoire is built on contrafacts of standards. A fundamental compositional technique that connects improvisation to composition — you're writing a new melody over borrowed harmony.",
    tags: ["contrafact", "bebop", "standards", "composition"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["G3", "B3", "D4"], duration: "4n." },
      ],
    },
  },
  {
    id: "melody-harmony-counterpoint",
    name: "Melody-Harmony Counterpoint",
    category: "melodic-devices",
    description:
      "Treating the melody and the harmonic progression as two independent contrapuntal lines that interact. The melody has its own arc; the harmony has its own arc; they agree sometimes and disagree sometimes. When they align, you get resolution; when they diverge, you get tension. This is the deepest way to think about melody-and-chords — not as 'melody over accompaniment' but as two voices in conversation.",
    tags: ["harmony", "counterpoint", "interaction", "conversation"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "D4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },

  // ── Modern Harmony ──────────────────────────────────────
  {
    id: "negative-harmony",
    name: "Negative Harmony",
    category: "harmonic-devices",
    description:
      "Reflecting a chord or melody around an axis (typically the midpoint between the root and 5th) to generate its 'negative' mirror image. C major becomes F minor; G7 becomes Fm6. Popularized by Jacob Collier from Ernst Levy's theory. Generates unexpected substitutions that share the same intervallic 'weight' as the original. A creative tool, not a theory — useful for finding chords you wouldn't reach by other means.",
    tags: ["negative", "mirror", "collier", "substitution"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "pitch-axis-theory",
    name: "Pitch Axis Theory",
    category: "harmonic-devices",
    description:
      "Keeping a single pitch (the axis) constant while changing the mode or chord quality around it — C Ionian → C Mixolydian → C Phrygian → C Lydian. The root stays the same; the color shifts. Joe Satriani popularized this for guitar; film composers use it to change emotional color without changing key center. A powerful tool for modal composition where traditional modulation doesn't apply.",
    tags: ["pitch axis", "modal", "satriani", "harmonic color"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "tension-over-stable-harmony",
    name: "Tension Note over Stable Harmony",
    category: "melodic-devices",
    description:
      "Holding or emphasizing a dissonant note against a consonant chord — a b9 against a major chord, a #11 against a dominant, a b13 ringing over a resolution. The stable harmony makes the tension bearable; the tension makes the harmony interesting. The melody creates drama that the chords alone don't have. Wayne Shorter and Thelonious Monk are masters of this.",
    tags: ["tension", "dissonance", "stable", "monk"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "Db4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },

  // ── Additional Concepts ─────────────────────────────────
  {
    id: "chromatic-inner-voice-motion",
    name: "Chromatic Inner-Voice Motion",
    category: "voice-leading",
    description:
      "A chromatic line moving through the inner voices of a chord progression — not the melody, not the bass, but the alto or tenor register. The outer voices hold still or move diatonically while the inner voice slides chromatically, generating constantly shifting chord qualities. The secret sauce behind golden age Hollywood lushness and late Romantic orchestral writing. Mahler and Korngold build entire emotional arcs from a single chromatic inner voice.",
    tags: ["voice-leading", "chromatic", "inner voice", "hollywood", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "D3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "Db3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "C3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "harp-arpeggiation",
    name: "Harp Arpeggiation",
    category: "orchestration",
    description:
      "Rolling a chord across the harp's strings in a sweeping arpeggio — the notes don't sound simultaneously but cascade from low to high (or high to low). Adds sparkle, magic, and fairy-tale quality. The harp arpeggio is a cinematic shorthand for wonder, transition, and enchantment. Debussy, Ravel, and every Disney score use harp arpeggiation as a signature color.",
    tags: ["harp", "arpeggio", "cascade", "cinematic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3"], duration: "16n" },
        { notes: ["E3"], duration: "16n" },
        { notes: ["G3"], duration: "16n" },
        { notes: ["C4"], duration: "16n" },
        { notes: ["E4"], duration: "16n" },
        { notes: ["G4"], duration: "16n" },
        { notes: ["C5"], duration: "16n" },
        { notes: ["E5"], duration: "2n" },
      ],
    },
  },
  {
    id: "melodic-appoggiatura-stable-harmony",
    name: "Melodic Appoggiatura over Stable Harmony",
    category: "melodic-devices",
    description:
      "A melody that leans heavily into appoggiaturas — accented non-chord tones that resolve by step — over simple, stable chords. The chords provide the foundation; the appoggiaturas provide the emotion. Mozart's slow movements live here. The melody 'hurts' on the strong beat and 'heals' on the weak beat. The simplest way to make a melody ache.",
    tags: ["appoggiatura", "stable harmony", "expressive", "mozart"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "B4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "A4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "A4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "long-breath-phrasing",
    name: "Long-Breath Phrasing",
    category: "form",
    description:
      "Musical phrases that extend far beyond the typical 4- or 8-bar length, spinning out continuously without obvious cadence points. The melody keeps going, one idea flowing into the next, resisting the urge to stop and breathe. Creates a sense of vastness and emotional inevitability. Mahler's adagios, Brahms's development sections, and John Williams's sweeping themes use long-breath phrasing to create that feeling of being carried by the music.",
    tags: ["form", "phrasing", "long", "continuous", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "delayed-resolution",
    name: "Delayed Resolution / Prolonged Resolution",
    category: "harmonic-devices",
    description:
      "Withholding the expected resolution — inserting deceptive cadences, suspensions, passing chords, or additional dominants between the point of tension and its resolution. The longer the delay, the more satisfying (or devastating) the eventual arrival. Wagner built entire operas on this principle. The 'Tristan' chord doesn't resolve for four hours. Every great film score climax depends on knowing exactly how long to delay the resolution.",
    tags: ["resolution", "delay", "tension", "wagner"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "appoggiatura-chain",
    name: "Appoggiatura Chain",
    category: "melodic-devices",
    description:
      "A series of appoggiaturas in sequence — each resolution becomes the preparation for the next appoggiatura. The melody lurches from dissonance to consonance to dissonance again, creating a chain of emotional tension and release. Intensely expressive. Puccini's arias are built from appoggiatura chains. The technique turns a simple melody into something that tugs relentlessly at the heart.",
    tags: ["appoggiatura", "chain", "expressive", "puccini"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "expressive-non-chord-tones",
    name: "Expressive Non-Chord Tones",
    category: "melodic-devices",
    description:
      "Using non-chord tones (suspensions, appoggiaturas, escape tones, anticipations) not as theoretical constructs but as expressive devices — choosing which type of dissonance to use based on the emotion you want. A suspension aches; an appoggiatura stabs; an anticipation pushes forward; an escape tone floats away. The same harmonic context can feel completely different depending on which non-chord tone treatment you choose.",
    tags: ["non-chord tones", "expression", "dissonance", "emotional"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "B3"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "tonal-ambiguity",
    name: "Tonal Ambiguity",
    category: "harmonic-devices",
    description:
      "Deliberately obscuring the key center — using chords, modes, or voice leading that could belong to multiple keys simultaneously. The listener can't quite locate 'home.' Symmetrical chords (diminished 7th, augmented triads), common-tone progressions, and modal harmony all create tonal ambiguity. Debussy, Ravel, and Radiohead live in this space. Not atonal — the key is there, but it shimmers and shifts like light on water.",
    tags: ["ambiguity", "tonal", "debussy", "floating"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G#3"], duration: "2n" },
        { notes: ["Ab3", "C4", "E4"], duration: "2n" },
        { notes: ["E3", "G#3", "B#3"], duration: "2n" },
        { notes: ["C3", "E3", "G#3"], duration: "1n" },
      ],
    },
  },
  {
    id: "orchestral-transparency",
    name: "Orchestral Transparency",
    category: "orchestration",
    description:
      "Writing for orchestra with deliberate lightness — few doublings, exposed solo lines, open spacing, and silence between gestures. The opposite of thick, dense orchestration. You hear every instrument individually; the texture breathes. Mozart, Mendelssohn, and Ravel (in his chamber-like orchestral passages) are masters of transparency. Often more difficult than writing thick — every note is exposed, so every note matters.",
    tags: ["transparency", "light", "open", "ravel"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C3"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["D3"], duration: "2n" },
      ],
    },
  },
  // ── Golden Age Hollywood / Romantic ─────────────────────────
  {
    id: "melodic-arch",
    name: "Melodic Arch",
    category: "melodic-devices",
    description:
      "A melody that rises to a single climax point and then descends — the most natural, singable melodic shape in Western music. The arch creates a built-in dramatic structure: tension builds on the way up, release on the way down. Nearly every great Hollywood theme follows this shape. The peak usually lands on the most emotionally charged note or the harmonic climax.",
    tags: ["arch", "shape", "hollywood", "climax"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "climax-note",
    name: "Climax Note",
    category: "melodic-devices",
    description:
      "The single highest (or most dramatically weighted) note in a melody — the peak of the melodic arch. Effective climax notes are approached by step or small leap and appear only once, making them feel earned. Placing the climax too early deflates the phrase; too late feels rushed. The golden-era composers often placed it about two-thirds of the way through the phrase, mirroring narrative structure.",
    tags: ["climax", "peak", "drama", "phrasing"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C5"], duration: "2n.", velocity: 0.9 },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "long-range-dynamic-arc",
    name: "Long-Range Dynamic Arc",
    category: "orchestration",
    description:
      "Shaping dynamics across an entire scene, movement, or cue rather than phrase by phrase. The orchestra starts at one dynamic level and gradually moves to another over minutes, not bars. This is how Korngold, Steiner, and John Williams build emotional trajectory — the audience doesn't notice the crescendo happening, they just feel the world expanding. The inverse (a long diminuendo into nothing) is equally powerful.",
    tags: ["dynamics", "arc", "film", "hollywood"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.3 },
        { notes: ["D3", "F3", "A3"], duration: "2n", velocity: 0.45 },
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.75 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "register-expansion",
    name: "Register Expansion",
    category: "orchestration",
    description:
      "Gradually widening the pitch range of the orchestra — adding higher and lower instruments over time until the full registral space is filled. Creates a sense of opening up, of vastness growing. A classic technique in late Romantic scoring: start with mid-range strings, add high woodwinds, then add low brass and basses. The emotional effect is like a camera pulling back to reveal an enormous landscape.",
    tags: ["register", "expansion", "romantic", "space"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G2", "C3", "E3", "G3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "register-contraction",
    name: "Register Contraction",
    category: "orchestration",
    description:
      "The opposite of register expansion — gradually narrowing the pitch range, pulling outer voices inward until the texture is concentrated in a small registral band. Creates intimacy, focus, or suffocation depending on context. Often used to transition from a big orchestral passage to a solo instrument, or to create a sense of the world closing in.",
    tags: ["register", "contraction", "intimate", "focus"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "C3", "E3", "G3", "C4", "E4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "orchestral-swell",
    name: "Orchestral Swell",
    category: "orchestration",
    description:
      "A rapid crescendo to a peak followed by an immediate or gradual decrescendo — a wave of orchestral sound. Unlike a sustained crescendo, a swell rises and falls within a few bars. The emotional effect is like a wave washing over the listener: overwhelm, then release. Used constantly in golden-age film scoring for moments of awe, realization, or romantic surge.",
    tags: ["swell", "dynamics", "wave", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.3 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.55 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.55 },
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "dynamic-layering",
    name: "Dynamic Layering",
    category: "orchestration",
    description:
      "Assigning different dynamic levels to simultaneous orchestral sections — melody forte, accompaniment piano, bass mezzo-piano. Instead of the whole orchestra playing at one volume, each layer has its own dynamic, creating depth and perspective. Like a painting with foreground, middle ground, and background. Ravel and Debussy were masters; film composers inherited the technique directly.",
    tags: ["dynamics", "layering", "depth", "ravel"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4", "C3"], duration: "4n", velocity: 0.85 },
        { notes: ["A4", "D3"], duration: "4n", velocity: 0.85 },
        { notes: ["B4", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["C5", "F3"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "string-vibrato",
    name: "String Vibrato",
    category: "orchestration",
    description:
      "The oscillation of pitch on a sustained string note — the warmth and life of orchestral string sound. Vibrato adds emotional intensity: narrow and fast for tension, wide and slow for warmth, none (sul tasto, non vibrato) for an eerie, glassy quality. Golden-age Hollywood scores use lush, wide vibrato for romance. Modern film scores sometimes strip it away for coldness or unease.",
    tags: ["strings", "vibrato", "warmth", "expression"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A3"], duration: "1n" },
        { notes: ["D4"], duration: "1n" },
        { notes: ["A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "harp-glissando",
    name: "Harp Glissando",
    category: "orchestration",
    description:
      "A rapid sweep across the harp strings — the most magical sound effect in the orchestra. By setting the harp's pedals to different positions, the glissando can outline any chord or scale. A whole-tone glissando sounds dreamlike; a diminished glissando sounds eerie; a major arpeggio glissando sounds like pure fairy-tale magic. Used constantly in golden-age Hollywood for transitions, reveals, and moments of wonder.",
    tags: ["harp", "glissando", "sweep", "magical"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "16n" },
        { notes: ["E3"], duration: "16n" },
        { notes: ["G3"], duration: "16n" },
        { notes: ["C4"], duration: "16n" },
        { notes: ["E4"], duration: "16n" },
        { notes: ["G4"], duration: "16n" },
        { notes: ["C5"], duration: "4n" },
      ],
    },
  },
  {
    id: "harp-pedal-effects",
    name: "Harp Pedal Effects",
    category: "orchestration",
    description:
      "Exploiting the harp's pedal mechanism to create special sonorities. Enharmonic pedaling (setting two strings to the same pitch, like C♭ and B) produces a unique buzzing resonance. Pedal slides during a sustain bend the pitch. These effects give the harp timbral variety far beyond simple arpeggios — mysterious, bell-like, or metallic sounds that nothing else in the orchestra can produce.",
    tags: ["harp", "pedal", "enharmonic", "resonance"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["B3", "C4"], duration: "2n" },
        { notes: ["E4", "F4"], duration: "2n" },
        { notes: ["B3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "tremolo-crescendo",
    name: "Tremolo Crescendo",
    category: "orchestration",
    description:
      "String tremolo combined with a crescendo — the single most reliable tension-builder in orchestral writing. The unmeasured bowing creates a shimmering texture, and the crescendo drives it forward. Start pianissimo with violins alone, add violas, then cellos, then basses, then brass for an unstoppable wave. Herrmann, Williams, and every horror score in history use this. It works because it bypasses the intellect and triggers a primal 'something is coming' response.",
    tags: ["tremolo", "crescendo", "tension", "suspense"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "G3"], duration: "4n", velocity: 0.2 },
        { notes: ["E3", "G3"], duration: "4n", velocity: 0.35 },
        { notes: ["E3", "G3", "B3"], duration: "4n", velocity: 0.5 },
        { notes: ["E3", "G3", "B3"], duration: "4n", velocity: 0.65 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "4n", velocity: 0.8 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "unison-to-divisi",
    name: "Unison-to-Divisi Expansion",
    category: "orchestration",
    description:
      "Starting with an entire section playing in unison, then gradually splitting into divisi — two parts, then four, then eight. The effect is like a single voice opening up into a choir. Creates a sense of blooming, of one idea containing multitudes. Mahler uses this to devastating effect: a single violin line that slowly becomes a shimmering, harmonized texture. The emotional impact is enormous because the listener heard where it all came from.",
    tags: ["unison", "divisi", "expansion", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A3"], duration: "2n" },
        { notes: ["A3", "C4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "homophonic-string-texture",
    name: "Homophonic String Texture",
    category: "orchestration",
    description:
      "All string parts moving in the same rhythm — chord changes happening simultaneously across the section. The opposite of contrapuntal texture. Creates a warm, unified, chorale-like sound. The bread and butter of romantic film scoring: lush string chords breathing together, every voice moving as one organism. Think of the love themes in Casablanca, Gone with the Wind, or any Spielberg film.",
    tags: ["strings", "homophonic", "chorale", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-seq-harmonic-reinterp",
    name: "Melodic Sequence with Harmonic Reinterpretation",
    category: "melodic-devices",
    description:
      "Repeating a melodic pattern at a new pitch level but harmonizing it with unexpected chords — the melody stays predictable while the harmony surprises. The listener expects the sequence to continue diatonically, but the new harmony recontextualizes the notes. Korngold, Rózsa, and Steiner used this constantly: a heroic theme repeated a step higher but suddenly minor, or chromatic, or in a distant key. It's the musical equivalent of seeing the same scene from a completely different angle.",
    tags: ["sequence", "reharmonization", "hollywood", "surprise"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["D4", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["E4", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["D4", "Bb2", "D3", "F3"], duration: "4n" },
        { notes: ["E4", "Bb2", "D3", "F3"], duration: "4n" },
        { notes: ["F4", "Bb2", "D3", "Ab3"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-over-pedal",
    name: "Melody over Pedal",
    category: "melodic-devices",
    description:
      "A moving melody over a sustained or repeated bass note. The pedal provides stability while the melody creates harmonic tension and release against it. When melody notes clash with the pedal, you get dissonance; when they align, consonance. This push-and-pull is the engine of countless film cues — the pedal grounds the listener while the melody tells the emotional story above.",
    tags: ["pedal", "tension", "stability", "film"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["C3", "F4"], duration: "4n" },
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["C3", "A4"], duration: "4n" },
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["C3", "F4"], duration: "4n" },
        { notes: ["C3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-over-descending-bass",
    name: "Melody over Descending Bass",
    category: "melodic-devices",
    description:
      "A melody riding over a stepwise descending bass line — one of the most reliable emotional devices in all of Western music. The descending bass creates a sense of inevitability and gravity, while the melody floats above it. From the Baroque lament bass to Pachelbel's Canon to film scoring, this texture says 'beautiful sadness' or 'grand inevitability.' The bass descent does the emotional heavy lifting; the melody shapes the specifics.",
    tags: ["bass", "descending", "lament", "gravity"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["B2", "D4"], duration: "4n" },
        { notes: ["A2", "C4"], duration: "4n" },
        { notes: ["G2", "B3"], duration: "4n" },
        { notes: ["F2", "A3"], duration: "4n" },
        { notes: ["E2", "G3"], duration: "4n" },
        { notes: ["D2", "F3"], duration: "4n" },
        { notes: ["C2", "E3"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-over-rising-bass",
    name: "Melody over Rising Bass",
    category: "melodic-devices",
    description:
      "A melody sustained or developed over a stepwise ascending bass line. The rising bass creates momentum, anticipation, and hope — the opposite emotional direction from a descending bass. Used in film scoring to build toward a heroic moment or climactic arrival. The ascending bass feels like climbing a mountain; when both melody and bass finally arrive at the peak together, the payoff is immense.",
    tags: ["bass", "ascending", "hope", "momentum"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C2", "E4"], duration: "4n" },
        { notes: ["D2", "F4"], duration: "4n" },
        { notes: ["E2", "G4"], duration: "4n" },
        { notes: ["F2", "A4"], duration: "4n" },
        { notes: ["G2", "B4"], duration: "4n" },
        { notes: ["C3", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-mediants-melody",
    name: "Chromatic Mediants in Melody",
    category: "melodic-devices",
    description:
      "Using chromatic mediant relationships (major 3rds) within a melodic line — jumping to notes a major or minor third away from the expected diatonic pitch, creating a Technicolor, larger-than-life melodic quality. The signature sound of golden-age Hollywood themes. Where a diatonic melody steps, a chromatic-mediant melody leaps in thirds, covering more tonal territory and sounding inherently cinematic.",
    tags: ["chromatic", "mediants", "thirds", "cinematic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["Ab4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
        { notes: ["Ab4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "sighing-seconds",
    name: "Sighing Seconds",
    category: "melodic-devices",
    description:
      "A descending stepwise pair of notes — a 'sigh' figure. The most basic unit of musical sadness and tenderness. A descending half step (E to Eb, B to Bb) is more poignant than a whole step. Chains of sighing seconds create the quintessential romantic-era yearning. Mahler, Strauss, and every golden-age film composer used this as emotional shorthand for longing, farewell, or gentle sorrow.",
    tags: ["sigh", "descending", "romantic", "yearning"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["Eb4"], duration: "2n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["Db4"], duration: "2n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "expressive-semitone",
    name: "Expressive Semitone",
    category: "melodic-devices",
    description:
      "A chromatic half-step used not for modulation or voice leading, but purely for emotional effect — a single note raised or lowered by a semitone to intensify the feeling. The raised 7th in a minor melody adds yearning; a flattened 6th adds gravity. In golden-age Hollywood, a single expressive semitone at the right moment can carry more emotional weight than an entire harmonic progression.",
    tags: ["semitone", "chromatic", "expression", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "2n" },
        { notes: ["F#4"], duration: "4n" },
        { notes: ["G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "wistful-major-6th",
    name: "Wistful Major 6th",
    category: "melodic-devices",
    description:
      "The major 6th scale degree used melodically over a minor or ambiguous harmony — creating a bittersweet, nostalgic quality. Not quite major, not quite minor. The Dorian 6th in a minor context, or a major 6th lingering over a minor chord, produces a warmth tinged with sadness. Think of the gentle ache in Debussy, Satie, or a John Barry film theme. It says 'I remember something beautiful that's gone.'",
    tags: ["sixth", "wistful", "bittersweet", "nostalgic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "Eb3", "G3", "A3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "A3"], duration: "1n" },
      ],
    },
  },
  {
    id: "major-to-minor-transformation",
    name: "Major-to-Minor Transformation",
    category: "harmonic-devices",
    description:
      "Restating a theme or passage in the parallel minor after presenting it in major. The most direct way to darken the emotional color of familiar material. The listener recognizes the melody but feels it differently — what was bright becomes shadowed, what was triumphant becomes tragic. Used constantly in film scoring for scenes where hope turns to fear, or happiness gives way to loss.",
    tags: ["major", "minor", "transformation", "parallel"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "minor-to-major-transformation",
    name: "Minor-to-Major Transformation",
    category: "harmonic-devices",
    description:
      "Restating a theme or passage in the parallel major after presenting it in minor — the inverse of major-to-minor. Where Picardy third does this at a single cadence, this transforms an entire passage. The emotional effect is sunrise, redemption, or breakthrough. One of the most powerful tools in the Romantic and film-scoring toolkit. Mahler's symphonies are full of these transformations, and they remain just as effective in modern film.",
    tags: ["minor", "major", "transformation", "redemption"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "tonicization-common-tone",
    name: "Tonicization by Common Tone",
    category: "modulation",
    description:
      "Modulating to a new key by sustaining a single note that belongs to both the old and new keys. The sustained note is the thread connecting two otherwise distant harmonies. Smoother than a pivot chord because the listener literally hears the connection — one note stays while everything else shifts around it. A favorite technique of Korngold and Steiner for dream-like, seamless key changes in film underscore.",
    tags: ["modulation", "common tone", "sustained", "smooth", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["G3", "Bb3", "Eb4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "1n" },
      ],
    },
  },
  {
    id: "sequential-modulation",
    name: "Sequential Modulation",
    category: "modulation",
    description:
      "Modulating by sequencing a pattern at progressively higher or lower pitch levels until you arrive in a new key. Each repetition of the sequence shifts the tonal center a step, making the modulation feel inevitable rather than abrupt. The listener is carried along by the pattern's momentum. Beethoven and Brahms do this in development sections; film composers use it for building excitement or intensifying a chase.",
    tags: ["modulation", "sequence", "pattern", "momentum", "development"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["D3", "F#3", "A3"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["E3", "G#3", "B3"], duration: "4n" },
        { notes: ["B3", "D#4", "F#4"], duration: "2n" },
      ],
    },
  },
  {
    id: "remote-mediant-modulation",
    name: "Remote Mediant Modulation",
    category: "modulation",
    description:
      "Modulating to a key a chromatic third away — E major to Ab major, C major to E major. No shared diatonic chords; the keys are distantly related but the root motion by third feels smooth to the ear. The hallmark of the Romantic era and golden-age Hollywood. Wagner, Bruckner, and Korngold use remote mediants to create that feeling of being transported to a completely different emotional world in a single chord change.",
    tags: ["modulation", "mediant", "remote", "romantic", "chromatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "common-tone-chromaticism",
    name: "Common-Tone Chromaticism",
    category: "harmonic-devices",
    description:
      "Moving chromatically around sustained common tones — one or two notes hold while other voices slide by half step. Creates a shimmering, iridescent harmonic surface. Not modulation (you may stay in one key), and not voice leading in the traditional sense — more like harmonic color shifting. Debussy, Ravel, and Herrmann use this to create atmospheres that feel suspended in time, neither going anywhere nor standing still.",
    tags: ["chromatic", "common tone", "shimmer", "atmospheric"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "A3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "deceptive-cadence-extension",
    name: "Deceptive Cadence Extension",
    category: "cadences",
    description:
      "Using a deceptive cadence (V → vi) not as a one-time surprise but as the start of an extended passage that postpones resolution. After the deception, the harmony wanders — through secondary chords, chromatic mediants, or sequences — before finally arriving at the real cadence. The emotional effect is prolonged yearning: the listener expected resolution, was denied, and now must wait. The longer the extension, the more powerful the eventual arrival.",
    tags: ["cadence", "deceptive", "extension", "yearning", "postpone"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "evaded-cadence",
    name: "Evaded Cadence",
    category: "cadences",
    description:
      "A cadence that is set up and expected but derailed at the last moment — the bass resolves but the upper voices don't, or the resolution chord is weakened (inverted, incomplete, or rhythmically displaced). Different from a deceptive cadence: the harmony may actually arrive at I, but something about the arrival feels wrong or incomplete. Creates a nagging sense of almost-but-not-quite that propels the music forward.",
    tags: ["cadence", "evaded", "incomplete", "tension", "propulsion"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "G3", "E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "cadence-avoidance",
    name: "Cadence Avoidance",
    category: "cadences",
    description:
      "Systematically preventing any phrase from reaching a clear cadential arrival — using elisions, deceptions, interruptions, or harmonic reinterpretations to keep the music in perpetual motion. Wagner's Tristan und Isolde is the famous example, but film composers use the technique to maintain tension across long scenes. The music sounds like it's always about to arrive but never does. When the cadence finally comes, it feels like catharsis.",
    tags: ["cadence", "avoidance", "tension", "wagner", "perpetual"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["E3", "G3", "C4"], duration: "4n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
      ],
    },
  },
  {
    id: "false-recapitulation",
    name: "False Recapitulation",
    category: "form",
    description:
      "The main theme returns but in the wrong key — the listener thinks they're home, but they're not. A false recap creates a moment of recognition followed by disorientation. Classical composers (Haydn especially) used this as a structural joke; film composers use it when a character thinks they're safe but aren't, or when a happy memory is recalled in a darker context. The real recapitulation, when it comes, has extra impact.",
    tags: ["form", "recapitulation", "false", "misdirection", "haydn"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["E3", "G#3", "B3"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["B3", "D#4", "F#4"], duration: "4n" },
        { notes: ["E3", "G#3", "B3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "grand-cadential-arrival",
    name: "Grand Cadential Arrival",
    category: "cadences",
    description:
      "A massively prepared, full-orchestra cadential resolution — the climactic moment of a cue, scene, or movement where everything converges. All the postponement, avoidance, and tension-building techniques pay off in a single, overwhelming arrival on the tonic. Typically features the widest orchestral spacing, the loudest dynamic, and the most complete voicing of the tonic chord. The musical equivalent of the camera revealing the full landscape for the first time.",
    tags: ["cadence", "arrival", "climax", "orchestral", "resolution"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "A3", "D4"], duration: "4n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "G3"], duration: "4n", velocity: 0.7 },
        { notes: ["G2", "B2", "D3", "F3", "G3"], duration: "2n", velocity: 0.85 },
        { notes: ["C2", "C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  // ── Mahler / Late Romantic ──────────────────────────────────
  {
    id: "harmonic-suspension",
    name: "Harmonic Suspension",
    category: "harmonic-devices",
    description:
      "An entire chord suspended over a bass note that doesn't belong to it — not a single-note suspension, but a whole harmony hanging unresolved. The chord above and the bass below create a tension that demands resolution, but Mahler and late Romantic composers delay that resolution for bars, sometimes entire pages. The listener exists in a state of beautiful discomfort. When resolution finally comes, it's overwhelming.",
    tags: ["suspension", "unresolved", "mahler", "tension"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G2", "C3", "E3", "A3"], duration: "1n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "tonal-dissolution",
    name: "Tonal Dissolution",
    category: "harmonic-devices",
    description:
      "The gradual breakdown of tonal clarity — chromatic voice leading, enharmonic ambiguity, and distant modulations accumulate until the sense of key dissolves. Not a sudden shift to atonality, but a slow erosion. Mahler's later symphonies and Wagner's Tristan are the prime examples. The music starts in a key and slowly loses its bearings, like a landscape fading into fog. Different from tonal ambiguity: dissolution implies a process, not a state.",
    tags: ["dissolution", "chromatic", "mahler", "wagner"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["Bb2", "D3", "G3"], duration: "2n" },
        { notes: ["A2", "Db3", "F#3"], duration: "2n" },
        { notes: ["Ab2", "C3", "F3"], duration: "1n" },
      ],
    },
  },
  {
    id: "harmonic-drift",
    name: "Harmonic Drift",
    category: "harmonic-devices",
    description:
      "Moving through keys so smoothly and continuously that no single key feels like 'home' — the harmony drifts like a boat on a current. Each chord connects logically to the next via voice leading, but the cumulative effect is constant motion without a clear destination. Mahler's slow movements do this: you can follow every step, but when you look up, you're somewhere you've never been. It creates a sense of existential wandering — beautiful and unsettling.",
    tags: ["drift", "wandering", "mahler", "voice-leading"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["D3", "Gb3", "A3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["E3", "Ab3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-saturation",
    name: "Chromatic Saturation",
    category: "harmonic-devices",
    description:
      "Using all 12 chromatic notes within a short passage while maintaining a tonal center — the complete opposite of diatonic purity, but not atonal. Every chromatic note appears as a passing tone, neighbor, or altered chord tone, creating a dense, hyperexpressive texture that still resolves. Late Mahler and Strauss push this to the limit: the harmony is so chromatic it feels like it could fly apart at any moment, but tonal gravity just barely holds.",
    tags: ["chromatic", "saturation", "dense", "late-romantic"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C#3", "F3", "Ab3"], duration: "4n" },
        { notes: ["D3", "F#3", "A3"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "4n" },
        { notes: ["E3", "G#3", "B3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "voice-leading-intensification",
    name: "Voice-Leading Intensification",
    category: "voice-leading",
    description:
      "Gradually tightening the chromatic voice leading over a passage — starting with diatonic steps and progressively introducing more half-step motion until every voice is moving by semitone. The increasing chromaticism creates a ratcheting tension. Mahler and Wagner use this to build toward climaxes: the voice leading itself becomes the drama, the individual lines pulling the listener toward the breaking point.",
    tags: ["voice-leading", "chromatic", "intensification", "tension", "mahler"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "E3", "G#3"], duration: "2n" },
        { notes: ["Bb2", "Eb3", "G3"], duration: "2n" },
        { notes: ["A2", "D3", "F#3"], duration: "2n" },
        { notes: ["Ab2", "Db3", "F3"], duration: "1n" },
      ],
    },
  },
  {
    id: "expanding-chromaticism",
    name: "Expanding Chromaticism",
    category: "harmonic-devices",
    description:
      "Starting a passage diatonically and progressively introducing more chromatic notes — the harmonic language evolves and intensifies within a single phrase or section. Not sudden chromaticism but a gradual stain spreading through the texture. This is how Mahler's developments work: the recapitulation material starts pure and becomes increasingly tortured. The listener feels the emotional escalation through the accumulating alterations.",
    tags: ["chromatic", "expanding", "gradual", "development"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["Bb3", "D4", "F#4"], duration: "4n" },
        { notes: ["B3", "D#4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "climactic-dominant-prep",
    name: "Climactic Dominant Preparation",
    category: "harmonic-devices",
    description:
      "An extended, intensified dominant preparation before a major structural arrival — the dominant chord is sustained, repeated, or elaborated with increasing urgency until the resolution can no longer be postponed. Mahler and Bruckner build dominant preparations that last minutes, adding layers of orchestration, dynamic swells, and chromatic tensions. When the tonic finally arrives, it feels like a physical release. The preparation IS the climax; the resolution is the exhale.",
    tags: ["dominant", "preparation", "climax", "bruckner"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.5 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "F3", "Ab3"], duration: "2n", velocity: 0.75 },
        { notes: ["G2", "B2", "D3", "F3", "Ab3"], duration: "2n", velocity: 0.9 },
        { notes: ["C2", "C3", "E3", "G3", "C4"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "bass-pedal-chromatic-upper",
    name: "Bass Pedal with Chromatic Upper Voices",
    category: "voice-leading",
    description:
      "A sustained bass note while the upper voices move chromatically — combining the stability of a pedal with the restlessness of chromatic voice leading. The bass provides an anchor; the chromatic upper voices create shifting harmonic colors above it. The effect is like watching clouds change shape over a fixed landscape. Mahler uses this in adagio movements to create a sense of time suspended but not frozen.",
    tags: ["voice-leading", "pedal", "chromatic", "mahler", "suspended"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C2", "Eb3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C2", "E3", "A3", "C#4"], duration: "2n" },
        { notes: ["C2", "Eb3", "G3", "B3"], duration: "2n" },
        { notes: ["C2", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "sustained-inner-voices",
    name: "Sustained Inner Voices",
    category: "voice-leading",
    description:
      "Holding one or more inner voices constant while outer voices move — the opposite of a pedal point, which sustains the bass. Sustained inner voices create a luminous, glowing quality: the harmony changes around them, but the held notes provide continuity and warmth. Mahler's string writing is full of this — violas or second violins sustaining while everything else moves, creating a sense of inner stillness within outer motion.",
    tags: ["voice-leading", "inner", "sustained", "glow", "mahler"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "E3", "A3"], duration: "2n" },
        { notes: ["Eb3", "E3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "long-range-voice-exchange",
    name: "Long-Range Voice Exchange",
    category: "voice-leading",
    description:
      "Two voices exchanging notes over a span of many bars rather than the typical one or two. Voice A starts on C and slowly moves to E; voice B starts on E and slowly moves to C. The exchange might take 16 or 32 bars, creating a large-scale symmetry that the listener may feel rather than consciously hear. Mahler and Bruckner use this to create structural coherence across massive spans of music.",
    tags: ["voice-leading", "exchange", "long-range", "structure", "bruckner"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["D3", "D4"], duration: "2n" },
        { notes: ["E3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "expanding-register-orch",
    name: "Expanding Register",
    category: "orchestration",
    description:
      "Gradually widening the registral space of the orchestra — not by adding instruments but by pushing existing parts higher and lower. Violins creep upward; basses descend. The music literally opens up. Mahler uses this to create moments of terrifying vastness — the orchestra sounds like it's stretching to fill an infinite space. The wider the register gets, the more exposed and vulnerable each line becomes.",
    tags: ["register", "expansion", "vastness", "mahler"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E3", "G3", "C4"], duration: "2n" },
        { notes: ["D3", "G3", "D4"], duration: "2n" },
        { notes: ["C3", "G3", "E4"], duration: "2n" },
        { notes: ["G2", "G3", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "contracting-register-orch",
    name: "Contracting Register",
    category: "orchestration",
    description:
      "The opposite of expanding register — the orchestra's range narrows as outer voices converge toward the center. The music feels like it's collapsing inward, concentrating, compressing. Creates claustrophobia, intimacy, or focus. In Mahler, a contracting register often precedes a textural shift — the orchestra closes in on itself before exploding outward again. The narrower the range, the more intense the moment.",
    tags: ["register", "contraction", "compression", "focus"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G2", "G3", "G4"], duration: "2n" },
        { notes: ["C3", "G3", "E4"], duration: "2n" },
        { notes: ["D3", "G3", "D4"], duration: "2n" },
        { notes: ["E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "orch-crescendo-addition",
    name: "Orchestral Crescendo by Addition",
    category: "orchestration",
    description:
      "Building a crescendo by adding instruments rather than playing louder — Ravel's Boléro is the famous example, but Mahler does this constantly. Start with a solo, add a duet partner, then a section, then another section. The dynamic rises not because individuals play louder but because there are more of them. Creates an organic, unstoppable growth. Each new entry adds a new color, so the crescendo is also a timbral journey.",
    tags: ["crescendo", "addition", "bolero", "timbral"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "2n", velocity: 0.5 },
        { notes: ["C4", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["C3", "C4", "E4", "G4"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "1n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "orch-crescendo-register",
    name: "Orchestral Crescendo by Register",
    category: "orchestration",
    description:
      "Building a crescendo by progressively expanding the registral range rather than increasing volume or forces. Start in the mid-range, add higher and lower instruments. The widening pitch spectrum makes the sound feel bigger without necessarily getting louder. Mahler uses this for moments that need to feel expansive rather than aggressive — the sound opens up rather than pushes forward.",
    tags: ["crescendo", "register", "expansion", "space"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G2", "C3", "E3", "G3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "orch-crescendo-doubling",
    name: "Orchestral Crescendo by Doubling",
    category: "orchestration",
    description:
      "Building intensity by progressively doubling existing lines — a melody that starts in solo oboe gets doubled by flute, then clarinet, then all woodwinds, then strings. Each doubling thickens the line without changing the notes. The timbre evolves from individual to collective. Mahler, Bruckner, and Tchaikovsky all use this to transform a whisper into a roar while keeping the same melodic material.",
    tags: ["crescendo", "doubling", "thickening", "timbre"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4"], duration: "4n", velocity: 0.5 },
        { notes: ["A4"], duration: "4n", velocity: 0.5 },
        { notes: ["B4", "G3"], duration: "4n", velocity: 0.65 },
        { notes: ["C5", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["D5", "B3", "G3"], duration: "2n", velocity: 0.85 },
        { notes: ["E5", "C4", "G3", "C3"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "string-tremolo-crescendo",
    name: "String Tremolo Crescendo",
    category: "orchestration",
    description:
      "Tremolo specifically in the string section building from pianissimo to fortissimo — the most visceral orchestral effect. The unmeasured bowing creates a swarm of sound; the crescendo makes it feel like something approaching. Different from adding instruments: it's the same strings getting louder, denser, more agitated. The primal tension-builder in film scoring and late Romantic orchestration. Nothing else sounds like a string section tremolo reaching full force.",
    tags: ["strings", "tremolo", "crescendo", "visceral"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A3", "C4"], duration: "4n", velocity: 0.2 },
        { notes: ["A3", "C4"], duration: "4n", velocity: 0.35 },
        { notes: ["A3", "C4", "E4"], duration: "4n", velocity: 0.5 },
        { notes: ["A3", "C4", "E4"], duration: "4n", velocity: 0.7 },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "high-register-string-climax",
    name: "High-Register String Climax",
    category: "orchestration",
    description:
      "Placing the violins at the top of their range for the emotional peak of a passage — the sound becomes intense, luminous, almost painful. The high register carries inherently because of overtone concentration; combined with vibrato and full bow pressure, it's the most emotionally overwhelming sound in the orchestra. Mahler, Strauss, and every great film composer save the high register for the moment that matters most.",
    tags: ["strings", "high", "climax", "intensity"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E4", "G4"], duration: "4n" },
        { notes: ["F4", "A4"], duration: "4n" },
        { notes: ["G4", "B4"], duration: "4n" },
        { notes: ["A4", "C5"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "low-register-string-foundation",
    name: "Low-Register String Foundation",
    category: "orchestration",
    description:
      "Using cellos and basses in their low register as a warm, dark foundation — the orchestral 'ground.' Low strings provide weight, gravity, and emotional depth without drawing attention. A sustained low C in the basses changes the character of everything above it. In film scoring, the low string foundation often represents the emotional subtext — what the character is feeling beneath what they're saying.",
    tags: ["strings", "bass", "foundation", "depth"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C2"], duration: "1n" },
        { notes: ["C2", "G2"], duration: "1n" },
        { notes: ["C2", "E2", "G2"], duration: "1n" },
      ],
    },
  },
  {
    id: "countermelody-beneath-sustained",
    name: "Countermelody beneath Sustained Melody",
    category: "melodic-devices",
    description:
      "A moving countermelody played underneath a long, sustained main melody note — the melody holds while the countermelody provides harmonic motion and interest beneath it. This is one of Mahler's signature techniques: the main theme hits a long note at its peak, and instead of silence, a secondary voice takes over with its own melodic argument below. It creates depth, polyphonic interest, and the sense that multiple emotional threads are active simultaneously.",
    tags: ["countermelody", "sustained", "mahler", "polyphonic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G4"], duration: "1n" },
        { notes: ["G4", "C3"], duration: "4n" },
        { notes: ["G4", "D3"], duration: "4n" },
        { notes: ["G4", "E3"], duration: "4n" },
        { notes: ["G4", "F3"], duration: "4n" },
        { notes: ["G4", "E3"], duration: "2n" },
      ],
    },
  },
  // ── Modern Funk / Louis Cole / OWANE ────────────────────────
  {
    id: "linear-drumming",
    name: "Linear Drumming",
    category: "rhythm",
    description:
      "A drumming style where no two limbs hit simultaneously — every stroke is staggered, creating a flowing, interlocking pattern. The opposite of 'layered' drumming where kick, snare, and hi-hat align on beats. Louis Cole and Nate Smith play this way: the kick falls between hi-hat notes, the snare slides into gaps, and the whole kit becomes one continuous rhythmic melody. It makes a drum kit sound like a single, impossibly agile instrument.",
    tags: ["linear", "drums", "louis cole", "interlocking"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "16n", velocity: 0.8 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["C2"], duration: "16n", velocity: 0.7 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "linear-bass-funk",
    name: "Linear Bass",
    category: "funk",
    description:
      "A bass line that operates as a single, continuous rhythmic/melodic stream rather than marking chord changes — every note is part of a flowing line, not a series of root-note landings. Thundercat, MonoNeon, and Owane play this way: the bass becomes a lead instrument, weaving through the harmony with the fluidity of a horn line. Ghost notes, chromatic approaches, and rhythmic displacement keep the line alive.",
    tags: ["funk", "bass", "linear", "thundercat", "melodic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["D3"], duration: "16n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["D3"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
      ],
    },
  },
  {
    id: "bass-drum-unison-funk",
    name: "Bass-Drum Unison",
    category: "funk",
    description:
      "Bass and kick drum playing exactly the same rhythm — locked in absolute unison. Creates a massive, punchy low end that hits like a single instrument. Tower of Power, Vulfpeck, and Louis Cole use this for maximum impact on specific hits. The trick is truly locking the attack — even a few milliseconds off and the unison becomes a flam. When it's tight, the bass and kick become a single weapon.",
    tags: ["funk", "bass", "drums", "unison", "lock"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2", "C2"], duration: "8n", velocity: 0.9 },
        { notes: ["E2", "C2"], duration: "16n", velocity: 0.5 },
        { notes: ["E2", "C2"], duration: "8n.", velocity: 0.85 },
        { notes: ["E2", "C2"], duration: "8n", velocity: 0.9 },
        { notes: ["E2", "C2"], duration: "4n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "bass-drum-counterpoint-funk",
    name: "Bass-Drum Counterpoint",
    category: "funk",
    description:
      "Bass and drums playing complementary but different rhythms — filling each other's gaps rather than doubling. Where the kick hits, the bass rests; where the bass lands, the kick is silent. The two instruments create a single composite rhythm that's more complex than either plays alone. James Brown's rhythm sections defined this; OWANE, Louis Cole, and modern funk players push it into polyrhythmic territory.",
    tags: ["funk", "bass", "drums", "counterpoint", "complementary"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "16n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n" },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["G2"], duration: "8n" },
        { notes: ["C2"], duration: "16n", velocity: 0.7 },
        { notes: ["A2"], duration: "16n" },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["E2"], duration: "8n" },
      ],
    },
  },
  {
    id: "bass-snare-conversation",
    name: "Bass-Snare Conversation",
    category: "rhythm",
    description:
      "Treating the bass guitar and snare drum as conversational partners — the bass asks a rhythmic question, the snare answers. Not unison, not counterpoint, but call-and-response at the micro level. Louis Cole does this in real time (playing both), creating grooves that sound like two musicians having a rapid-fire rhythmic dialogue. The bass phrase implies a rhythmic question; the snare's accent pattern provides the answer.",
    tags: ["bass", "snare", "conversation", "louis cole"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["D3"], duration: "8n", velocity: 0.4 },
        { notes: ["A2"], duration: "8n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["D3"], duration: "8n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "kick-pattern-displacement",
    name: "Kick Pattern Displacement",
    category: "rhythm",
    description:
      "Shifting the kick drum pattern by a 16th note (or other subdivision) while everything else stays in place. The groove feels fundamentally different even though only one element moved. OWANE and Louis Cole use this to create multiple variations of a groove from one idea — displace the kick forward and the groove pushes; displace it backward and it pulls. The snare and hi-hat provide the reference; the kick provides the surprise.",
    tags: ["kick", "displacement", "variation", "groove"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["C2"], duration: "16n", velocity: 0.8 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["C2"], duration: "16n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "snare-displacement",
    name: "Snare Displacement",
    category: "rhythm",
    description:
      "Moving the snare hit off beats 2 and 4 — placing it a 16th early (anticipation), a 16th late (delay), or on an entirely different beat. The snare is the strongest time-reference in a groove, so displacing it rewires the listener's sense of where the beat is. Louis Cole regularly displaces the snare by a single 16th, creating grooves that feel slightly wrong in the most addictive way possible.",
    tags: ["snare", "displacement", "feel", "modern"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "hi-hat-polyrhythm",
    name: "Hi-Hat Polyrhythm",
    category: "rhythm",
    description:
      "Playing the hi-hat in a different subdivision from the kick and snare — triplets over a straight beat, quintuplets over sixteenths, or any rhythmic layer that creates friction. The hi-hat becomes an independent polyrhythmic voice rather than a timekeeping tool. Chris Dave, Questlove, and Louis Cole use hi-hat polyrhythms to add complexity without disrupting the groove's core feel.",
    tags: ["hi-hat", "polyrhythm", "layering", "complex"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["F#4"], duration: "8t", velocity: 0.5 },
        { notes: ["F#4"], duration: "8t", velocity: 0.3 },
        { notes: ["F#4"], duration: "8t", velocity: 0.5 },
        { notes: ["C2", "F#4"], duration: "8t", velocity: 0.8 },
        { notes: ["F#4"], duration: "8t", velocity: 0.3 },
        { notes: ["D3", "F#4"], duration: "8t", velocity: 0.9 },
      ],
    },
  },
  {
    id: "hi-hat-ostinato",
    name: "Hi-Hat Ostinato",
    category: "rhythm",
    description:
      "A repeating hi-hat pattern that becomes a hypnotic rhythmic foundation — not just straight 8ths or 16ths, but a specific pattern with accents, opens, and ghost notes that repeats independently of the kick and snare changes. The hi-hat ostinato provides the groove's DNA while kick and snare vary around it. Jojo Mayer, Chris Dave, and modern funk drummers build entire groove identities from a single hi-hat pattern.",
    tags: ["hi-hat", "ostinato", "pattern", "hypnotic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.6 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.7 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "hi-hat-accent-rotation",
    name: "Hi-Hat Accent Rotation",
    category: "rhythm",
    description:
      "Rotating the accent pattern on the hi-hat by one subdivision each repetition — accents that fall on beats 1, 2, 3, 4 in the first bar shift to the 'e' of 1, 2, 3, 4 in the next, then the 'and,' then the 'a.' The hi-hat pattern sounds like it's spinning while the kick and snare stay put. Creates a mesmerizing phase-shift effect that OWANE and progressive funk players use to make simple grooves feel three-dimensional.",
    tags: ["hi-hat", "accent", "rotation", "phase"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.8 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.8 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "ghost-note-grid",
    name: "Ghost-Note Grid",
    category: "rhythm",
    description:
      "A continuous, quiet stream of ghost notes on snare or bass that fills every subdivision — the 'grid' beneath the accented hits. The ghost notes are barely audible individually, but collectively they create a visceral, felt pulse. The accented notes pop out of the grid like peaks from a low-level hum. Questlove, Chris Dave, and Louis Cole build their grooves on ghost-note grids. The grid IS the feel; the accents are just the surface.",
    tags: ["ghost notes", "grid", "feel", "subliminal"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
        { notes: ["D3"], duration: "16n", velocity: 0.15 },
      ],
    },
  },
  {
    id: "sixteenth-accent-displacement",
    name: "16th-Note Accent Displacement",
    category: "rhythm",
    description:
      "Shifting accent patterns across a 16th-note grid — placing strong beats where weak beats should be, and vice versa. The underlying 16th-note pulse stays constant; only the emphasis moves. This is the engine of modern funk: the same notes, but with different accents, produce completely different grooves. OWANE uses accent displacement to make a single riff sound like four different ideas.",
    tags: ["accent", "displacement", "16th", "groove"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "sixteenth-accent-rotation",
    name: "16th-Note Accent Rotation",
    category: "rhythm",
    description:
      "An accent pattern that shifts forward by one 16th note each bar — the accent 'rotates' through the grid. Bar 1: accent on beat 1. Bar 2: accent on the 'e' of 1. Bar 3: accent on the 'and' of 1. Bar 4: accent on the 'a' of 1. By bar 5 it's back to beat 1 but the listener's perception of the downbeat has been permanently scrambled. A favorite technique of progressive and math-rock drummers.",
    tags: ["accent", "rotation", "progressive", "math-rock"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
        { notes: ["E3"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "sixteenth-grouping",
    name: "16th-Note Grouping",
    category: "rhythm",
    description:
      "Grouping 16th notes into irregular clusters — 3+3+2, 3+2+3, 2+3+3, or any combination that adds up to 8 (one beat of 16ths). These groupings create syncopation at the subdivision level, making the groove feel uneven and funky even when the tempo is steady. The grouping determines the groove's character: 3+3+2 is the tresillo/Afro-Cuban feel; 3+2+3 is more progressive; 2+3+3 is rare and disorienting.",
    tags: ["grouping", "16th", "syncopation", "tresillo"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.4 },
        { notes: ["E3"], duration: "16n", velocity: 0.4 },
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.4 },
        { notes: ["E3"], duration: "16n", velocity: 0.4 },
        { notes: ["E3"], duration: "16n", velocity: 0.9 },
        { notes: ["E3"], duration: "16n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "grouping-3-3-2",
    name: "3+3+2",
    category: "rhythm",
    description:
      "The most universal rhythmic cell in popular music — three 16th notes, three more, then two. Also called the tresillo. It's the backbone of Afro-Cuban music, but it shows up everywhere: funk, hip-hop, EDM, prog. The pattern creates a lopsided groove that resolves on the last beat of the bar. Louis Cole, Snarky Puppy, and virtually every modern funk drummer use 3+3+2 as a rhythmic building block.",
    tags: ["tresillo", "3+3+2", "afro-cuban", "universal"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n.", velocity: 0.9 },
        { notes: ["C2"], duration: "8n.", velocity: 0.8 },
        { notes: ["C2"], duration: "8n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "grouping-3-2-3",
    name: "3+2+3",
    category: "rhythm",
    description:
      "Three 16ths, two 16ths, three 16ths — a less common but distinctively off-kilter grouping. The accent falls in the middle of the cell rather than at the beginning, creating a lurching, progressive feel. Used in math-rock, progressive funk, and OWANE's guitar work. Harder to groove to than 3+3+2 but more interesting rhythmically. When looped, the pattern's asymmetry creates a hypnotic wobble.",
    tags: ["grouping", "3+2+3", "progressive", "asymmetric"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n.", velocity: 0.9 },
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n.", velocity: 0.85 },
      ],
    },
  },
  {
    id: "grouping-2-2-3-3",
    name: "2+2+3+3",
    category: "rhythm",
    description:
      "Two 16ths, two 16ths, three 16ths, three 16ths — 10 16th notes total, creating a pattern that doesn't fit evenly into 4/4. When forced into a 4/4 bar, it creates a polymetric effect where the grouping pattern and the bar length are out of phase. The pattern resolves every 5 beats (10 16ths), so it takes 5 bars of 4/4 before the pattern and the meter realign. Used in progressive and experimental contexts for controlled chaos.",
    tags: ["grouping", "2+2+3+3", "polymetric", "experimental"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A2"], duration: "8n", velocity: 0.9 },
        { notes: ["A2"], duration: "8n", velocity: 0.8 },
        { notes: ["A2"], duration: "8n.", velocity: 0.85 },
        { notes: ["A2"], duration: "8n.", velocity: 0.8 },
      ],
    },
  },
  {
    id: "grouping-3-3-3-3-2",
    name: "3+3+3+3+2",
    category: "rhythm",
    description:
      "Fourteen 16th notes grouped 3+3+3+3+2 — a pattern that fits into 7/8 or creates a polymetric overlay in 4/4. Four equal groups of three followed by a short 'tail' of two. The three-groups create momentum; the two at the end acts as a compressed turnaround. This is 7/8 broken down to its most natural subdivision. Tigran Hamasyan, Meshuggah, and OWANE use variations of this grouping.",
    tags: ["grouping", "3+3+3+3+2", "7/8", "progressive"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D2"], duration: "8n.", velocity: 0.9 },
        { notes: ["D2"], duration: "8n.", velocity: 0.8 },
        { notes: ["D2"], duration: "8n.", velocity: 0.85 },
        { notes: ["D2"], duration: "8n.", velocity: 0.8 },
        { notes: ["D2"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "three-over-sixteen",
    name: "Three-Over-Sixteen",
    category: "rhythm",
    description:
      "A polyrhythm of 3 evenly spaced notes over a bar of 16th notes — three against sixteen. The three notes don't align with any standard subdivision, creating a dreamy, floating layer over a driving 16th-note pulse. More obscure than 3:2 or 4:3, this ratio creates maximal rhythmic dissonance. Used in experimental electronic music and progressive funk as a textural device that makes the groove feel unstable.",
    tags: ["polyrhythm", "3:16", "floating", "experimental"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C4"], duration: "4n.", velocity: 0.7 },
        { notes: ["C4"], duration: "4n.", velocity: 0.7 },
        { notes: ["C4"], duration: "4n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "four-over-three",
    name: "Four-Over-Three",
    category: "rhythm",
    description:
      "Four evenly spaced notes against three — the inversion of 3:4. Where 4:3 is subtle, playing the 4 ON TOP of the 3 (melody in 4, accompaniment in 3) makes the four feel like the primary pulse, turning the triple meter underneath into a hypnotic undertow. This is how Tigran Hamasyan and some OWANE passages work: a 4-feel on top of a 3-feel, neither winning, creating a groove that rocks between two gravitational centers.",
    tags: ["polyrhythm", "4:3", "undertow", "groove"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "4n", velocity: 0.8 },
        { notes: ["E3"], duration: "4n", velocity: 0.8 },
        { notes: ["E3"], duration: "4n", velocity: 0.8 },
        { notes: ["E3"], duration: "4n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "rhythmic-canon",
    name: "Rhythmic Canon",
    category: "rhythm",
    description:
      "A rhythmic pattern played by one instrument and then imitated by another at a delay — the same rhythm offset by one or more beats. Like a melodic canon (round), but the pitch content can differ; it's the rhythm that's repeated. Creates a layered, interlocking texture from a single rhythmic idea. Steve Reich pioneered this in minimalism; OWANE and Snarky Puppy use it to create multi-layered grooves from simple cells.",
    tags: ["canon", "imitation", "layering", "reich"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "8n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.5 },
        { notes: ["E3"], duration: "8n.", velocity: 0.7 },
        { notes: ["E3", "A3"], duration: "8n", velocity: 0.8 },
        { notes: ["A3"], duration: "16n", velocity: 0.5 },
        { notes: ["E3", "A3"], duration: "8n.", velocity: 0.7 },
      ],
    },
  },
  {
    id: "rhythmic-imitation",
    name: "Rhythmic Imitation",
    category: "rhythm",
    description:
      "One instrument plays a rhythmic figure and another answers with the same rhythm but different notes — the rhythm is the connection, not the melody. Unlike a rhythmic canon (exact duplication at a delay), rhythmic imitation is a response: the second instrument says 'I heard you' by matching your rhythm while adding its own harmonic content. Creates a conversational texture where instruments speak the same rhythmic language with different accents.",
    tags: ["imitation", "conversation", "texture", "responsive"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["C3"], duration: "16n" },
        { notes: ["C3"], duration: "8n." },
        { notes: ["G3"], duration: "8n" },
        { notes: ["G3"], duration: "16n" },
        { notes: ["G3"], duration: "8n." },
      ],
    },
  },
  {
    id: "anticipated-backbeat",
    name: "Anticipated Backbeat",
    category: "rhythm",
    description:
      "Placing the snare hit slightly before beats 2 and 4 — pushing it forward by a 16th note or even just a fraction. Creates urgency, forward momentum, and a 'leaning into' the beat. The groove feels like it's constantly about to fall forward. Combined with a solid kick on the downbeat, the anticipated backbeat creates a push-pull tension that's the foundation of a lot of Louis Cole's hyperkinetic grooves.",
    tags: ["backbeat", "anticipated", "push", "urgency"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "delayed-backbeat",
    name: "Delayed Backbeat",
    category: "rhythm",
    description:
      "Placing the snare hit slightly after beats 2 and 4 — pulling it back by a 16th note or a micro-timing amount. Creates a lazy, laid-back, heavy feel. The groove feels like it's dragging its feet in the best way. J Dilla pioneered the micro-timed delayed backbeat in hip-hop; funk drummers use the full-16th version for a deliberate, weighty groove. The opposite energy from an anticipated backbeat — pull vs. push.",
    tags: ["backbeat", "delayed", "laid-back", "dilla"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "funk-push",
    name: "Funk Push",
    category: "funk",
    description:
      "Anticipating a chord change or accent by a 16th note — landing on the chord just before the beat. The push creates forward energy and makes the groove feel like it's tumbling ahead of itself. Combined with a dead-stop right after, the push-and-stop creates the classic funk 'lurch.' Earth Wind & Fire, Tower of Power, and Vulfpeck use funk pushes on nearly every chord change. The push is the feel; the accuracy is the skill.",
    tags: ["funk", "push", "anticipation", "energy", "groove"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2", "G2", "B2"], duration: "16n", velocity: 0.9 },
        { notes: ["E2", "G2", "B2"], duration: "8n.", velocity: 0.5 },
        { notes: ["A2", "C3", "E3"], duration: "16n", velocity: 0.9 },
        { notes: ["A2", "C3", "E3"], duration: "8n.", velocity: 0.5 },
      ],
    },
  },
  {
    id: "funk-pull",
    name: "Funk Pull",
    category: "funk",
    description:
      "Delaying a chord change or accent by a 16th note — landing just after the beat. The pull creates a dragging, heavy feel that makes the groove sit back. Less common than the push but equally powerful. When the whole band pulls together, the groove feels massive and unhurried. When only one instrument pulls while others are on the beat, it creates a micro-tension that gives the rhythm depth and width.",
    tags: ["funk", "pull", "delay", "heavy", "groove"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E2", "G2", "B2"], duration: "8n.", velocity: 0.9 },
        { notes: ["A2"], duration: "16n", velocity: 0.3 },
        { notes: ["A2", "C3", "E3"], duration: "8n.", velocity: 0.9 },
      ],
    },
  },
  {
    id: "pocket-tension",
    name: "Pocket Tension",
    category: "rhythm",
    description:
      "Deliberately playing slightly ahead or behind the pocket — not enough to sound wrong, but enough to create friction. The pocket is the 'ideal' time feel; pocket tension is the musical equivalent of leaning forward or backward in your chair. Louis Cole sits on the edge of the pocket in different directions on different beats, creating a groove that feels alive and unpredictable while still being technically 'in time.'",
    tags: ["pocket", "tension", "micro-timing", "alive"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "pocket-release",
    name: "Pocket Release",
    category: "rhythm",
    description:
      "Snapping back into the dead center of the pocket after a passage of pocket tension — the moment of rhythmic clarity after ambiguity. The release feels like exhaling. The contrast between tension and release is what makes the pocket audible: if you always play dead center, the listener stops noticing the pocket. By pulling away and snapping back, you make the groove's center of gravity tangible.",
    tags: ["pocket", "release", "clarity", "contrast"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.5 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "drum-fill-displacement",
    name: "Drum Fill Displacement",
    category: "rhythm",
    description:
      "Starting a drum fill a 16th note (or more) early or late relative to where the listener expects it — the fill lands in a rhythmically unexpected position. When a fill starts a 16th early, it creates a burst of energy; when it starts late, it creates a lurching surprise. Louis Cole uses fill displacement to make standard fill shapes sound completely fresh. The notes are normal; the placement is the innovation.",
    tags: ["fill", "displacement", "surprise", "louis cole"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["D3"], duration: "16n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.75 },
        { notes: ["D3"], duration: "16n", velocity: 0.8 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["C2"], duration: "8n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "fill-over-barline",
    name: "Fill over Barline",
    category: "rhythm",
    description:
      "A drum fill that starts in one bar and resolves in the next — crossing the barline rather than landing on beat 1. The fill ignores the bar structure, treating the barline as an arbitrary line to be crossed. Creates a powerful sense of momentum because the listener's structural expectation (fill ends → new bar) is violated. Modern funk and prog drummers use this constantly to blur phrase boundaries.",
    tags: ["fill", "barline", "momentum", "blur"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3"], duration: "16n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.75 },
        { notes: ["D3"], duration: "16n", velocity: 0.8 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["D3"], duration: "16n", velocity: 0.95 },
        { notes: ["C2", "D3"], duration: "8n", velocity: 1.0 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "one-bar-rhythmic-loop",
    name: "One-Bar Rhythmic Loop",
    category: "rhythm",
    description:
      "A groove pattern that repeats every single bar — the tightest, most hypnotic rhythmic cycle. One-bar loops create immediate groove recognition: the listener locks in within two repetitions. Louis Cole, Vulfpeck, and most funk music operates on one-bar loops. The limitation breeds creativity: every nuance within that single bar matters because the listener hears it repeated dozens of times.",
    tags: ["loop", "one-bar", "hypnotic", "funk"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["C2"], duration: "16n", velocity: 0.7 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "two-bar-rhythmic-loop",
    name: "Two-Bar Rhythmic Loop",
    category: "rhythm",
    description:
      "A groove that takes two bars to complete before repeating — bar 1 and bar 2 are different, creating a longer cycle with more development. Allows question-and-answer phrasing within the groove itself. More interesting than a one-bar loop but still tight enough to be hypnotic. Many funk grooves are actually two-bar patterns: the first bar sets up a rhythmic tension, the second resolves it.",
    tags: ["loop", "two-bar", "phrase", "development"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n.", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["C2"], duration: "8n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "three-bar-rhythmic-loop",
    name: "Three-Bar Rhythmic Loop",
    category: "rhythm",
    description:
      "A groove that cycles every three bars — rare and disorienting in a 4/4 context because the repeat point shifts against the musical phrasing. The listener expects patterns in powers of two; three-bar loops create a constant sense of phase-shifting. OWANE uses three-bar loops to make straight 4/4 feel off-kilter. The loop's length keeps the groove fresh longer than shorter cycles, but the odd number prevents it from ever feeling settled.",
    tags: ["loop", "three-bar", "odd", "disorienting"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["G2"], duration: "16n" },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["E2"], duration: "8n" },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["E2"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.9 },
        { notes: ["E2"], duration: "16n" },
        { notes: ["G2"], duration: "8n" },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "five-bar-rhythmic-loop",
    name: "Five-Bar Rhythmic Loop",
    category: "rhythm",
    description:
      "A groove cycling every five bars — extremely unusual and deeply disorienting against standard phrasing. The listener's expectation of four- or eight-bar phrases is constantly subverted. Five-bar loops take about 20 bars to realign with a standard hypermeter, so the groove feels perpetually 'wrong' in the most engaging way. Progressive and experimental artists use this to create rhythmic worlds that operate by their own internal logic.",
    tags: ["loop", "five-bar", "progressive", "experimental"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["A2"], duration: "8n", velocity: 0.8 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["A2"], duration: "8n" },
        { notes: ["A2"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
        { notes: ["A2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["A2"], duration: "8n" },
        { notes: ["A2"], duration: "8n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "odd-length-ostinato",
    name: "Odd-Length Ostinato",
    category: "rhythm",
    description:
      "A repeating rhythmic pattern whose length doesn't divide evenly into the bar — a 3-beat pattern in 4/4, a 5-beat pattern in 4/4, a 7-beat pattern in 3/4. The ostinato cycles against the meter, creating a constantly shifting relationship between the pattern and the barline. Each repetition starts on a different beat, generating variety from a single idea. The rhythmic equivalent of polytonality — two grids coexisting.",
    tags: ["ostinato", "odd", "polymetric", "cycling"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n.", velocity: 0.9 },
        { notes: ["G2"], duration: "8n", velocity: 0.7 },
        { notes: ["A2"], duration: "8n.", velocity: 0.8 },
        { notes: ["E2"], duration: "8n.", velocity: 0.9 },
        { notes: ["G2"], duration: "8n", velocity: 0.7 },
        { notes: ["A2"], duration: "8n.", velocity: 0.8 },
      ],
    },
  },
  {
    id: "polyrhythmic-ostinato",
    name: "Polyrhythmic Ostinato",
    category: "rhythm",
    description:
      "An ostinato that contains a polyrhythm within itself — a repeating pattern built from two or more conflicting subdivisions. Not a polyrhythm between instruments, but one instrument playing a self-contained polyrhythmic loop. OWANE's guitar riffs often do this: a single hand plays a pattern that contains both triplet and 16th-note elements, creating an internal rhythmic tension that repeats with each cycle.",
    tags: ["ostinato", "polyrhythm", "internal", "owane"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "8t", velocity: 0.6 },
        { notes: ["E2"], duration: "8t", velocity: 0.5 },
        { notes: ["E2"], duration: "8t", velocity: 0.6 },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n", velocity: 0.5 },
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "metric-mod-subdivision",
    name: "Metric Modulation by Subdivision",
    category: "rhythm",
    description:
      "Changing tempo by reinterpreting a subdivision as the new pulse — the triplet 8th becomes the new straight 8th, or the dotted 8th becomes the new quarter. The tempo changes but the transition is seamless because one element of the old tempo IS the new tempo. More controlled than a simple tempo change. Vinnie Colaiuta, Gavin Harrison, and Louis Cole use subdivision-based metric modulations to shift grooves mid-song without losing the audience.",
    tags: ["metric modulation", "subdivision", "tempo", "seamless"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "8n", velocity: 0.85 },
        { notes: ["C2"], duration: "8t", velocity: 0.8 },
        { notes: ["D3"], duration: "8t", velocity: 0.9 },
        { notes: ["C2"], duration: "8t", velocity: 0.7 },
        { notes: ["D3"], duration: "8t", velocity: 0.85 },
        { notes: ["C2"], duration: "8t", velocity: 0.75 },
        { notes: ["D3"], duration: "8t", velocity: 0.9 },
      ],
    },
  },
  {
    id: "tempo-illusion",
    name: "Tempo Illusion",
    category: "rhythm",
    description:
      "Creating the perception of a tempo change without actually changing the tempo — using subdivision shifts, accent displacement, or note density changes to trick the listener's sense of speed. Play 16ths where you were playing 8ths and the tempo seems to double; switch from triplets to straight and it seems to accelerate. OWANE uses tempo illusions to make a single-tempo track feel like it moves through multiple speeds.",
    tags: ["tempo", "illusion", "perception", "subdivision"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "4n", velocity: 0.8 },
        { notes: ["E2"], duration: "4n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "rhythmic-hocket",
    name: "Rhythmic Hocket",
    category: "rhythm",
    description:
      "A melody or rhythmic pattern split between two or more instruments, each playing alternating notes so that together they form a complete line. Neither instrument plays the whole pattern — they interlock like teeth on a zipper. Medieval hocket technique applied to modern rhythm sections: bass plays notes 1, 3, 5; guitar plays 2, 4, 6. The composite is the groove; the individual parts are fragments. Creates an otherworldly, machine-like precision.",
    tags: ["hocket", "interlocking", "alternating", "precision"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "8n", velocity: 0.8 },
        { notes: ["A3"], duration: "8n", velocity: 0.7 },
        { notes: ["G3"], duration: "8n", velocity: 0.8 },
        { notes: ["C4"], duration: "8n", velocity: 0.7 },
        { notes: ["B3"], duration: "8n", velocity: 0.8 },
        { notes: ["D4"], duration: "8n", velocity: 0.7 },
        { notes: ["A3"], duration: "8n", velocity: 0.8 },
        { notes: ["E4"], duration: "8n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "instrumental-hocket",
    name: "Instrumental Hocket",
    category: "orchestration",
    description:
      "Splitting a melody or phrase between different instruments — each instrument plays one or two notes, then hands off. Webern used this with pitch; funk bands use it with rhythm. The melody exists only as a composite of all the parts. Creates a kaleidoscopic timbral effect: each note has a different color because it comes from a different instrument. Modern production uses hocket between synth patches, vocal chops, and sampled instruments.",
    tags: ["hocket", "timbral", "split", "composite"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C4"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["D4"], duration: "8n" },
        { notes: ["G2"], duration: "8n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["A2"], duration: "8n" },
        { notes: ["C4"], duration: "4n" },
      ],
    },
  },
  {
    id: "staggered-entrances",
    name: "Staggered Entrances",
    category: "orchestration",
    description:
      "Instruments entering one at a time at irregular intervals — not a clean round-robin but a scattered, organic buildup. Each entrance adds a voice to the texture at an unpredictable moment. Creates anticipation (when will the next one come?) and a sense of a groove or texture assembling itself. Louis Cole tracks often start this way: drums alone, then bass sneaks in, then keys arrive unexpectedly. The buildup IS the intro.",
    tags: ["entrances", "staggered", "buildup", "organic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "4n", velocity: 0.8 },
        { notes: ["C2"], duration: "4n", velocity: 0.7 },
        { notes: ["C2", "E3"], duration: "4n", velocity: 0.8 },
        { notes: ["C2", "E3", "G3"], duration: "4n", velocity: 0.8 },
        { notes: ["C2", "E3", "G3", "C4"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "layered-entrances",
    name: "Layered Entrances",
    category: "orchestration",
    description:
      "Instruments entering in a planned sequence, each adding a new rhythmic or melodic layer — a deliberate, composed buildup where each entrance introduces a new element. Unlike staggered entrances (which feel spontaneous), layered entrances are architected: drums set the pattern, bass adds the harmonic foundation, keys add color, guitar adds melody. Each layer is designed to complement what came before. The Boléro principle applied to a groove.",
    tags: ["entrances", "layering", "buildup", "composed"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.8 },
        { notes: ["C2"], duration: "8n", velocity: 0.7 },
        { notes: ["C2", "G2"], duration: "8n", velocity: 0.8 },
        { notes: ["C2", "G2"], duration: "8n", velocity: 0.7 },
        { notes: ["C2", "G2", "E3"], duration: "8n", velocity: 0.8 },
        { notes: ["C2", "G2", "E3"], duration: "8n", velocity: 0.7 },
        { notes: ["C2", "G2", "E3", "C4"], duration: "4n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "rhythmic-unison-break",
    name: "Rhythmic Unison Break",
    category: "rhythm",
    description:
      "The entire band suddenly playing the exact same rhythm in unison — a break in the groove where all rhythmic independence collapses into a single, massive rhythmic statement. The contrast between independent grooves and sudden unison is electric. Tower of Power, Snarky Puppy, and Louis Cole use unison breaks as exclamation points within a groove. The return to independent parts afterward feels like an explosion of freedom.",
    tags: ["unison", "break", "impact", "contrast"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2", "E3", "G3", "B3"], duration: "8n", velocity: 0.95 },
        { notes: ["E2", "E3", "G3", "B3"], duration: "16n", velocity: 0.9 },
        { notes: ["E2", "E3", "G3", "B3"], duration: "8n.", velocity: 0.95 },
        { notes: ["E2", "E3", "G3", "B3"], duration: "4n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "stop-time-break",
    name: "Stop-Time Break",
    category: "funk",
    description:
      "A sudden stop where the entire band cuts out except for one instrument — usually bass or drums — playing a solo figure in the silence. Different from stop-time (where the band hits together on specific beats): a stop-time break is a true dropout, a gap in the texture. The silence makes the solo instrument sound enormous. When the band crashes back in, the relief is physical. The break IS the moment.",
    tags: ["funk", "stop", "break", "solo", "silence"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2", "E3", "G3", "B3"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["E2", "E3", "G3", "B3"], duration: "4n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "sudden-density-change",
    name: "Sudden Density Change",
    category: "rhythm",
    description:
      "An abrupt shift in rhythmic density — from sparse quarter notes to frantic 16ths, or from dense 32nd-note subdivisions to whole notes. Not a gradual transition but a hard cut. Creates a startling contrast that resets the listener's rhythmic perception. Louis Cole uses sudden density changes as structural markers: a hyper-dense drum passage suddenly drops to a single kick on beat 1, and the silence between hits becomes the most powerful element.",
    tags: ["density", "contrast", "sudden", "structural"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.6 },
        { notes: ["E3"], duration: "16n", velocity: 0.7 },
        { notes: ["E3"], duration: "16n", velocity: 0.8 },
        { notes: ["E3"], duration: "16n", velocity: 0.6 },
        { notes: ["E3"], duration: "16n", velocity: 0.7 },
        { notes: ["E3"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  // ── Harmony Playground ──────────────────────────────────────
  {
    id: "prog-i-bvii-iv-i",
    name: "I → ♭VII → IV → I",
    category: "progressions",
    description:
      "A mixolydian-flavored progression borrowing ♭VII from the parallel minor. The ♭VII → IV motion creates a plagal pull, while the ♭VII → I at the end adds a rock/modal cadence. Used extensively in classic rock (Beatles, Led Zeppelin), indie, and film scoring. The sound of 'heroic but earthy' — grounded, modal, and powerful without being jazzy or chromatic.",
    tags: ["mixolydian", "bVII", "rock", "modal"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bvi-iv-v",
    name: "I → ♭VI → IV → V",
    category: "progressions",
    description:
      "Borrows ♭VI from the parallel minor, creating a dramatic drop followed by a climb back through IV and V. The ♭VI → IV motion is the surprise — a chromatic mediant leap that lands on familiar diatonic ground. Used in film scoring for moments of doubt that resolve into determination. The ♭VI is the shadow; IV and V are the return to light.",
    tags: ["bVI", "borrowed chord", "dramatic", "film"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-biii-iv-i",
    name: "I → ♭III → IV → I",
    category: "progressions",
    description:
      "A borrowing from the parallel minor that creates a brief darkening before climbing back. The ♭III → IV motion is a whole step up that feels like breaking through clouds. Common in rock, pop, and Radiohead's harmonic language. Less dramatic than ♭VI but more unsettling than diatonic — the ♭III is just 'wrong' enough to be interesting.",
    tags: ["bIII", "borrowed chord", "modal", "rock"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-biii-bvi-iv",
    name: "I → ♭III → ♭VI → IV",
    category: "progressions",
    description:
      "A fully borrowed-chord progression — each chord after I comes from the parallel minor. The root motion by minor thirds (C → Eb → Ab) followed by a major-second drop to IV creates a dark, cinematic journey that lands on familiar ground. The IV at the end provides just enough diatonic warmth to prevent the progression from sounding fully minor. Radiohead and film composers love this palette.",
    tags: ["borrowed chord", "chromatic", "cinematic", "radiohead"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-vi7-ii7-v7",
    name: "I → VI7 → ii7 → V7",
    category: "progressions",
    description:
      "The classic jazz turnaround with a secondary dominant — VI7 tonicizes ii, creating a chain of dominant-resolution relationships. Smoother and more directional than I-vi-ii-V because each chord resolves to the next by fifth. The VI7 adds a hint of chromaticism (G# in C major) that gives the progression sophistication. The bread and butter of standards, Sinatra, and golden-age pop.",
    tags: ["turnaround", "secondary dominant", "jazz", "standards"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-iii7-vi-ii-v",
    name: "I → III7 → vi → ii → V",
    category: "progressions",
    description:
      "An extended turnaround using III7 as a secondary dominant of vi. The III7 (E7 in C major) sounds exotic — its G# clashes with the key's G natural — before resolving beautifully to vi. From there, standard ii-V motion brings you home. Used in jazz ballads and sophisticated pop. The III7 → vi motion is the magic moment: unexpected color that makes the resolution feel earned.",
    tags: ["jazz", "soul", "secondary dominant", "ballad", "sophisticated"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-bvimaj7-iihalf-v7",
    name: "I → ♭VImaj7 → iiø7 → V7",
    category: "progressions",
    description:
      "A sophisticated borrowed-chord turnaround — ♭VImaj7 from the parallel minor creates a lush, dark color, then iiø7 (half-diminished) pulls toward V7 for the final resolution. The ♭VImaj7 sounds like a doorway to another world; the iiø7 → V7 pulls you back. Used in neo-soul, jazz ballads, and film scoring for moments of bittersweet reflection. Every chord has a 7th, creating a continuous stream of extended harmony.",
    tags: ["borrowed chord", "half-diminished", "neo-soul", "lush"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["D3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-ivm6-i",
    name: "I → IVm6 → I",
    category: "progressions",
    description:
      "The minor iv with an added 6th — a richer, more poignant version of the minor-iv-in-major sound. The m6 voicing (F-Ab-C-D in C major) adds the 6th degree of the iv chord, creating a beautiful dissonance that makes the return to I ache. A signature color in Burt Bacharach, bossa nova, and modern neo-soul. Three chords that contain an entire emotional world.",
    tags: ["minor iv", "m6", "bacharach", "bossa"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bvii7-iv",
    name: "I → ♭VII7 → IV",
    category: "progressions",
    description:
      "The backdoor approach — ♭VII7 acts as a dominant of IV, creating a blues-rock pull toward the subdominant. Used as a vamp or as a launching pad for improvisation. The ♭VII7 has a gritty, mixolydian quality that makes even a major-key progression feel bluesy. Steely Dan, the Allman Brothers, and countless jam bands live on this progression.",
    tags: ["backdoor", "bVII", "blues-rock", "vamp"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Ab3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-ii7-v",
    name: "I → II7 → V",
    category: "progressions",
    description:
      "II7 as a secondary dominant of V — a quick tonicization that adds a chromatic spark before the dominant. The F# in II7 (D7 in C major) creates a momentary Lydian brightness. Used in jazz, gospel, and golden-age Hollywood as a way to energize the approach to V. More sophisticated than going directly to V, and more forward-moving than ii → V.",
    tags: ["secondary dominant", "tonicization", "gospel", "bright"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-biiimaj7-iv",
    name: "I → ♭IIImaj7 → IV",
    category: "progressions",
    description:
      "A borrowed major-7th chord from the parallel minor that creates a chromatic bass motion (C → Eb → F). The ♭IIImaj7 voicing is lush and dark — it sounds like stepping into a shadow before emerging into the warmth of IV. Used in neo-soul, R&B, and cinematic underscore. The maj7 quality of the ♭III makes it feel rich rather than heavy, sophisticated rather than gloomy.",
    tags: ["borrowed chord", "bIII", "neo-soul", "lush"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-sharpivodim-v",
    name: "I → ♯IV°7 → V",
    category: "progressions",
    description:
      "A passing diminished chord connecting I to V — the ♯IV°7 fills the whole-step gap between IV and V with a chromatic, unstable sonority that resolves upward. The bass walks C → F# → G while the upper voices create a diminished-7th tension. Used constantly in barbershop, ragtime, jazz standards, and Disney music. The passing diminished is musical sleight of hand — it makes a simple I-V motion sound sophisticated.",
    tags: ["diminished", "passing chords", "chromatic", "barbershop"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bii-i",
    name: "I → ♭II → I",
    category: "progressions",
    description:
      "The Neapolitan as a neighbor chord — a half-step dip that returns immediately to I. The ♭II creates a moment of maximum chromaticism (the root drops a half step, the third drops, everything shifts) before snapping back. In film scoring, this is a 'shudder' — a brief harmonic chill. As a vamp, it creates an oscillating, anxious texture. Herrmann and Elfman use this for uneasy, psychological moments.",
    tags: ["classical", "film", "neapolitan", "chromatic", "tension"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-biii-bvi-bii-v",
    name: "I → ♭III → ♭VI → ♭II → V",
    category: "progressions",
    description:
      "A fully chromatic journey down by major thirds (C → Eb → Ab → Db) before snapping to V for the resolution. Each chord is a chromatic mediant of the previous one. The progression traverses the entire chromatic-mediant cycle before returning to tonal function with V. Maximally colorful, used in film scoring for journeys, transformations, and moments of vast scope. Every chord change feels like a scene change.",
    tags: ["chromatic mediants", "cycle", "cinematic", "journey"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-iv-sharpivodim-v",
    name: "I → IV → ♯IV°7 → V",
    category: "progressions",
    description:
      "A chromatic bass walkup: C → F → F# → G. The IV provides a strong subdominant foundation; the ♯IV°7 is a chromatic passing chord that creates tension; V resolves it. The smoothest possible approach to V — three half-steps in the bass over four chords. Used in gospel, barbershop, ragtime, and every Disney movie ever made. The bass line does all the work; the upper voices just follow along.",
    tags: ["walkup", "diminished", "gospel", "disney", "passing chords"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-vi-bvi-v",
    name: "I → vi → ♭VI → V",
    category: "progressions",
    description:
      "A chromatic bass descent from vi to V through the borrowed ♭VI — the bass walks A → Ab → G while the quality shifts from minor to major. The vi → ♭VI motion is a single semitone drop that transforms the harmonic color entirely: the borrowed ♭VI darkens the atmosphere before V brings it back. Used in pop, R&B, and film scoring for moments of emotional deepening before resolution.",
    tags: ["pop", "film", "chromatic", "descending", "borrowed chord"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-iii-biii-ii",
    name: "I → iii → ♭III → ii",
    category: "progressions",
    description:
      "A chromatic descent through the third degree — iii drops to ♭III (borrowed from minor), then resolves down to ii. The bass walks E → Eb → D while the chord quality shifts from minor to major to minor. Creates a melancholic, searching quality — three different emotional colors in three chords. The ♭III → ii motion is particularly beautiful: a major chord resolving down by half step to a minor chord.",
    tags: ["indie", "art-rock", "chromatic", "descending", "shifting"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-biii-vi-iv",
    name: "I → ♭III → vi → IV",
    category: "progressions",
    description:
      "A Radiohead-esque progression that mixes borrowed chords with diatonic ones. The ♭III darkens the mood immediately, then vi continues the minor quality, and IV provides warm diatonic relief. The root motion (C → Eb → A → F) creates an angular, unpredictable bass line that avoids the smoothness of stepwise motion. Each chord feels like a deliberate choice rather than a resolution.",
    tags: ["borrowed chord", "angular", "radiohead", "alternative"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-vi7-bii7-i",
    name: "I → VI7 → ♭II7 → I",
    category: "progressions",
    description:
      "A tritone-sub turnaround — VI7 tonicizes ii (as a secondary dominant), but instead of going to ii, it tritone-subs to ♭II7, which resolves chromatically back to I. The bass walks C → A → Db → C, creating a chromatic encirclement of the tonic. Maximum sophistication in three chords. Used in jazz ballads and neo-soul for a resolution that sounds inevitable and surprising at the same time.",
    tags: ["tritone sub", "turnaround", "jazz", "chromatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-iv-iv-i",
    name: "I → IV → iv → I",
    category: "progressions",
    description:
      "The minor-iv resolution — major IV brightens the tonic, then minor iv darkens it with a single altered note (A → Ab in C major), and I returns with the warmth of home. The IV → iv motion is one of the most beautiful sounds in all of harmony: the major third of IV dropping to a minor third transforms the emotional quality entirely. Used everywhere from Beatles to Radiohead to gospel to film scoring. Three chords, infinite feeling.",
    tags: ["pop", "rock", "minor iv", "plagal", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-ii-bii-i",
    name: "I → ii → ♭II → I",
    category: "progressions",
    description:
      "A chromatic descent through the supertonic region — ii drops to ♭II (Neapolitan), which resolves by half step back to I. The bass walks C → D → Db → C, a chromatic neighbor-note motion centered on the tonic. The ii → ♭II motion is the surprise: a diatonic chord suddenly replaced by its chromatic alteration. Creates a 'sighing' resolution that's more melancholic than a standard ii-V-I.",
    tags: ["classical", "film", "neapolitan", "chromatic", "descending"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  // ── Romantic / Golden Age Hollywood (Batch 2) ───────────────
  {
    id: "melodic-climax-displacement",
    name: "Melodic Climax Displacement",
    category: "melodic-devices",
    description:
      "Placing the melodic climax NOT on the harmonic climax — the melody peaks a beat early or late relative to the strongest chord. The displacement creates a friction that makes the moment feel more spontaneous and emotionally complex. If melody and harmony climax together, it's satisfying but predictable. When they're offset, the listener's brain tries to reconcile two peaks, deepening the emotional response.",
    tags: ["climax", "displacement", "asymmetry", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C5"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melodic-peak-release",
    name: "Melodic Peak-and-Release",
    category: "melodic-devices",
    description:
      "A melody that reaches its highest point and immediately descends — the 'release' is as important as the peak. The shape communicates 'I gave everything and now I'm letting go.' A fast release (immediate descent) feels like a cry; a slow release (gradual stepwise descent) feels like exhaling. Golden-age Hollywood themes use the peak-and-release to time emotional beats to dialogue or action.",
    tags: ["peak", "release", "descending", "emotional"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["C5"], duration: "4n", velocity: 0.9 },
        { notes: ["B4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-sigh",
    name: "Chromatic Sigh",
    category: "melodic-devices",
    description:
      "A descending chromatic half step used as an expressive figure — more specific than the general 'sighing seconds,' this is the half-step chromatic inflection: E to Eb, B to Bb, A to Ab. The chromatic quality adds more pain than a diatonic step because it bends the pitch outside the key. The single most concentrated unit of musical yearning. One chromatic sigh in the right place can make an entire phrase ache.",
    tags: ["chromatic", "sigh", "half-step", "yearning"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["B4"], duration: "4n" },
        { notes: ["Bb4"], duration: "2n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["Ab4"], duration: "1n" },
      ],
    },
  },
  {
    id: "appoggiatura-into-climax",
    name: "Appoggiatura into Climax",
    category: "melodic-devices",
    description:
      "Approaching the melodic climax from an appoggiatura — a dissonant non-chord tone that resolves into the peak note. The appoggiatura adds a moment of 'leaning in' before the peak, making the climax feel earned through dissonance. Puccini and Verdi do this constantly in operatic arias; film composers inherited it. The appoggiatura says 'almost there' and the resolution says 'arrived.'",
    tags: ["appoggiatura", "climax", "dissonance", "opera"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["D5"], duration: "4n", velocity: 0.85 },
        { notes: ["C5"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "melody-delayed-against-harmony",
    name: "Melody Delayed Against Harmony",
    category: "melodic-devices",
    description:
      "The melody arriving a beat or half-beat after the chord change — the harmony shifts first, creating anticipation, and the melody follows into the new harmonic space. This offset creates a sense of the melody being drawn forward by the harmony, like a current pulling a swimmer. Golden-age Hollywood and jazz ballads use this constantly: the orchestra changes chords, and the soloist drifts in after.",
    tags: ["delayed", "offset", "anticipation", "ballad"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "G4"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "A4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-anticipating-harmony",
    name: "Melody Anticipating Harmony",
    category: "melodic-devices",
    description:
      "The melody arriving before the chord change — the melody note that belongs to the NEXT chord sounds while the current chord is still playing. Creates a clash that resolves when the harmony catches up. This is forward-leaning energy: the melody is impatient, dragging the harmony behind it. Bebop melodies do this constantly; film composers use it for urgency and excitement.",
    tags: ["anticipation", "forward motion", "clash", "urgency"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "A4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "A4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "B4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-through-chord-change",
    name: "Melody Sustained Through Chord Change",
    category: "melodic-devices",
    description:
      "A melody note held while the harmony changes underneath it — the same note means different things in different harmonic contexts. C held over a C major chord is the root; sustained over an F chord it becomes the 5th; over an Ab chord it's the 3rd. The note doesn't move, but its emotional meaning transforms with each chord change. One of the most powerful and underused melodic devices. The listener hears the same pitch but feels completely different emotions.",
    tags: ["sustained", "recontextualization", "meaning", "powerful"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G4", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["G4", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G4", "Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G4", "G3", "B3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "common-tone-melody-changing",
    name: "Common-Tone Melody over Changing Harmony",
    category: "melodic-devices",
    description:
      "A melody that stays on or returns to the same note while the chords shift underneath, creating an ever-changing emotional context for a static pitch. Similar to 'melody sustained through chord change' but as a compositional strategy rather than a single moment — the melody deliberately orbits one pitch while the harmony provides the motion. Satie's Gymnopédies and Debussy's use of modal melody over shifting harmony exemplify this.",
    tags: ["common-tone", "static", "shifting", "satie"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E4", "C3", "G3"], duration: "2n" },
        { notes: ["E4", "D3", "A3"], duration: "2n" },
        { notes: ["E4", "F3", "A3"], duration: "2n" },
        { notes: ["E4", "C3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "melody-desc-chromatic-bass",
    name: "Melody Against Descending Chromatic Bass",
    category: "melodic-devices",
    description:
      "A melody unfolding over a steadily descending chromatic bass line — the bass creeps downward by half steps while the melody moves independently above. The chromatic bass creates an inexorable sense of descent, gravity, and fate; the melody provides the emotional commentary. Every golden-age Hollywood tragedy uses this texture. The tension between the melody's freedom and the bass's relentless descent is the emotional engine.",
    tags: ["chromatic", "bass", "descending", "tragic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["B2", "A4"], duration: "4n" },
        { notes: ["Bb2", "G4"], duration: "4n" },
        { notes: ["A2", "F4"], duration: "4n" },
        { notes: ["Ab2", "E4"], duration: "4n" },
        { notes: ["G2", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "melody-asc-chromatic-bass",
    name: "Melody Against Ascending Chromatic Bass",
    category: "melodic-devices",
    description:
      "A melody over a steadily rising chromatic bass line — the bass climbs by half steps, creating mounting tension and anticipation. Rarer than the descending version and more unsettling: ascending chromatic bass suggests something building toward an inevitable climax. The melody can ride the tension or fight against it. Strauss, Wagner, and film composers use this for scenes of approaching danger or crescendoing passion.",
    tags: ["chromatic", "bass", "ascending", "tension"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C2", "E4"], duration: "4n" },
        { notes: ["C#2", "D4"], duration: "4n" },
        { notes: ["D2", "E4"], duration: "4n" },
        { notes: ["Eb2", "F4"], duration: "4n" },
        { notes: ["E2", "G4"], duration: "4n" },
        { notes: ["F2", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "harmonic-undercutting",
    name: "Harmonic Undercutting",
    category: "harmonic-devices",
    description:
      "Placing an unexpectedly dark or unstable chord beneath a bright or hopeful melody — the harmony 'undercuts' the melody's emotion. A major melody over a minor chord, a sweet tune over a tritone, a lullaby over dissonance. The effect is deeply unsettling because the listener's two channels of emotional information conflict. Film composers use this for scenes where things seem happy but aren't: a character smiling while lying, a beautiful landscape hiding danger.",
    tags: ["undercutting", "contrast", "irony", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Eb3", "Gb3", "Bb3", "G4"], duration: "4n" },
        { notes: ["Eb3", "Gb3", "Bb3", "A4"], duration: "4n" },
        { notes: ["D3", "F3", "Ab3", "B4"], duration: "4n" },
        { notes: ["Db3", "E3", "G3", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "deceptive-resolution-new-phrase",
    name: "Deceptive Resolution into a New Phrase",
    category: "cadences",
    description:
      "Using a deceptive cadence not just as a harmonic surprise but as the launch point for an entirely new phrase — the deception creates enough energy to power a new melodic statement. Instead of V → vi → (try again), it's V → vi → (new melody, new texture, new direction). The listener expected an ending and got a beginning. One of the great structural tricks in film scoring and Romantic composition.",
    tags: ["cadence", "deceptive", "phrase", "structural", "launch"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["B3", "D4", "F4"], duration: "4n" },
        { notes: ["C4", "E4", "G4"], duration: "4n" },
        { notes: ["D4", "F4", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "cadence-delayed-orchestration",
    name: "Cadence Delayed by Orchestration",
    category: "cadences",
    description:
      "Postponing a cadence not by harmonic means but by orchestration — the harmony reaches V → I but the orchestral forces arrive in waves, stretching the resolution across time. The strings resolve first, then woodwinds, then brass, each adding another layer. The cadence isn't one chord — it's a process. Williams, Goldsmith, and Bernstein use this to make cadential arrivals feel monumental rather than instantaneous.",
    tags: ["cadence", "delayed", "orchestration", "layering", "monumental"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.8 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "cadence-delayed-melody",
    name: "Cadence Delayed by Melody",
    category: "cadences",
    description:
      "The harmony resolves to the tonic but the melody refuses to land — it hovers above, passing through non-chord tones or lingering on suspended notes before finally settling on a chord tone. The cadence exists in the bass and harmony, but the melodic voice withholds its resolution. This creates a moment of 'almost home' that's more emotionally satisfying than an immediate cadence because the listener has to wait for the final piece.",
    tags: ["cadence", "delayed", "melody", "suspension", "hovering"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "cadence-delayed-bass",
    name: "Cadence Delayed by Bass",
    category: "cadences",
    description:
      "The upper voices resolve to the tonic chord but the bass withholds the root — it might sustain the dominant, sit on an inversion, or walk chromatically toward the tonic. When the bass finally lands on the root, the cadence is complete. The bass is the foundation of harmonic gravity, so withholding it creates a literal groundlessness. The moment the bass arrives is felt physically, not just heard.",
    tags: ["cadence", "delayed", "bass", "gravity", "arrival"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G2", "B3", "D4"], duration: "2n" },
        { notes: ["G2", "C4", "E4"], duration: "4n" },
        { notes: ["Ab2", "C4", "E4"], duration: "4n" },
        { notes: ["C3", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "sequential-intensification",
    name: "Sequential Intensification",
    category: "melodic-devices",
    description:
      "Repeating a melodic sequence at progressively higher pitch levels, each repetition more intense — louder, more orchestrated, or more harmonically charged. The sequence provides structure; the intensification provides drama. The listener knows what's coming (another repetition) but can't resist the escalation. Tchaikovsky, Korngold, and Williams use this to build from a whisper to a roar in the most predictable, irresistible way possible.",
    tags: ["sequence", "intensification", "escalation", "drama"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4"], duration: "4n", velocity: 0.5 },
        { notes: ["D4", "F4"], duration: "4n", velocity: 0.5 },
        { notes: ["E4", "G4"], duration: "2n", velocity: 0.55 },
        { notes: ["D4", "F4"], duration: "4n", velocity: 0.65 },
        { notes: ["E4", "G4"], duration: "4n", velocity: 0.65 },
        { notes: ["F4", "A4"], duration: "2n", velocity: 0.75 },
        { notes: ["E4", "G4"], duration: "4n", velocity: 0.85 },
        { notes: ["F4", "A4"], duration: "4n", velocity: 0.85 },
        { notes: ["G4", "B4"], duration: "2n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "chromatic-intensification-climax",
    name: "Chromatic Intensification Toward Climax",
    category: "harmonic-devices",
    description:
      "Increasing chromatic saturation as a passage approaches its climax — diatonic harmony gradually accumulates chromatic alterations until the climactic moment arrives in a wash of chromaticism. The technique ties harmonic color directly to emotional intensity: the more chromatic, the more intense. Wagner, Strauss, and Mahler do this; film composers use it for everything from love scenes to battle sequences.",
    tags: ["chromatic", "intensification", "climax", "wagner"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F#3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "register-lift",
    name: "Register Lift",
    category: "orchestration",
    description:
      "A sudden upward shift in the entire texture's register — all voices jump up by an octave or more. The effect is like a physical lift: the floor drops away and everything floats. Used at key dramatic moments to create instant brightness, airiness, or transcendence. Different from gradual register expansion: a register lift is a hard cut, not a fade. The contrast between before and after is the point.",
    tags: ["register", "lift", "sudden", "brightness"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C4", "E4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "register-drop",
    name: "Register Drop",
    category: "orchestration",
    description:
      "A sudden downward shift in the entire texture's register — all voices plunge by an octave or more. The effect is gravity, weight, darkness, or impact. A register drop after a high, ethereal passage is like landing. Film composers use register drops for reveals, impacts, and moments where the emotional floor falls away. The sudden bass creates a physical sensation in the listener's chest.",
    tags: ["register", "drop", "sudden", "impact"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4"], duration: "2n" },
        { notes: ["C2", "E2", "G2"], duration: "2n" },
      ],
    },
  },
  {
    id: "orchestral-bloom",
    name: "Orchestral Bloom",
    category: "orchestration",
    description:
      "A single note or simple chord that gradually opens up — adding instruments, widening the voicing, and increasing the dynamic until the initial seed has blossomed into a full orchestral texture. Slower and more organic than an orchestral swell: a bloom takes time, unfolding like a flower. Mahler, Debussy, and film composers use this for moments of dawning realization, wonder, or the slow arrival of something beautiful.",
    tags: ["bloom", "unfolding", "organic", "wonder"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3"], duration: "2n", velocity: 0.3 },
        { notes: ["G3", "B3"], duration: "2n", velocity: 0.4 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.55 },
        { notes: ["G2", "G3", "B3", "D4", "G4"], duration: "1n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "orchestral-withdrawal",
    name: "Orchestral Withdrawal",
    category: "orchestration",
    description:
      "The gradual removal of instruments from a full texture — the inverse of a bloom. Instruments drop out one by one until only a solo remains. Creates a sense of loss, intimacy, or fade. More emotional than a simple diminuendo because the timbral colors disappear: the listener notices what's missing. Mahler ends movements this way — the orchestra dissolves and a single instrument is left holding the last thread.",
    tags: ["withdrawal", "thinning", "loss", "solo"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.8 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G3"], duration: "2n", velocity: 0.45 },
        { notes: ["E3"], duration: "1n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "tutti-to-solo",
    name: "Tutti-to-Solo Contrast",
    category: "orchestration",
    description:
      "A sudden cut from full orchestra to a single solo instrument — maximum textural contrast. The tutti provides power and weight; the solo that follows is exposed, vulnerable, and intimate. The silence left by the departed orchestra makes the solo sound enormous in a different way — through its nakedness. Film composers use this for the moment when a character is left alone, or when internal emotion replaces external spectacle.",
    tags: ["tutti", "solo", "contrast", "vulnerable"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.9 },
        { notes: ["G4"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "solo-to-tutti",
    name: "Solo-to-Tutti Expansion",
    category: "orchestration",
    description:
      "A solo instrument suddenly joined by the full orchestra — the inverse of tutti-to-solo. The solo establishes intimacy and personal expression; when the orchestra enters, it's as if the character's private emotion has been embraced by the world. One of the most powerful moments in orchestral writing. Mahler's symphonies are full of solos that suddenly erupt into orchestral tuttis. Film composers use this for breakthrough moments.",
    tags: ["solo", "tutti", "expansion", "breakthrough"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "C4", "E4", "G4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "string-unison-bloom",
    name: "String Unison Bloom",
    category: "orchestration",
    description:
      "All strings playing a melody in unison that gradually opens into harmony — unison becomes octaves, then thirds, then full divisi chords. The melody starts as a single, powerful line and flowers into rich harmony without changing the tune. One of the most emotionally overwhelming textures in orchestral music. The unison line has the conviction of unanimity; the bloom adds the complexity of harmony.",
    tags: ["strings", "unison", "bloom", "harmony"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["A3"], duration: "2n" },
        { notes: ["A3", "A4"], duration: "2n" },
        { notes: ["A3", "C4", "A4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "divisi-bloom",
    name: "Divisi Bloom",
    category: "orchestration",
    description:
      "Starting with strings in two parts and progressively splitting into more divisi — 2 to 4 to 6 to 8 parts. Each split adds a new harmonic voice, creating an increasingly rich, shimmering texture. The 'bloom' is the growing complexity of harmony within a single instrumental family. Mahler, Strauss, and John Williams use divisi blooms to create moments of overwhelming lushness.",
    tags: ["divisi", "bloom", "splitting", "lush"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C4", "G4"], duration: "2n" },
        { notes: ["C4", "E4", "G4", "B4"], duration: "2n" },
        { notes: ["B3", "D4", "F4", "G4", "B4", "D5"], duration: "1n" },
      ],
    },
  },
  {
    id: "harp-underlay",
    name: "Harp Underlay",
    category: "orchestration",
    description:
      "Gentle, arpeggiated harp figures underneath a melody or harmonic progression — providing a shimmering, supportive texture without drawing attention. The harp underlay adds sparkle and motion to sustained harmonies. It's the orchestral equivalent of a pianist's left-hand arpeggios. Golden-age Hollywood uses harp underlays for romance, wonder, and anything magical or precious.",
    tags: ["harp", "underlay", "shimmer", "supportive"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "8n" },
        { notes: ["E3"], duration: "8n" },
        { notes: ["G3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["F3"], duration: "8n" },
        { notes: ["A3"], duration: "8n" },
        { notes: ["C4"], duration: "8n" },
        { notes: ["F4"], duration: "8n" },
      ],
    },
  },
  {
    id: "harp-harmonic-pedal",
    name: "Harp Harmonic Pedal",
    category: "orchestration",
    description:
      "Harp harmonics — the ethereal, bell-like tones produced by touching the string at its midpoint — sustained or repeated as a pedal tone. The harmonic quality is otherworldly: bright, clear, and disembodied. Used in film scoring and orchestral music for moments of magic, mystery, or transcendence. A harp harmonic pedal under a string melody adds a celestial shimmer that no other instrument can produce.",
    tags: ["harp", "harmonics", "pedal", "ethereal"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C5"], duration: "2n", velocity: 0.4 },
        { notes: ["C5"], duration: "2n", velocity: 0.35 },
        { notes: ["C5"], duration: "2n", velocity: 0.3 },
        { notes: ["C5"], duration: "2n", velocity: 0.25 },
      ],
    },
  },
  {
    id: "string-harmonics",
    name: "String Harmonics",
    category: "orchestration",
    description:
      "Natural or artificial harmonics on string instruments — ghostly, glassy tones produced by lightly touching the string at nodal points. String harmonics create an ethereal, crystalline texture unlike any other orchestral sound. Used for mystery, wonder, distant memories, and supernatural moments. A section of violins playing harmonics in unison creates a sound like voices from another dimension.",
    tags: ["strings", "harmonics", "ethereal", "glass"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E5"], duration: "2n", velocity: 0.3 },
        { notes: ["G5"], duration: "2n", velocity: 0.3 },
        { notes: ["C5"], duration: "1n", velocity: 0.25 },
      ],
    },
  },
  {
    id: "muted-string-color",
    name: "Muted String Color",
    category: "orchestration",
    description:
      "Strings played with mutes (con sordino) — a damped, veiled, intimate timbre. Muted strings lose their bright overtones and gain a warm, distant quality, as if heard through gauze. Used for introspection, nostalgia, and quiet sadness. The contrast between muted and unmuted strings is one of the orchestrator's most powerful tools: removing the mutes (senza sordino) creates an instant brightening that feels like opening curtains.",
    tags: ["strings", "muted", "intimate", "veiled"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.35 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.35 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.35 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "horn-melody-over-strings",
    name: "Horn Melody over Strings",
    category: "orchestration",
    description:
      "A French horn carrying the main melody with strings providing harmonic support — the quintessential golden-age Hollywood orchestral texture. The horn's warm, noble timbre cuts through string harmony without harshness. It's the sound of heroism, romance, and wide-open landscapes. Korngold, Steiner, Williams, and Howard Shore all use horn melody over strings as their signature 'big theme' sound.",
    tags: ["horns", "melody", "strings", "heroic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["D4", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["E4", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["G4", "G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-countermelody",
    name: "Horn Countermelody",
    category: "orchestration",
    description:
      "A French horn playing a countermelody beneath or alongside the main theme — adding a second melodic thread with the horn's distinctive warmth. The horn's range and timbre sit perfectly between the violin's brightness and the cello's depth, making it the ideal countermelody instrument. Williams frequently writes horn countermelodies that become as memorable as the main theme. The horn voice adds nobility to whatever it touches.",
    tags: ["horns", "countermelody", "warmth", "nobility"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4", "C3"], duration: "4n" },
        { notes: ["A4", "D3"], duration: "4n" },
        { notes: ["B4", "E3"], duration: "4n" },
        { notes: ["C5", "G3"], duration: "4n" },
        { notes: ["A4", "F3"], duration: "4n" },
        { notes: ["G4", "E3"], duration: "2n" },
      ],
    },
  },
  {
    id: "woodwind-countermelody",
    name: "Woodwind Countermelody",
    category: "orchestration",
    description:
      "A woodwind instrument (oboe, flute, or clarinet) playing a countermelody against a string or brass theme. Woodwind countermelodies add lightness, agility, and a vocal quality. The oboe in particular sounds like a singing voice and creates poignant countermelodies. Flute countermelodies shimmer above; clarinet countermelodies warm the texture below. A different color palette from horn countermelodies: more intimate, more personal.",
    tags: ["woodwind", "countermelody", "vocal", "intimate"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "F4"], duration: "4n" },
        { notes: ["E3", "G3", "B3", "G4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "woodwind-coloristic-doubling",
    name: "Woodwind Coloristic Doubling",
    category: "orchestration",
    description:
      "Doubling a string or brass melody with a woodwind instrument not for volume but for color — the woodwind adds a timbral sheen. Flute doubling violins an octave higher adds brilliance; clarinet doubling violas adds warmth; oboe doubling a horn melody adds edge and focus. The doubling instrument is quiet enough that the listener doesn't hear it as a separate voice, but its absence would be noticed as a loss of richness.",
    tags: ["woodwind", "doubling", "harmonic color", "timbre"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "C5"], duration: "4n" },
        { notes: ["D4", "D5"], duration: "4n" },
        { notes: ["E4", "E5"], duration: "4n" },
        { notes: ["C4", "C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "brass-crescendo-beneath-strings",
    name: "Brass Crescendo beneath Strings",
    category: "orchestration",
    description:
      "Brass instruments building a crescendo underneath a sustained string passage — the brass swell rises like heat beneath the string texture. The strings provide a lyrical surface; the brass underneath add weight, power, and an unstoppable sense of arrival. When the brass reaches forte, the entire orchestra sounds massive even though the strings haven't changed. One of the most reliable climax techniques in film scoring.",
    tags: ["brass", "crescendo", "beneath", "power"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.7 },
        { notes: ["G2", "D3", "F3", "A3", "C4", "E4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "tremolo-under-sustained-melody",
    name: "Tremolo under Sustained Melody",
    category: "orchestration",
    description:
      "String tremolo providing a shimmering, vibrating texture beneath a long, sustained melody line. The tremolo adds urgency and emotional intensity without competing with the melody. The melody exists in a world of calm; the tremolo beneath says 'but there's something churning underneath.' Used for suspense, passion, and emotional complexity. The more still the melody, the more powerful the tremolo's agitation becomes.",
    tags: ["tremolo", "melody", "tension", "underneath"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E3", "G3", "G4"], duration: "2n", velocity: 0.5 },
        { notes: ["E3", "G3", "A4"], duration: "2n", velocity: 0.5 },
        { notes: ["F3", "A3", "B4"], duration: "2n", velocity: 0.55 },
        { notes: ["E3", "G3", "C5"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "moving-inner-voices-sustained",
    name: "Sustained Chord with Moving Inner Voices",
    category: "voice-leading",
    description:
      "The outer voices hold their notes while inner voices move chromatically or stepwise — the chord shape stays the same but the harmonic color shifts within. Creates a kaleidoscopic effect: the listener hears the same 'frame' but the picture inside keeps changing. Different from a line cliché (which is one specific voice moving): here, multiple inner voices shift simultaneously. Ravel and Debussy use this for their most atmospheric passages.",
    tags: ["voice-leading", "inner", "chromatic", "shifting", "atmospheric"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "orchestral-breathing",
    name: "Orchestral Breathing",
    category: "orchestration",
    description:
      "The orchestra expanding and contracting in waves — crescendo/decrescendo, register expansion/contraction, density increase/decrease — in a regular, organic rhythm. The effect is literally like breathing: the music inhales and exhales. Used in film scoring for underscore that needs to have life without being attention-grabbing. The 'breathing' creates a sense of living presence beneath dialogue or action.",
    tags: ["breathing", "waves", "organic", "underscore"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.8 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.4 },
      ],
    },
  },
  // ── Mahler / Late Romantic (Batch 2) ────────────────────────
  {
    id: "chromatic-vl-spiral",
    name: "Chromatic Voice-Leading Spiral",
    category: "voice-leading",
    description:
      "Chromatic voice leading that circles rather than resolves — each chromatic step leads to another that leads to another, spiraling through tonal space without landing. The motion is perpetual and disorienting, like walking a spiral staircase and never reaching a floor. Late Mahler and Schoenberg's tonal works push chromatic voice leading to this extreme. The spiral is the sound of tonality stretched to its breaking point.",
    tags: ["voice-leading", "chromatic", "spiral", "perpetual", "mahler"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["B2", "Eb3", "Ab3"], duration: "4n" },
        { notes: ["Bb2", "D3", "G3"], duration: "4n" },
        { notes: ["A2", "Db3", "Gb3"], duration: "4n" },
        { notes: ["Ab2", "C3", "F3"], duration: "4n" },
        { notes: ["G2", "B2", "E3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dissonance-intensification",
    name: "Dissonance Intensification",
    category: "harmonic-devices",
    description:
      "Progressively adding more dissonant intervals to a texture — starting with consonance and gradually introducing 2nds, 7ths, tritones, and clusters. The harmonic surface becomes increasingly rough and charged. Different from chromatic saturation: this is about intervallic tension, not chromatic pitch count. Mahler uses dissonance intensification to create passages that feel like emotional pressure building beyond what the listener can bear.",
    tags: ["dissonance", "intensification", "pressure", "building"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "D3", "E3", "Gb3", "Ab3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "resolution-deferral",
    name: "Resolution Deferral",
    category: "harmonic-devices",
    description:
      "Systematically postponing harmonic resolution — each time a cadence approaches, the harmony slides sideways, reinterprets, or restarts. Not simple deceptive cadence: this is a structural strategy of perpetual deferral that can last for minutes. Wagner's Tristan is the famous example, but Mahler turns deferral into a philosophical statement: the music yearns for resolution as a metaphor for longing itself. The journey of not-arriving becomes the destination.",
    tags: ["deferral", "resolution", "postpone", "yearning"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "resolution-by-expansion",
    name: "Resolution by Expansion",
    category: "harmonic-devices",
    description:
      "Resolving harmonic tension not by arriving at a stable chord but by expanding the texture — opening the register, adding instruments, and creating space. The listener feels 'resolved' not because they heard V → I but because the sound world opened up. Mahler resolves dissonant passages this way: instead of a cadence, the orchestra blooms into a wide, luminous texture. The resolution is spatial and timbral, not harmonic.",
    tags: ["resolution", "expansion", "spatial", "timbral"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["D3", "F3", "Ab3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["G2", "C3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["C2", "G2", "C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "resolution-by-contraction",
    name: "Resolution by Contraction",
    category: "harmonic-devices",
    description:
      "Resolving tension by narrowing the texture — pulling all voices inward to a single note or a tight cluster. The opposite of resolution by expansion: instead of opening up, the music focuses down to a point. The sense of resolution comes from simplification and concentration rather than harmonic function. Mahler uses this to end movements in a whisper rather than a cadence — the music simply contracts until only one voice remains.",
    tags: ["resolution", "contraction", "focus", "simplification"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["G3"], duration: "1n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "dominant-without-resolution",
    name: "Dominant Without Resolution",
    category: "harmonic-devices",
    description:
      "A dominant chord (or dominant preparation) that simply dissolves, evaporates, or is abandoned — the expected resolution never comes. Different from tonic avoidance or cadence avoidance: here, the dominant itself is the final sound. The question hangs in the air forever. Mahler ends the first movement of his 9th Symphony this way. The unresolved dominant is the musical equivalent of a sentence that trails off — heartbreaking in its incompleteness.",
    tags: ["dominant", "unresolved", "dissolution", "incomplete"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.6 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.45 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.3 },
        { notes: ["G3", "B3"], duration: "1n", velocity: 0.15 },
      ],
    },
  },
  {
    id: "tonic-aftermath",
    name: "Tonic Aftermath",
    category: "harmonic-devices",
    description:
      "What happens AFTER the tonic arrives — the music lingers on I, but the resolution isn't the end of the story. The tonic is sustained, repeated, or gently embellished, allowing the listener to absorb what just happened. Like a long exhale after a climax. Mahler's codas often dwell in the tonic aftermath for dozens of bars, turning the arrival into a meditation on arrival itself. The aftermath is where the music finds its final meaning.",
    tags: ["tonic", "aftermath", "coda", "meditation"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.5 },
        { notes: ["C3", "G3"], duration: "1n", velocity: 0.35 },
      ],
    },
  },
  {
    id: "tonal-center-reinterpretation",
    name: "Tonal Center Shift by Reinterpretation",
    category: "harmonic-devices",
    description:
      "Changing the tonal center without any chord motion — the same chord is reinterpreted as belonging to a different key. An F major chord that functioned as IV in C is suddenly heard as I in F, without any transitional harmony. The modulation is entirely perceptual, not harmonic. Mahler does this by shifting dynamics, orchestration, or texture — the same notes acquire a different tonal meaning through context alone.",
    tags: ["reinterpretation", "tonal center", "context", "perception"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "1n" },
        { notes: ["Bb3", "D4", "F4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "harmonic-suspense",
    name: "Harmonic Suspense",
    category: "harmonic-devices",
    description:
      "Sustaining a harmonically ambiguous chord — one that could resolve in multiple directions — without resolving it. The listener's brain considers all possible resolutions simultaneously, creating musical suspense. A diminished seventh, an augmented triad, or a suspended chord held for many bars generates this effect. The longer the suspense, the more powerful the eventual resolution (or the more devastating its absence).",
    tags: ["suspense", "ambiguous", "sustained", "anticipation"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "1n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "1n" },
        { notes: ["G3", "B3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-inflection-diatonic",
    name: "Chromatic Inflection of Diatonic Melody",
    category: "melodic-devices",
    description:
      "Introducing a single chromatic note into an otherwise diatonic melody — one sharped or flatted note that doesn't belong to the key. The chromatic inflection stands out precisely because everything else is diatonic. It's like a single word in a foreign language dropped into a sentence. Mahler uses chromatic inflections to add pain or yearning to what would otherwise be a simple folk melody. One altered note changes everything.",
    tags: ["chromatic", "inflection", "diatonic", "alteration"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F#4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "pedal-harmonic-escalation",
    name: "Pedal with Harmonic Escalation",
    category: "voice-leading",
    description:
      "A sustained pedal note with progressively more dissonant or distant harmonies above it — the pedal provides stability while the upper voices become increasingly wild. The tension between the immovable bass and the escalating harmony creates a ratcheting intensity. Bruckner and Mahler build enormous dominant preparations this way: the pedal G holds firm while everything above becomes more chromatic, more dissonant, more urgent.",
    tags: ["voice-leading", "pedal", "escalation", "tension", "bruckner"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G2", "B3", "D4"], duration: "2n" },
        { notes: ["G2", "C4", "Eb4"], duration: "2n" },
        { notes: ["G2", "Db4", "E4"], duration: "2n" },
        { notes: ["G2", "D4", "F4", "Ab4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "major-minor-ambivalence",
    name: "Major-Minor Ambivalence",
    category: "harmonic-devices",
    description:
      "A passage that oscillates between major and minor versions of the same tonic — not modal interchange in the abstract, but the emotional experience of a tonal center that can't decide what it is. C major → C minor → C major. The same home, but the light keeps changing. Mahler's entire emotional world lives here: the major and minor aren't contrasting keys, they're two faces of the same feeling. Joy and sadness aren't opposites; they're neighbors.",
    tags: ["major", "minor", "ambivalence", "mahler"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "parallel-key-shadowing",
    name: "Parallel-Key Shadowing",
    category: "harmonic-devices",
    description:
      "A passage in a major key with constant hints of its parallel minor — borrowed chords, chromatic inner voices, or minor-inflected melody notes. Not full modal interchange: more like a shadow falling across a sunlit passage. The major key is 'present' but the minor key hovers behind it. Schubert invented this technique; Mahler perfected it. The music is happy and sad simultaneously — the major key can't quite shake its minor twin.",
    tags: ["parallel", "shadowing", "bittersweet", "schubert"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  // ── Golden Age Hollywood Progressions ───────────────────────
  {
    id: "prog-i-iii-iv-iv-i",
    name: "I → iii → IV → iv → I",
    category: "progressions",
    description:
      "A gentle descent through diatonic and borrowed harmony. The iii adds color between I and IV; the IV → iv motion provides the emotional payload — the major-to-minor third drop. The whole sequence feels like watching a sunset: beautiful, warm, and tinged with the knowledge that it's ending. One of the most emotionally complete four-chord progressions in the Hollywood vocabulary.",
    tags: ["film", "pop", "iii", "minor iv", "hollywood"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-vi-iv-iv-i",
    name: "I → vi → IV → iv → I",
    category: "progressions",
    description:
      "The '50s progression with a borrowed-chord twist — vi and IV are diatonic warmth, then iv darkens the palette before I returns. The vi → IV motion is one of the most comforting sounds in pop harmony; the IV → iv adds a pang of melancholy. The whole progression says 'everything is beautiful and nothing lasts.' Used in film scoring for bittersweet montages and farewell scenes.",
    tags: ["film", "pop", "vi", "minor iv", "bittersweet"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bvi-v-i",
    name: "I → ♭VI → V → I",
    category: "progressions",
    description:
      "A borrowed ♭VI that resolves through V back to I — the ♭VI is the dramatic moment, a sudden darkening that's rescued by the dominant. The bass motion C → Ab → G → C creates a satisfying arch. More dramatic than IV → V → I because the ♭VI comes from outside the key. Used in film scoring for 'close call' moments — darkness threatens but resolution prevails.",
    tags: ["bVI", "dramatic", "rescue", "film"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bvi-ii-v-i",
    name: "I → ♭VI → ii → V → I",
    category: "progressions",
    description:
      "A longer version of I → ♭VI → V → I, with ii inserted as a pre-dominant. The ♭VI → ii motion is unusual — a chromatic root drop from Ab to D — but the voice leading is smooth. The ii → V → I ending is completely standard, which makes the ♭VI feel like a scenic detour on the way home. More sophisticated than the three-chord version; used in jazz-inflected film scoring.",
    tags: ["jazz", "film", "bVI", "ii-V-I", "sophisticated"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-biii-iv-iv-i",
    name: "I → ♭III → IV → iv → I",
    category: "progressions",
    description:
      "Borrowed ♭III leads into a plagal IV → iv → I resolution. The ♭III darkens the first half; IV brightens momentarily; iv re-darkens; I resolves. A complete emotional journey in five chords: stable → dark → bright → melancholy → home. The ♭III → IV motion (whole step up) feels like breaking through clouds. The iv → I at the end adds the final touch of bittersweet beauty.",
    tags: ["film", "indie", "bIII", "minor iv", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  // ── Hollywood Chromatic Bass Patterns ───────────────────────
  {
    id: "bass-1-7-b7-6",
    name: "1 → 7 → ♭7 → 6",
    category: "bass",
    description:
      "A descending chromatic bass line from tonic through major 7th, minor 7th, to major 6th. The first chromatic step (7 → ♭7) is the emotional pivot — the shift from major to minor seventh darkens the mood. Classic Hollywood bass motion for romantic themes turning bittersweet. The line supports a I → Imaj7 → I7 → IVmaj7 or I → I7 → IV progression naturally.",
    tags: ["bass", "chromatic", "descending", "romantic", "hollywood"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-1-7-b7-5",
    name: "1 → 7 → ♭7 → 5",
    category: "bass",
    description:
      "Descending chromatic bass from tonic to dominant — the most common chromatic bass pattern in golden-age film scoring. Supports the classic line cliché progression. The arrival on 5 (dominant) sets up a natural return to tonic, making this bass line endlessly cyclable. The chromatic steps between 7, ♭7, and the leap to 5 create a sense of graceful descent followed by resolution.",
    tags: ["bass", "chromatic", "descending", "dominant", "cyclable"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "D3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "G3"], duration: "2n" },
        { notes: ["G2", "D3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-1-b7-6-b6",
    name: "1 → ♭7 → 6 → ♭6",
    category: "bass",
    description:
      "Chromatic descent skipping the major 7th — starting with the minor 7th gives an immediately darker quality. The 6 → ♭6 step is the money moment: the shift from major to minor 6th is one of the most poignant intervals in all of music. Used for descents into sadness or uncertainty. The bass line implies I → ♭VII → vi → ♭VI, a fully borrowed-chord journey.",
    tags: ["bass", "chromatic", "dark", "poignant", "borrowed chord"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["A2", "C3", "E3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-1-7-b7-6-b6-5",
    name: "1 → 7 → ♭7 → 6 → ♭6 → 5",
    category: "bass",
    description:
      "The full chromatic descent from tonic to dominant — every half step filled in. The most complete version of the Hollywood descending bass. Each step creates a new harmonic color; the accumulation of chromatic motion creates an inexorable sense of gravity. Reaching the dominant after five chromatic steps makes the arrival feel earned and sets up a powerful return to tonic. The bass line that defines golden-age Hollywood romance and tragedy.",
    tags: ["bass", "chromatic", "full", "descending", "golden-age"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["B2", "E3", "G#3"], duration: "4n" },
        { notes: ["Bb2", "E3", "G3"], duration: "4n" },
        { notes: ["A2", "E3", "G3"], duration: "4n" },
        { notes: ["Ab2", "D3", "F3"], duration: "4n" },
        { notes: ["G2", "D3", "F3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-1-b2-2-3",
    name: "1 → ♭2 → 2 → 3",
    category: "bass",
    description:
      "An ascending chromatic bass from tonic to mediant — the rising version of the Hollywood bass. Moving upward creates hope, anticipation, and forward momentum. The ♭2 is startling (Neapolitan territory), the 2 normalizes, and the 3 arrives at the mediant with a sense of blossoming. Supports I → ♭II → ii → iii or various reharmonizations. Less common than descending patterns but equally effective for building toward a climax.",
    tags: ["bass", "chromatic", "ascending", "hope", "momentum"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-1-b7-6-b6-5",
    name: "1 → ♭7 → 6 → ♭6 → 5",
    category: "bass",
    description:
      "Chromatic descent from tonic to dominant, skipping the leading tone. The ♭7 starting point gives an immediate mixolydian/blues color. Each step darkens the mood: ♭7 is gritty, 6 is warm, ♭6 is melancholic, and 5 is the resolution point. A favorite of Steiner and Korngold for scenes of noble sadness or heroic sacrifice. Less delicate than the full chromatic descent but more emotionally direct.",
    tags: ["bass", "chromatic", "mixolydian", "noble", "sacrifice"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["Bb2", "D3", "F3"], duration: "4n" },
        { notes: ["A2", "C3", "E3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "4n" },
        { notes: ["G2", "B2", "D3"], duration: "2n" },
      ],
    },
  },
  // ── Jazz (Batch 2) ──────────────────────────────────────────
  {
    id: "constant-bass-moving-chords",
    name: "Constant Bass with Moving Chords",
    category: "harmonic-devices",
    description:
      "A single bass note sustained while the chords above it change — a bass pedal used as a compositional strategy. The constant bass provides an anchor while the harmony drifts, creating an effect of dreaming or floating. Different from a simple pedal point: here, the chords above are the primary content, and the bass is the compositional choice. Miles Davis's modal jazz, neo-soul, and ambient music all use this technique.",
    tags: ["bass", "pedal", "floating", "modal"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C2", "C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C2", "D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["C2", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C2", "C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "dominant-chain",
    name: "Dominant Chain",
    category: "harmonic-devices",
    description:
      "A series of dominant 7th chords, each resolving by fifth to the next — a chain of V7 → I motions where each 'I' is reinterpreted as the next V7. E7 → A7 → D7 → G7 → C. The chain creates unstoppable forward motion; each resolution is simultaneously a new tension. Used in jazz turnarounds, bebop, and any context where you want maximum harmonic momentum. The chain can start anywhere and target any key.",
    tags: ["dominant", "chain", "resolution", "momentum"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["E3", "G#3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "diminished-passing-chain",
    name: "Diminished Passing Chain",
    category: "harmonic-devices",
    description:
      "A series of diminished chords connecting diatonic chords by half step — each diminished chord fills the chromatic gap between two diatonic bass notes. I → #I°7 → ii → #II°7 → iii. The bass walks chromatically while the diminished chords provide smooth voice leading. The sound of barbershop quartets, ragtime, and golden-age musical theater. Each diminished chord creates a moment of delicious tension before the next resolution.",
    tags: ["diminished", "passing chords", "chromatic", "barbershop"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["D#3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "rhythm-changes",
    name: "Rhythm Changes",
    category: "progressions",
    description:
      "The chord changes from Gershwin's 'I Got Rhythm' — the most common harmonic framework in jazz after the blues. AABA form with a bridge based on dominant chains (III7-VI7-II7-V7). Hundreds of jazz tunes ('contrafacts') use rhythm changes as their harmonic foundation: Anthropology, Oleo, Cotton Tail. If you can solo over rhythm changes, you can handle most jazz harmony. The A section is I-vi-ii-V territory; the bridge is the challenge.",
    tags: ["jazz", "rhythm changes", "gershwin", "standard"],
    audio: {
      tempo: 160,
      events: [
        { notes: ["Bb3", "D4", "F4"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["Bb3", "D4", "F4"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
      ],
    },
  },
  {
    id: "lady-bird-turnaround",
    name: "Lady Bird Turnaround",
    category: "progressions",
    description:
      "Tadd Dameron's turnaround: Cmaj7 → E♭7 → A♭maj7 → D♭7 — a series of major-third root movements that creates a kaleidoscopic harmonic surface. Each chord sounds like a completely new world. The root motion by major thirds divides the octave into three equal parts, creating a symmetrical journey that somehow still resolves. One of the most beautiful turnarounds in jazz — sophisticated, surprising, and satisfying.",
    tags: ["turnaround", "dameron", "major thirds", "jazz"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bird-blues",
    name: "Bird Blues",
    category: "progressions",
    description:
      "Charlie Parker's chromatic reharmonization of the 12-bar blues — inserting ii-V motions and tritone substitutions into the basic blues framework. The fundamental I-IV-V blues structure is preserved, but every transition is enriched with passing chords. Bird Blues is the bridge between blues and bebop: it sounds like jazz but feels like blues. Learning to hear Bird Blues changes is a milestone in jazz fluency.",
    tags: ["blues", "parker", "bebop", "reharmonization", "passing chords"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["F3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["E3", "Ab3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4", "G4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "minor-blues",
    name: "Minor Blues",
    category: "progressions",
    description:
      "A 12-bar blues in a minor key — using i, iv, and V (or v) instead of I, IV, and V. Darker and more ambiguous than major blues. The minor blues allows for a wider range of modal and harmonic approaches: Dorian, Aeolian, harmonic minor, and melodic minor all work over different sections. 'Mr. PC' (Coltrane), 'Equinox' (Coltrane), and 'Footprints' (Shorter) are classic minor blues vehicles.",
    tags: ["blues", "minor", "dark", "coltrane"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4", "Eb4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["Ab3", "C4", "Eb4"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "minor-ii-v-i",
    name: "Minor ii-V-i",
    category: "progressions",
    description:
      "The minor-key version of the jazz ii-V-I: iiø7 → V7(♭9) → im. The half-diminished ii chord and the altered dominant V create a darker, more tension-laden resolution than the major ii-V-I. The V7♭9 contains the leading tone and the ♭9, creating maximum pull toward the minor tonic. Essential jazz vocabulary — virtually every standard with a minor section uses this cadence. The harmonic minor scale lives here.",
    tags: ["ii-V-i", "minor", "jazz", "essential"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["D3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4", "Ab4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "1n" },
      ],
    },
  },
  {
    id: "tritone-sub-chain",
    name: "Tritone-Sub Chain",
    category: "harmonic-devices",
    description:
      "A series of tritone substitutions chained together — each dominant is replaced by its tritone sub, creating a descending chromatic bass line. Instead of V7 → I, you get ♭II7 → I; chain several and the bass descends by half steps: Db7 → C, B7 → Bb, A7 → Ab. The chromatic bass motion is irresistibly smooth. Used in jazz arranging for the slickest, most sophisticated-sounding harmonic motion possible.",
    tags: ["tritone sub", "chain", "chromatic", "smooth"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["B2", "Eb3", "Gb3", "A3"], duration: "4n" },
        { notes: ["Bb2", "D3", "F3", "Ab3"], duration: "4n" },
        { notes: ["A2", "Db3", "E3", "G3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3", "Gb3"], duration: "2n" },
      ],
    },
  },
  // ── Funk / OWANE / Louis Cole (Batch 2) ─────────────────────
  {
    id: "four-way-independence",
    name: "Four-Way Independence",
    category: "rhythm",
    description:
      "All four limbs on the drum kit playing independent rhythmic patterns simultaneously — kick, snare, hi-hat, and ride/left foot all doing different things. The pinnacle of coordination in modern drumming. Vinnie Colaiuta, Dave Weckl, and Louis Cole can maintain four independent rhythmic streams while making it groove. The compound rhythm created by all four voices is more complex than any single limb could play alone.",
    tags: ["independence", "four-way", "coordination", "advanced"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "4n", velocity: 0.8 },
        { notes: ["F#4"], duration: "8n", velocity: 0.4 },
        { notes: ["D3"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8t", velocity: 0.3 },
        { notes: ["C2"], duration: "8t", velocity: 0.6 },
        { notes: ["F#4"], duration: "8t", velocity: 0.3 },
        { notes: ["D3"], duration: "4n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "open-hi-hat-accent",
    name: "Open-Hi-Hat Accent",
    category: "rhythm",
    description:
      "Opening the hi-hat on a specific beat to create a 'splash' accent — the sustained, washy sound cuts through a closed-hat pattern like a spotlight. The open hat is louder, brighter, and decays longer than a closed hit, making it a natural accent tool. Placement is everything: open hat on the 'and' of 2 is classic funk; on the 'e' of 4 is modern; on beat 1 is subversive. The open-close-foot motion is the funk drummer's most expressive technique.",
    tags: ["hi-hat", "open", "accent", "funk"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["Bb4"], duration: "8n", velocity: 0.7 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["Bb4"], duration: "8n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "riff-fragmentation",
    name: "Riff Fragmentation",
    category: "funk",
    description:
      "Breaking a bass or guitar riff into shorter pieces and using only fragments — the listener's brain fills in the rest. Start with a four-bar riff, then play only the first two bars, then only bar one, then only the first beat. The riff 'dissolves' but remains recognizable because the listener remembers the whole. OWANE and progressive funk players use fragmentation to create tension before bringing the full riff back.",
    tags: ["funk", "riff", "fragmentation", "tension", "memory"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["E2"], duration: "4n." },
      ],
    },
  },
  {
    id: "riff-displacement",
    name: "Riff Displacement",
    category: "funk",
    description:
      "Shifting an entire riff forward or backward by a 16th note — the notes and rhythm are identical, but the relationship to the barline is different. A riff that starts on beat 1 feels grounded; displaced to the 'e' of 1, it feels pushed forward; displaced to the 'and' of 4, it feels like it's dragging. OWANE uses riff displacement to create multiple groove variations from a single idea without changing a note.",
    tags: ["funk", "riff", "displacement", "variation", "barline"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "8n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["E2"], duration: "16n", velocity: 0.8 },
        { notes: ["G2"], duration: "8n" },
      ],
    },
  },
  {
    id: "phantom-downbeat",
    name: "Phantom Downbeat",
    category: "rhythm",
    description:
      "Creating the perception of a downbeat where none exists — using accent patterns, bass emphasis, and rhythmic context to make the listener hear beat 1 in a different place than the actual bar line. The 'real' beat 1 becomes an upbeat; a different point in the pattern feels like home. OWANE and prog musicians use phantom downbeats to disorient the listener before revealing the true meter. The moment of realization is the payoff.",
    tags: ["phantom", "downbeat", "perception", "disorientation"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["C2"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.4 },
        { notes: ["D3"], duration: "16n", velocity: 0.85 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["C2"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "double-time-bass-half-drums",
    name: "Double-Time Bass over Half-Time Drums",
    category: "funk",
    description:
      "The bass playing at double the subdivision of the drums — 16th-note bass over 8th-note drums, or frantic bass runs over a half-time drum groove. The tempo conflict between the two instruments creates a layered feel: the drums say 'chill' while the bass says 'urgent.' Louis Cole uses this to create grooves that exist in two speeds simultaneously. The listener's body doesn't know which tempo to follow, and that's the magic.",
    tags: ["funk", "double-time", "half-time", "layering", "conflict"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["C2", "D3"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "16n" },
        { notes: ["D3"], duration: "16n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
      ],
    },
  },
  {
    id: "half-time-bass-double-drums",
    name: "Half-Time Bass over Double-Time Drums",
    category: "funk",
    description:
      "The drums playing frantic subdivisions while the bass plays long, sustained notes — the inverse of double-time bass. The drums provide all the energy and motion; the bass provides harmonic grounding and weight. Creates a groove that's hyperactive on top and solid on the bottom. Used in hip-hop-influenced funk where the 808-style bass holds while the hi-hats go into overdrive.",
    tags: ["funk", "half-time", "double-time", "contrast", "808"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2", "F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3", "F#4"], duration: "16n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
        { notes: ["D3", "F#4"], duration: "16n", velocity: 0.85 },
        { notes: ["F#4"], duration: "16n", velocity: 0.3 },
      ],
    },
  },
  // ── Counterpoint / Melody (Batch 2) ─────────────────────────
  {
    id: "canon-at-unison",
    name: "Canon at the Unison",
    category: "voice-leading",
    description:
      "Two voices playing the exact same melody, one entering after the other — a round at the same pitch level. The simplest and most transparent form of imitative counterpoint. The overlapping entries create harmony from a single melodic line. 'Row, Row, Row Your Boat' is a canon at the unison. In art music, unison canons reveal the hidden harmonic potential of a melody — you hear it as both melody and harmony simultaneously.",
    tags: ["counterpoint", "canon", "unison", "imitation", "round"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4", "C3"], duration: "4n" },
        { notes: ["E4", "D3"], duration: "4n" },
        { notes: ["F4", "E3"], duration: "4n" },
        { notes: ["G4", "F3"], duration: "4n" },
        { notes: ["E4", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "stretto",
    name: "Stretto",
    category: "voice-leading",
    description:
      "Overlapping imitative entries at increasingly close intervals — voices pile in before the previous entry has finished its theme. The temporal compression creates a sense of urgency and textural density. In a fugue, stretto is the climactic technique: the subject entries crowd together, creating maximum contrapuntal complexity. Bach's fugues reach their peak intensity in stretto passages. The listener hears the theme everywhere at once.",
    tags: ["counterpoint", "stretto", "compression", "climax", "fugue"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["E3", "C4"], duration: "4n" },
        { notes: ["F3", "D4"], duration: "4n" },
        { notes: ["G3", "E4", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "contrapuntal-climax",
    name: "Contrapuntal Climax",
    category: "voice-leading",
    description:
      "The moment in a polyphonic texture where all contrapuntal techniques converge — stretto, augmentation, inversion, and multiple subjects sounding simultaneously. The maximum density of independent voices creates an overwhelming, complex peak. Bach's Musical Offering and Art of Fugue reach contrapuntal climaxes of staggering complexity. In film scoring, a contrapuntal climax with multiple themes superimposed creates a sense of all narrative threads converging.",
    tags: ["counterpoint", "climax", "convergence", "density", "bach"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["D3", "G3", "F4"], duration: "4n" },
        { notes: ["E3", "A3", "C4", "G4"], duration: "4n" },
        { notes: ["F3", "B3", "D4", "A4"], duration: "4n" },
        { notes: ["G3", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "imitative-countermelody",
    name: "Imitative Countermelody",
    category: "voice-leading",
    description:
      "A countermelody that borrows motifs or rhythmic cells from the main melody — echoing, answering, or commenting on the theme using its own material. More connected than a free countermelody; the imitation creates a dialogue between the theme and its companion. Film composers use this to create 'deep' textures where the countermelody sounds organically related to the theme rather than arbitrarily layered on top.",
    tags: ["counterpoint", "countermelody", "imitative", "dialogue", "organic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4", "C3"], duration: "4n" },
        { notes: ["G4", "D3"], duration: "4n" },
        { notes: ["F4", "E3"], duration: "4n" },
        { notes: ["E4", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-countermelody",
    name: "Chromatic Countermelody",
    category: "voice-leading",
    description:
      "A countermelody moving primarily by half steps against a diatonic main melody — the chromatic voice creates harmonic friction and color while the diatonic melody provides stability. The chromatic line seems to 'slide' against the fixed points of the melody, creating constantly shifting intervals. A favorite technique of late Romantic composers and film scorers for adding emotional complexity to a simple tune.",
    tags: ["counterpoint", "chromatic", "countermelody", "friction", "romantic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4", "E3"], duration: "4n" },
        { notes: ["D4", "Eb3"], duration: "4n" },
        { notes: ["E4", "D3"], duration: "4n" },
        { notes: ["F4", "Db3"], duration: "4n" },
        { notes: ["G4", "C3"], duration: "2n" },
      ],
    },
  },
  // ── Orchestration (Batch 2) ─────────────────────────────────
  {
    id: "instrumental-handoff",
    name: "Instrumental Handoff",
    category: "orchestration",
    description:
      "Passing a melody from one instrument to another mid-phrase — the melody continues unbroken but the timbre changes. Flute starts, clarinet takes over, then oboe finishes the phrase. Each instrument colors its portion of the melody differently. Ravel's Boléro is the ultimate example: the same melody passes through the entire orchestra. In film scoring, handoffs create a sense of journey — the melody travels through different timbral landscapes.",
    tags: ["handoff", "timbre", "journey", "ravel"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "call-response-orchestration",
    name: "Call-and-Response Orchestration",
    category: "orchestration",
    description:
      "Splitting a musical idea between two orchestral groups — strings play a phrase, woodwinds answer; brass calls, strings respond. The antiphonal effect creates space, dialogue, and drama. Different from a simple orchestral handoff: call-and-response implies two distinct characters in conversation, not one voice changing color. Baroque concerti grosso, Mahler, and film composers all use orchestral call-and-response for maximum dramatic impact.",
    tags: ["call-response", "antiphonal", "dialogue", "drama"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4"], duration: "4n" },
        { notes: ["D4", "F4", "A4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["E4", "G4", "B4"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "foreground-background-orch",
    name: "Foreground/Background Orchestration",
    category: "orchestration",
    description:
      "Deliberately separating the orchestra into foreground (melody, prominent material) and background (accompaniment, texture, color) with clear differentiation in dynamics, register, and timbre. The foreground gets brighter timbres, louder dynamics, and a comfortable register; the background gets softer, darker, or more diffuse sounds. This depth illusion makes the orchestra sound three-dimensional — like a sonic landscape with near and far.",
    tags: ["foreground", "background", "depth", "perspective"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4", "C3", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["A4", "C3", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["B4", "D3", "F3"], duration: "4n", velocity: 0.85 },
        { notes: ["C5", "C3", "E3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "timbre-substitution",
    name: "Timbre Substitution",
    category: "orchestration",
    description:
      "Replacing one instrument with another on a repeated phrase — the melody stays the same but the timbre changes. Different from a handoff (which happens mid-phrase): here, the entire phrase is restated in a new color. First time: oboe. Second time: clarinet. Third time: horn. Each repetition reveals a different aspect of the melody's character. The technique proves that timbre IS content — the same notes in a different instrument are not the same music.",
    tags: ["timbre", "substitution", "restatement", "harmonic color"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "soloist-emergence",
    name: "Soloist Emergence",
    category: "orchestration",
    description:
      "A solo voice gradually emerging from within the orchestral texture — not a hard cut to solo, but a solo that separates from the ensemble by increments. The soloist starts playing with the section, then becomes slightly more prominent, then fully independent. The effect is like one person stepping forward from a crowd. More organic and dramatic than a tutti-to-solo cut. Mahler's symphonies are full of soloists who emerge from and dissolve back into the orchestral fabric.",
    tags: ["soloist", "emergence", "gradual", "mahler"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n", velocity: 0.6 },
        { notes: ["D3", "F3", "A3", "F4"], duration: "2n", velocity: 0.55 },
        { notes: ["G4"], duration: "2n", velocity: 0.7 },
        { notes: ["A4"], duration: "2n", velocity: 0.75 },
      ],
    },
  },
  // ── Harmonic / Melodic Language (Batch 3) ───────────────────
  {
    id: "prog-bvi-bvii-i",
    name: "♭VI → ♭VII → I",
    category: "progressions",
    description:
      "The 'backdoor' cadence from the Aeolian world — two borrowed chords approaching the tonic from below. The bass rises by whole step twice (Ab → Bb → C), creating unstoppable upward momentum. The ♭VI is dark, the ♭VII brightens, and I arrives like breaking through clouds. One of the most powerful cadential formulas in film scoring and rock. The ascending bass motion makes it feel triumphant rather than merely cadential.",
    tags: ["rock", "film", "bVI", "bVII", "backdoor", "triumphant"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-iv-bvii-i",
    name: "IV → ♭VII → I",
    category: "progressions",
    description:
      "A plagal variant with a borrowed ♭VII — the IV is diatonic warmth, the ♭VII is a Mixolydian darkening, and I resolves with a sense of both arrival and modal color. The bass motion F → Bb → C is a plagal approach with an extra step. Softer and less dramatic than ♭VI → ♭VII → I but more harmonically interesting than a simple IV → I plagal cadence. Common in Celtic-influenced film scoring.",
    tags: ["rock", "folk", "IV", "bVII", "plagal", "modal"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-biii-bvii-iv",
    name: "I → ♭III → ♭VII → IV",
    category: "progressions",
    description:
      "A fully borrowed-chord journey through the parallel minor — each chord is borrowed except I itself. The root motion C → Eb → Bb → F traces a cycle of fifths in the minor system. The ♭III adds darkness, the ♭VII adds modal color, and the IV provides warm landing. Used in rock, film scoring, and any context where you want the major tonic to sound like it's visiting the minor world before coming home.",
    tags: ["rock", "alternative", "bIII", "bVII", "borrowed chord", "modal"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-i-bvi-biii-iv",
    name: "I → ♭VI → ♭III → IV",
    category: "progressions",
    description:
      "A darker borrowed-chord chain — the ♭VI is the most dramatic borrowed chord, and moving to ♭III continues the minor-world feel before IV warms the palette. The root motion C → Ab → Eb → F is a rising fifths chain in the parallel minor. More melancholic than I → ♭III → ♭VII → IV because the ♭VI arrives immediately. Used for scenes of reflection, memory, and bittersweet acceptance.",
    tags: ["indie", "alternative", "bVI", "bIII", "borrowed chord", "melancholic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-mediant-common-tone",
    name: "Chromatic Mediant with Common-Tone Retention",
    category: "harmonic-devices",
    description:
      "A chromatic mediant progression where one note is deliberately sustained across the chord change — the common tone acts as an anchor while everything else shifts by half step. C major to Ab major sharing the note C; C major to E major sharing the note E. The common tone provides continuity in a moment of harmonic rupture. The listener hears something familiar inside something strange, which is more emotionally complex than a clean break.",
    tags: ["chromatic mediant", "common tone", "anchor", "continuity"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "descending-5-6-sequence",
    name: "Descending 5–6 Sequence",
    category: "voice-leading",
    description:
      "A contrapuntal sequence where a root-position triad alternates with a first-inversion triad a step below — the bass descends stepwise while the upper voice alternates between a fifth and a sixth above. Creates a graceful, cascading descent. One of the most common sequences in Baroque and Classical music, and a staple of golden-age Hollywood scoring for passages of flowing, inevitable descent.",
    tags: ["voice-leading", "sequence", "descending", "5-6", "baroque"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "A3"], duration: "4n" },
        { notes: ["B2", "D3", "G3"], duration: "4n" },
        { notes: ["B2", "D3", "G3"], duration: "4n" },
        { notes: ["A2", "C3", "E3"], duration: "4n" },
        { notes: ["A2", "C3", "F3"], duration: "4n" },
        { notes: ["G2", "B2", "D3"], duration: "2n" },
      ],
    },
  },
  {
    id: "ascending-5-6-sequence",
    name: "Ascending 5–6 Sequence",
    category: "voice-leading",
    description:
      "The ascending counterpart of the descending 5–6 — the bass rises stepwise while upper voices alternate fifth and sixth intervals. Creates upward momentum with smooth voice leading. Less common than the descending version but equally elegant. Used for passages of rising hope, building intensity, or climbing toward a climax. The stepwise bass provides stability while the alternating intervals create harmonic color.",
    tags: ["voice-leading", "sequence", "ascending", "5-6", "momentum"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "A3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["D3", "F3", "B3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "4n" },
        { notes: ["E3", "G3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "sequential-bass-descent",
    name: "Sequential Bass Descent",
    category: "bass",
    description:
      "A bass line that descends by a repeating intervallic pattern — not chromatic, not scalewise, but sequential: down a third then up a step, or down a fourth then up a second. The pattern creates a ratcheting descent that's more structured than a scale and more directional than random motion. Baroque sequences use this constantly; film composers use it for passages of inevitable downward motion that still feel purposeful.",
    tags: ["bass", "sequential", "descending", "pattern", "baroque"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["A2", "C3", "E3"], duration: "4n" },
        { notes: ["B2", "D3", "F3"], duration: "4n" },
        { notes: ["G2", "B2", "D3"], duration: "4n" },
        { notes: ["A2", "C3", "E3"], duration: "4n" },
        { notes: ["F2", "A2", "C3"], duration: "2n" },
      ],
    },
  },
  {
    id: "asc-chrom-bass-static-melody",
    name: "Ascending Chromatic Bass with Static Melody",
    category: "melodic-devices",
    description:
      "A melody that stays on one note while the bass creeps upward chromatically — the inverse of the common descending version. The ascending bass creates mounting tension under a melody that refuses to move. As the bass rises, the interval between bass and melody shrinks, creating increasing dissonance and claustrophobia. The melody's stillness becomes an act of resistance against the rising pressure. Used for building suspense toward an inevitable breaking point.",
    tags: ["chromatic bass", "ascending", "static", "tension"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C2", "G4"], duration: "2n" },
        { notes: ["C#2", "G4"], duration: "2n" },
        { notes: ["D2", "G4"], duration: "2n" },
        { notes: ["Eb2", "G4"], duration: "2n" },
        { notes: ["E2", "G4"], duration: "2n" },
        { notes: ["F2", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "desc-chrom-bass-static-melody",
    name: "Descending Chromatic Bass with Static Melody",
    category: "melodic-devices",
    description:
      "A melody held on one note while the bass descends chromatically — the classic version. As the bass falls away, the interval between melody and bass widens, creating a sense of the ground dropping away while the melody floats. More melancholic than the ascending version: the descent suggests loss, fading, or letting go. The widening gap between the voices feels like two things slowly separating. Golden-age Hollywood at its most heartbreaking.",
    tags: ["chromatic bass", "descending", "static", "melancholic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["B2", "E4"], duration: "2n" },
        { notes: ["Bb2", "E4"], duration: "2n" },
        { notes: ["A2", "E4"], duration: "2n" },
        { notes: ["Ab2", "E4"], duration: "2n" },
        { notes: ["G2", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "major-tonic-minor-subdominant",
    name: "Major Tonic over Minor Subdominant",
    category: "harmonic-devices",
    description:
      "Sustaining or arpeggiating a major tonic chord while the subdominant is minor — the iv chord darkens the I. Not just a borrowed chord: the juxtaposition of major tonic and minor subdominant within the same phrase or even the same beat. The major tonic says 'home'; the minor subdominant says 'but with sadness.' One of the most concentrated sources of bittersweet emotion in tonal music.",
    tags: ["major", "minor iv", "bittersweet", "juxtaposition"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "minor-tonic-major-subdominant",
    name: "Minor Tonic over Major Subdominant",
    category: "harmonic-devices",
    description:
      "A minor tonic chord juxtaposed with a major IV — the major subdominant brightens the minor key. The Dorian mode lives here: the raised 6th degree creates a IV chord that's major instead of the natural minor's iv. The effect is a minor key that isn't completely dark — there's warmth in the subdominant. Used in folk music, modal jazz, and film scoring for settings that are melancholic but not hopeless.",
    tags: ["minor", "major subdominant", "dorian", "warmth"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "parallel-chord-sub",
    name: "Major/Minor Parallel-Chord Substitution",
    category: "harmonic-devices",
    description:
      "Replacing a major chord with its parallel minor (or vice versa) within a progression — the root stays the same but the third shifts by half step. IV becomes iv; vi becomes VI; iii becomes III. Each substitution changes one note but transforms the chord's character. The subtlety is the point: it's not a key change, just a shadow passing over a single chord. Schubert's signature move.",
    tags: ["parallel", "substitution", "major-minor", "schubert"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["G3", "Bb3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dominant-chain-chromatic-bass",
    name: "Dominant Chain with Chromatic Bass",
    category: "harmonic-devices",
    description:
      "A series of dominant seventh chords where the bass moves chromatically rather than by fifths — combining the tension of dominant chords with the smoothness of chromatic voice leading. Each chord is a dominant seventh, but the roots descend by half step: Db7 → C7 → B7 → Bb7. The effect is unstoppable chromatic momentum wrapped in dominant tension. More disorienting than a standard cycle-of-fifths dominant chain; used in jazz arranging and film scoring.",
    tags: ["dominant", "chain", "chromatic bass", "smooth"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["B2", "Eb3", "Gb3", "A3"], duration: "4n" },
        { notes: ["Bb2", "D3", "F3", "Ab3"], duration: "4n" },
        { notes: ["A2", "Db3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "dim7-approach-any-degree",
    name: "Diminished Seventh Approach to Any Scale Degree",
    category: "harmonic-devices",
    description:
      "Using a diminished seventh chord built a half step below any target chord as a chromatic approach — the dim7 resolves upward by half step into the target. Works for every scale degree: #I°7 → ii, #II°7 → iii, #IV°7 → V, etc. The diminished seventh's symmetry means it can approach any chord, not just the tonic. This gives you a chromatic passing chord toolkit that connects any two diatonic chords with maximum smoothness.",
    tags: ["diminished", "approach", "chromatic", "universal", "passing chords"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["B3", "D4", "F4", "Ab4"], duration: "4n" },
        { notes: ["C4", "E4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "common-tone-aug6",
    name: "Common-Tone Augmented Sixth",
    category: "harmonic-devices",
    description:
      "An augmented sixth chord that shares a common tone with the chord it resolves to — the common tone acts as a thread connecting the exotic augmented sixth to its resolution. The standard augmented sixth resolves outward; the common-tone version adds a sustained pitch that makes the resolution feel less like a harmonic event and more like a color shift around a fixed point. Used in Romantic harmony for seamless chromatic intensification.",
    tags: ["augmented sixth", "common tone", "chromatic", "romantic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["Ab2", "C3", "D3", "F#3"], duration: "2n" },
        { notes: ["G2", "C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-predominant-chain",
    name: "Chromatic Predominant Chain",
    category: "harmonic-devices",
    description:
      "A series of predominant chords (ii, IV, and their chromatic variants) chained together before the dominant — stacking pre-dominant function for maximum anticipation. IV → iv → ♭II → V, or ii → ♭II6 → Ger+6 → V. Each chord intensifies the pre-dominant function without resolving, creating a long runway toward the dominant. The chain can last for many bars, turning the approach to V into an event as important as the resolution itself.",
    tags: ["predominant", "chain", "anticipation", "stacking"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F3", "Ab3", "C4"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "4n" },
        { notes: ["Ab2", "C3", "D3", "F#3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  // ── Hollywood Ache Vocabulary ───────────────────────────────
  {
    id: "appoggiatura-over-tonic",
    name: "Appoggiatura over a Tonic Chord",
    category: "melodic-devices",
    description:
      "A non-chord tone that leans into the tonic chord — the melody hits a dissonant note (the 2nd, 4th, 6th, or 7th) against a stable I chord, then resolves down by step into a chord tone. The tonic chord is 'home' but the appoggiatura says 'not quite.' The dissonance against the most stable harmony creates maximum expressive tension with minimum harmonic complexity. Puccini's most devastating moments use this: one wrong note against the right chord.",
    tags: ["appoggiatura", "tonic", "dissonance", "puccini"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "appoggiatura-over-dominant",
    name: "Appoggiatura over a Dominant Chord",
    category: "melodic-devices",
    description:
      "A non-chord tone leaning into a dominant chord — the melody hits a dissonant note against V, creating tension upon tension. The dominant already wants to resolve; the appoggiatura adds melodic yearning on top of harmonic yearning. Double longing. The resolution of the appoggiatura provides melodic relief, but the dominant still hasn't resolved, so the harmonic tension persists. Used in opera and film scoring for moments of desperate, unresolved emotion.",
    tags: ["appoggiatura", "dominant", "double-tension", "opera"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "leaping-appoggiatura",
    name: "Leaping Appoggiatura",
    category: "melodic-devices",
    description:
      "An appoggiatura approached by leap rather than step — the melody jumps up to a dissonant note then resolves down by step. The leap makes the dissonance more dramatic: instead of sliding into the appoggiatura, the melody throws itself onto it. The larger the leap, the more expressive the gesture. A sixth or octave leap to an appoggiatura is one of the most powerful melodic gestures in the Romantic vocabulary. Verdi arias are built on these.",
    tags: ["appoggiatura", "leap", "dramatic", "verdi"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "D5"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "C5"], duration: "1n" },
      ],
    },
  },
  {
    id: "ascending-chromatic-appoggiatura",
    name: "Ascending Chromatic Appoggiatura",
    category: "melodic-devices",
    description:
      "An appoggiatura approached from a half step below — the melody slides up chromatically into a non-chord tone, then resolves. The chromatic approach adds an extra moment of tension before the dissonance, like inhaling before a cry. The half-step approach is more intense than a diatonic step because the chromatic note itself is outside the key, so there are two 'wrong' notes in sequence before the resolution. Maximum melodic pain.",
    tags: ["appoggiatura", "chromatic", "ascending", "intense"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["B3"], duration: "8n" },
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n." },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "descending-chromatic-appoggiatura",
    name: "Descending Chromatic Appoggiatura",
    category: "melodic-devices",
    description:
      "An appoggiatura approached from a half step above — the melody slides down chromatically into the non-chord tone, then resolves further down. A double descent: chromatic approach → appoggiatura → resolution. Each step downward adds weight and sadness. The chromatic upper neighbor creates a 'sobbing' quality — the melody can't help falling. Used in Romantic opera for moments of grief, resignation, and farewell.",
    tags: ["appoggiatura", "chromatic", "descending", "sobbing"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["Eb4"], duration: "8n" },
        { notes: ["C3", "E3", "G3", "D4"], duration: "2n." },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "sighing-phrase-harmonic-change",
    name: "Sighing Phrase with Harmonic Change",
    category: "melodic-devices",
    description:
      "A descending stepwise phrase where each step coincides with a chord change — the melody sighs downward while the harmony shifts beneath. More emotionally complex than a sigh over static harmony: each chord change recontextualizes the descending melody note. A melody note that was a 3rd becomes a 5th, a chord tone becomes a dissonance. The combination of melodic descent and harmonic motion creates a compound sadness.",
    tags: ["sigh", "harmonic change", "descending", "compound"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "G4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["Dm3", "F3", "A3", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "sighing-phrase-sustained-harmony",
    name: "Sighing Phrase over Sustained Harmony",
    category: "melodic-devices",
    description:
      "A descending stepwise phrase over a single sustained chord — the melody moves but the harmony doesn't. Each melodic note changes its relationship to the fixed chord: from consonance to dissonance and back. The static harmony creates a sense of the world standing still while the melody grieves. More intimate than the version with harmonic change. The sustained chord is a mirror; the melody is the only thing that moves.",
    tags: ["sigh", "sustained", "static harmony", "intimate"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-6-5-resolution",
    name: "6 → 5 Melodic Resolution",
    category: "melodic-devices",
    description:
      "The melodic 6th scale degree resolving down to the 5th — A resolving to G in C major. One of the fundamental melodic resolutions: the 6th is an upper neighbor to the 5th, and its descent creates a gentle, sigh-like release. Over a I chord, the 6th is an added tone that adds warmth; its resolution to the 5th simplifies the chord. Over a IV chord, the 6th is the 3rd resolving to a 2nd — creating more tension. Context changes everything.",
    tags: ["resolution", "6-5", "neighbor", "gentle"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "A4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-4-3-resolution",
    name: "4 → 3 Melodic Resolution",
    category: "melodic-devices",
    description:
      "The melodic 4th scale degree resolving down to the 3rd — F resolving to E in C major. The most common suspension resolution in tonal music: the 4th is dissonant against a major triad and its resolution to the 3rd defines the chord as major. The 4-3 resolution is the sound of a sus4 chord resolving — one of the most satisfying single-note motions in music. Over a tonic chord, it's the quintessential moment of harmonic clarity.",
    tags: ["resolution", "4-3", "suspension", "clarity"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "F3", "G3", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-2-1-resolution",
    name: "2 → 1 Melodic Resolution",
    category: "melodic-devices",
    description:
      "The melodic 2nd scale degree resolving down to the tonic — D resolving to C in C major. The most fundamental melodic resolution: scale degree 2 is the closest upper neighbor to the tonic, and its descent is the simplest possible 'coming home.' Over a V chord, the 2nd is the 5th (consonant); over I, it's a dissonant sus2 or added 9th. The moment of arrival on the tonic is the smallest possible step with the largest possible emotional payoff.",
    tags: ["resolution", "2-1", "tonic", "arrival"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G3", "B3", "D4", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-b6-5-resolution",
    name: "♭6 → 5 Melodic Resolution",
    category: "melodic-devices",
    description:
      "The flatted 6th resolving down to the 5th — Ab resolving to G in C major. More intense than the diatonic 6 → 5 because the ♭6 is chromatic, borrowed from the parallel minor. The half-step resolution (Ab to G) is tighter and more urgent than the whole-step A to G. The ♭6 adds a pang of minor-key darkness; its resolution to the 5th is a release of that darkness. One of the most emotionally concentrated resolutions in film scoring.",
    tags: ["resolution", "b6-5", "chromatic", "pang"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "Ab4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-s4-5-resolution",
    name: "♯4 → 5 Melodic Resolution",
    category: "melodic-devices",
    description:
      "The sharped 4th (Lydian degree) resolving up to the 5th — F# resolving to G in C major. The ♯4 is the Lydian color note: bright, aspiring, floating. Its upward resolution to the 5th confirms the Lydian quality and creates a sense of arrival through ascent rather than descent. Ascending resolutions feel hopeful; the ♯4 → 5 is the most hopeful resolution in the melodic vocabulary. Williams uses this for wonder and possibility.",
    tags: ["resolution", "s4-5", "lydian", "hopeful"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "F#4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "sus4-3-over-tonic",
    name: "Suspended 4 → 3 over Tonic",
    category: "harmonic-devices",
    description:
      "A sus4 chord resolving to a major or minor triad on the tonic — the most stable harmonic location for a suspension. The suspended 4th creates tension against the most consonant chord in the key; the resolution to the 3rd releases it in the most satisfying way possible. The tonic context means there's no harmonic tension, only melodic tension — making the 4-3 resolution the ONLY event. Pure, concentrated expression.",
    tags: ["suspension", "4-3", "tonic", "concentrated"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "F3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "sus4-3-over-dominant",
    name: "Suspended 4 → 3 over Dominant",
    category: "harmonic-devices",
    description:
      "A sus4 chord resolving to a major triad on the dominant — the suspended C resolves to B over G major. More tension than the tonic version because the dominant itself is already harmonically charged. The suspension adds melodic tension to a chord that already has harmonic tension (it wants to resolve to I). When the sus4 resolves to 3 AND then V resolves to I, you get a double release. Used in cadential approach for maximum momentum.",
    tags: ["suspension", "4-3", "dominant", "double-release"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "C4", "D4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-minor-third-descent",
    name: "Melodic Minor-Third Descent",
    category: "melodic-devices",
    description:
      "A melody that moves by descending minor thirds — creating a diminished-chord trajectory through melodic space. C → A → F# → Eb. The minor-third interval is just wide enough to feel like a leap but small enough to feel inevitable. The diminished quality accumulates: each step adds darkness. Film composers use descending minor-third melodies for scenes of spiraling despair or inexorable decline. The melody itself traces a diminished arpeggio.",
    tags: ["minor third", "descending", "diminished", "spiraling"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C5"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["F#4"], duration: "4n" },
        { notes: ["Eb4"], duration: "4n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-neighbor-tonic",
    name: "Chromatic Neighbor Around the Tonic",
    category: "melodic-devices",
    description:
      "The tonic note decorated by both upper and lower chromatic neighbors — C is approached from both B and Db (or C#). The chromatic neighbors 'squeeze' the tonic from both sides, creating a moment of maximum proximity to home without being there. The double approach makes the final arrival on the tonic feel inevitable and satisfying. A concentrated ornament that packs an entire emotional journey into three notes.",
    tags: ["chromatic", "neighbor", "tonic", "ornament"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["B3"], duration: "8n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["C4"], duration: "2n" },
        { notes: ["B3"], duration: "8n" },
        { notes: ["Db4"], duration: "8n" },
        { notes: ["C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-escape-climax",
    name: "Melodic Escape into Climax",
    category: "melodic-devices",
    description:
      "An 'escape tone' — a chord tone that steps away by step then leaps in the opposite direction — used as a launch into a melodic climax. The stepwise motion sets up expectation; the leap shatters it and reaches the climactic note in a single dramatic gesture. The escape tone is the wind-up; the leap is the pitch. Used in Romantic arias and film themes for moments where the melody needs to break free of its own pattern.",
    tags: ["escape tone", "climax", "leap", "dramatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["D5"], duration: "2n", velocity: 0.9 },
        { notes: ["C5"], duration: "4n" },
        { notes: ["B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "delayed-melodic-resolution",
    name: "Delayed Melodic Resolution",
    category: "melodic-devices",
    description:
      "A dissonant melody note that doesn't resolve immediately — it's sustained, repeated, or decorated before finally resolving. The delay heightens the dissonance's emotional impact: the listener waits for relief, and the waiting is the emotion. A 4th held over a tonic chord for two bars before resolving to the 3rd is more expressive than an instant 4-3 resolution because the listener has time to feel the tension. Delay is the composer's way of saying 'stay with this feeling.'",
    tags: ["delayed", "resolution", "sustained", "waiting"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "2n." },
      ],
    },
  },
  {
    id: "resolution-under-sustained-melody",
    name: "Resolution Underneath a Sustained Melody",
    category: "harmonic-devices",
    description:
      "The harmony resolves while the melody holds a sustained note — the bass and inner voices move to the tonic but the melody doesn't participate in the resolution. The listener hears the harmonic resolution but the melody's stillness creates an incomplete feeling. The melody is 'left behind' by the moving harmony. Used for endings where the emotion isn't fully resolved even though the harmony is — the character is home but changed.",
    tags: ["resolution", "sustained melody", "incomplete", "bittersweet"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "E4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "climax-harmonic-collapse",
    name: "Climax Followed by Harmonic Collapse",
    category: "harmonic-devices",
    description:
      "A melodic and harmonic climax immediately followed by a collapse of the harmonic structure — the full, dense climactic chord crumbles into sparse, ambiguous harmony. The contrast between maximum density and sudden emptiness creates a sense of devastation. The climax isn't an arrival; it's the peak before a fall. Mahler's 9th Symphony uses this: orchestral peaks that dissolve into silence or a single sustained note. The collapse is where the meaning lives.",
    tags: ["climax", "collapse", "devastation", "contrast"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4", "E4"], duration: "2n", velocity: 0.95 },
        { notes: ["C3", "G3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3"], duration: "1n", velocity: 0.25 },
      ],
    },
  },
  {
    id: "melodic-descent-after-climax",
    name: "Melodic Descent after Orchestral Climax",
    category: "melodic-devices",
    description:
      "A sustained, stepwise melodic descent following an orchestral climax — the orchestra subsides and the melody slowly walks downward. The descent is emotional exhaling: after the intensity of the climax, the melody lets go one step at a time. Each step down releases more tension. The slower the descent, the more cathartic it feels. Used in film scoring for the aftermath of a great event — the battle is over, the hero walks through the ruins.",
    tags: ["descending", "climax", "aftermath", "catharsis"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C5"], duration: "2n", velocity: 0.9 },
        { notes: ["B4"], duration: "4n", velocity: 0.65 },
        { notes: ["A4"], duration: "4n", velocity: 0.55 },
        { notes: ["G4"], duration: "4n", velocity: 0.45 },
        { notes: ["F4"], duration: "4n", velocity: 0.35 },
        { notes: ["E4"], duration: "1n", velocity: 0.3 },
      ],
    },
  },
  // ── Mahler / Adagietto Territory ────────────────────────────
  {
    id: "suspended-tonic-over-pedal",
    name: "Suspended Tonic over Pedal",
    category: "harmonic-devices",
    description:
      "A tonic chord with a suspended 4th over a tonic pedal — the bass holds the root, the chord is I, but the melody sits on the 4th refusing to resolve. The bass says 'home'; the suspension says 'not yet.' The most concentrated form of the Adagietto's emotional DNA: stability and yearning coexisting in the same chord. The pedal prevents harmonic motion; the suspension prevents melodic resolution. Time stands still in a state of beautiful irresolution.",
    tags: ["suspended", "tonic", "pedal", "irresolution"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["C2", "C3", "F3", "G3"], duration: "1n" },
        { notes: ["C2", "C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "dominant-pedal-chromatic-upper",
    name: "Dominant Pedal under Chromatic Upper Harmony",
    category: "harmonic-devices",
    description:
      "A sustained dominant pedal with the upper voices moving through increasingly chromatic harmony — the bass holds the dominant note while everything above becomes more harmonically distant. The pedal creates an expectation of resolution; the chromatic upper voices defer it. The tension between the pedal's implied resolution and the upper voices' chromaticism creates a ratcheting intensity. Bruckner and Mahler build entire symphonic climaxes over dominant pedals like this.",
    tags: ["dominant", "pedal", "chromatic", "bruckner"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G2", "B3", "D4"], duration: "2n" },
        { notes: ["G2", "C4", "E4"], duration: "2n" },
        { notes: ["G2", "C#4", "F4"], duration: "2n" },
        { notes: ["G2", "D4", "F#4"], duration: "2n" },
        { notes: ["G2", "B3", "D4", "F4"], duration: "1n" },
      ],
    },
  },
  {
    id: "pedal-upper-voice-suspension",
    name: "Pedal with Upper-Voice Suspension",
    category: "voice-leading",
    description:
      "A bass pedal combined with suspended notes in the upper voices — both the bottom and top of the texture are static while inner voices move. The pedal anchors from below; the suspension floats from above; the middle provides all the motion. Creates a sense of a held breath: the extremes are frozen while the interior shifts. The Adagietto sound in miniature. The moment when both pedal and suspension resolve simultaneously is one of the most profound releases in music.",
    tags: ["voice-leading", "pedal", "suspension", "static", "held breath"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["C2", "G3", "D4"], duration: "2n" },
        { notes: ["C2", "A3", "D4"], duration: "2n" },
        { notes: ["C2", "A3", "C4"], duration: "2n" },
        { notes: ["C2", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "long-tone-melody-moving-harmony",
    name: "Long-Tone Melody over Moving Harmony",
    category: "melodic-devices",
    description:
      "A melody built from very long note values — whole notes, tied notes, notes held across bar lines — while the harmony changes underneath. The melody breathes slowly; the harmony provides all the motion. The long tones create a sense of vast, unhurried emotional space. Each sustained note is recontextualized by the changing chords, gaining new meaning without moving. Mahler's Adagietto is the masterclass: the melody barely moves but says everything.",
    tags: ["long-tone", "sustained", "slow", "adagietto"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["E4", "C3", "E3", "G3"], duration: "1n" },
        { notes: ["E4", "F3", "A3", "C4"], duration: "1n" },
        { notes: ["D4", "G3", "B3", "D4"], duration: "1n" },
      ],
    },
  },
  {
    id: "harmonic-rhythm-slowing",
    name: "Harmonic Rhythm Slowing Toward Climax",
    category: "harmonic-devices",
    description:
      "The rate of chord changes decreasing as a passage approaches its climax — the harmony moves quickly at first but slows to one chord per several bars at the peak. The slowing creates a sense of time dilating: the climactic moment expands. The listener feels the music concentrating, focusing, zooming in. The fewer chords at the climax, the more weight each one carries. Mahler uses harmonic deceleration to make climactic moments feel eternal.",
    tags: ["rhythm", "slowing", "climax", "dilation"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C4", "E4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "1n" },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "harmonic-rhythm-acceleration",
    name: "Harmonic Rhythm Acceleration Toward Climax",
    category: "harmonic-devices",
    description:
      "The rate of chord changes increasing as a passage approaches its climax — whole notes become half notes become quarter notes. The acceleration creates a sense of mounting urgency and compression. The faster the harmonic rhythm, the more the listener feels propelled forward. The climax arrives like an inevitable collision. Beethoven and Wagner use harmonic acceleration for their most thrilling climaxes; film composers inherited the technique directly.",
    tags: ["rhythm", "acceleration", "climax", "urgency"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "1n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "expanding-intervallic-melody",
    name: "Expanding Intervallic Melody",
    category: "melodic-devices",
    description:
      "A melody where each successive interval is wider than the last — step, third, fourth, fifth, sixth. The expanding intervals create a sense of reaching outward, of the emotional space growing. Like a flower opening. The first intervals are intimate; the later ones are vast. Mahler uses expanding intervallic melodies to create themes that start in private whisper and end in cosmic breadth. The melody itself becomes a journey from small to large.",
    tags: ["expanding", "intervals", "reaching", "cosmic"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E5"], duration: "2n" },
      ],
    },
  },
  {
    id: "narrow-to-wide-melodic-expansion",
    name: "Narrow-to-Wide Melodic Expansion",
    category: "melodic-devices",
    description:
      "A melody that starts in a narrow range (a third or fourth) and gradually expands to cover an octave or more — the melodic compass widens as the passage develops. The narrow opening feels contained, personal, introspective; the wide conclusion feels vast, public, universal. The expansion tracks the emotional journey from private to shared, from thought to declaration. Mahler's slow movements open in narrow ranges and end spanning the orchestra's full compass.",
    tags: ["expansion", "range", "narrow", "wide"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["A4"], duration: "2n" },
        { notes: ["B3"], duration: "4n" },
        { notes: ["C5"], duration: "1n" },
      ],
    },
  },
  {
    id: "register-ascent-harmonic-intensification",
    name: "Register Ascent with Harmonic Intensification",
    category: "harmonic-devices",
    description:
      "The entire texture rising in register while the harmony becomes more chromatic and intense — register and harmony climbing together. Each upward shift in pitch is accompanied by a more dissonant or distant chord. The double ascent (register + tension) creates an overwhelming sense of being carried upward by an irresistible force. Mahler's climaxes often combine these two dimensions: the highest notes arrive with the most extreme harmony.",
    tags: ["register", "ascent", "intensification", "overwhelming"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "Db4"], duration: "2n" },
        { notes: ["F3", "A3", "C#4", "E4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4", "A4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "high-note-delayed-tonic",
    name: "High-Note Arrival over Delayed Tonic",
    category: "melodic-devices",
    description:
      "The melody reaching its highest point while the tonic chord is withheld — the melodic climax arrives but the harmonic resolution doesn't. The high note says 'peak'; the missing tonic says 'not yet home.' The combination is unbearably beautiful: the listener has the melodic release but not the harmonic one. When the tonic finally arrives (often with the melody descending), the double resolution is devastating. Mahler's signature climactic structure.",
    tags: ["high-note", "delayed tonic", "climax", "mahler"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n", velocity: 0.9 },
        { notes: ["F3", "A3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "orch-crescendo-density",
    name: "Orchestral Crescendo Through Harmonic Density",
    category: "orchestration",
    description:
      "Building orchestral intensity by adding more notes to each chord rather than adding instruments or volume — a triad becomes a seventh, then a ninth, then a cluster. The sonority thickens while dynamics stay constant. The listener perceives a crescendo even without a literal increase in volume because the harmonic density creates perceived loudness. Ravel and Debussy use this as an alternative to the Romantic brute-force crescendo.",
    tags: ["crescendo", "density", "harmonic", "ravel"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "D3", "E3", "G3", "B3", "D4"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "strings-section-by-section",
    name: "Strings Entering One Section at a Time",
    category: "orchestration",
    description:
      "Building a string texture by adding one section after another — cellos alone, then violas enter, then second violins, then first violins. Each entry adds a new registral layer and harmonic voice. The progressive addition creates a bloom effect where the string section assembles itself before the listener's ears. Mahler builds entire symphonic openings this way. The first section to enter sets the emotional tone; each additional section enriches it.",
    tags: ["strings", "sections", "progressive", "bloom"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "divisi-expansion-from-unison",
    name: "Divisi Expansion from Unison",
    category: "orchestration",
    description:
      "A string section beginning in unison and gradually splitting into divisi — from one note to two parts, then four, then full divisi. The unison creates unanimity and power; the divisi creates richness and complexity. The transition from one to many is like a single voice becoming a chorus. More specific than 'unison-to-divisi': this tracks the gradual process of splitting, where each split is an event the listener hears. Mahler's Adagietto opens this way.",
    tags: ["divisi", "expansion", "unison", "adagietto"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["E4"], duration: "2n" },
        { notes: ["E4", "G4"], duration: "2n" },
        { notes: ["C4", "E4", "G4"], duration: "2n" },
        { notes: ["C4", "E4", "G4", "B4"], duration: "1n" },
      ],
    },
  },
  {
    id: "tremolo-beneath-sustained",
    name: "Tremolo beneath Sustained Harmony",
    category: "orchestration",
    description:
      "String tremolo providing agitation below sustained chords held by other instruments — the tremolo is the emotional subtext, the harmony is the surface. The sustained chord says 'still'; the tremolo says 'but seething underneath.' More atmospheric than tremolo under melody because there's no melodic content to focus on — the tremolo IS the primary texture, and the sustained chord is its container. Used for suspense, dread, and the calm before a storm.",
    tags: ["tremolo", "sustained", "agitation", "subtext"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["E2", "G2"], duration: "2n", velocity: 0.35 },
        { notes: ["E2", "G2", "C4", "E4", "G4"], duration: "1n", velocity: 0.5 },
        { notes: ["E2", "G2", "C4", "E4", "G4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "high-register-sus-low-pedal",
    name: "High-Register Suspension over Low Pedal",
    category: "voice-leading",
    description:
      "A suspended note in the highest register of the string section over a bass pedal several octaves below — maximum registral separation combined with maximum melodic tension. The high suspension floats like a single star; the low pedal is the ground. Between them, the harmonic voices provide shifting color. The extreme distance between the two creates a sense of infinite space. Mahler's most transcendent moments live in this registral gap.",
    tags: ["voice-leading", "high register", "suspension", "pedal", "transcendent"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["C2", "F4"], duration: "1n", velocity: 0.5 },
        { notes: ["C2", "E3", "G3", "E4"], duration: "1n" },
      ],
    },
  },
  // ── OWANE / Louis Cole Territory (Batch 3) ──────────────────
  {
    id: "bass-ostinato-changing-meter",
    name: "Bass Ostinato against Changing Meter",
    category: "funk",
    description:
      "A bass riff that repeats unchanged while the time signature shifts around it — the bass plays in 4/4 while the drums shift to 7/8, or the bass is in 5/4 while the keyboard plays in 4/4. The ostinato becomes a fixed reference point against metric chaos. OWANE uses this to create grooves where the bass is the anchor and everything else is elastic. The listener locks onto the bass and enjoys the ride.",
    tags: ["funk", "bass", "ostinato", "changing meter", "elastic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["E2"], duration: "8n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
      ],
    },
  },
  {
    id: "bass-riff-static-harmony",
    name: "Bass Riff over Static Harmony",
    category: "funk",
    description:
      "A melodically active bass riff playing over a keyboard or guitar holding one chord — the bass provides all the motion while the harmony is a drone. The bass riff implies chord changes through its note choices even though the actual chord doesn't move. The tension between the bass's activity and the harmony's stillness creates a hypnotic groove. Louis Cole does this: one-chord vamping with a bass line that tells a harmonic story on its own.",
    tags: ["funk", "bass", "riff", "static harmony", "hypnotic"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2", "E3", "G#3", "B3"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2", "E3", "G#3", "B3"], duration: "8n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["G2", "E3", "G#3", "B3"], duration: "8n" },
        { notes: ["E2"], duration: "4n" },
      ],
    },
  },
  {
    id: "bass-riff-implying-harmony",
    name: "Bass Riff Implying Harmony",
    category: "funk",
    description:
      "A bass riff whose note choices outline chord changes that aren't explicitly played — the harmony exists only in the listener's inference from the bass. The bass hits the root, then the third, then the seventh of an implied chord, and the listener's brain constructs the chord from the bass notes alone. When other instruments play sparse textures or percussive hits, the bass becomes the sole harmonic voice. Jaco Pastorius and OWANE both work this way.",
    tags: ["funk", "bass", "implied harmony", "inference", "jaco"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "8n" },
        { notes: ["E2"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["Bb2"], duration: "8n" },
        { notes: ["F2"], duration: "8n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["C3"], duration: "16n" },
        { notes: ["Eb3"], duration: "8n" },
      ],
    },
  },
  {
    id: "bass-riff-contradicting-harmony",
    name: "Bass Riff Contradicting Harmony",
    category: "funk",
    description:
      "A bass riff that deliberately clashes with the stated harmony — the keyboard plays one chord while the bass implies a different one. The contradiction creates harmonic friction that's uncomfortable but groove-able. The bass might play the tritone substitution's root against the original chord, or a half-step-away root that creates a polychordal effect. OWANE and prog-funk players use this for maximum harmonic disruption within a groove context.",
    tags: ["funk", "bass", "contradiction", "friction", "polychordal"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["Db2", "C3", "E3", "G3"], duration: "8n" },
        { notes: ["E2"], duration: "16n" },
        { notes: ["Gb2", "C3", "E3", "G3"], duration: "16n" },
        { notes: ["Ab2"], duration: "8n" },
        { notes: ["Db2", "C3", "E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "melodic-bass-extensions",
    name: "Melodic Bass Chord Extensions",
    category: "bass",
    description:
      "A bass line that plays the upper extensions of chords — 9ths, 11ths, 13ths — as melodic material, treating them as bass notes rather than using traditional root-fifth bass motion. The bass on the 9th of a chord creates an ambiguous, floating quality; on the 11th it's suspended; on the 13th it's jazzy. OWANE and modern funk bassists use extensions as bass notes to create grooves that sound sophisticated without complex chord voicings above.",
    tags: ["bass", "extensions", "9th", "11th", "sophisticated"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["D2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["F2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["A2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["C2", "C3", "E3", "G3"], duration: "4n" },
      ],
    },
  },
  {
    id: "bass-melody-chordal-accomp",
    name: "Bass Melody with Chordal Accompaniment",
    category: "bass",
    description:
      "The bass playing the primary melody while keyboards or guitars provide harmonic accompaniment above — a role reversal from the norm. The bass melody has a warm, grounding quality that melody in higher registers doesn't: it's felt in the chest as much as heard. The chordal accompaniment becomes transparent texture, supporting rather than leading. Jaco, Victor Wooten, and OWANE all compose pieces where the bass IS the lead voice.",
    tags: ["bass", "melody", "lead", "role reversal", "wooten"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["G2", "D3", "F3", "B3"], duration: "4n" },
        { notes: ["A2", "D3", "F3", "B3"], duration: "4n" },
        { notes: ["B2", "D3", "F3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-as-counterpoint",
    name: "Bass as Counterpoint",
    category: "bass",
    description:
      "The bass playing a fully independent contrapuntal line against the melody — not root motion, not walking bass, but a second melody that happens to be in the bass register. The bass and melody form a two-part counterpoint; the harmony emerges from their interaction. More common in Baroque music and jazz than in pop or funk, but OWANE-style players use contrapuntal bass to create grooves where the bass line is as melodically interesting as the top voice.",
    tags: ["bass", "counterpoint", "independent", "two-part", "melodic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C2", "G4"], duration: "4n" },
        { notes: ["D2", "F4"], duration: "4n" },
        { notes: ["E2", "E4"], duration: "4n" },
        { notes: ["G2", "D4"], duration: "4n" },
        { notes: ["A2", "C4"], duration: "4n" },
        { notes: ["G2", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-chord-substitution",
    name: "Bass Chord Substitution",
    category: "bass",
    description:
      "Changing the harmony by changing only the bass note — the upper voices hold the same chord but the bass plays different roots, creating inversions and slash chords. C/E feels different from C/G feels different from C/Bb. The bass player becomes the harmonic reharmonizer without anyone else changing a note. In funk and soul, a bassist who plays 'wrong' bass notes under the band's chords creates instant sophistication.",
    tags: ["bass", "substitution", "slash chords", "reharmonization", "inversions"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["E2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["G2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["Bb2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "drum-bass-unison",
    name: "Drum/Bass Rhythmic Unison",
    category: "funk",
    description:
      "Drums and bass playing exactly the same rhythm — every kick aligns with a bass note, every ghost note aligns with a bass ghost note. The unison creates a single, massive rhythmic instrument: the combined attack of bass and drums is louder, punchier, and more authoritative than either alone. Funk and metal both use drum/bass unison for their heaviest moments. The tighter the unison, the more powerful the groove.",
    tags: ["funk", "drum", "bass", "unison", "powerful"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2", "C2"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "16n", velocity: 0.4 },
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E2", "D3"], duration: "8n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["G2", "C2"], duration: "16n", velocity: 0.9 },
        { notes: ["E2", "D3"], duration: "8n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "drum-bass-divergence",
    name: "Drum/Bass Rhythmic Divergence",
    category: "funk",
    description:
      "Drums and bass deliberately playing different rhythms — the kick and bass separate, creating two independent rhythmic streams. The divergence creates a wider, more complex groove than unison: the gaps between bass notes and drum hits are as important as the alignments. OWANE and Louis Cole create grooves where drums and bass seem to be in different conversations that happen to coexist in the same time and space. The listener's brain reconciles them into a compound pattern.",
    tags: ["funk", "drum", "bass", "divergence", "compound"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2"], duration: "8n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n" },
        { notes: ["D3"], duration: "16n", velocity: 0.8 },
        { notes: ["G2"], duration: "8n" },
        { notes: ["C2"], duration: "16n", velocity: 0.6 },
        { notes: ["D3"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "16n" },
      ],
    },
  },
  {
    id: "keyboard-stab-sustained-bass",
    name: "Keyboard Stab against Sustained Bass",
    category: "funk",
    description:
      "Short, percussive keyboard chords over a long, sustained bass note — the keyboard provides rhythmic energy while the bass provides harmonic weight and continuity. The stabs are the accents; the bass is the foundation. The contrast between the stab's attack and the bass's sustain creates a groove with both punch and depth. Herbie Hancock and Louis Cole both use this texture: the keyboard is rhythmic, the bass is harmonic.",
    tags: ["funk", "keyboard", "stabs", "sustained bass", "contrast"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2"], duration: "4n." },
        { notes: ["E3", "G#3", "B3"], duration: "16n", velocity: 0.85 },
        { notes: ["E3", "G#3", "B3"], duration: "16n", velocity: 0.7 },
        { notes: ["E2"], duration: "4n" },
        { notes: ["E3", "G#3", "B3"], duration: "16n", velocity: 0.9 },
        { notes: ["E2"], duration: "16n" },
      ],
    },
  },
  {
    id: "syncopated-chord-punches",
    name: "Syncopated Chord Punches",
    category: "funk",
    description:
      "Full-band chord hits on syncopated rhythmic positions — the whole ensemble punches together on the 'and' of 2, the 'e' of 4, or other off-beat locations. The synchronized attack is powerful; the syncopated placement is surprising. The combination is the essence of funk arranging: maximum impact on minimum expectation. Earth, Wind & Fire, Tower of Power, and Vulfpeck all use syncopated chord punches as their signature texture.",
    tags: ["funk", "syncopated", "chord", "punches", "ensemble"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E2", "E3", "G#3", "B3", "D3"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "8n.", velocity: 0.3 },
        { notes: ["E2", "E3", "G#3", "B3", "D3"], duration: "16n", velocity: 0.85 },
        { notes: ["E2"], duration: "4n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "anticipated-chord-stab",
    name: "Anticipated Chord Stab",
    category: "funk",
    description:
      "A chord hit that arrives before the beat it belongs to — the stab is pushed ahead by a 16th or 8th note. The anticipation creates forward momentum: the harmony arrives early, pulling the rhythm forward. In funk, anticipated stabs make the groove feel impatient and urgent. The band is so excited they can't wait for the beat. Louis Cole's keyboard parts are full of anticipated stabs that make his grooves feel like they're tripping over themselves with energy.",
    tags: ["funk", "anticipated", "stabs", "forward motion", "urgent"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "4n." },
        { notes: ["A3", "C#4", "E4"], duration: "16n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n" },
        { notes: ["E2"], duration: "4n." },
        { notes: ["B3", "D#4", "F#4"], duration: "16n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n" },
      ],
    },
  },
  {
    id: "delayed-chord-stab",
    name: "Delayed Chord Stab",
    category: "funk",
    description:
      "A chord hit that arrives after the beat it belongs to — the stab is pushed behind by a 16th or 8th note. The delay creates a laid-back, dragging feel: the harmony arrives late, pulling the rhythm backward. In funk, delayed stabs make the groove feel relaxed and heavy. The band is so deep in the pocket they're behind the beat on purpose. D'Angelo's Voodoo-era grooves use delayed stabs to create an almost-falling-behind feel that's incredibly funky.",
    tags: ["funk", "delayed", "stabs", "laid-back", "heavy"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "4n" },
        { notes: ["E2"], duration: "16n" },
        { notes: ["A3", "C#4", "E4"], duration: "8n.", velocity: 0.85 },
        { notes: ["E2"], duration: "4n" },
        { notes: ["E2"], duration: "16n" },
        { notes: ["B3", "D#4", "F#4"], duration: "8n.", velocity: 0.85 },
      ],
    },
  },
  {
    id: "rhythmic-chord-displacement",
    name: "Rhythmic Chord Displacement",
    category: "funk",
    description:
      "Shifting an entire chord pattern forward or backward by a subdivision — the same chord voicings in the same order, but displaced relative to the bar line. A chord pattern that starts on beat 1 is shifted to start on the 'e' of 1. The displacement changes the groove completely without changing the chords or their order. OWANE uses this to create multiple variations of the same progression, each with a different rhythmic personality.",
    tags: ["funk", "chord", "displacement", "variation", "personality"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["E3", "G#3", "B3"], duration: "4n", velocity: 0.85 },
        { notes: ["A3", "C#4", "E4"], duration: "4n", velocity: 0.8 },
        { notes: ["E3", "G#3", "B3"], duration: "4n.", velocity: 0.85 },
      ],
    },
  },
  {
    id: "harmonic-rhythm-vs-bass-rhythm",
    name: "Harmonic Rhythm Independent of Bass Rhythm",
    category: "funk",
    description:
      "The chord changes happening at a different rate than the bass rhythm — the bass plays 16th-note patterns while the chords change every two bars, or the chords change every beat while the bass holds one note. The independence creates a layered groove where the harmonic pace and the rhythmic pace operate in different time scales. The listener can focus on either layer and hear a different groove. This independence is central to OWANE's compositional style.",
    tags: ["funk", "harmonic rhythm", "bass rhythm", "independence", "layering"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2", "E3", "G#3", "B3"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2", "E3", "G#3", "B3"], duration: "8n" },
        { notes: ["B2"], duration: "16n" },
        { notes: ["G2"], duration: "16n" },
        { notes: ["E2", "A3", "C#4", "E4"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2", "A3", "C#4", "E4"], duration: "8n" },
      ],
    },
  },
  {
    id: "odd-meter-funk-ostinato",
    name: "Odd-Meter Funk Ostinato",
    category: "funk",
    description:
      "A funk groove in an odd time signature (5/4, 7/8, 11/8) that still feels groovy and danceable. The trick is placing the funk accents and ghost notes so the odd meter doesn't feel like counting — it feels like a lopsided dance. OWANE writes odd-meter funk that you can bob your head to despite the meter. The ostinato pattern teaches the body the odd meter so the brain doesn't have to count.",
    tags: ["funk", "odd-meter", "ostinato", "groovy", "danceable"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["G2"], duration: "16n" },
        { notes: ["D3"], duration: "8n", velocity: 0.8 },
        { notes: ["E2"], duration: "8n", velocity: 0.85 },
        { notes: ["E2"], duration: "16n", velocity: 0.3 },
        { notes: ["D3"], duration: "16n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "meter-implied-by-bass",
    name: "Meter Implied by Bass",
    category: "funk",
    description:
      "The time signature conveyed primarily through the bass pattern — the drums may be ambiguous or cross-rhythmic, but the bass establishes where the downbeats fall. In groove-based music, the bass is often the rhythmic authority: its accent pattern defines the meter even when everything else contradicts it. OWANE creates passages where the bass is the only instrument committed to the meter; drums and keyboards float freely over the bass's rhythmic grid.",
    tags: ["funk", "meter", "bass", "authority", "downbeat"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "16n", velocity: 0.35 },
        { notes: ["G2", "F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["F#4"], duration: "16n", velocity: 0.35 },
        { notes: ["A2", "F#4"], duration: "16n", velocity: 0.5 },
        { notes: ["E2", "D3"], duration: "8n", velocity: 0.85 },
        { notes: ["F#4"], duration: "16n", velocity: 0.35 },
        { notes: ["F#4"], duration: "16n", velocity: 0.35 },
      ],
    },
  },
  {
    id: "meter-implied-by-drums",
    name: "Meter Implied by Drums",
    category: "rhythm",
    description:
      "The time signature conveyed primarily through the drum pattern — the bass and other instruments may be metrically ambiguous, but the kick and snare placement establishes the meter. The kick defines beat 1; the snare defines the backbeat. In groove music where the bass plays sustained notes or free melodic lines, the drums become the sole metrical reference. The listener's body follows the drums' meter regardless of what other instruments imply.",
    tags: ["meter", "drums", "authority", "backbeat"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["C2", "F#4"], duration: "8n", velocity: 0.85 },
        { notes: ["F#4"], duration: "8n", velocity: 0.35 },
        { notes: ["D3", "F#4"], duration: "8n", velocity: 0.9 },
        { notes: ["F#4"], duration: "8n", velocity: 0.35 },
        { notes: ["C2", "F#4"], duration: "16n", velocity: 0.7 },
        { notes: ["F#4"], duration: "16n", velocity: 0.35 },
        { notes: ["D3", "F#4"], duration: "8n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "metric-recontextualization",
    name: "Metric Recontextualization of a Repeating Riff",
    category: "funk",
    description:
      "Taking a repeating riff and changing the meter around it so the same notes fall on different beats — the riff doesn't change, but its metrical meaning does. A riff in 4/4 played against a 3/4 drum pattern means the 'downbeat' of the riff shifts each bar. After several bars, the riff and meter realign, creating a satisfying resolution. OWANE and math-rock players use metric recontextualization to create epic build-release cycles from a single riff.",
    tags: ["funk", "metric", "recontextualization", "riff", "shifting"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.9 },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
        { notes: ["B2"], duration: "8n" },
        { notes: ["D3"], duration: "8n", velocity: 0.5 },
        { notes: ["E2"], duration: "8n", velocity: 0.7 },
        { notes: ["G2"], duration: "16n" },
        { notes: ["A2"], duration: "16n" },
      ],
    },
  },
  // ── Orchestration (Batch 3) ─────────────────────────────────
  {
    id: "melody-absorbed-into-accomp",
    name: "Melody Absorbed into Accompaniment",
    category: "orchestration",
    description:
      "A melody that gradually loses its prominence and becomes part of the accompaniment texture — the melodic voice diminishes in dynamics while the accompaniment maintains its level, until the melody is just another voice in the texture. The effect is of a foreground element dissolving into the background. More subtle than an orchestral withdrawal: the melody doesn't disappear, it transforms. Used for moments where a theme is 'remembered' rather than 'stated.'",
    tags: ["melody", "absorbed", "accompaniment", "dissolving"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4", "C3", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["A4", "F3", "A3"], duration: "4n", velocity: 0.75 },
        { notes: ["B4", "G3", "B3"], duration: "4n", velocity: 0.55 },
        { notes: ["C5", "C3", "E3", "G3"], duration: "2n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "accomp-becomes-countermelody",
    name: "Accompaniment Becomes Countermelody",
    category: "orchestration",
    description:
      "An accompaniment figure that gradually gains melodic independence and becomes a countermelody — what started as background texture acquires foreground significance. The figure might start as simple arpeggiation, then develop a melodic contour, then assert rhythmic independence. The listener's attention is gradually drawn to what was previously subliminal. A magical moment in orchestration: the texture reveals a hidden voice. Ravel does this constantly.",
    tags: ["accompaniment", "countermelody", "emergence", "ravel"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "G4"], duration: "8n" },
        { notes: ["E3", "A4"], duration: "8n" },
        { notes: ["G3", "B4"], duration: "8n" },
        { notes: ["E3", "C5"], duration: "8n" },
        { notes: ["C3", "B4"], duration: "4n" },
        { notes: ["E3", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "countermelody-becomes-primary",
    name: "Countermelody Becomes Primary Melody",
    category: "orchestration",
    description:
      "A countermelody that overtakes the main theme in prominence — the secondary voice gradually becomes louder, more orchestrated, or more rhythmically active until the listener realizes it's now the primary melody. The original theme has become the accompaniment. A structural coup: the hierarchy inverts without a break. Film composers use this for scenes where an undercurrent becomes the main story. The shift happens so gradually the listener doesn't notice the takeover.",
    tags: ["countermelody", "primary", "takeover", "gradual"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4", "E3"], duration: "4n", velocity: 0.8 },
        { notes: ["D4", "G3"], duration: "4n", velocity: 0.7 },
        { notes: ["E4", "A3"], duration: "4n", velocity: 0.55 },
        { notes: ["F4", "B3"], duration: "4n", velocity: 0.4 },
        { notes: ["E4", "C4"], duration: "4n", velocity: 0.35 },
        { notes: ["D4", "D4"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "tutti-to-unison-reduction",
    name: "Tutti-to-Unison Reduction",
    category: "orchestration",
    description:
      "A full orchestral texture suddenly narrowing to a single unison line — all harmonic content disappears and only the melody remains, played by all voices in unison. The reduction is dramatic: from maximum complexity to maximum simplicity in one stroke. The unison is MORE intense than the tutti because every instrument is focused on one line. Used in film scoring for moments of pure determination, clarity, or unity. The opposite of bloom.",
    tags: ["tutti", "unison", "reduction", "focus"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.85 },
        { notes: ["E3", "E4"], duration: "4n", velocity: 0.9 },
        { notes: ["F3", "F4"], duration: "4n", velocity: 0.9 },
        { notes: ["G3", "G4"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "orch-crescendo-pitch-height",
    name: "Orchestral Crescendo Through Pitch Height",
    category: "orchestration",
    description:
      "Building orchestral intensity by moving the texture higher in register without adding volume — the same dynamic level but progressively higher pitches. The ear perceives higher pitch as louder even at the same volume, creating a perceived crescendo. The register climb creates brightness and excitement without the brute force of actual volume increase. Ravel and Debussy use this for their most elegant crescendos.",
    tags: ["crescendo", "register", "brightness", "debussy"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.5 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.5 },
        { notes: ["B3", "D4", "F#4"], duration: "2n", velocity: 0.5 },
        { notes: ["D4", "F#4", "A4"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "orch-crescendo-subdivision",
    name: "Orchestral Crescendo Through Rhythmic Subdivision",
    category: "orchestration",
    description:
      "Building orchestral intensity by increasing rhythmic subdivision — whole notes become halves, halves become quarters, quarters become eighths. The accelerating rhythmic activity creates a perceived crescendo through energy rather than volume. The texture becomes more 'busy' and excited. Combined with actual dynamic crescendo, this is one of the most powerful climax-building techniques. Ravel's Boléro is the ultimate example of subdivision-driven crescendo.",
    tags: ["crescendo", "subdivision", "acceleration", "bolero"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.55 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.7 },
        { notes: ["G3", "B3", "D4"], duration: "4n", velocity: 0.75 },
        { notes: ["C4", "E4", "G4"], duration: "4n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "orch-crescendo-timbral",
    name: "Orchestral Crescendo Through Timbral Brightening",
    category: "orchestration",
    description:
      "Building intensity by substituting brighter timbres — muted strings give way to open strings, clarinets to oboes, warm woodwinds to brilliant brass. The pitches and dynamics might stay the same, but the 'color temperature' rises from warm to bright. The ear hears brightening as intensification. This is the subtlest form of orchestral crescendo: nothing changes except the quality of the sound. Mahler orchestrates entire emotional arcs through timbre alone.",
    tags: ["crescendo", "timbral", "brightening", "mahler"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.35 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.45 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.75 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "low-to-high-transfer",
    name: "Low-to-High Register Orchestral Transfer",
    category: "orchestration",
    description:
      "A melody or figure that starts in the low register and is progressively handed to higher instruments — cellos to violas to violins, or bassoons to clarinets to flutes. The transfer tracks a journey from depth to height, darkness to light, gravity to air. Each handoff changes the character while maintaining the melody's identity. More gradual than a register lift: the transfer is a process, not an event.",
    tags: ["transfer", "low", "high", "gradual"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-to-string-transfer",
    name: "Horn-to-String Melodic Transfer",
    category: "orchestration",
    description:
      "A melody beginning on French horns and continuing on strings — one of the most emotionally effective orchestral handoffs. The horn's warm, noble quality establishes the theme's heroic character; the strings' singing quality adds lyrical depth. The handoff moment is a pivot from brass warmth to string intensity. Williams and Howard Shore use this transfer constantly: the horn states the theme, the strings elaborate it.",
    tags: ["horns", "string", "transfer", "noble"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "2n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "woodwind-to-string-transfer",
    name: "Woodwind-to-String Melodic Transfer",
    category: "orchestration",
    description:
      "A melody beginning on a woodwind and continuing on strings — the woodwind's clarity and focus gives way to the strings' richness and power. The handoff often represents a shift from intimacy to grandeur, from a personal voice to a collective one. Flute to strings is ethereal to warm; oboe to strings is vocal to lyrical; clarinet to strings is dark to bright. Each combination has a different emotional character.",
    tags: ["woodwind", "string", "transfer", "intimate-to-grand"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C5"], duration: "4n" },
        { notes: ["A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "string-to-brass-transfer",
    name: "String-to-Brass Melodic Transfer",
    category: "orchestration",
    description:
      "A melody beginning on strings and continuing on brass — the strings' lyricism gives way to brass power and brilliance. The handoff is a moment of intensification: the theme becomes more declarative, more public, more heroic. Strings sing; brass proclaim. The most common use is in film scoring when a theme 'arrives' — strings present it gently, then brass take over for the triumphant statement.",
    tags: ["string", "brass", "transfer", "triumphant"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G4"], duration: "4n", velocity: 0.65 },
        { notes: ["A4"], duration: "4n", velocity: 0.65 },
        { notes: ["B4"], duration: "4n", velocity: 0.7 },
        { notes: ["C5"], duration: "4n", velocity: 0.85 },
        { notes: ["D5"], duration: "4n", velocity: 0.9 },
        { notes: ["C5"], duration: "2n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "antiphonal-orchestration",
    name: "Antiphonal Orchestration",
    category: "orchestration",
    description:
      "Two orchestral groups placed at a spatial distance, playing alternating phrases — the music bounces between left and right, near and far. More deliberate than simple call-and-response: antiphonal orchestration is about physical space as a compositional element. In concert music, the two groups might be placed on opposite sides of the stage. In film scoring with surround sound, the spatial element becomes literal. Gabrieli invented it; Mahler perfected it.",
    tags: ["antiphonal", "spatial", "alternating", "gabrieli"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["F4", "A4", "C5"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["G4", "B4", "D5"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "orchestral-echo",
    name: "Orchestral Echo",
    category: "orchestration",
    description:
      "A phrase played by one section and immediately echoed by another at a softer dynamic — the echo is an exact or near-exact repetition at reduced volume. Creates depth and space: the original is 'near,' the echo is 'far.' Different from call-and-response (where the answer is different from the call): an echo repeats the same material. Film composers use orchestral echoes for moments of reflection, memory, or vastness.",
    tags: ["echo", "depth", "space", "reflection"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4"], duration: "4n", velocity: 0.85 },
        { notes: ["D4", "F4", "A4"], duration: "4n", velocity: 0.85 },
        { notes: ["C4", "E4", "G4"], duration: "4n", velocity: 0.4 },
        { notes: ["D4", "F4", "A4"], duration: "4n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "echoed-melodic-fragment",
    name: "Echoed Melodic Fragment",
    category: "orchestration",
    description:
      "A short melodic fragment played by one instrument and echoed by another — often at a different octave or with different timbre. The fragment is too short to be a complete phrase: just a few notes, a motif, a sigh. The echo extends the fragment's emotional life without developing it. Used for moments of lingering: the music says something small and lets it reverberate. Debussy and Mahler use echoed fragments to create a sense of fading memory.",
    tags: ["echo", "fragment", "motif", "lingering"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E4", "D4"], duration: "4n", velocity: 0.75 },
        { notes: ["C4"], duration: "4n", velocity: 0.7 },
        { notes: ["E3", "D3"], duration: "4n", velocity: 0.4 },
        { notes: ["C3"], duration: "2n", velocity: 0.35 },
      ],
    },
  },
  {
    id: "distant-countermelody",
    name: "Distant Countermelody",
    category: "orchestration",
    description:
      "A countermelody played at a very soft dynamic, in a distant register, or by a solo instrument against a louder main theme — the countermelody is barely audible but subliminally present. The listener may not consciously hear it, but its presence enriches the emotional texture. Removing it would make the passage feel emptier. Mahler writes distant horn calls and offstage trumpet melodies that add layers of meaning. The distant countermelody is the orchestral subconscious.",
    tags: ["countermelody", "distant", "subliminal", "offstage"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4", "C3"], duration: "4n", velocity: 0.85 },
        { notes: ["A4", "D3"], duration: "4n", velocity: 0.85 },
        { notes: ["B4", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["C5", "C3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "bg-figure-becomes-fg",
    name: "Background Figure Becoming Foreground",
    category: "orchestration",
    description:
      "An accompaniment pattern or background figure that gradually increases in prominence until it becomes the primary musical content — the figure gains volume, rhythmic emphasis, or timbral brightness while the former foreground recedes. The transition reveals what was hidden in the texture. Like discovering a pattern in wallpaper: it was always there, but now you can't unsee it. One of the most elegant orchestral transformations.",
    tags: ["background", "foreground", "emergence", "transformation"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4", "C3", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["A4", "C3", "E3"], duration: "4n", velocity: 0.7 },
        { notes: ["B4", "C3", "E3"], duration: "4n", velocity: 0.55 },
        { notes: ["C5", "D3", "F3"], duration: "4n", velocity: 0.4 },
        { notes: ["D3", "F3"], duration: "4n", velocity: 0.7 },
        { notes: ["E3", "G3"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "fg-figure-becomes-bg",
    name: "Foreground Figure Becoming Background",
    category: "orchestration",
    description:
      "A primary melody or prominent figure that gradually diminishes in emphasis and becomes an accompaniment texture — the inverse of background-to-foreground. The melody doesn't end; it fades into the fabric. The listener loses focus on it as new material takes over. More organic than an ending: the melody is still present but has been 'woven in.' Used for transitions where one section dissolves into the next without a hard border.",
    tags: ["foreground", "background", "dissolution", "transition"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4"], duration: "4n", velocity: 0.85 },
        { notes: ["F4"], duration: "4n", velocity: 0.7 },
        { notes: ["E4", "C3"], duration: "4n", velocity: 0.5 },
        { notes: ["D4", "C3", "E3"], duration: "4n", velocity: 0.35 },
        { notes: ["C4", "C3", "E3", "G3"], duration: "2n", velocity: 0.25 },
      ],
    },
  },
  // ── Orchestral Harmonic Color ───────────────────────────────
  {
    id: "divisi-major-7th",
    name: "Divisi Major 7th",
    category: "orchestration",
    description:
      "String section divided to play a major seventh interval — two adjacent pitches a major 7th apart (C and B, or F and E). The major 7th is one of the most luminous and shimmering intervals: wide enough to sound open, dissonant enough to sound alive. In divisi strings, the major 7th glows — the two voices vibrate against each other in a way that creates an audible shimmer. The signature interval of jazz-influenced orchestral writing.",
    tags: ["divisi", "major 7th", "shimmer", "luminous"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "B3"], duration: "1n" },
        { notes: ["F3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "divisi-added-9th",
    name: "Divisi Added 9th",
    category: "orchestration",
    description:
      "String divisi voiced to include the 9th (2nd) as a prominent interval — a triad with the 9th added, spaced so the 9th rings clearly. The added 9th gives warmth and spaciousness: it's the 'open window' interval. In strings, a C-E-G-D voicing with D in the upper divisi creates a Cadd9 that shimmers with the 9th's bright color. Used in impressionist and film orchestration for scenes of wonder, dawn, or awakening.",
    tags: ["divisi", "9th", "warmth", "spacious"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "G3", "D4", "E4"], duration: "1n" },
        { notes: ["F3", "C4", "G4", "A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "open-fifth-major-third",
    name: "Open Fifth + Major Third",
    category: "orchestration",
    description:
      "A voicing with the fifth widely spaced at the bottom and the third added above — C-G in the lower strings with E in the upper strings or horns. The open fifth provides a hollow, medieval quality; the third adds warmth and defines major/minor. The combination is both ancient and warm. Used in film scoring for pastoral scenes, open landscapes, and moments of simple beauty. The wide spacing gives the chord room to breathe.",
    tags: ["open fifth", "third", "pastoral", "spacious"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "E4"], duration: "1n" },
        { notes: ["F2", "C3", "A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "open-fifth-sixth",
    name: "Open Fifth + Sixth",
    category: "orchestration",
    description:
      "An open fifth (C-G) with the 6th (A) added — a voicing that creates an ambiguous, floating quality. Without the third, the chord could be major or minor; the sixth adds color without resolving the ambiguity. The sound is open, wide, and folk-like. Used for Celtic-influenced film scoring, pastoral scenes, and any moment where simplicity and space are more important than harmonic definition. Horner and Shore use this voicing extensively.",
    tags: ["open fifth", "sixth", "ambiguous", "celtic"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "A3"], duration: "1n" },
        { notes: ["G2", "D3", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "open-fifth-seventh",
    name: "Open Fifth + Seventh",
    category: "orchestration",
    description:
      "An open fifth with the 7th added — C-G-B. Without the third, this is neither a standard major 7th nor a dominant 7th; it's a pure, unresolved sonority. The fifth is stability; the seventh is tension. The missing third is a void that gives the sound its character: neither warm nor dark, just open and expectant. Used in contemporary film scoring for mystery, anticipation, and unresolved emotional states.",
    tags: ["open fifth", "seventh", "expectant", "unresolved"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "B3"], duration: "1n" },
        { notes: ["D2", "A2", "C#4"], duration: "1n" },
      ],
    },
  },
  {
    id: "clustered-upper-extensions",
    name: "Clustered Upper Extensions",
    category: "orchestration",
    description:
      "Upper string divisi voiced in tight clusters of 9ths, 11ths, and 13ths — the extensions stacked close together in the high register while the bass and middle voices provide a clear root and fifth. The cluster creates shimmer and complexity above; the open spacing below provides clarity and grounding. The combination is lush on top and clear on bottom. The signature sound of modern Hollywood orchestral harmony.",
    tags: ["cluster", "extensions", "lush", "modern"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "D4", "E4", "G4", "B4"], duration: "1n" },
        { notes: ["F2", "C3", "G4", "A4", "C5", "E5"], duration: "1n" },
      ],
    },
  },
  {
    id: "rootless-string-harmony",
    name: "Rootless String Harmony",
    category: "orchestration",
    description:
      "String voicings that omit the root — the bass instruments (cellos, basses) play the third, fifth, or seventh instead of the root. The harmony floats because it lacks its fundamental; the listener hears a rich chord without grounding. More ambiguous and transparent than rooted voicings. Used in impressionist and modern orchestral writing for dreamy, weightless passages. The root is implied by context but never stated, creating a perpetual sense of hovering.",
    tags: ["rootless", "strings", "floating", "impressionist"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E2", "G3", "B3", "D4"], duration: "1n" },
        { notes: ["A2", "C4", "E4", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "strings-in-sixths",
    name: "Strings in Sixths",
    category: "orchestration",
    description:
      "Two string sections moving in parallel sixths — one of the warmest and most vocal-sounding intervallic textures. Sixths are consonant enough to blend but wide enough to have harmonic content. The two voices sound like they're singing together. More lush than thirds (which can sound nasal in strings) and more open than octaves (which have no harmonic content). The default 'beautiful string melody' interval in Hollywood orchestration.",
    tags: ["strings", "sixths", "warm", "vocal"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "A3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["E3", "C4"], duration: "4n" },
        { notes: ["F3", "D4"], duration: "4n" },
        { notes: ["G3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "strings-in-thirds",
    name: "Strings in Thirds",
    category: "orchestration",
    description:
      "Two string sections moving in parallel thirds — a tight, blended texture where the two voices are close enough to almost fuse. Thirds create a sense of sweetness and agreement: the two voices always concur. In the high register, parallel thirds shimmer; in the mid register, they're warm and songlike; in the low register, they're dark and rich. More intimate than sixths but more harmonically rich than unison or octaves.",
    tags: ["strings", "thirds", "blended", "sweet"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3"], duration: "4n" },
        { notes: ["D3", "F3"], duration: "4n" },
        { notes: ["E3", "G3"], duration: "4n" },
        { notes: ["F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "strings-in-tenths",
    name: "Strings in Tenths",
    category: "orchestration",
    description:
      "Two string sections moving in parallel tenths — thirds separated by an octave. The wide spacing creates a full, resonant sound with more air between the voices than close thirds. The tenth is the interval of 'completeness': wide enough to fill the register, consonant enough to sound settled. In strings, parallel tenths have a grand, expansive quality. Used for heroic themes and sweeping melodic passages where the melody needs harmonic support but also space.",
    tags: ["strings", "tenths", "grand", "expansive"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E4"], duration: "4n" },
        { notes: ["D3", "F4"], duration: "4n" },
        { notes: ["E3", "G4"], duration: "4n" },
        { notes: ["F3", "A4"], duration: "4n" },
        { notes: ["G3", "B4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-fifths",
    name: "Horn Fifths",
    category: "orchestration",
    description:
      "Two horns moving in parallel fifths — the quintessential 'hunting horn' sound. The open fifth is the horn's natural interval (from the harmonic series), and parallel fifths create a hollow, noble, outdoor quality. Unlike parallel fifths in academic voice leading (which are forbidden), horn fifths are idiomatic and intentional. The sound of forests, mountains, and heroic distances. Mozart, Weber, Brahms, and every film composer uses horn fifths for pastoral or heroic scenes.",
    tags: ["horns", "fifths", "noble", "pastoral"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "G3"], duration: "4n" },
        { notes: ["D3", "A3"], duration: "4n" },
        { notes: ["E3", "B3"], duration: "4n" },
        { notes: ["F3", "C4"], duration: "4n" },
        { notes: ["G3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-sixths",
    name: "Horn Sixths",
    category: "orchestration",
    description:
      "Two horns moving in parallel sixths — warmer and more vocal than horn fifths. The sixth interval adds harmonic richness to the horn's natural warmth. Less iconic than horn fifths but more emotionally versatile: horn sixths sound noble AND tender. Used in Romantic orchestration for passages that need the horn's character without the open, outdoor quality of fifths. Brahms writes some of his most beautiful passages for horns in sixths.",
    tags: ["horns", "sixths", "tender", "brahms"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "A3"], duration: "4n" },
        { notes: ["D3", "B3"], duration: "4n" },
        { notes: ["E3", "C4"], duration: "4n" },
        { notes: ["F3", "D4"], duration: "4n" },
        { notes: ["G3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-major-thirds",
    name: "Horn Major Thirds",
    category: "orchestration",
    description:
      "Two horns moving in parallel major thirds — a bright, triumphant sound. Major thirds on horns have a fanfare quality: the interval is assertive and consonant, the timbre is noble. Less common than horn fifths but more dramatically effective in the right context. Used for moments of clarity, victory, and revelation. The major third says 'yes' — on horns, it says 'YES' emphatically. John Williams uses horn thirds for his most decisive heroic moments.",
    tags: ["horns", "thirds", "triumphant", "decisive"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3"], duration: "4n" },
        { notes: ["D3", "F#3"], duration: "4n" },
        { notes: ["E3", "G#3"], duration: "4n" },
        { notes: ["F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "brass-open-voicing",
    name: "Brass Open Voicing",
    category: "orchestration",
    description:
      "Brass section voiced with wide spacing between notes — no adjacent chord tones closer than a fourth. The open voicing gives brass chords a resonant, majestic quality that fills the hall. Tight brass voicings sound punchy and close; open voicings sound vast and ceremonial. The overtones of each brass instrument have space to ring without collision. Used for the most grand, cinematic brass moments: coronation scenes, sweeping vistas, and triumphant finales.",
    tags: ["brass", "open voicing", "majestic", "ceremonial"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C2", "G2", "E3", "C4"], duration: "1n" },
        { notes: ["F2", "C3", "A3", "F4"], duration: "1n" },
      ],
    },
  },
  {
    id: "string-chord-spread",
    name: "String Chord Spread",
    category: "orchestration",
    description:
      "A string chord voiced across the full range of the string section — from basses to first violins, spanning four or more octaves. The spread creates maximum resonance: every register of the string family contributes its character. Low strings provide warmth and weight; middle strings provide body; high strings provide brilliance. A fully spread string chord is one of the most beautiful sounds in orchestral music. The signature 'Hollywood string pad.'",
    tags: ["strings", "spread", "resonance", "full-range"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "E3", "G3", "C4", "E4"], duration: "1n" },
        { notes: ["F2", "C3", "A3", "C4", "F4", "A4"], duration: "1n" },
      ],
    },
  },
  {
    id: "high-string-over-low-brass",
    name: "High-String Extension over Low Brass",
    category: "orchestration",
    description:
      "Upper strings playing extensions (9ths, 11ths, 13ths) in a high register over low brass playing the root and fifth — the brass provides the harmonic foundation, the strings provide the color. The registral separation creates a clear division of labor: brass is structure, strings are ornament. The combination is richer than either alone: brass without strings sounds blunt; strings without brass sound thin. Together they create the complete Hollywood harmonic palette.",
    tags: ["strings", "brass", "extensions", "layering"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2", "G2", "D4", "E4", "B4"], duration: "1n" },
        { notes: ["F2", "C3", "G4", "A4", "E5"], duration: "1n" },
      ],
    },
  },
  {
    id: "low-pedal-high-string-cluster",
    name: "Low Pedal with High String Cluster",
    category: "orchestration",
    description:
      "A sustained bass pedal in the lowest register with a tight cluster of string harmonics or divisi in the highest register — maximum registral distance between bottom and top. The middle is empty: a vast harmonic void between the pedal's darkness and the cluster's shimmer. The empty space IS the sound — it creates a sense of infinite distance, cosmic scale, or profound stillness. Ligeti, Penderecki, and modern film composers use this for awe and transcendence.",
    tags: ["pedal", "cluster", "distance", "transcendence"],
    audio: {
      tempo: 54,
      events: [
        { notes: ["C2", "E5", "F5", "G5"], duration: "1n", velocity: 0.5 },
        { notes: ["C2", "D5", "E5", "G5"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  // ── Golden Age Hollywood / Late-Romantic Progressions (Batch 4) ──
  {
    id: "secondary-plagal-motion",
    name: "Secondary Plagal Motion",
    category: "progressions",
    description:
      "Borrowed subdominant chains like ♭VII → IV → I — multiple chords with subdominant function stacked in sequence before the tonic. Each chord adds another layer of plagal warmth without the tension of dominant function. The progression avoids V entirely, resolving through 'weight' rather than 'pull.' Film composers use secondary plagal motion for endings that feel settled and warm rather than decisive and triumphant.",
    tags: ["gospel", "soul", "plagal", "borrowed chord", "subdominant"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-iv-bvii-iii-vi",
    name: "IV → ♭VII → iii → vi",
    category: "progressions",
    description:
      "A retrograde/expanded plagal-color progression — IV and ♭VII provide borrowed subdominant warmth, then iii and vi pull the progression into diatonic minor territory. The journey from borrowed chords back to diatonic ones creates a sense of returning from an exotic harmonic excursion. The ♭VII → iii motion is particularly unusual: a tritone root movement that sounds smooth because both chords share scale tones.",
    tags: ["classical", "romantic", "plagal", "retrograde", "modal"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["A3", "C4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-iv-bvii-biii-i",
    name: "iv → ♭VII → ♭III → I",
    category: "progressions",
    description:
      "A minor-subdominant cinematic resolution — iv is borrowed darkness, ♭VII adds modal color, ♭III provides a moment of parallel-minor brightness, and I resolves in major. The bass motion F → Bb → Eb → C traces a cycle of fourths through the minor system before arriving at the major tonic. The entire progression is borrowed except the final chord, making the major resolution feel like breaking through clouds into sunlight.",
    tags: ["minor iv", "cinematic", "borrowed chord", "resolution"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-biii-bvi-bvii-i",
    name: "♭III → ♭VI → ♭VII → I",
    category: "progressions",
    description:
      "An epic modal-borrowed ascent — three borrowed chords climbing by whole steps and then half step into the major tonic. The bass rises Eb → Ab → Bb → C, creating unstoppable upward momentum. Each chord is darker than the tonic but the ascending motion is triumphant. The effect is of climbing out of darkness into light. One of the most cinematic progressions: used for hero themes, battle victories, and moments of transcendence.",
    tags: ["film", "cinematic", "bIII", "bVI", "bVII", "epic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["Eb3", "G3", "Bb3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-bvi-iv-v-i",
    name: "♭VI → iv → V → I",
    category: "progressions",
    description:
      "A dark predominant chain resolving into the major tonic — ♭VI provides maximum borrowed darkness, iv continues the minor subdominant color, V introduces dominant tension, and I resolves in major. The progression compresses the entire emotional arc of a Romantic symphony into four chords: despair → resignation → tension → triumph. The V → I resolution is conventional, but the preceding ♭VI → iv makes it feel hard-won.",
    tags: ["film", "rock", "bVI", "iv", "dark", "triumph"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-bvi-iio7-v-i",
    name: "♭VI → iiø7 → V → i",
    category: "progressions",
    description:
      "A Romantic minor-key predominant chain — ♭VI provides the initial borrowed color, iiø7 (half-diminished) acts as the pre-dominant with maximum tension, V provides the dominant pull, and i resolves in minor. The ♭VI → iiø7 voice leading is exceptionally smooth: the bass drops by a third while inner voices shift by half steps. Used in Romantic opera and film scoring for the most emotionally devastating minor-key resolutions.",
    tags: ["classical", "romantic", "bVI", "half-diminished", "minor"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["D3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-iii-vi-ii-v-i",
    name: "III → VI → ii → V → I",
    category: "progressions",
    description:
      "A chromatic/secondary-dominant expansion — III and VI are chromatically altered (as secondary dominants), resolving through the standard ii → V → I. The III → VI motion sounds like a dominant-tonic in a foreign key; the ii → V → I brings everything home. The progression starts far from the tonic and works its way back through increasingly familiar territory. Used in jazz and film scoring for extended harmonic journeys that feel inevitable.",
    tags: ["jazz", "soul", "chromatic", "secondary dominant", "expansion"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["E3", "G#3", "B3"], duration: "4n" },
        { notes: ["A3", "C#4", "E4"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["G3", "B3", "D4"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-v-iv-i",
    name: "V → IV → I",
    category: "progressions",
    description:
      "Retrogressive dominant-to-subdominant motion — V moves 'backward' to IV instead of resolving to I, then IV resolves plagally. This contradicts classical harmonic syntax where V should go to I, creating a deliberate subversion that feels like a detour or reconsideration. The listener expects V → I and gets V → IV instead, which delays the resolution and makes the eventual IV → I arrival feel more relaxed and inevitable. Common in rock and gospel.",
    tags: ["gospel", "rock", "retrogressive", "V", "IV", "subversion"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-iv-bvi-v-i",
    name: "IV → ♭VI → V → I",
    category: "progressions",
    description:
      "Chromatic predominant intensification — IV provides standard pre-dominant warmth, ♭VI darkens dramatically (the bass drops a whole step from F to Ab), and V resolves with full dominant tension. The IV → ♭VI motion is the money moment: the unexpected chromatic drop transforms a standard plagal approach into something dramatic. Used in film scoring for scenes where a moment of peace is interrupted by darkness before resolution.",
    tags: ["film", "romantic", "IV", "bVI", "intensification", "chromatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-i-bvi-ii-bii-i",
    name: "I → ♭VI → ii → ♭II → I",
    category: "progressions",
    description:
      "An expanded chromatic predominant loop — I establishes home, ♭VI drops to borrowed territory, ii provides diatonic pre-dominant function, and ♭II (Neapolitan) creates the most chromatic pre-dominant before resolving back to I. The bass motion C → Ab → D → Db → C traces a nearly complete chromatic return. Each chord adds a different flavor of pre-dominant tension. The ♭II → I resolution is half-step magic: maximum proximity, maximum tension release.",
    tags: ["film", "classical", "chromatic", "neapolitan", "predominant"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["Ab2", "C3", "Eb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  // ── Mahler / Romantic Emotional Language ─────────────────────
  {
    id: "minor-key-theme-transform",
    name: "Minor-Key Transformation of a Major Theme",
    category: "harmonic-devices",
    description:
      "Taking a theme originally stated in major and restating it in its parallel or relative minor — the same melody, rhythm, and contour, but emotionally darkened through mode. The listener recognizes the theme but feels it differently. The transformation isn't just a transposition; it's an emotional reinterpretation. Mahler does this constantly: a bright march returns as a funeral march, a joyful dance becomes a bitter waltz. The theme itself is the same; the world around it has changed.",
    tags: ["transformation", "minor", "thematic", "darkening"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "4n" },
        { notes: ["C4", "Eb4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["Eb4", "G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "major-key-theme-transform",
    name: "Major-Key Transformation of a Minor Theme",
    category: "harmonic-devices",
    description:
      "A theme originally in minor restated in major — emotional illumination. The same melody that once expressed grief or struggle now expresses hope or transcendence. The transformation is the Romantic composer's most powerful structural tool: the entire emotional arc of a symphony can be expressed as minor → major. Beethoven's Fifth, Mahler's Second, and countless film scores use this transformation as the climactic emotional event.",
    tags: ["transformation", "major", "thematic", "illumination"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4", "Eb4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["Eb4", "G4"], duration: "4n" },
        { notes: ["C4", "E4"], duration: "4n" },
        { notes: ["D4", "F4"], duration: "4n" },
        { notes: ["E4", "G4"], duration: "4n" },
      ],
    },
  },
  {
    id: "thematic-recall-new-orchestration",
    name: "Thematic Recall in New Orchestration",
    category: "orchestration",
    description:
      "A theme returning transformed primarily through instrumentation — the notes, rhythm, and harmony are identical or nearly so, but the orchestration is completely different. A string theme returns on solo horn; a brass fanfare returns as a woodwind whisper. The new orchestration changes the emotional meaning without changing the music. Proves that timbre is content, not decoration. Mahler's symphonies are built on thematic recall: the same theme in different orchestral clothing tells a different story each time.",
    tags: ["thematic", "recall", "transformation", "timbre"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
        { notes: ["A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "thematic-fragmentation-recap",
    name: "Thematic Fragmentation Before Recapitulation",
    category: "melodic-devices",
    description:
      "A theme breaking into fragments before its triumphant return — the melody appears in pieces, scattered across instruments and registers, before reassembling into a complete statement. The fragmentation creates anticipation: the listener recognizes the pieces and waits for them to come together. The moment of recapitulation — when the fragments finally become whole — is one of the most powerful structural events in Romantic music. Beethoven, Brahms, and Mahler all build toward it.",
    tags: ["fragmentation", "recapitulation", "anticipation", "structural"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "8n" },
        { notes: ["G4"], duration: "4n." },
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "false-climax",
    name: "False Climax",
    category: "harmonic-devices",
    description:
      "An apparent emotional peak that withdraws before the true climax — the music builds to what seems like the high point, then pulls back, deflates, or redirects. The withdrawal creates frustration and anticipation that makes the eventual true climax more powerful. The false climax says 'not yet' — and the listener, having been denied once, invests even more in the next approach. Mahler and Bruckner use false climaxes to create symphonic structures that feel like emotional roller coasters.",
    tags: ["false climax", "withdrawal", "anticipation", "structural"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.6 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.7 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.85 },
        { notes: ["A3", "C4", "E4"], duration: "4n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "climactic-repetition",
    name: "Climactic Repetition",
    category: "melodic-devices",
    description:
      "Repeating the same melodic/harmonic idea while progressively intensifying it — each repetition is louder, higher, more orchestrated, or more harmonically charged. The repetition provides structure and familiarity; the intensification provides drama. The listener knows what's coming but can't resist the escalation. Different from sequential intensification (which transposes): climactic repetition keeps the same pitch level and changes everything else. The repetition IS the climax — through sheer accumulated force.",
    tags: ["repetition", "climax", "intensification", "accumulated"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4", "E4", "G4"], duration: "2n", velocity: 0.5 },
        { notes: ["C4", "E4", "G4"], duration: "2n", velocity: 0.65 },
        { notes: ["C4", "E4", "G4"], duration: "2n", velocity: 0.8 },
        { notes: ["C3", "C4", "E4", "G4", "C5"], duration: "1n", velocity: 0.95 },
      ],
    },
  },
  {
    id: "emotional-crescendo-no-harmony",
    name: "Emotional Crescendo Without Harmonic Change",
    category: "orchestration",
    description:
      "Intensity created entirely through register, dynamics, orchestration, and texture while the harmony stays on one chord. Ravel's Boléro is the famous example: one chord, one melody, endlessly repeated, but the orchestral crescendo creates one of the most thrilling builds in music. The technique proves that harmony is only one dimension of musical intensity. Register expansion, dynamic increase, timbral brightening, and textural thickening can substitute for harmonic motion entirely.",
    tags: ["crescendo", "static harmony", "texture", "bolero"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.3 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.45 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.75 },
        { notes: ["C2", "C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "harmonic-crescendo-quiet",
    name: "Harmonic Crescendo Without Dynamic Crescendo",
    category: "harmonic-devices",
    description:
      "Harmony becoming increasingly unstable, chromatic, or dissonant while dynamics remain restrained — the harmonic temperature rises but the volume doesn't. The effect is of seething tension beneath a calm surface. More unsettling than a loud harmonic crescendo because the restraint implies control, suppression, or something dangerous contained. Mahler uses this for passages that feel like a volcano about to erupt: the lava is rising but the ground is still.",
    tags: ["crescendo", "restrained", "tension", "suppressed"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "Eb3", "Gb3", "Bb3"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "D3", "E3", "F#3", "Ab3", "Bb3"], duration: "1n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "catastrophic-cadence",
    name: "Catastrophic Cadence",
    category: "cadences",
    description:
      "A massive cadential arrival produced by accumulated dominant/predominant tension — the cadence isn't just a resolution, it's an event. The approach lasts bars or even minutes, stacking tension upon tension until the arrival feels like a physical impact. The tonic chord arrives with the force of everything that preceded it. Bruckner's symphonic climaxes are catastrophic cadences: the dominant preparation is so prolonged that the tonic arrival is seismic. Film composers use this for the biggest moments.",
    tags: ["cadence", "catastrophic", "massive", "impact", "bruckner"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.6 },
        { notes: ["Db3", "F3", "Ab3"], duration: "4n", velocity: 0.7 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.8 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.9 },
        { notes: ["C2", "C3", "E3", "G3", "C4", "E4"], duration: "1n", velocity: 1.0 },
      ],
    },
  },
  {
    id: "post-climax-dissolution",
    name: "Post-Climax Dissolution",
    category: "harmonic-devices",
    description:
      "The music disintegrating after the emotional peak — instead of resolving, the texture fragments, the harmony loses coherence, and the orchestration thins to scattered fragments. The dissolution says 'that climax broke something that can't be put back together.' More devastating than a clean resolution because it implies that the peak was too much. Mahler's 9th Symphony ends with music dissolving into silence. The dissolution is the emotional content: not resolution but exhaustion.",
    tags: ["dissolution", "post-climax", "fragments", "exhaustion"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n", velocity: 0.9 },
        { notes: ["E3", "G3", "C4"], duration: "4n", velocity: 0.55 },
        { notes: ["G3"], duration: "4n", velocity: 0.35 },
        { notes: ["E3"], duration: "2n", velocity: 0.2 },
      ],
    },
  },
  // ── Romantic Voice Leading ──────────────────────────────────
  {
    id: "chromatic-voice-exchange",
    name: "Chromatic Mediated Voice Exchange",
    category: "voice-leading",
    description:
      "Two structural voices exchanging pitches through chromatic movement — the soprano descends chromatically while the bass ascends chromatically, each arriving at the other's starting pitch (or a related structural note). A common harmonic thread is retained throughout the exchange. The crossing voices create a kaleidoscopic effect: the harmony shifts constantly but the overall framework remains stable. Wagner and Strauss use this for passages of maximum chromatic motion with structural coherence.",
    tags: ["voice-leading", "chromatic", "exchange", "crossing", "wagner"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "G4"], duration: "4n" },
        { notes: ["C#3", "F#4"], duration: "4n" },
        { notes: ["D3", "F4"], duration: "4n" },
        { notes: ["Eb3", "E4"], duration: "4n" },
        { notes: ["E3", "Eb4"], duration: "4n" },
        { notes: ["F3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-neighbor-bass",
    name: "Chromatic Neighbor Bass",
    category: "bass",
    description:
      "The bass oscillating around a structural pitch chromatically — C → Db → C → B → C. The bass decorates its 'home' note with chromatic upper and lower neighbors, creating a shimmering, restless quality while staying functionally anchored. The upper voices can hold steady chords or move independently. The chromatic oscillation adds tension without going anywhere — the bass wants to leave home but keeps coming back. Used in Romantic music for passages of beautiful agitation.",
    tags: ["bass", "chromatic", "neighbor", "oscillation", "restless"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["Db3", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["B2", "E3", "G3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "double-chromatic-bass-descent",
    name: "Double Chromatic Bass Descent",
    category: "voice-leading",
    description:
      "Two voices descending chromatically simultaneously — typically bass and an inner voice, creating parallel chromatic motion in thirds, sixths, or tenths. The double descent is more intense than a single chromatic bass line: two voices pulling downward doubles the sense of gravity and inevitability. The harmonic implications are richer because two moving voices generate a more complex series of chords. Used in Romantic and film music for passages of inexorable descent.",
    tags: ["voice-leading", "chromatic", "double", "descending", "parallel"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "Ab3", "E4"], duration: "4n" },
        { notes: ["B2", "G3", "E4"], duration: "4n" },
        { notes: ["Bb2", "Gb3", "E4"], duration: "4n" },
        { notes: ["A2", "F3", "E4"], duration: "4n" },
        { notes: ["Ab2", "E3", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "chromatic-bass-static-inner",
    name: "Chromatic Bass with Static Inner Voices",
    category: "voice-leading",
    description:
      "The bass moving chromatically while inner voices hold their pitches — the bass slides underneath a fixed harmonic framework. Each bass note creates a different inversion or reharmonization of the sustained inner voices. Particularly effective for cinematic suspense: the held chord is the surface calm, and the sliding bass is the danger underneath. The bass's chromatic motion creates a sense of inevitability while the static voices provide an eerie stillness.",
    tags: ["voice-leading", "chromatic bass", "static", "suspense", "cinematic"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "E3", "G3"], duration: "2n" },
        { notes: ["Bb2", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-inner-ascent",
    name: "Chromatic Inner-Voice Ascension",
    category: "voice-leading",
    description:
      "An inner voice climbing chromatically while the outer voices remain stable — the inverse of the more common inner-voice descent. The ascending inner voice creates mounting tension within a stable harmonic frame. As the inner voice rises, it passes through increasingly dissonant relationships with the held outer voices. The ascent feels like pressure building inside a container. Used in Romantic music and film scoring for passages of growing unease or approaching climax.",
    tags: ["voice-leading", "chromatic", "inner voice", "ascending", "tension"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G4"], duration: "2n" },
        { notes: ["C3", "F3", "G4"], duration: "2n" },
        { notes: ["C3", "F#3", "G4"], duration: "2n" },
        { notes: ["C3", "G3", "G4"], duration: "1n" },
      ],
    },
  },
  {
    id: "semitone-pivot",
    name: "Semitone Voice-Leading Pivot",
    category: "voice-leading",
    description:
      "A single semitone movement in one voice that reinterprets the surrounding harmony — changing one note by half step transforms the chord's function, color, or tonal center. E to Eb turns C major into C minor; B to Bb turns G major into G7; F to F# turns F major into an augmented sixth. The smallest possible voice motion creates the largest possible harmonic reinterpretation. The semitone pivot is the most efficient modulatory tool in tonal music.",
    tags: ["voice-leading", "semitone", "pivot", "reinterpretation", "efficient"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3"], duration: "1n" },
      ],
    },
  },
  {
    id: "voice-leading-paradox",
    name: "Voice-Leading Paradox",
    category: "voice-leading",
    description:
      "Surface harmony that changes dramatically while individual voices move minimally — each voice moves by half step or stays put, but the combined result is a chord that sounds completely different. The paradox is between the smoothness of the voice leading and the remoteness of the harmonic change. A C major chord can become an Eb minor chord with three voices each moving by one half step. The listener hears a dramatic shift but can't identify what 'moved.' Wagner's entire harmonic language is built on this paradox.",
    tags: ["voice-leading", "paradox", "smooth", "remote", "wagner"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "Eb3", "Gb3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3"], duration: "2n" },
        { notes: ["A2", "Db3", "E3"], duration: "1n" },
      ],
    },
  },
  // ── Orchestral Color ────────────────────────────────────────
  {
    id: "string-harmonic-melody",
    name: "String Harmonic Melody",
    category: "orchestration",
    description:
      "A melody carried entirely by natural or artificial string harmonics — the ethereal, glassy tones creating a disembodied melodic line. Unlike using harmonics as color or texture, here the harmonics ARE the melody. The sound is otherworldly: a tune that seems to float above the physical world of the instrument. Ravel, Bartók, and modern film composers use harmonic melodies for supernatural, dreamlike, or transcendent moments.",
    tags: ["strings", "harmonics", "melody", "otherworldly"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E5"], duration: "4n", velocity: 0.3 },
        { notes: ["D5"], duration: "4n", velocity: 0.3 },
        { notes: ["C5"], duration: "4n", velocity: 0.3 },
        { notes: ["B4"], duration: "4n", velocity: 0.25 },
        { notes: ["A4"], duration: "2n", velocity: 0.25 },
      ],
    },
  },
  {
    id: "sul-ponticello",
    name: "Sul Ponticello Color Shift",
    category: "orchestration",
    description:
      "Bowing near the bridge to produce a glassy, overtone-rich, ghostly sound — the fundamental tone is reduced and higher harmonics dominate. Sul ponticello transforms the string's warm voice into something cold and spectral. Used as a structural timbral event: shifting from normal bowing to sul ponticello is like turning the lights off. The sound itself suggests ice, glass, or the supernatural. Film composers use it for horror, mystery, and moments where reality distorts.",
    tags: ["strings", "ponticello", "spectral", "timbre"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E4", "G4"], duration: "2n", velocity: 0.35 },
        { notes: ["E4", "G4", "B4"], duration: "1n", velocity: 0.3 },
      ],
    },
  },
  {
    id: "sul-tasto",
    name: "Sul Tasto Color Shift",
    category: "orchestration",
    description:
      "Bowing over the fingerboard to produce a warm, flute-like, fundamental-heavy tone — the opposite of sul ponticello. The overtones are damped, leaving a pure, soft, intimate sound. Sul tasto is the orchestral equivalent of whispering. Used for passages of extreme tenderness, distance, or fragility. The shift from normal bowing to sul tasto creates an instant sense of intimacy, as if the music has moved closer to the listener's ear.",
    tags: ["strings", "tasto", "warm", "intimate"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C4", "E4"], duration: "2n", velocity: 0.25 },
        { notes: ["D4", "F4"], duration: "2n", velocity: 0.25 },
        { notes: ["C4", "E4"], duration: "1n", velocity: 0.2 },
      ],
    },
  },
  {
    id: "divisi-cross-register",
    name: "Divisi Cross-Register Voicing",
    category: "orchestration",
    description:
      "Divisi string parts deliberately separated across registers rather than voiced closely — first violins in the stratosphere, seconds in the middle, violas deep and dark. The registral separation creates a spacious, open sonority with audible 'gaps' between the voices. Different from normal divisi (which voices closely for blend): cross-register divisi is about space and independence. Each voice is clearly audible as a separate entity. Creates a sense of vast, three-dimensional harmonic space.",
    tags: ["divisi", "cross-register", "spacious", "independent"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "G4", "E5"], duration: "1n" },
        { notes: ["F3", "C5", "A5"], duration: "1n" },
      ],
    },
  },
  {
    id: "horn-octave-strings",
    name: "Horn in Octaves with Strings",
    category: "orchestration",
    description:
      "Horn doubling strings at the octave — one of the classic cinematic reinforcement colors. The horn adds warmth and body to the string sound without changing its character. The doubling is subtle: the listener doesn't hear the horn as a separate voice but notices the string melody sounds richer, nobler, and more 'heroic.' Removing the horn makes the strings sound thinner. Adding it back makes them glow. The quintessential Hollywood orchestral doubling.",
    tags: ["horns", "strings", "doubling", "cinematic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "C4"], duration: "4n" },
        { notes: ["D3", "D4"], duration: "4n" },
        { notes: ["E3", "E4"], duration: "4n" },
        { notes: ["G3", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "horn-pedal-beneath-strings",
    name: "Horn Pedal beneath String Melody",
    category: "orchestration",
    description:
      "A sustained horn note held beneath a moving string melody — the horn provides a harmonic anchor while the strings carry the emotional narrative above. The horn's warm, steady tone is like a foundation; the strings build freely on top. The horn pedal adds weight and stability without restricting the strings' freedom. When the horn note changes, it's an event — the foundation shifts. Williams uses horn pedals beneath string melodies for his most lyrical passages.",
    tags: ["horns", "pedal", "strings", "anchor"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G2", "E4"], duration: "4n" },
        { notes: ["G2", "F4"], duration: "4n" },
        { notes: ["G2", "G4"], duration: "4n" },
        { notes: ["G2", "A4"], duration: "4n" },
        { notes: ["G2", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "bass-clarinet-cello-doubling",
    name: "Bass Clarinet Doubling Cello",
    category: "orchestration",
    description:
      "Bass clarinet doubling the cello line — adding the bass clarinet's dark, woody, slightly hollow tone to the cello's warm richness. The combination creates a uniquely dark orchestral color: warmer than bass clarinet alone, darker than cello alone. The doubling adds focus and edge to the cello's sound without brightness. Used for melancholic, noir, and introspective passages. Film composers from Herrmann to Zimmer use this doubling for their darkest moments.",
    tags: ["bass clarinet", "cello", "dark", "doubling"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["Eb3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["Eb3"], duration: "2n" },
      ],
    },
  },
  {
    id: "english-horn-viola-doubling",
    name: "English Horn + Viola Doubling",
    category: "orchestration",
    description:
      "English horn doubling viola — two of the most melancholic timbres in the orchestra combined. The English horn's nasal, vocal quality blends with the viola's dark warmth to create a uniquely bittersweet color. Both instruments live in the same register (alto/tenor) and share a quality of being 'voices in the middle' — not as bright as violin or flute, not as deep as cello or bassoon. Their doubling creates an intimate, shadowed beauty.",
    tags: ["english horn", "viola", "melancholic", "intimate"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["A3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["E3"], duration: "2n" },
      ],
    },
  },
  {
    id: "flute-violin-octave-doubling",
    name: "Flute + Violin Octave Doubling",
    category: "orchestration",
    description:
      "Flute doubling violin at the octave above — creating a crystalline, fragile high-register melodic color. The flute adds brilliance and a 'silver' quality to the violin's singing tone. In the very high register, this doubling creates an almost supernatural brightness. Used for moments of delicacy, innocence, and otherworldly beauty. The combination is more ethereal than either instrument alone: the flute's purity plus the violin's warmth creates a third, blended color.",
    tags: ["flute", "violin", "octave", "fragile"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G4", "G5"], duration: "4n", velocity: 0.6 },
        { notes: ["A4", "A5"], duration: "4n", velocity: 0.6 },
        { notes: ["B4", "B5"], duration: "4n", velocity: 0.55 },
        { notes: ["C5"], duration: "2n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "celesta-harp-doubling",
    name: "Celesta + Harp Doubling",
    category: "orchestration",
    description:
      "Celesta doubling harp — a luminous, fantasy-colored combination. The celesta's bell-like metallic shimmer combined with the harp's warm resonance creates a magical, sparkling texture. Neither instrument sustains well on its own, but together their attacks and decays complement each other perfectly. The Tchaikovsky 'Dance of the Sugar Plum Fairy' sound, but also used throughout film scoring for moments of wonder, enchantment, and the supernatural. The definitive 'magic' sound in orchestral music.",
    tags: ["celesta", "harp", "magical", "fantasy"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C5"], duration: "8n", velocity: 0.5 },
        { notes: ["E5"], duration: "8n", velocity: 0.5 },
        { notes: ["G5"], duration: "8n", velocity: 0.45 },
        { notes: ["C5"], duration: "8n", velocity: 0.45 },
        { notes: ["E5"], duration: "8n", velocity: 0.4 },
        { notes: ["G4"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "harp-divisi-strings",
    name: "Harp + Divisi Strings",
    category: "orchestration",
    description:
      "Harp arpeggiation integrated directly into the string divisi harmony — the harp doesn't accompany the strings, it becomes part of the harmonic texture. The harp's arpeggiated notes fill the spaces between sustained string voices, creating a shimmering, continuous sonority. The strings provide warmth and sustain; the harp provides sparkle and motion. Together they create a texture more luminous than either alone. The signature 'golden' sound of Romantic and Hollywood orchestration.",
    tags: ["harp", "divisi", "strings", "luminous"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["E3", "G3", "C4", "E4"], duration: "4n.", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.4 },
        { notes: ["C4", "E4", "G4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  // ── Melodic Rhetoric ────────────────────────────────────────
  {
    id: "climactic-leap",
    name: "Climactic Leap",
    category: "melodic-devices",
    description:
      "An emotional climax created by a sudden large melodic interval — a sixth, seventh, octave, or even larger leap to the highest note. The leap IS the climax: the physical distance between the notes translates directly into emotional intensity. A stepwise melody that suddenly leaps an octave says 'I can't contain this anymore.' The wider the leap, the more desperate or ecstatic the moment. Puccini's arias are built on climactic leaps; film themes inherit the technique directly.",
    tags: ["leap", "climax", "interval", "puccini"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["E5"], duration: "2n", velocity: 0.9 },
        { notes: ["D5"], duration: "4n" },
        { notes: ["C5"], duration: "2n" },
      ],
    },
  },
  {
    id: "registral-appoggiatura",
    name: "Registral Appoggiatura",
    category: "melodic-devices",
    description:
      "An appoggiatura whose emotional effect comes primarily from a register leap — the melody jumps to a high register for the dissonant note, making the appoggiatura both a melodic and registral event. The leap amplifies the dissonance: the note is 'wrong' harmonically AND dramatically higher than expected. The resolution back down is a double release — both the dissonance and the registral tension resolve. Used in opera and film for the most climactic melodic moments.",
    tags: ["appoggiatura", "register", "leap", "amplified"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "F5"], duration: "2n", velocity: 0.9 },
        { notes: ["C3", "E3", "G3", "E5"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-sus-across-phrase",
    name: "Melodic Suspension Across Phrase Boundary",
    category: "melodic-devices",
    description:
      "A melody that refuses to resolve when the phrase itself ends — the melodic suspension carries over the phrase boundary, creating a moment where the structural rhythm says 'end' but the melody says 'not yet.' The new phrase begins with the old melody's unresolved note hanging in the air. The suspension connects the two phrases like a bridge that hasn't quite landed. Creates breathless continuity: the listener can't exhale because the melody hasn't landed.",
    tags: ["suspension", "phrase boundary", "continuity", "breathless"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C4"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["E4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "F4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "4n" },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "delayed-climax",
    name: "Delayed Climax",
    category: "melodic-devices",
    description:
      "A melody that repeatedly approaches its highest point but withholds it — each attempt gets closer but falls back. The listener's anticipation builds with each failed attempt. When the climax finally arrives, the accumulated frustration makes the release overwhelming. Different from a false climax (which is structural): a delayed climax is purely melodic — the tune itself teases its own peak. Romantic arias and film themes use delayed climaxes to create unbearable anticipation.",
    tags: ["delayed", "climax", "anticipation", "teasing"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["G4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["B4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["C5"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "repeated-climax-note",
    name: "Repeated Climax Note",
    category: "melodic-devices",
    description:
      "The same high note returning multiple times with increasing orchestral significance — the first time it appears as a fleeting peak, the second time it's sustained, the third time the full orchestra supports it. The note itself doesn't change; everything around it does. Each return of the note carries the memory of its previous appearances, accumulating meaning. By the final statement, one note has become the emotional center of the entire passage.",
    tags: ["repeated", "climax", "accumulation", "significance"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A4"], duration: "4n", velocity: 0.6 },
        { notes: ["G4"], duration: "4n" },
        { notes: ["F4"], duration: "4n" },
        { notes: ["C3", "E3", "A4"], duration: "2n", velocity: 0.75 },
        { notes: ["G4"], duration: "4n" },
        { notes: ["C3", "E3", "G3", "C4", "A4"], duration: "1n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "melodic-before-harmonic-arrival",
    name: "Melodic Arrival Before Harmonic Arrival",
    category: "melodic-devices",
    description:
      "The melody reaching its emotional destination before the harmony does — the melody lands on the tonic or climax note while the harmony is still on a non-tonic chord. The melody says 'I'm home'; the harmony says 'not yet.' The dissonance between melodic arrival and harmonic delay creates a suspended, expectant quality. When the harmony finally catches up, the double arrival is deeply satisfying. A more subtle version of the high-note-delayed-tonic concept.",
    tags: ["arrival", "early", "expectant", "dissonance"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["F3", "A3", "D4", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "melodic-echo-cadence",
    name: "Melodic Echo at Cadence",
    category: "melodic-devices",
    description:
      "A melodic fragment repeating softly after the main cadence — the cadence resolves, but a ghost of the melody lingers in a quieter instrument. The echo is the music's afterimage: the resolution has happened, but the memory persists. More than a simple repetition: the echo is softer, often in a different register or timbre, and fades away. Used at the end of sections, movements, or scenes for a sense of things trailing off into silence rather than stopping.",
    tags: ["echo", "cadence", "afterimage", "fading"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n", velocity: 0.8 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.75 },
        { notes: ["G4"], duration: "4n", velocity: 0.35 },
        { notes: ["C4"], duration: "2n", velocity: 0.25 },
      ],
    },
  },
  // ── Cinematic Techniques ────────────────────────────────────
  {
    id: "orchestral-accumulation",
    name: "Orchestral Accumulation",
    category: "orchestration",
    description:
      "Layers entering progressively until the ensemble becomes massive — each instrument or section adds its voice to a growing texture. Different from a crescendo (which increases volume of existing forces): accumulation adds NEW voices. The listener hears the orchestra assembling itself in real time. Each new entry is an event. Ravel's Boléro is pure accumulation; film composers use it for approaching armies, gathering storms, and any scene where something grows inexorably from nothing to everything.",
    tags: ["accumulation", "layering", "massive", "progressive"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G3"], duration: "2n", velocity: 0.35 },
        { notes: ["G3", "B3"], duration: "2n", velocity: 0.45 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.55 },
        { notes: ["G2", "G3", "B3", "D4"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "D3", "G3", "B3", "D4", "G4"], duration: "1n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "orchestral-shadowing",
    name: "Orchestral Shadowing",
    category: "orchestration",
    description:
      "One orchestral section subtly doubling or following another section's material at a lower dynamic — the 'shadow' adds depth and richness without being heard as a separate voice. The shadow might be a beat behind (rhythmic shadow), an octave below (registral shadow), or a softer dynamic (dynamic shadow). The primary section is the substance; the shadow is the resonance. Removing the shadow makes the primary sound thinner without the listener knowing why.",
    tags: ["shadowing", "doubling", "subtle", "depth"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E4", "E3"], duration: "4n", velocity: 0.7 },
        { notes: ["F4", "F3"], duration: "4n", velocity: 0.65 },
        { notes: ["G4", "G3"], duration: "4n", velocity: 0.7 },
        { notes: ["A4", "A3"], duration: "2n", velocity: 0.75 },
      ],
    },
  },

  // ── Texture & Atmosphere ──────────────────────────────────

  {
    id: "washed-out-harmony",
    name: "Washed-Out Harmony",
    category: "texture",
    description:
      "Parallel diatonic triads or seventh chords moving at a glacial pace with heavy sustain, so that each chord bleeds into the next. The individual chord qualities blur together into a shimmering harmonic field — you hear color and movement rather than distinct changes. The slower the harmonic rhythm and the more extensions you add, the more washed-out the effect becomes.",
    tags: ["texture", "ambient", "atmospheric", "slow", "parallel"],
    audio: {
      tempo: 55,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.5 },
        { notes: ["D3", "F3", "A3", "C4"], duration: "1n", velocity: 0.5 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "1n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4", "E4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "unexpected-bass-chord",
    name: "Major Chord with Unexpected Bass",
    category: "texture",
    description:
      "A simple major triad voiced over a bass note that isn't its root — a slash chord that transforms the chord's emotional color without adding complexity. C/Bb sounds noble and floating, G/F sounds warm and suspended, D/C sounds open and wondering. The chord itself is familiar; the bass makes it strange.",
    tags: ["texture", "slash-chord", "bass", "harmonic color", "reharmonization"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Bb2", "C4", "E4", "G4"], duration: "2n.", velocity: 0.6 },
        { notes: ["F2", "G3", "B3", "D4"], duration: "2n.", velocity: 0.6 },
        { notes: ["C3", "D4", "F#4", "A4"], duration: "2n.", velocity: 0.6 },
        { notes: ["G2", "A3", "C#4", "E4"], duration: "2n.", velocity: 0.55 },
      ],
    },
  },
  {
    id: "maj9-to-maj7-resolution",
    name: "Major 9 to Major 7 Resolution",
    category: "texture",
    description:
      "The 9th of a major chord resolving stepwise down to the root while the major 7th sustains — a tiny voice-leading move that creates a gentle sigh within a single chord. The chord doesn't change; it settles. Common in ambient and lo-fi contexts where the harmonic rhythm is so slow that motion within a chord replaces motion between chords.",
    tags: ["texture", "voice-leading", "resolution", "ambient", "subtle"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "B3", "C4"], duration: "2n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4", "E4", "G4"], duration: "2n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4", "E4", "F4"], duration: "2n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "static-harmony-moving-texture",
    name: "Static Harmony with Moving Texture",
    category: "texture",
    description:
      "One chord sustained while arpeggiated figures, tremolo, or rhythmic patterns create the illusion of harmonic motion. The harmony itself doesn't move — but you feel movement because the texture is alive. Steve Reich, Brian Eno, and ambient producers all exploit this: the ear hears 'change' even when the notes stay the same.",
    tags: ["texture", "static", "arpeggio", "ambient", "minimalism"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["B3"], duration: "8n", velocity: 0.5 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["B3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.4 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["B3"], duration: "8n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "melody-emerging-from-texture",
    name: "Melody Emerging from Texture",
    category: "texture",
    description:
      "A melodic line gradually distinguishes itself from a dense harmonic texture — at first it's just another voice in the chord, then it starts moving independently, gaining rhythmic definition and dynamic prominence until the listener realizes they're hearing a melody. The emergence is the effect: it feels like the music is waking up.",
    tags: ["texture", "melody", "emergence", "gradual", "ambient"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "D4"], duration: "4n", velocity: 0.45 },
        { notes: ["C3", "E3", "G3", "E4"], duration: "4n", velocity: 0.55 },
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.35 },
        { notes: ["F4"], duration: "8n", velocity: 0.65 },
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
        { notes: ["D4"], duration: "8n", velocity: 0.7 },
        { notes: ["C4"], duration: "4n.", velocity: 0.75 },
      ],
    },
  },
  {
    id: "melody-dissolving-into-texture",
    name: "Melody Dissolving into Texture",
    category: "texture",
    description:
      "A clear melody gradually loses its rhythmic and dynamic definition, blending back into the surrounding harmony until it's no longer distinguishable as a separate voice. The opposite of emergence: the music falls asleep. The melody doesn't stop — it gets absorbed. Powerful for endings and transitions.",
    tags: ["texture", "melody", "dissolving", "ambient", "fade"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["E4"], duration: "4n", velocity: 0.75 },
        { notes: ["D4"], duration: "8n", velocity: 0.7 },
        { notes: ["C4"], duration: "4n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3"], duration: "8n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n", velocity: 0.45 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.35 },
      ],
    },
  },
  {
    id: "melodic-fragment-over-loop",
    name: "Melodic Fragment over Repeating Loop",
    category: "texture",
    description:
      "A short melodic idea — just a few notes — floating over a repeating harmonic or rhythmic cycle. The loop provides hypnotic stability; the fragment provides just enough melodic identity to hold attention. Each repetition of the fragment against the loop sounds slightly different because of how they phase against each other. Central to ambient, lo-fi, and vaporwave.",
    tags: ["texture", "loop", "fragment", "repetition", "ambient"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "G3"], duration: "4n", velocity: 0.4 },
        { notes: ["E3", "B3"], duration: "4n", velocity: 0.4 },
        { notes: ["E4"], duration: "4n", velocity: 0.65 },
        { notes: ["D4"], duration: "4n", velocity: 0.6 },
        { notes: ["C3", "G3"], duration: "4n", velocity: 0.4 },
        { notes: ["E3", "B3"], duration: "4n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.65 },
        { notes: ["G4"], duration: "4n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "percussion-emerging-from-texture",
    name: "Percussion Emerging from Texture",
    category: "texture",
    description:
      "Rhythmic elements gradually materializing from within sustained harmony — at first you hear only pads or drones, then a faint pulse appears, then it solidifies into a recognizable rhythmic pattern. The beat doesn't 'start' — it was always there, hiding in the texture. An ambient/electronic production technique that works equally well in orchestral and acoustic contexts.",
    tags: ["texture", "percussion", "emergence", "buildup", "rhythm"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "G3", "C4"], duration: "2n", velocity: 0.3 },
        { notes: ["C3", "G3", "C4"], duration: "4n", velocity: 0.35 },
        { notes: ["G2"], duration: "4n", velocity: 0.3 },
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.55 },
        { notes: ["G3"], duration: "8n", velocity: 0.6 },
        { notes: ["C3"], duration: "8n", velocity: 0.65 },
        { notes: ["G3"], duration: "8n", velocity: 0.65 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "dense-rhythm-sparse-harmony",
    name: "Dense Rhythm, Sparse Harmony",
    category: "texture",
    description:
      "A busy, intricate rhythmic pattern played against minimal harmonic content — often just one or two chords, or even a single bass note. The complexity lives entirely in the rhythm while the harmony breathes. This contrast is the engine of atmospheric drum and bass, minimal techno, and a lot of Steve Reich. The ear can only process so much information: dense rhythm demands sparse harmony, and vice versa.",
    tags: ["texture", "contrast", "rhythm", "sparse", "dnb"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.6 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.65 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.65 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.6 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
      ],
    },
  },

  // ── Texture & Atmosphere additions ───────────────────────

  {
    id: "sub-bass-texture",
    name: "Sub-Bass as Texture",
    category: "texture",
    description:
      "A deep sub-bass frequency (30–60 Hz) sustained or slowly modulated beneath the mix, felt more than heard. Not functioning as a bass line with melodic movement — it's a physical presence, a rumble that gives the track weight and warmth. Fundamental to DnB, dubstep, and atmospheric electronic music. The sub doesn't play notes so much as it occupies a frequency range, and everything else is built on top of it.",
    tags: ["texture", "sub-bass", "low-end", "dnb", "electronic", "atmospheric"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C2"], duration: "1n", velocity: 0.6 },
        { notes: ["C2"], duration: "1n", velocity: 0.55 },
        { notes: ["Bb1"], duration: "1n", velocity: 0.6 },
        { notes: ["C2"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "pad-stacking",
    name: "Pad Stacking / Layered Pads",
    category: "texture",
    description:
      "Multiple sustained pad layers with different timbres playing the same harmony — one warm and dark, one bright and airy, one with slow modulation. Each layer occupies a different frequency range, and together they create a harmonic texture richer than any single patch. The individual layers may be simple; the depth comes from the interaction. Essential in atmospheric DnB, ambient, and synth-heavy production.",
    tags: ["texture", "pads", "layering", "synth", "atmospheric", "ambient"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C3", "Eb3", "G3", "Bb3", "D4"], duration: "1n", velocity: 0.45 },
        { notes: ["Ab2", "C3", "Eb3", "G3", "Bb3"], duration: "1n", velocity: 0.45 },
        { notes: ["Bb2", "D3", "F3", "Ab3", "C4"], duration: "1n", velocity: 0.45 },
        { notes: ["G2", "Bb2", "D3", "F3", "A3"], duration: "1n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "octave-displaced-texture",
    name: "Octave-Displaced Voicing",
    category: "texture",
    description:
      "Taking chord tones and scattering them across extreme octave ranges — the root three octaves below the 5th, the 3rd two octaves above the 7th. The chord is technically the same, but the wide spacing transforms it from harmony into atmosphere. You hear intervals floating in space rather than a unified chord. Shimomura, Debussy, and ambient producers all exploit the way wide voicings dissolve harmonic identity into pure color.",
    tags: ["texture", "voicing", "spacing", "atmospheric", "orchestral"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "B4", "E5"], duration: "2n", velocity: 0.45 },
        { notes: ["G2", "F4", "A4"], duration: "2n", velocity: 0.45 },
        { notes: ["Ab2", "Eb4", "G4"], duration: "2n", velocity: 0.45 },
        { notes: ["Bb2", "D4", "F4"], duration: "2n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "resampled-chord",
    name: "Resampled / Chopped Chord",
    category: "texture",
    description:
      "A chord or harmonic passage sampled, then replayed as a single texture element — pitched, time-stretched, filtered, or reversed. The original harmonic content becomes raw material for a new texture. Death's Dynamic Shroud's entire approach: take a chord from a smooth jazz record, slow it to half speed, drench it in reverb, and it becomes something entirely new. The harmony carries emotional residue from its source while functioning as pure atmosphere.",
    tags: ["texture", "sampling", "vaporwave", "chopped", "electronic", "experimental"],
    audio: {
      tempo: 65,
      events: [
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "2n.", velocity: 0.5 },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "4n", velocity: 0.4 },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "pitch-shifted-layer",
    name: "Pitch-Shifted Harmonic Layer",
    category: "texture",
    description:
      "A harmonic element duplicated and pitch-shifted by a non-standard interval — up a 5th, down a major 7th, or by microtonal amounts. The shifted copy doesn't create traditional harmony; it creates a spectral shadow of the original. At small intervals (a few cents) it produces chorus-like thickening; at wider intervals it creates eerie parallel worlds. Used in atmospheric DnB, vaporwave, and experimental production to make familiar sounds feel alien.",
    tags: ["texture", "pitch-shift", "electronic", "processing", "experimental"],
    audio: {
      tempo: 75,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.4 },
        { notes: ["C3", "E3", "G3", "G3", "B3", "D4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "filtered-sweep",
    name: "Filter Sweep as Tension",
    category: "texture",
    description:
      "A low-pass or high-pass filter slowly opening or closing over sustained harmony, creating a gradual reveal or retreat without changing the notes. The harmony stays constant; the timbral evolution IS the motion. A closing filter feels like the music is sinking underwater; an opening filter feels like surfacing. Fundamental to electronic music builds, and equally powerful when applied to orchestral recordings or guitar pads.",
    tags: ["texture", "filter", "sweep", "buildup", "electronic", "dnb"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.3 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.4 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.5 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.6 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.7 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.75 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.65 },
        { notes: ["C3", "Eb3", "G3", "Bb3"], duration: "4n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "reverb-as-harmony",
    name: "Reverb as Harmonic Element",
    category: "texture",
    description:
      "Reverb tails so long and prominent that they sustain previous chords into the next, creating unintentional dissonances and blurred harmonic transitions. The reverb itself becomes a voice in the harmony — not just an effect applied to the sound, but an active participant in the chord changes. Shoegaze, ambient, and vaporwave all treat reverb this way: the wet signal IS the music, and the dry signal is just the seed.",
    tags: ["texture", "reverb", "ambient", "shoegaze", "vaporwave", "atmospheric"],
    audio: {
      tempo: 55,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n.", velocity: 0.5 },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n.", velocity: 0.5 },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n.", velocity: 0.5 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n.", velocity: 0.45 },
      ],
    },
  },
  {
    id: "polyrhythmic-texture",
    name: "Polyrhythmic Textural Layers",
    category: "texture",
    description:
      "Multiple independent rhythmic loops of different lengths running simultaneously over static harmony — a 3-beat arpeggio against a 4-beat pad pulse against a 5-beat melodic fragment. Each layer is simple, but their interaction creates constantly shifting patterns that never quite repeat. The texture IS the composition. Steve Reich's phasing technique, but equally fundamental to atmospheric DnB and IDM where multiple delay-synced elements create emergent complexity.",
    tags: ["texture", "polyrhythm", "layering", "phasing", "dnb", "minimalism"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
        { notes: ["Eb4"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "4n", velocity: 0.5 },
        { notes: ["Bb3"], duration: "8n", velocity: 0.55 },
        { notes: ["C3"], duration: "8n", velocity: 0.5 },
        { notes: ["Eb4"], duration: "4n", velocity: 0.6 },
        { notes: ["G3"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "4n", velocity: 0.5 },
        { notes: ["Bb3"], duration: "8n", velocity: 0.55 },
        { notes: ["Eb4"], duration: "8n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "degraded-fidelity",
    name: "Degraded Fidelity as Aesthetic",
    category: "texture",
    description:
      "Intentionally reducing audio quality — bitcrushing, sample rate reduction, tape saturation, vinyl crackle, or heavy compression artifacts — to create warmth, nostalgia, or unease. The degradation is not a flaw but a compositional choice that adds emotional character. Lo-fi hip hop uses it for warmth; vaporwave uses it for uncanny nostalgia; industrial and noise use it for aggression. The 'imperfection' becomes the texture the listener connects to.",
    tags: ["texture", "lo-fi", "vaporwave", "degraded", "production", "experimental"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "2n", velocity: 0.55 },
        { notes: ["Ab3", "C4", "Eb4"], duration: "4n", velocity: 0.5 },
        { notes: ["Bb3", "D4", "F4"], duration: "4n", velocity: 0.5 },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "2n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "harmonic-freeze",
    name: "Harmonic Freeze / Sustained Cluster",
    category: "texture",
    description:
      "A complex chord or cluster sustained indefinitely while the texture slowly evolves through dynamics, filtering, or timbral modulation. The notes never change — the sound changes around them. Like staring at a painting: the image is fixed, but your perception shifts as your eyes move across it. Used in ambient, film scoring, and atmospheric DnB intros. The freeze creates a sonic environment rather than a progression.",
    tags: ["texture", "cluster", "sustained", "ambient", "film", "atmospheric"],
    audio: {
      tempo: 50,
      events: [
        { notes: ["C3", "D3", "E3", "G3", "A3"], duration: "1n", velocity: 0.4 },
        { notes: ["C3", "D3", "E3", "G3", "A3"], duration: "1n", velocity: 0.45 },
        { notes: ["C3", "D3", "E3", "G3", "A3"], duration: "1n", velocity: 0.5 },
        { notes: ["C3", "D3", "E3", "G3", "A3"], duration: "1n", velocity: 0.4 },
      ],
    },
  },
  {
    id: "textural-contrast-drop",
    name: "Textural Contrast Drop",
    category: "texture",
    description:
      "An abrupt shift from dense, layered texture to a single exposed element — or vice versa. A full pad stack suddenly cuts to a solo piano note; a lone vocal suddenly erupts into a wall of sound. The contrast IS the effect: neither the dense nor the sparse section would be as powerful alone. DnB uses this constantly at the drop; film scoring uses it for reveals; Counterparts and metalcore use it between ambient interludes and crushing riffs.",
    tags: ["texture", "contrast", "dynamic", "drop", "arrangement"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "Eb3", "G3", "Bb3", "D4", "F4"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "Eb3", "G3", "Bb3", "D4", "F4"], duration: "4n", velocity: 0.7 },
        { notes: ["G4"], duration: "2n.", velocity: 0.4 },
        { notes: ["C3", "Eb3", "G3", "Bb3", "D4", "F4"], duration: "1n", velocity: 0.75 },
      ],
    },
  },

  // ── Rhythm additions (breakbeat / D&B) ────────────────────

  {
    id: "breakbeat",
    name: "Breakbeat",
    category: "rhythm",
    description:
      "A drum pattern built by breaking up a standard funk beat — the kick and snare land in irregular, syncopated positions rather than on the expected 1-and-3 / 2-and-4 grid. The foundation of jungle, drum and bass, breakbeat hardcore, and big beat. Unlike four-on-the-floor, where the kick anchors every beat, a breakbeat's kick is unpredictable, creating forward momentum and nervous energy.",
    tags: ["breakbeat", "drums", "syncopation", "dnb"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["C3", "G3"], duration: "8n", velocity: 0.8 },
        { notes: ["D4"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "16n", velocity: 0.4 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["D4"], duration: "8n", velocity: 0.5 },
        { notes: ["C3", "E4"], duration: "8n", velocity: 0.75 },
        { notes: ["D4"], duration: "16n", velocity: 0.5 },
        { notes: ["G3"], duration: "16n", velocity: 0.4 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
        { notes: ["D4"], duration: "8n", velocity: 0.5 },
        { notes: ["E4"], duration: "8n", velocity: 0.7 },
        { notes: ["D4"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "amen-break",
    name: "Amen Break",
    category: "rhythm",
    description:
      "The most sampled drum break in music history — a four-bar solo from The Winstons' 'Amen, Brother' (1969). Its distinctive syncopated kick-snare-ride pattern became the rhythmic backbone of jungle, drum and bass, and breakcore. The ghost notes between hits and the slightly rushed feel give it an urgency that straight programming can't replicate. Every D&B producer knows this pattern by heart.",
    tags: ["breakbeat", "amen", "sample", "classic"],
    audio: {
      tempo: 136,
      events: [
        { notes: ["C3", "G4"], duration: "8n", velocity: 0.8 },
        { notes: ["G4"], duration: "8n", velocity: 0.5 },
        { notes: ["E4", "G4"], duration: "8n", velocity: 0.75 },
        { notes: ["G4"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.6 },
        { notes: ["G4"], duration: "8n", velocity: 0.5 },
        { notes: ["C3", "G4"], duration: "8n", velocity: 0.7 },
        { notes: ["E4", "G4"], duration: "8n", velocity: 0.75 },
        { notes: ["G4"], duration: "8n", velocity: 0.5 },
        { notes: ["C3", "G4"], duration: "16n", velocity: 0.7 },
        { notes: ["G4"], duration: "16n", velocity: 0.5 },
        { notes: ["E4"], duration: "8n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "breakbeat-fragmentation",
    name: "Breakbeat Fragmentation",
    category: "rhythm",
    description:
      "Chopping a breakbeat into tiny slices and rearranging them into new, often unpredictable patterns. Each slice might be reversed, pitch-shifted, time-stretched, or re-sequenced. The original groove is still recognizable as source material, but the result is something new — like a cubist painting of a drum pattern. The foundation of jungle and breakcore production.",
    tags: ["breakbeat", "chopping", "rearrangement", "jungle"],
    audio: {
      tempo: 150,
      events: [
        { notes: ["C3"], duration: "16n", velocity: 0.7 },
        { notes: ["E4"], duration: "16n", velocity: 0.6 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["C3"], duration: "8n", velocity: 0.75 },
        { notes: ["E4"], duration: "16n", velocity: 0.65 },
        { notes: ["C3"], duration: "16n", velocity: 0.6 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["E4"], duration: "16n", velocity: 0.7 },
        { notes: ["C3", "E4"], duration: "16n", velocity: 0.75 },
        { notes: ["G3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "half-time-dnb",
    name: "Half-Time D&B Feel",
    category: "rhythm",
    description:
      "A drum and bass pattern where the snare hits on beat 3 instead of 2 and 4, halving the perceived tempo while the hi-hats and bass maintain full-speed energy. At 170 BPM, the half-time snare makes it feel like 85 BPM — simultaneously fast and slow. Creates a heavy, headnodding groove that's become the signature of modern atmospheric D&B and some hip-hop-influenced electronic music.",
    tags: ["dnb", "half-time", "groove", "heavy"],
    audio: {
      tempo: 170,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.75 },
        { notes: ["G4"], duration: "8n", velocity: 0.4 },
        { notes: ["G4"], duration: "8n", velocity: 0.4 },
        { notes: ["G4"], duration: "8n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.8 },
        { notes: ["G4"], duration: "8n", velocity: 0.4 },
        { notes: ["C3", "G4"], duration: "8n", velocity: 0.6 },
        { notes: ["G4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },

  // ── Bass additions (sub-bass) ─────────────────────────────

  {
    id: "sub-bass-pedal",
    name: "Sub-Bass Pedal",
    category: "bass",
    description:
      "A sustained bass note in the lowest register held beneath changing upper harmony — the harmonic activity lives above while the bass provides a gravitational anchor below. In electronic music, this is often a pure sine wave; in orchestral music, it's a double bass or contrabass tuba. The pedal creates a sense of vast depth and physical weight that higher pedal points can't achieve.",
    tags: ["bass", "pedal", "sub", "depth", "sustain"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["G2", "D3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "E3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "F3", "D4"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "D3", "B3"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "sub-bass-melody",
    name: "Sub-Bass Melody",
    category: "bass",
    description:
      "Melodic movement in the lowest bass register, where the bass line functions as both harmonic foundation and primary melody. Each note carries enormous weight — a half-step in this register feels like an earthquake. Common in dub, D&B, and hip-hop. The challenge is keeping the melody simple enough that the low frequencies don't mud together while giving it enough contour to be melodically interesting.",
    tags: ["bass", "melody", "sub", "deep", "movement"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G2"], duration: "4n", velocity: 0.7 },
        { notes: ["Bb2"], duration: "4n", velocity: 0.65 },
        { notes: ["C3"], duration: "4n.", velocity: 0.7 },
        { notes: ["Bb2"], duration: "8n", velocity: 0.6 },
        { notes: ["Ab2"], duration: "4n", velocity: 0.7 },
        { notes: ["G2"], duration: "2n", velocity: 0.65 },
      ],
    },
  },

  // ── Progressions additions (soul) ─────────────────────────

  {
    id: "prog-i-vi7-ii-v",
    name: "I → VI7 → ii → V",
    category: "progressions",
    description:
      "A soul and R&B staple: the tonic moves to a dominant-quality VI chord (secondary dominant of ii), which pulls to ii before resolving to V. The VI7 is the magic — it's chromatic, unexpected, and warm rather than dark. Stevie Wonder, Earth Wind & Fire, and countless Motown hits lean on this cycle. The secondary dominant chain creates forward motion that feels inevitable but never forced.",
    tags: ["soul", "secondary dominant", "rnb", "motown"],
    audio: {
      tempo: 92,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C#3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-i-iii7-vi",
    name: "I → III7 → vi",
    category: "progressions",
    description:
      "The tonic moves to a major III chord (secondary dominant of vi) which resolves to vi — a sudden shift from bright to bittersweet. The III7 is dramatic because it's chromatic (the G# in C major) and because it resolves to the relative minor, which shares the tonic's DNA but carries sadness. Common in soul, R&B, and gospel. The emotional effect is 'joy remembering sorrow.'",
    tags: ["soul", "secondary dominant", "bittersweet", "rnb"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3", "A3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },

  // ── Harmonic devices additions (soul voicings) ────────────

  {
    id: "soul-maj7-9-voicing",
    name: "Soul Major 7/9 Voicing",
    category: "harmonic-devices",
    description:
      "A close-position major chord with both the major 7th and 9th — warm, lush, and unmistakably R&B. Typically voiced in the middle register with the 3rd on the bottom, the 7th and 9th stacked above. This voicing says 'soul' the way a power chord says 'rock.' Rhodes piano, Wurlitzer, and gospel organ live in this voicing. Think D'Angelo, Erykah Badu, Robert Glasper.",
    tags: ["voicing", "soul", "rnb", "warm"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n.", velocity: 0.6 },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n.", velocity: 0.6 },
        { notes: ["D3", "F#3", "A3", "C#4"], duration: "2n.", velocity: 0.6 },
        { notes: ["G3", "B3", "D4", "F#4"], duration: "2n.", velocity: 0.55 },
      ],
    },
  },
  {
    id: "soul-min9-voicing",
    name: "Soul Minor 9 Voicing",
    category: "harmonic-devices",
    description:
      "A close-position minor chord with the 9th added — velvety, dark, and sophisticated. The minor quality provides depth while the 9th adds just enough brightness to keep it from being gloomy. Often voiced with the minor 3rd and 9th a half-step apart, creating a beautiful dissonance that melts into the chord. The quintessential Neo-soul sound.",
    tags: ["voicing", "soul", "minor", "dark"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["D3", "F3", "A3", "C4", "E4"], duration: "2n.", velocity: 0.6 },
        { notes: ["G3", "Bb3", "D4", "F4", "A4"], duration: "2n.", velocity: 0.6 },
        { notes: ["A3", "C4", "E4", "G4", "B4"], duration: "2n.", velocity: 0.6 },
        { notes: ["E3", "G3", "B3", "D4", "F#4"], duration: "2n.", velocity: 0.55 },
      ],
    },
  },
  {
    id: "dom9-funk-voicing",
    name: "Dominant 9 Funk Voicing",
    category: "harmonic-devices",
    description:
      "A dominant 9th chord voiced for maximum rhythmic bite — typically with the 3rd and 7th tight in the middle and the 9th on top, creating a sharp, bright quality perfect for funk comping. This voicing lives on the off-beats, chopped and muted. It's the chord you hear in every James Brown, Parliament, and Chaka Khan record. The 9th adds color; the voicing makes it cut.",
    tags: ["voicing", "funk", "dominant", "sharp"],
    audio: {
      tempo: 108,
      events: [
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "8n", velocity: 0.7 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "16n", velocity: 0.4 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "16n", velocity: 0.7 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "8n", velocity: 0.4 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "8n", velocity: 0.7 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "16n", velocity: 0.4 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "16n", velocity: 0.7 },
        { notes: ["C3", "E3", "Bb3", "D4"], duration: "8n", velocity: 0.4 },
      ],
    },
  },

  // ── Film scoring additions (piano / thematic) ─────────────

  {
    id: "piano-arpeggio-under-melody",
    name: "Piano Arpeggio Under Melody",
    category: "film-scoring",
    description:
      "Broken-chord piano accompaniment rippling beneath a sustained melodic line — the arpeggio provides harmonic support and rhythmic motion while the melody floats above. A staple of JRPG soundtracks, film scores, and solo piano writing. Yoko Shimomura, Joe Hisaishi, and Chopin all use this texture constantly. The arpeggio pattern can be simple (1-3-5-8) or more complex, but the key is that it never competes with the melody.",
    tags: ["film-scoring", "piano", "arpeggio", "accompaniment", "jrpg"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["E3"], duration: "8n", velocity: 0.4 },
        { notes: ["G3"], duration: "8n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["E3"], duration: "8n", velocity: 0.4 },
        { notes: ["G3"], duration: "8n", velocity: 0.4 },
        { notes: ["D4"], duration: "4n", velocity: 0.7 },
        { notes: ["F3"], duration: "8n", velocity: 0.45 },
        { notes: ["A3"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "8n", velocity: 0.4 },
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["E3"], duration: "8n", velocity: 0.4 },
        { notes: ["G3"], duration: "8n", velocity: 0.4 },
        { notes: ["C4"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "piano-ostinato",
    name: "Piano Ostinato",
    category: "film-scoring",
    description:
      "A repeated piano pattern providing the rhythmic and harmonic foundation of a piece — not just accompaniment but the identity of the track. The pattern cycles relentlessly while other instruments build around it. Philip Glass, Yann Tiersen, and game composers use this as a structural engine. The ostinato can be melodic (a recurring melodic cell), rhythmic (a repeated rhythmic figure), or harmonic (a chord pattern).",
    tags: ["film-scoring", "piano", "ostinato", "repetition", "minimalism"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3", "B3"], duration: "8n", velocity: 0.55 },
        { notes: ["G3", "D4"], duration: "8n", velocity: 0.5 },
        { notes: ["A3", "E4"], duration: "8n", velocity: 0.55 },
        { notes: ["G3", "D4"], duration: "8n", velocity: 0.5 },
        { notes: ["E3", "B3"], duration: "8n", velocity: 0.55 },
        { notes: ["G3", "D4"], duration: "8n", velocity: 0.5 },
        { notes: ["A3", "E4"], duration: "8n", velocity: 0.55 },
        { notes: ["G3", "D4"], duration: "8n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "theme-in-new-tempo",
    name: "Theme in a New Tempo",
    category: "film-scoring",
    description:
      "A familiar theme restated at a significantly different tempo — the same notes carrying completely different emotional weight. A lullaby played fast becomes anxious; a battle theme played slowly becomes elegiac. The melody is unchanged but the meaning transforms because tempo controls how the brain processes musical information: fast means action, slow means reflection. Game and film composers use this for narrative continuity across contrasting scenes.",
    tags: ["film-scoring", "thematic", "tempo", "transformation", "narrative"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["E4"], duration: "4n", velocity: 0.65 },
        { notes: ["G4"], duration: "4n", velocity: 0.6 },
        { notes: ["A4"], duration: "2n", velocity: 0.7 },
        { notes: ["G4"], duration: "4n", velocity: 0.6 },
        { notes: ["E4"], duration: "2n.", velocity: 0.55 },
      ],
    },
  },
  {
    id: "theme-in-new-meter",
    name: "Theme in a New Meter",
    category: "film-scoring",
    description:
      "A familiar theme recast in a different time signature — a march in 4/4 becomes a waltz in 3/4, or a waltz becomes a driving groove in 7/8. The melodic intervals are preserved but the rhythmic grouping reshapes the phrase structure, accents, and breathing. It's the same melody wearing different clothes. Powerful for showing a character or place in a new light while maintaining thematic continuity.",
    tags: ["film-scoring", "thematic", "meter", "transformation", "time-signature"],
    audio: {
      tempo: 100,
      timeSignature: [3, 4],
      events: [
        { notes: ["E4"], duration: "4n", velocity: 0.7 },
        { notes: ["G4"], duration: "4n", velocity: 0.6 },
        { notes: ["A4"], duration: "4n", velocity: 0.65 },
        { notes: ["G4"], duration: "4n", velocity: 0.6 },
        { notes: ["E4"], duration: "4n", velocity: 0.65 },
        { notes: ["D4"], duration: "4n", velocity: 0.6 },
        { notes: ["C4"], duration: "2n.", velocity: 0.55 },
      ],
    },
  },
  {
    id: "quiet-before-climax",
    name: "Quiet Before Climax",
    category: "film-scoring",
    description:
      "A sudden moment of reduction or near-silence immediately preceding the climactic passage — the musical equivalent of drawing back a fist. The quiet can be a single held note, a bare pedal point, or actual silence. The contrast makes the climax land harder because the ear recalibrates to the quiet dynamic, then gets overwhelmed. The longer and quieter the 'before,' the more devastating the climax.",
    tags: ["film-scoring", "dynamics", "climax", "contrast", "silence"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.65 },
        { notes: ["D3", "F3", "A3", "D4"], duration: "4n", velocity: 0.55 },
        { notes: ["E3"], duration: "2n", velocity: 0.25 },
        { notes: ["E3"], duration: "4n", velocity: 0.2 },
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "2n.", velocity: 0.85 },
      ],
    },
  },

  // ── Orchestration addition ────────────────────────────────

  {
    id: "orchestra-to-solo-reduction",
    name: "Orchestra to Solo Reduction",
    category: "orchestration",
    description:
      "Full ensemble sound suddenly stripped down to a single unaccompanied instrument — the sonic equivalent of a crowd falling silent to hear one voice. The contrast between full orchestral weight and solo vulnerability creates an emotional gut-punch. Often the solo instrument continues the melody the orchestra was playing, but now exposed, fragile, human. The reduction reveals what was always there but hidden in the texture.",
    tags: ["reduction", "solo", "contrast", "vulnerability"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "C4", "E4"], duration: "4n", velocity: 0.75 },
        { notes: ["D3", "F3", "A3", "D4", "F4"], duration: "4n", velocity: 0.7 },
        { notes: ["E3", "G3", "B3", "E4", "G4"], duration: "4n", velocity: 0.65 },
        { notes: ["F4"], duration: "4n", velocity: 0.45 },
        { notes: ["E4"], duration: "4n", velocity: 0.4 },
        { notes: ["D4"], duration: "4n", velocity: 0.4 },
        { notes: ["C4"], duration: "2n", velocity: 0.35 },
      ],
    },
  },

  // ── NieR / Ethereal VGM-inspired ─────────────────────────

  {
    id: "piano-ostinato-atmosphere",
    name: "Piano Ostinato as Atmospheric Anchor",
    category: "texture",
    description:
      "A simple repeating piano figure — often arpeggiated or broken-chord — that establishes the emotional world of a piece before any other element enters. The ostinato is the ground the listener stands on; everything else (strings, vocals, beats) layers on top of it. City Ruins from NieR: Automata is the textbook example: that piano loop IS the feeling of melancholy exploration. The simplicity is the point — it's a stable, familiar anchor in an otherwise shifting texture.",
    tags: ["texture", "piano", "ostinato", "atmospheric", "vgm", "nier"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["B3"], duration: "8n", velocity: 0.45 },
        { notes: ["E4"], duration: "8n", velocity: 0.5 },
        { notes: ["G#4"], duration: "8n", velocity: 0.45 },
        { notes: ["B4"], duration: "8n", velocity: 0.4 },
        { notes: ["G#4"], duration: "8n", velocity: 0.45 },
        { notes: ["E4"], duration: "8n", velocity: 0.5 },
        { notes: ["B3"], duration: "8n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "ethereal-choir-stacking",
    name: "Ethereal Choir Stacking",
    category: "texture",
    description:
      "Layering multiple vocal harmonies into a wash of sound where individual voices blur into a collective texture — the choir becomes a pad, not a group of singers. Keiichi Okabe uses this throughout NieR with Emi Evans' multitracked vocals creating an otherworldly shimmer. The technique works because the human voice is inherently emotional, so even when it's abstracted into pure texture, it retains a warmth and presence that synth pads can't match.",
    tags: ["texture", "choir", "layering", "ethereal", "vgm", "nier", "atmospheric"],
    audio: {
      tempo: 65,
      events: [
        { notes: ["E3", "B3", "E4"], duration: "2n", velocity: 0.4 },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n", velocity: 0.45 },
        { notes: ["F#3", "A3", "C#4", "F#4"], duration: "2n", velocity: 0.5 },
        { notes: ["E3", "G#3", "B3", "E4", "G#4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "orchestral-electronic-hybrid",
    name: "Orchestral-Electronic Hybrid Scoring",
    category: "film-scoring",
    description:
      "Orchestra and electronic elements coexisting as equals — not synths imitating orchestra or orchestra decorated with a beat, but two distinct sonic worlds fused into one. NieR: Automata does this constantly: acoustic strings and piano exist alongside glitchy beats, synth bass, and processed vocals in the same track without one dominating. The key is shared harmonic and rhythmic DNA — both worlds play the same progression, respond to the same arc.",
    tags: ["film", "orchestral", "electronic", "hybrid", "vgm", "nier", "production"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A2", "E3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["A2", "E3", "A3"], duration: "8n", velocity: 0.5 },
        { notes: ["A2", "E3", "A3"], duration: "8n", velocity: 0.4 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.6 },
        { notes: ["G3", "B3", "D4"], duration: "4n", velocity: 0.65 },
        { notes: ["A3", "C4", "E4"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "melancholic-major",
    name: "Melancholic Major Key",
    category: "harmonic-devices",
    description:
      "Writing genuinely sad, bittersweet, or wistful music that stays in a major key — using tempo, register, spacing, and melodic contour to create melancholy without switching to minor. City Ruins (NieR: Automata) is heartbreaking in a major key. The trick is usually slow tempo, wide voicings, descending melodic motion, and upper extensions (9ths, 6ths) that add longing without darkness. Minor says 'this is sad'; melancholic major says 'this is beautiful, and that's what makes it sad.'",
    tags: ["major", "melancholy", "bittersweet", "vgm", "nier", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "G#3", "B3", "D#4"], duration: "2n", velocity: 0.5 },
        { notes: ["F#3", "A#3", "C#4", "E4"], duration: "2n", velocity: 0.45 },
        { notes: ["G#3", "B3", "D#4", "F#4"], duration: "2n", velocity: 0.5 },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "dynamic-arrangement-layers",
    name: "Dynamic Arrangement Layers",
    category: "film-scoring",
    description:
      "Composing a single piece in multiple parallel versions — stripped piano, full orchestral, vocal, instrumental, intense — that can crossfade based on context. NieR: Automata's combat seamlessly shifts from the quiet version of a track to a full 8-bit or vocal version when enemies appear. Beyond game music, this technique means thinking about a composition as a stack of separable layers rather than a fixed mix. Each layer must work alone AND as part of the whole.",
    tags: ["film", "arrangement", "layering", "dynamic", "vgm", "nier", "interactive"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["A3"], duration: "4n", velocity: 0.35 },
        { notes: ["E4"], duration: "4n", velocity: 0.35 },
        { notes: ["A3", "C4", "E4"], duration: "4n", velocity: 0.5 },
        { notes: ["A3", "C4", "E4", "A4"], duration: "4n", velocity: 0.6 },
        { notes: ["A2", "A3", "C4", "E4", "A4"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "E3", "A3", "C4", "E4", "A4"], duration: "2n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "wordless-vocal-texture",
    name: "Wordless Vocal Texture (Conlang / Vocalize)",
    category: "vocals",
    description:
      "Vocals sung in a fictional language, nonsense syllables, or pure vowel sounds — the voice used as a timbral instrument rather than a vehicle for lyrics. Emi Evans created a 'chaos language' for NieR that sounds like corrupted future versions of real languages (French, Japanese, Gaelic). The voice carries all its emotional weight — intimacy, sorrow, yearning — without any semantic content. The listener feels the meaning without understanding the words, which can be more powerful than intelligible lyrics.",
    tags: ["vocals", "texture", "wordless", "conlang", "ethereal", "vgm", "nier"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["E4"], duration: "4n", velocity: 0.55 },
        { notes: ["F#4"], duration: "4n", velocity: 0.5 },
        { notes: ["G#4"], duration: "2n", velocity: 0.55 },
        { notes: ["F#4"], duration: "4n", velocity: 0.5 },
        { notes: ["E4"], duration: "2n.", velocity: 0.5 },
      ],
    },
  },

  // ── Guitar & Riffs ────────────────────────────────────────

  {
    id: "heavy-soft-contrast",
    name: "Heavy/Soft Contrast",
    category: "guitar",
    description:
      "A dramatic dynamic shift between aggressive, distorted sections and clean, gentle passages — the Pixies' loud-quiet-loud template that Nirvana, Counterparts, and most post-hardcore bands built on. The soft section makes the heavy section heavier by contrast, and vice versa. The transition between them is where the drama lives: is it sudden (a wall of sound) or gradual (a build)?",
    tags: ["guitar", "dynamics", "contrast", "loud-quiet", "heavy"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E3"], duration: "8n", velocity: 0.3 },
        { notes: ["G3"], duration: "8n", velocity: 0.3 },
        { notes: ["B3"], duration: "4n", velocity: 0.35 },
        { notes: ["A3"], duration: "4n", velocity: 0.3 },
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.85 },
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.85 },
        { notes: ["G2", "D3", "G3"], duration: "4n", velocity: 0.85 },
        { notes: ["A2", "E3", "A3"], duration: "4n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "melodic-line-over-heavy-rhythm",
    name: "Melodic Line over Heavy Rhythm",
    category: "guitar",
    description:
      "A lyrical, singing melody played above a dense, driving rhythmic foundation — beauty over brutality. The melody is usually in a higher register (lead guitar, violin, or clean channel) while the low end churns. The emotional power comes from the tension between the two: the melody says 'feel' while the rhythm says 'move.' Counterparts, Deafheaven, and Alcest live in this space.",
    tags: ["guitar", "melody", "contrast", "heavy", "lyrical"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E4"], duration: "4n", velocity: 0.65 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["G4"], duration: "4n", velocity: 0.65 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["A4"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "chromatic-riff",
    name: "Chromatic Riff",
    category: "guitar",
    description:
      "A riff built primarily from half-step motion, creating angular momentum and tension. The chromaticism makes the riff feel slippery and unpredictable — it could go anywhere. Black Sabbath's 'Black Sabbath,' Metallica's 'Enter Sandman' intro, and Tool all use chromatic riffs. The half-steps create dissonance against the implied tonal center, giving the riff its menacing character.",
    tags: ["guitar", "riff", "chromatic", "tension", "angular"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.75 },
        { notes: ["F2"], duration: "8n", velocity: 0.7 },
        { notes: ["F#2"], duration: "8n", velocity: 0.7 },
        { notes: ["G2"], duration: "4n", velocity: 0.75 },
        { notes: ["F#2"], duration: "8n", velocity: 0.7 },
        { notes: ["F2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2"], duration: "4n.", velocity: 0.75 },
      ],
    },
  },
  {
    id: "descending-riff",
    name: "Descending Riff",
    category: "guitar",
    description:
      "A riff with a predominantly downward contour, creating a sense of gravity, heaviness, or inevitability. Descending motion pulls toward the low register where notes have more physical weight. The riff might descend diatonically, chromatically, or in intervallic leaps. 'Smoke on the Water' (descending minor), 'Iron Man' (descending chromatic), and countless doom metal riffs exploit this gravitational pull.",
    tags: ["guitar", "riff", "descending", "heavy", "gravity"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A3"], duration: "8n", velocity: 0.75 },
        { notes: ["G3"], duration: "8n", velocity: 0.7 },
        { notes: ["F3"], duration: "4n", velocity: 0.7 },
        { notes: ["E3"], duration: "8n", velocity: 0.7 },
        { notes: ["D3"], duration: "8n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.7 },
        { notes: ["B2"], duration: "4n", velocity: 0.75 },
        { notes: ["A2"], duration: "2n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "ascending-riff",
    name: "Ascending Riff",
    category: "guitar",
    description:
      "A riff with a predominantly upward contour, building energy and intensity with each note. Ascending motion fights gravity — it takes effort, and the listener feels that effort as rising tension or triumph. The riff might climb a scale, arpeggiate a chord, or leap up in intervals. 'Whole Lotta Love,' 'Crazy Train,' and most thrash metal riffs use ascending motion to generate propulsive energy.",
    tags: ["guitar", "riff", "ascending", "energy", "building"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.7 },
        { notes: ["G2"], duration: "8n", velocity: 0.7 },
        { notes: ["A2"], duration: "8n", velocity: 0.7 },
        { notes: ["B2"], duration: "4n", velocity: 0.75 },
        { notes: ["C3"], duration: "8n", velocity: 0.75 },
        { notes: ["D3"], duration: "8n", velocity: 0.75 },
        { notes: ["E3"], duration: "4n.", velocity: 0.8 },
      ],
    },
  },
  {
    id: "open-string-riff",
    name: "Open-String Riff",
    category: "guitar",
    description:
      "A riff that incorporates open strings as drone or pedal tones against fretted notes — the open string rings while the fretted notes move around it, creating dissonances and resolutions within the riff itself. This is inherently guitaristic: the sustain of the open string and the timbral difference between open and fretted notes are part of the sound. Drop-D riffs, open-E metal riffs, and jangly indie rock all exploit this.",
    tags: ["guitar", "riff", "open-string", "drone", "pedal"],
    audio: {
      tempo: 115,
      events: [
        { notes: ["E2", "B3"], duration: "8n", velocity: 0.75 },
        { notes: ["E2", "C4"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "D4"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B3"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "A3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "G3"], duration: "4n", velocity: 0.7 },
        { notes: ["E2", "B3"], duration: "2n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "palm-muted-ostinato",
    name: "Palm-Muted Ostinato",
    category: "guitar",
    description:
      "A rhythmically precise repeated pattern with damped, percussive articulation — the notes are shortened and darkened by palm muting, turning the guitar into a percussive engine. The pitch content is secondary to the rhythmic drive. This is the 'chugging' foundation of metal, punk, and hard rock. The muting controls the sustain: tighter mute = more percussive, lighter mute = more pitch.",
    tags: ["guitar", "riff", "palm-mute", "percussive", "ostinato"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2"], duration: "8n", velocity: 0.55 },
        { notes: ["E2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2"], duration: "8n", velocity: 0.55 },
        { notes: ["G2"], duration: "8n", velocity: 0.6 },
        { notes: ["F#2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2"], duration: "8n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "syncopated-riff",
    name: "Syncopated Riff",
    category: "guitar",
    description:
      "A riff with accents landing between beats, creating rhythmic tension against the steady pulse. The notes themselves might be simple, but the syncopation makes the riff feel like it's pulling against the drummer. Meshuggah, Rage Against the Machine, and math rock all build on syncopated riffs. The groove comes from where the accents DON'T align with the pulse.",
    tags: ["guitar", "riff", "syncopation", "tension", "groove"],
    audio: {
      tempo: 125,
      events: [
        { notes: ["E2", "B2"], duration: "8n.", velocity: 0.75 },
        { notes: ["E2", "B2"], duration: "16n", velocity: 0.6 },
        { notes: ["G2", "D3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.6 },
        { notes: ["E2", "B2"], duration: "8n.", velocity: 0.75 },
        { notes: ["A2", "E3"], duration: "16n", velocity: 0.7 },
        { notes: ["G2", "D3"], duration: "4n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "riff-against-straight-drums",
    name: "Riff against Straight Drums",
    category: "guitar",
    description:
      "A syncopated or rhythmically complex riff played over a steady, unwavering drum pattern — the riff pushes and pulls while the drums stay locked to the grid. The tension between the two creates a sense of controlled chaos: the drummer is the anchor, the riff is the kite. Common in math rock, progressive metal, and post-hardcore. The listener's brain tries to reconcile the two patterns.",
    tags: ["guitar", "rhythm", "contrast", "tension", "polyrhythm"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3"], duration: "8n.", velocity: 0.7 },
        { notes: ["D3"], duration: "16n", velocity: 0.6 },
        { notes: ["E3", "G3"], duration: "4n", velocity: 0.7 },
        { notes: ["C3"], duration: "4n", velocity: 0.65 },
        { notes: ["C3", "E3"], duration: "8n", velocity: 0.7 },
        { notes: ["D3", "F3"], duration: "8n.", velocity: 0.7 },
        { notes: ["E3"], duration: "16n", velocity: 0.6 },
        { notes: ["C3", "E3"], duration: "4n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "riff-against-double-time",
    name: "Riff against Double-Time Drums",
    category: "guitar",
    description:
      "A riff maintaining its original tempo and feel while the drums play at double speed — the riff headnods at 90 BPM while blast beats or double-kick patterns rage at 180. Creates a feeling of simultaneous heaviness and intensity. The riff is the gravity; the drums are the storm around it. Meshuggah's 'Bleed' and much of progressive metalcore use this contrast.",
    tags: ["guitar", "rhythm", "double-time", "contrast", "metal"],
    audio: {
      tempo: 160,
      events: [
        { notes: ["E2", "B2"], duration: "4n", velocity: 0.8 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["G2", "D3"], duration: "4n", velocity: 0.75 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
        { notes: ["C3"], duration: "16n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "half-time-breakdown",
    name: "Half-Time Breakdown",
    category: "guitar",
    description:
      "A sudden halving of the rhythmic feel — the tempo doesn't actually change, but the snare moves from beats 2 and 4 to beat 3, and the riff stretches to twice its rhythmic length. The effect is a dramatic drop in energy density that paradoxically feels heavier. Every metalcore and hardcore band uses this as a climactic moment. The crowd shifts from headbanging to moshing.",
    tags: ["guitar", "breakdown", "half-time", "heavy", "climax"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.7 },
        { notes: ["G2", "D3"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2", "E3"], duration: "4n", velocity: 0.8 },
        { notes: ["G2", "D3"], duration: "4n", velocity: 0.75 },
        { notes: ["F2", "C3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "B2", "E3"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "drum-fill-into-breakdown",
    name: "Drum Fill into Breakdown",
    category: "guitar",
    description:
      "A drum fill serving as a bridge into a dramatic textural or rhythmic shift — the fill signals to the listener that something is about to change. The fill might accelerate (building tension), decelerate (creating space), or use a specific rhythmic motif that leads naturally into the new section. The quality of the fill determines how hard the breakdown lands: a great fill makes the section change feel inevitable.",
    tags: ["guitar", "drums", "fill", "transition", "breakdown"],
    audio: {
      tempo: 130,
      events: [
        { notes: ["E3", "B3"], duration: "8n", velocity: 0.6 },
        { notes: ["E3", "B3"], duration: "8n", velocity: 0.6 },
        { notes: ["G3"], duration: "8n", velocity: 0.65 },
        { notes: ["A3"], duration: "8n", velocity: 0.7 },
        { notes: ["B3"], duration: "16n", velocity: 0.75 },
        { notes: ["C4"], duration: "16n", velocity: 0.8 },
        { notes: ["D4"], duration: "16n", velocity: 0.8 },
        { notes: ["E4"], duration: "16n", velocity: 0.85 },
        { notes: ["E2", "B2", "E3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "sudden-silence-before-impact",
    name: "Sudden Silence before Impact",
    category: "guitar",
    description:
      "A brief moment of total silence — even a sixteenth note — creating maximum contrast before a heavy downbeat. The silence is the loudest moment in the song because the brain is still ringing with what came before and bracing for what comes next. More effective than any crescendo because it resets the dynamic baseline to zero. The longer you can hold the silence without losing momentum, the harder the impact.",
    tags: ["guitar", "silence", "contrast", "impact", "dynamics"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E2", "B2", "E3"], duration: "8n", velocity: 0.8 },
        { notes: ["G2", "D3", "G3"], duration: "8n", velocity: 0.8 },
        { notes: ["A2", "E3", "A3"], duration: "4n", velocity: 0.8 },
        { notes: [], duration: "4n" },
        { notes: ["E2", "B2", "E3", "B3"], duration: "2n", velocity: 0.9 },
      ],
    },
  },
  {
    id: "dissonant-cluster-riff",
    name: "Dissonant Cluster Riff",
    category: "guitar",
    description:
      "A riff incorporating tightly-spaced dissonant intervals — minor 2nds, tritones, major 7ths — as deliberate harmonic color rather than 'wrong' notes. The dissonance becomes the identity of the riff. Deftones, Converge, and Meshuggah use cluster voicings that would be 'errors' in traditional harmony but create a visceral, dense texture. The key is that the dissonance is consistent and intentional.",
    tags: ["guitar", "riff", "dissonance", "cluster", "heavy"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E2", "F2", "B2"], duration: "4n", velocity: 0.8 },
        { notes: ["E2", "Bb2"], duration: "8n", velocity: 0.75 },
        { notes: ["E2", "F2", "B2"], duration: "8n", velocity: 0.8 },
        { notes: ["F2", "B2", "E3"], duration: "4n", velocity: 0.8 },
        { notes: ["E2", "Bb2", "E3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "F2", "B2"], duration: "2n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "minor-key-heroic-melody",
    name: "Minor-Key Heroic Melody",
    category: "guitar",
    description:
      "An anthemic, triumphant melodic contour played in a minor key — the melody says 'victory' but the harmony says 'at a cost.' Wide intervals, strong rhythmic profile, and a climactic arch, all darkened by the minor tonality. Iron Maiden, power metal, JRPG battle themes, and film scores use this to convey heroism tinged with tragedy. The minor key makes the triumph feel earned rather than given.",
    tags: ["guitar", "melody", "minor", "heroic", "anthemic"],
    audio: {
      tempo: 135,
      events: [
        { notes: ["E3"], duration: "4n", velocity: 0.7 },
        { notes: ["G3"], duration: "8n", velocity: 0.65 },
        { notes: ["A3"], duration: "8n", velocity: 0.7 },
        { notes: ["B3"], duration: "4n", velocity: 0.75 },
        { notes: ["E4"], duration: "4n.", velocity: 0.8 },
        { notes: ["D4"], duration: "8n", velocity: 0.7 },
        { notes: ["B3"], duration: "4n", velocity: 0.7 },
        { notes: ["A3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "melancholic-over-aggressive",
    name: "Melancholic Melody over Aggressive Rhythm",
    category: "guitar",
    description:
      "A sad, lyrical melody layered over driving, aggressive rhythmic accompaniment — the melody weeps while the rhythm rages. The emotional effect is complex: neither sadness nor aggression dominates; they coexist. Counterparts, La Dispute, and Deafheaven built careers on this tension. The melody is usually in a higher register, exposed and vulnerable, while the low end is dense and relentless.",
    tags: ["guitar", "melody", "contrast", "melancholic", "aggressive"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["G4"], duration: "4n", velocity: 0.55 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["E2", "B2"], duration: "8n", velocity: 0.7 },
        { notes: ["F#4"], duration: "4n.", velocity: 0.5 },
        { notes: ["E4"], duration: "8n", velocity: 0.5 },
        { notes: ["D4"], duration: "2n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "major-key-moment-in-minor",
    name: "Major-Key Moment in a Minor Song",
    category: "guitar",
    description:
      "A brief, unexpected shift to the parallel or relative major within a predominantly minor-key piece — sunlight breaking through storm clouds. Not a full modulation but a momentary brightening: a IV chord borrowed from major, a Picardy-like resolution, or a melodic phrase that suddenly uses the major 3rd. The brevity is the point — it's a glimpse of hope, not a resolution. Makes the return to minor feel heavier.",
    tags: ["guitar", "harmony", "contrast", "major-minor", "emotional"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "4n", velocity: 0.7 },
        { notes: ["D3", "F3", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["A2", "C#3", "E3"], duration: "2n", velocity: 0.7 },
        { notes: ["D3", "F#3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "emotional-release-after-dissonance",
    name: "Emotional Release after Sustained Dissonance",
    category: "guitar",
    description:
      "A consonant resolution arriving after an extended passage of unresolved dissonance — the longer the tension is sustained, the more cathartic the release. This is the emotional payoff that justifies everything that came before. The dissonant section might use clusters, tritones, suspended chords, or chromatic saturation. The resolution is usually simple: a pure triad, an octave, or even unison. The simplicity is the point.",
    tags: ["guitar", "resolution", "dissonance", "catharsis", "contrast"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["E2", "Bb2", "F3"], duration: "4n", velocity: 0.7 },
        { notes: ["E2", "B2", "F3"], duration: "4n", velocity: 0.7 },
        { notes: ["F2", "B2", "E3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "Bb2", "F3", "B3"], duration: "4n", velocity: 0.75 },
        { notes: ["E2", "B2", "E3", "G#3", "B3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },

  // ── Vocals ────────────────────────────────────────────────

  {
    id: "three-part-vocal-harmony",
    name: "3-Part Vocal Harmony",
    category: "vocals",
    description:
      "Three voices singing in harmony — typically the melody with a third above and a third or sixth below, creating a full triad on every note. Crosby, Stills & Nash, the Bee Gees, Fleet Foxes, and every barbershop trio. Three parts is the sweet spot: enough to create complete harmony, few enough that each voice remains audible. The blend depends on matching vowels, vibrato, and dynamics across all three voices.",
    tags: ["vocals", "harmony", "three-part", "blend", "triadic"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.65 },
        { notes: ["D3", "F3", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.65 },
        { notes: ["E3", "G3", "B3"], duration: "4n", velocity: 0.6 },
        { notes: ["D3", "F3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "2n.", velocity: 0.6 },
      ],
    },
  },
  {
    id: "four-part-vocal-harmony",
    name: "4-Part Vocal Harmony",
    category: "vocals",
    description:
      "Four voices creating full chord voicings — SATB (soprano, alto, tenor, bass) or close-position stacks. This is the sound of gospel choirs, barbershop quartets, and the Beach Boys. Four parts allow complete 7th chords and richer voice leading than three parts. The bass voice provides harmonic foundation; the top voice carries the melody; the inner voices create the color.",
    tags: ["vocals", "harmony", "four-part", "satb", "gospel"],
    audio: {
      tempo: 78,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.6 },
        { notes: ["D3", "F3", "A3", "D4"], duration: "4n", velocity: 0.6 },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4", "F4"], duration: "4n", velocity: 0.65 },
        { notes: ["G3", "B3", "D4", "G4"], duration: "4n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "syncopated-vocal-entry",
    name: "Syncopated Vocal Entry",
    category: "vocals",
    description:
      "A vocal phrase beginning on an off-beat or between expected rhythmic positions — the voice enters where you don't expect it, creating immediate rhythmic interest. In R&B and soul, the syncopated entry is a signature of confident, stylized singing: the voice plays with the beat rather than sitting on it. Beyoncé, Erykah Badu, and Stevie Wonder all use syncopated entries to make simple melodies feel complex.",
    tags: ["vocals", "rhythm", "syncopation", "entry", "rnb"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n", velocity: 0.4 },
        { notes: ["E4"], duration: "8n", velocity: 0.65 },
        { notes: ["D4"], duration: "4n", velocity: 0.6 },
        { notes: ["C4"], duration: "8n", velocity: 0.55 },
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.4 },
        { notes: ["G4"], duration: "8n", velocity: 0.65 },
        { notes: ["F4"], duration: "4n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "delayed-vocal-entry",
    name: "Delayed Vocal Entry",
    category: "vocals",
    description:
      "A vocal phrase entering after the expected downbeat — the band hits the one, but the voice waits a beat, a half-beat, or even a full bar before coming in. The silence where the voice 'should' be creates anticipation: the listener leans forward, waiting. When the voice finally arrives, it carries extra weight. A signature of confident soul and gospel singing — the singer knows you're waiting.",
    tags: ["vocals", "rhythm", "delay", "anticipation", "soul"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.5 },
        { notes: ["E4"], duration: "4n", velocity: 0.65 },
        { notes: ["D4"], duration: "4n", velocity: 0.6 },
        { notes: ["C4"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "vocal-pickup",
    name: "Vocal Pickup",
    category: "vocals",
    description:
      "One or more notes sung before the downbeat of a phrase — an anacrusis that propels the melody into the bar. The pickup creates momentum: the phrase is already moving when the beat arrives. 'And I-I-I will always love you' — the 'and I-I-I' is the pickup that makes 'will' land on the downbeat with full force. Almost every pop and soul melody uses pickups; the alternative (starting on beat 1) sounds square and stiff.",
    tags: ["vocals", "rhythm", "pickup", "anacrusis", "momentum"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["D4"], duration: "8n", velocity: 0.55 },
        { notes: ["E4"], duration: "8n", velocity: 0.6 },
        { notes: ["C4"], duration: "4n", velocity: 0.7 },
        { notes: ["A3"], duration: "4n", velocity: 0.6 },
        { notes: ["G3"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "melisma",
    name: "Melisma",
    category: "vocals",
    description:
      "Multiple notes sung on a single syllable — the voice moves through a melodic shape while the text holds still. A signature ornament of gospel, R&B, and Middle Eastern vocal traditions. Whitney Houston, Mariah Carey, and Aretha Franklin turned melisma into a vocabulary of emotional expression: a short melisma sighs, a long one soars. The syllable being ornamented usually carries the emotional keyword of the phrase.",
    tags: ["vocals", "ornament", "melisma", "gospel", "rnb"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C4"], duration: "4n", velocity: 0.65 },
        { notes: ["E4"], duration: "8n", velocity: 0.6 },
        { notes: ["D4"], duration: "8n", velocity: 0.6 },
        { notes: ["C4"], duration: "8n", velocity: 0.55 },
        { notes: ["D4"], duration: "8n", velocity: 0.6 },
        { notes: ["E4"], duration: "8n", velocity: 0.65 },
        { notes: ["G4"], duration: "8n", velocity: 0.7 },
        { notes: ["E4"], duration: "4n", velocity: 0.6 },
        { notes: ["C4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "vocal-run",
    name: "Vocal Run",
    category: "vocals",
    description:
      "A rapid scalar or arpeggiated passage sung in quick succession — the voice sweeps through a series of notes at high speed, usually descending. Distinguished from melisma by speed and independence: a vocal run is a standalone display of technique rather than an ornament on a held syllable. Chaka Khan, Christina Aguilera, and gospel singers use runs as emotional exclamation points — they say 'I feel this so much I can't contain it in one note.'",
    tags: ["vocals", "technique", "run", "scalar", "gospel"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C5"], duration: "16n", velocity: 0.7 },
        { notes: ["B4"], duration: "16n", velocity: 0.65 },
        { notes: ["A4"], duration: "16n", velocity: 0.65 },
        { notes: ["G4"], duration: "16n", velocity: 0.6 },
        { notes: ["F4"], duration: "16n", velocity: 0.6 },
        { notes: ["E4"], duration: "16n", velocity: 0.55 },
        { notes: ["D4"], duration: "16n", velocity: 0.55 },
        { notes: ["C4"], duration: "4n.", velocity: 0.6 },
      ],
    },
  },

  // ── Chord progressions batch: Shimomura, metalcore, common ──

  {
    id: "prog-i-v-bvi-iv",
    name: "i → V → bVI → IV",
    category: "progressions",
    description:
      "A minor-key cinematic staple. The V chord creates expectation, bVI provides a deceptive surprise, and IV resolves warmly. Common in film trailers, anime scores, and Shimomura's JRPG work. The bVI → IV motion is the emotional core — it turns tension into bittersweet hope.",
    tags: ["film", "classical", "minor", "cinematic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3", "E4"], duration: "2n", velocity: 0.7 },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n", velocity: 0.65 },
        { notes: ["D3", "F#3", "A3", "D4"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-bvi-biii-bvii",
    name: "i → bVI → bIII → bVII",
    category: "progressions",
    description:
      "All natural minor chords cycling through relative major territory. Creates a floating, exploratory quality — minor but never truly dark. Shimomura uses this kind of diatonic minor wandering in overworld and peaceful town themes. Each chord shares tones with the next, so it flows without friction.",
    tags: ["folk", "indie", "minor", "gentle"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-bvii-bvi-v",
    name: "i → bVII → bVI → V",
    category: "progressions",
    description:
      "The classic minor descent. Stepwise bass motion from i down to V creates inexorable forward pull. Flamenco, surf rock, and metal all claim this one. The V at the end is major (harmonic minor), creating a dramatic half-step resolution back to i. One of the oldest and most reliable progressions in Western music.",
    tags: ["rock", "classical", "flamenco", "metal"],
    audio: {
      tempo: 108,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.7 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.65 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.65 },
        { notes: ["E2", "G#2", "B2"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-dearly-beloved",
    name: "I → vi → IV → I (Dearly Beloved)",
    category: "progressions",
    description:
      "The 'Dearly Beloved' archetype from Kingdom Hearts — a gentle, lullaby-like cycle. Shimomura voices it with sustained add9 chords and wide spacing. The vi → IV motion is the emotional hinge: it dips into melancholy then lifts back to the tonic. Simple on paper but devastatingly effective with the right voicing and tempo.",
    tags: ["film", "pop", "gentle", "shimomura"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["C3", "E3", "G3", "D4"], duration: "1n", velocity: 0.5 },
        { notes: ["A2", "C3", "E3", "B3"], duration: "1n", velocity: 0.5 },
        { notes: ["F2", "A2", "C3", "G3"], duration: "1n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "D4"], duration: "1n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "prog-chromatic-mediant-shimomura",
    name: "I → bIII → I → bVI (Chromatic Mediant Float)",
    category: "progressions",
    description:
      "Shimomura's signature scene-transition move: jumping between keys a major third apart via chromatic mediants. The tonic alternates with chords whose roots are a minor third or major third away. No dominant function, just pure color change — like shifting the lighting in a room without moving the furniture.",
    tags: ["film", "chromatic", "shimomura", "modulation"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "1n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["Ab2", "C3", "Eb3", "G3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-metalcore-breakdown",
    name: "i → bII → i (Metalcore Breakdown)",
    category: "progressions",
    description:
      "The half-step grind that defines metalcore breakdowns. The bII (Phrygian flat-two) creates maximum dissonance against the tonic, and the return to i hits like a sledgehammer. Counterparts, Architects, and Converge all live here. Usually played as power chords with palm muting, the chromatic tension is the entire point.",
    tags: ["metal", "rock", "chromatic", "aggressive"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["E2", "B2", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["E2", "B2", "E3"], duration: "4n", velocity: 0.85 },
        { notes: ["F2", "C3", "F3"], duration: "4n", velocity: 0.9 },
        { notes: ["F2", "C3", "F3"], duration: "4n", velocity: 0.9 },
        { notes: ["E2", "B2", "E3"], duration: "2n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "prog-metalcore-open-pedal",
    name: "i → bVI → bVII → i (Open String Pedal)",
    category: "progressions",
    description:
      "Power chords moving over a droning open low string — the metalcore/post-hardcore signature. The open string creates a pedal tone that clashes and resolves as the chords shift above it. Counterparts, Misery Signals, and Underoath use this constantly. The pedal sustains emotional intensity while the chords provide the narrative arc.",
    tags: ["metal", "rock", "pedal", "aggressive"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["E2", "E3", "B3"], duration: "2n", velocity: 0.8 },
        { notes: ["E2", "C3", "G3"], duration: "2n", velocity: 0.75 },
        { notes: ["E2", "D3", "A3"], duration: "2n", velocity: 0.75 },
        { notes: ["E2", "E3", "B3"], duration: "2n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "prog-metalcore-phrygian",
    name: "i → bII → bVII → i (Phrygian Riff)",
    category: "progressions",
    description:
      "Phrygian mode distilled to its essential motion — the half-step above and whole-step below the tonic. Creates a dark, exotic, aggressive sound. The bII→bVII motion spans a tritone by bass, giving it a disorienting sweep before snapping back to i. Metal, djent, and progressive metalcore lean on this hard.",
    tags: ["metal", "rock", "phrygian", "dark"],
    audio: {
      tempo: 110,
      events: [
        { notes: ["E2", "B2", "E3"], duration: "4n", velocity: 0.8 },
        { notes: ["F2", "C3", "F3"], duration: "4n", velocity: 0.85 },
        { notes: ["D2", "A2", "D3"], duration: "4n", velocity: 0.8 },
        { notes: ["E2", "B2", "E3"], duration: "4n", velocity: 0.85 },
      ],
    },
  },
  {
    id: "prog-i-iv-i-v",
    name: "I → IV → I → V",
    category: "progressions",
    description:
      "The simplest three-chord song structure, older than recorded music. Tonic to subdominant and back, then dominant for tension. Country, folk, early rock & roll, punk — this is the skeleton of popular Western music. Its power is in its transparency: the chords disappear and the melody takes over.",
    tags: ["pop", "rock", "folk", "country"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-i-iv-v-i",
    name: "I → IV → V → I",
    category: "progressions",
    description:
      "The most fundamental cadential cycle in Western harmony. Subdominant prepares the dominant, dominant resolves to tonic. Hymns, national anthems, classical sonatas — this is the gravitational center around which everything else orbits. Other progressions are interesting because of how they deviate from this one.",
    tags: ["pop", "classical", "folk", "rock"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-vi-iv-i-v",
    name: "vi → IV → I → V",
    category: "progressions",
    description:
      "The 'sensitive' rotation of the four-chord pop cycle. Starting on vi gives it a melancholic launch that lifts through IV to I before V resets the loop. Massive in 2000s-2010s pop and rock — Adele, OneRepublic, The Script. The vi start makes the I arrival feel earned rather than given.",
    tags: ["pop", "rock", "indie"],
    audio: {
      tempo: 108,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-iv-i-v-vi",
    name: "IV → I → V → vi",
    category: "progressions",
    description:
      "Another rotation of the four-chord loop, this time starting on the subdominant for an immediate lift. The journey from brightness (IV → I → V) into shadow (vi) creates an emotional arc within each cycle. Journey's 'Don't Stop Believin'' lives here. Starting on IV gives the progression an optimistic, anthemic quality.",
    tags: ["pop", "rock"],
    audio: {
      tempo: 116,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-v-vi-iii-iv",
    name: "I → V → vi → iii → IV (Canon)",
    category: "progressions",
    description:
      "Pachelbel's Canon in D — the most borrowed progression in music history. The descending bass pattern (do-sol-la-mi-fa) creates an endless-staircase feeling. Classical, pop, wedding music, J-pop — it's everywhere because the voice leading is almost automatic. Each chord shares two notes with the next.",
    tags: ["classical", "pop", "canon", "descending"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["E2", "G2", "B2"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-iii-iv-iv",
    name: "I → iii → IV → iv",
    category: "progressions",
    description:
      "Major to borrowed minor-four — the 'Creep' progression. The iii provides a gentle step away from I, IV opens things up, then the borrowed iv (minor four) drops a shadow over everything. That one note change (major third to minor third in the IV chord) is one of the most emotionally loaded moves in pop harmony.",
    tags: ["pop", "rock", "indie", "borrowed chord"],
    audio: {
      tempo: 92,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "Ab3", "C4"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-v-bvii-iv",
    name: "I → V → bVII → IV",
    category: "progressions",
    description:
      "Major key with a Mixolydian bVII — the classic rock sound. The bVII is borrowed from the parallel minor and gives the progression a bluesy, earthy quality. The Beatles, Led Zeppelin, Tom Petty all lived here. The V → bVII motion is the signature: instead of resolving down to I, it drops a whole step to bVII, dodging the expected resolution.",
    tags: ["rock", "blues", "mixolydian", "borrowed chord"],
    audio: {
      tempo: 112,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.7 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.7 },
        { notes: ["Bb2", "D3", "F3"], duration: "2n", velocity: 0.7 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-i-ii-iii-iv-v",
    name: "I → II → III → IV → V (Chromatic Ascent)",
    category: "progressions",
    description:
      "All major chords ascending by step — wildly chromatic but weirdly satisfying. Each chord is a half or whole step above the last, creating a ramp of rising energy. Film scoring and musical theater use this for building scenes. It violates every 'rule' of functional harmony but the stepwise bass motion makes it coherent.",
    tags: ["film", "chromatic", "ascending", "dramatic"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["D3", "F#3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.75 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "prog-i-vi-ii-v",
    name: "I → vi → ii → V (Rhythm Changes A)",
    category: "progressions",
    description:
      "The A section of Gershwin's 'I Got Rhythm' — the most common jazz standard form after the blues. The turnaround cycle (I-vi-ii-V) repeats and variations are built over it. Charlie Parker, Sonny Rollins, and Thelonious Monk all wrote heads over these changes. It's the jazz equivalent of the 12-bar blues: a shared vocabulary everyone knows.",
    tags: ["jazz", "bebop", "standard", "turnaround"],
    audio: {
      tempo: 160,
      events: [
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-imaj7-ivmaj7",
    name: "Imaj7 → IVmaj7 (Two-Chord Vamp)",
    category: "progressions",
    description:
      "Just two major-seventh chords rocking back and forth — Steely Dan, neo-soul, and lo-fi hip-hop in a nutshell. The maj7 voicings are lush enough that two chords feel complete. No dominant, no tension, just warmth oscillating. D'Angelo's 'Untitled' and Erykah Badu's work often sits on exactly this kind of vamp.",
    tags: ["jazz", "soul", "rnb", "neo-soul"],
    audio: {
      tempo: 82,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["F3", "A3", "C4", "E4"], duration: "1n", velocity: 0.55 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["F3", "A3", "C4", "E4"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-ii7-v7-imaj7-vi7",
    name: "ii7 → V7 → Imaj7 → vi7 (Jazz Turnaround)",
    category: "progressions",
    description:
      "The full jazz turnaround with a vi7 sending it back to ii. Every chord is a seventh chord, every root moves by fourth or third — pure circle-of-fifths gravity. This is the engine that powers the last two bars of virtually every jazz standard. Played at tempo it's invisible; slowed down it's four distinct emotional colors.",
    tags: ["jazz", "turnaround", "bebop", "standard"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-minor-plagal",
    name: "I → iv → I (Minor Plagal)",
    category: "progressions",
    description:
      "The 'amen' cadence with a twist — borrowing the minor iv from the parallel minor over a major tonic. That single lowered note (Ab instead of A in C major) casts a shadow. Radiohead, Elliott Smith, and gospel music all use this. The minor plagal is sadder and more complex than the regular IV → I because it introduces a chromatic note.",
    tags: ["pop", "rock", "indie", "borrowed chord", "gospel"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["F3", "Ab3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-mario-cadence",
    name: "bVI → bVII → I (Mario Cadence)",
    category: "progressions",
    description:
      "Named for its ubiquity in video game music, especially Koji Kondo's Mario and Zelda scores. Two borrowed major chords approach the tonic from a whole step below. It sounds triumphant, heroic, and slightly fantastical — major-key resolution via minor-key chords. Also common in film and anime scoring.",
    tags: ["film", "pop", "borrowed chord", "heroic"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n", velocity: 0.7 },
        { notes: ["Bb2", "D3", "F3"], duration: "2n", velocity: 0.75 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.8 },
      ],
    },
  },
  {
    id: "prog-axis",
    name: "I → V → vi → IV (Axis of Awesome)",
    category: "progressions",
    description:
      "The most common pop progression of the last 30 years, famously catalogued by the Axis of Awesome comedy group. Hundreds of hits use it: 'Let It Be,' 'No Woman No Cry,' 'With or Without You,' 'Poker Face.' Its power is in the balance — two major chords, one minor, and the IV provides a gentle subdominant landing.",
    tags: ["pop", "rock"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-royal-road",
    name: "IV → V → iii → vi (Royal Road)",
    category: "progressions",
    description:
      "The 'Ōdō shinko' or Royal Road progression — the signature sound of J-pop, anime, and Japanese game music. The IV→V creates lift, then iii→vi provides a bittersweet landing. Western ears hear it as a deceptive cadence with extra steps; Japanese composers hear it as the default emotional arc. Shimomura, Uematsu, and virtually all anime OPs use it.",
    tags: ["pop", "film", "shimomura", "bittersweet"],
    audio: {
      tempo: 132,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["G3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-iv-vi-v",
    name: "I → IV → vi → V",
    category: "progressions",
    description:
      "A pop staple that peaks on the subdominant then descends emotionally through vi before V resets. Taylor Swift, Ed Sheeran, and countless singer-songwriters rely on it. The IV → vi transition is the moment — the brightness of IV yields to the minor quality of vi, creating a tug between hope and longing every cycle.",
    tags: ["pop", "indie"],
    audio: {
      tempo: 112,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-i-bvii-iv-bvi",
    name: "i → bVII → iv → bVI",
    category: "progressions",
    description:
      "A dark minor descent using all natural minor chords. The bass line steps down (1-b7-4-b6) creating a sinking, heavy feeling. Post-rock, shoegaze, and atmospheric metal use this for slow-burn builds. Each chord is darker than the last until bVI opens a small window of relative-major light.",
    tags: ["rock", "ambient", "minor", "dark"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "1n", velocity: 0.6 },
        { notes: ["G2", "Bb2", "D3"], duration: "1n", velocity: 0.6 },
        { notes: ["D2", "F2", "A2"], duration: "1n", velocity: 0.6 },
        { notes: ["F2", "Ab2", "C3"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-gospel-shout",
    name: "IV → V → V/vi → vi → IV (Gospel Shout)",
    category: "progressions",
    description:
      "The classic gospel 'shout' turnaround — subdominant launches to dominant, a secondary dominant targets vi, then vi falls back to IV for another cycle. The V/vi → vi move is the shout: the congregation rises on that secondary dominant. Kirk Franklin, Fred Hammond, and traditional Black gospel all build their climaxes on this cycle.",
    tags: ["gospel", "soul", "turnaround"],
    audio: {
      tempo: 96,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "4n", velocity: 0.7 },
        { notes: ["G3", "B3", "D4"], duration: "4n", velocity: 0.75 },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "4n", velocity: 0.8 },
        { notes: ["A2", "C3", "E3"], duration: "4n", velocity: 0.7 },
        { notes: ["F3", "A3", "C4"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-neapolitan-resolution",
    name: "i → bII → V → i (Neapolitan Resolution)",
    category: "progressions",
    description:
      "The Neapolitan sixth chord (bII, usually in first inversion) moving to V and resolving to i — a pillar of classical minor-key drama. The bII is a half-step above the tonic and a tritone from V, creating maximum harmonic distance before the cadence. Beethoven, Chopin, and film composers all lean on this for moments of high pathos.",
    tags: ["classical", "romantic", "film", "dramatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.65 },
        { notes: ["F2", "Bb2", "D3", "F3"], duration: "2n", velocity: 0.7 },
        { notes: ["E2", "G#2", "B2", "D3"], duration: "2n", velocity: 0.75 },
        { notes: ["A2", "C3", "E3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-coltrane-changes",
    name: "Imaj7 → bIIImaj7 → Vmaj7 (Coltrane Changes)",
    category: "progressions",
    description:
      "John Coltrane's symmetric division of the octave into major thirds — three tonal centers equally spaced around the chromatic circle. 'Giant Steps' is the landmark. Each key center is a major third apart (C, Eb, Ab or C, E, Ab depending on the version), creating a kaleidoscope of key changes that defies traditional ii-V logic. The ultimate jazz gauntlet.",
    tags: ["jazz", "chromatic", "modulation", "advanced"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["G2", "B2", "D3", "F#3"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-picardy",
    name: "iv → V → I (Picardy Third)",
    category: "progressions",
    description:
      "A minor-key progression that resolves to a major tonic at the very end — the Picardy third. The entire piece lives in minor, then the final chord switches the minor third to major, flooding the ending with unexpected light. Bach, Handel, and Baroque music use it constantly. It feels like dawn breaking after a long night.",
    tags: ["classical", "baroque", "resolution"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["D3", "F3", "A3"], duration: "2n", velocity: 0.6 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C#3", "E3", "A3"], duration: "1n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-minor-i-iv-v",
    name: "i → iv → V → i (Minor Cadential)",
    category: "progressions",
    description:
      "The fundamental minor-key cadence. Subdominant minor to harmonic-minor dominant to tonic minor — the engine of classical minor-key music. The raised leading tone in V (G# in A minor) is what makes minor keys feel directional rather than floating. Without it, minor progressions wander; with it, they drive home.",
    tags: ["classical", "minor", "rock"],
    audio: {
      tempo: 92,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.65 },
        { notes: ["D3", "F3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-dm-to-emaj",
    name: "i → II (Minor to Major II Lift)",
    category: "progressions",
    description:
      "A two-chord punch: minor tonic jumping to a major chord a whole step above. The II is chromatic (it's the V/V or could be Lydian-derived) and the contrast between minor darkness and major brightness is stark and immediate. Math rock, post-punk, and Radiohead use this for its jarring emotional whiplash.",
    tags: ["rock", "indie", "chromatic"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3", "F3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["D3", "F3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-imaj7-bviimaj7",
    name: "Imaj7 → bVIImaj7 (Half-Step Drop Vamp)",
    category: "progressions",
    description:
      "Two major seventh chords a whole step apart creating a dreamy, floating oscillation. The bVII borrows from Mixolydian and the maj7 voicings blur the line between the two keys. Neo-soul, city pop, and lo-fi beats love this sound. It's harmonically ambiguous — are we in I or bVII? — and that ambiguity is the point.",
    tags: ["jazz", "soul", "neo-soul", "ambient"],
    audio: {
      tempo: 78,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["Bb2", "D3", "F3", "A3"], duration: "1n", velocity: 0.55 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.55 },
        { notes: ["Bb2", "D3", "F3", "A3"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-sus-resolution",
    name: "Vsus4 → V → I (Sus4 Resolution)",
    category: "progressions",
    description:
      "The suspended fourth on V delays the leading tone, building anticipation before resolving to a regular V and then to I. The sus4 wants to fall to the third — the moment it does, the dominant function kicks in. Pop ballads, hymns, and film music use this for emotional climaxes. The delay is everything.",
    tags: ["pop", "film", "resolution", "suspension"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G2", "C3", "D3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-i-bvi-bvii-i-major",
    name: "I → bVI → bVII → I (Borrowed Resolution)",
    category: "progressions",
    description:
      "Major tonic framed by two borrowed chords from the parallel minor. The bVI→bVII→I motion has a heroic, anthemic quality. It's the Mario Cadence with a tonic preamble — establishing the major key first makes the borrowed chords feel like an adventure and the return to I feel like a homecoming. Common in film, game music, and arena rock.",
    tags: ["rock", "film", "borrowed chord", "heroic"],
    audio: {
      tempo: 116,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n", velocity: 0.7 },
        { notes: ["Bb2", "D3", "F3"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "prog-chain-of-fourths",
    name: "iii → vi → ii → V → I (Chain of Fourths)",
    category: "progressions",
    description:
      "The full diatonic circle of fifths (ascending fourths): every chord resolves to the next by root motion of a fourth. Maximum forward momentum through functional harmony's strongest pull. Jazz standards, baroque sequences, and gospel modulations all trace this path. It's gravity — each chord falls naturally to the next.",
    tags: ["jazz", "classical", "gospel", "sequence"],
    audio: {
      tempo: 120,
      events: [
        { notes: ["E3", "G3", "B3"], duration: "4n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3"], duration: "4n", velocity: 0.6 },
        { notes: ["D3", "F3", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3"], duration: "4n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-math-rock-tapping",
    name: "I → #IVdim → vi → V (Math Rock Arpeggio)",
    category: "progressions",
    description:
      "A progression built for tapping arpeggios — the #IV diminished chord is enharmonically a passing diminished between IV and V, but voiced as a tapping pattern it creates a cascading, shimmering texture. Owane, Chon, and Covet use shapes like this as vehicles for two-hand tapping. The chords serve the technique as much as the technique serves the chords.",
    tags: ["rock", "indie", "chromatic", "math-rock"],
    audio: {
      tempo: 140,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "4n", velocity: 0.6 },
        { notes: ["F#3", "A3", "C4", "Eb4"], duration: "4n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "G3"], duration: "4n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-odd-meter-vamp",
    name: "Imaj7 → ii9 (7/8 Vamp)",
    category: "progressions",
    description:
      "A two-chord vamp in 7/8 — the odd meter is the progression. Math rock and prog use asymmetric time signatures to make simple harmonies feel complex. The Imaj7→ii9 motion is gentle and jazzy, but in 7/8 it lurches and grooves unpredictably. The missing eighth note keeps the listener perpetually off-balance.",
    tags: ["jazz", "rock", "math-rock", "odd-meter"],
    audio: {
      tempo: 150,
      timeSignature: [7, 8],
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n.", velocity: 0.6 },
        { notes: ["D3", "F3", "A3", "C4", "E4"], duration: "2n.", velocity: 0.6 },
      ],
    },
  },

  // ── Louis Cole analysis concepts ────────────────────────────

  {
    id: "cascading-sus-resolution",
    name: "Cascading Sus4 → Dom Resolution",
    category: "harmonic-devices",
    description:
      "A chain of suspended dominants resolving in sequence: II7sus4 → II7 → V7sus4 → V7. Each sus4 delays the third, building anticipation, then resolves — and immediately the next dominant repeats the trick. The double delay creates a ramp of tension that's twice as long as a single sus resolution. Louis Cole, Steely Dan, and gospel arrangers stack these for maximum payoff.",
    tags: ["suspension", "jazz", "funk", "resolution"],
    audio: {
      tempo: 88,
      events: [
        { notes: ["F#2", "B2", "E3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["F#2", "A#2", "E3", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["B2", "E3", "A3", "D4"], duration: "4n", velocity: 0.65 },
        { notes: ["B2", "D#3", "A3", "D4"], duration: "4n", velocity: 0.7 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "min7-add4-voicing",
    name: "Minor 7 Add4 (Pentatonic Stack)",
    category: "harmonic-devices",
    description:
      "A minor 7th chord with an added perfect 4th (or 11th) — which spells out all five notes of the minor pentatonic scale from the root. F#m7add4 = F#-A-B-C#-E. The result is a dense, earthy cluster that sounds like a chord and a scale simultaneously. Louis Cole and Knower use this voicing constantly — it sits in the crack between jazz extended harmony and pentatonic folk simplicity.",
    tags: ["voicing", "funk", "jazz", "pentatonic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["F#2", "A2", "B2", "C#3", "E3"], duration: "1n", velocity: 0.6 },
        { notes: ["D2", "F2", "G2", "A2", "C3"], duration: "1n", velocity: 0.6 },
        { notes: ["A2", "C3", "D3", "E3", "G3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "borrowed-iv6",
    name: "Borrowed iv6 (Minor IV with Natural 6)",
    category: "harmonic-devices",
    description:
      "The borrowed minor IV chord but with the 6th degree kept from the major key — Am6 in E major, where the F# is a common tone between both modes. This smooths the mode mixture: instead of a jarring shift to minor, one note stays anchored. The result is bittersweet rather than dark. Soul, R&B, and Louis Cole use this for emotional nuance — it says 'sad but familiar.'",
    tags: ["borrowed chord", "soul", "jazz", "voicing"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.6 },
        { notes: ["E3", "G#3", "B3"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-louis-cole-cycle",
    name: "I → IV → ii7add4 → iv6 → vi → V (Louis Cole Cycle)",
    category: "progressions",
    description:
      "A Louis Cole-style progression that starts diatonic, introduces a pentatonic-stack ii chord, borrows the minor iv with natural 6, passes through a diminished chord to vi, then cascades through sus4→dom resolutions on II7 and V7. The bass line is chromatic and the harmonic rhythm accelerates toward the cadence. Functional harmony and mode mixture woven together with characteristic voicings.",
    tags: ["funk", "jazz", "chromatic", "borrowed chord"],
    audio: {
      tempo: 84,
      events: [
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C#3", "E3"], duration: "4n", velocity: 0.6 },
        { notes: ["F#2", "A2", "B2", "C#3", "E3"], duration: "4n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3", "Bb3"], duration: "4n", velocity: 0.55 },
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "4n", velocity: 0.6 },
        { notes: ["F#2", "B2", "E3"], duration: "4n", velocity: 0.6 },
        { notes: ["F#2", "A#2", "E3"], duration: "4n", velocity: 0.65 },
        { notes: ["B2", "E3", "A3"], duration: "4n", velocity: 0.65 },
        { notes: ["B2", "D#3", "A3"], duration: "4n", velocity: 0.7 },
        { notes: ["E3", "G#3", "B3"], duration: "2n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "dom7-sus2",
    name: "Dominant 7 Sus2",
    category: "harmonic-devices",
    description:
      "A dominant 7th chord with the 3rd replaced by the 2nd — e.g. A7sus2 = A-B-E-G. Where sus4 leans forward (the 4th wants to fall to the 3rd), sus2 leans back: open, airy, uncommitted. It's neither major nor minor, and the b7 adds just enough edge to keep it from floating away. Louis Cole, D'Angelo, and neo-soul arrangers use this for chords that need tension without direction.",
    tags: ["voicing", "funk", "jazz", "suspension"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["A2", "B2", "E3", "G3"], duration: "1n", velocity: 0.6 },
        { notes: ["D2", "E2", "A2", "C3"], duration: "1n", velocity: 0.6 },
        { notes: ["G2", "A2", "D3", "F3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },
  {
    id: "prog-louis-cole-mediants",
    name: "Imaj7 → IV7sus2 → V → bIIImaj7 → bVI → V7 (Louis Cole Mediants)",
    category: "progressions",
    description:
      "A Louis Cole-style progression that starts diatonic then leaps into chromatic mediant territory — bIIImaj7 and bVIadd2 are distant keys connected by common tones and add2/sus2 voicings. The root motion is wild (E→A→B→G→C→F#→B) but individual voices barely move. The add2 and sus2 voicings are the glue: they create shared notes between otherwise unrelated chords. Functional at the edges (IIsus4→V7), impressionist in the middle.",
    tags: ["funk", "jazz", "chromatic", "neo-soul"],
    audio: {
      tempo: 78,
      events: [
        { notes: ["E3", "G#3", "B3", "D#4"], duration: "2n", velocity: 0.55 },
        { notes: ["A2", "B2", "E3", "G3"], duration: "2n", velocity: 0.55 },
        { notes: ["B2", "C#3", "D#3", "F#3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "F#3"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "D3", "E3", "G3"], duration: "2n", velocity: 0.55 },
        { notes: ["F#2", "B2", "C#3"], duration: "4n", velocity: 0.6 },
        { notes: ["B2", "D#3", "F#3", "A3"], duration: "2n.", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-louis-cole-luminous",
    name: "bIIImaj9 → IVmaj7sus2 → Iadd2 → Vadd2 (Luminous Vamp)",
    category: "progressions",
    description:
      "A Louis Cole-style progression where every chord is major with soft extensions — no minor chords, no dominant 7ths, no functional tension. The bIIImaj9 is a chromatic mediant that resolves up by step to IV, then IV falls to the tonic, and V floats without urgency. The add2 and sus2 voicings strip out the 3rd or add the 2nd, creating openness. It's harmony with all the edges filed off — pure warmth and light.",
    tags: ["jazz", "neo-soul", "chromatic", "ambient"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Gb2", "Bb2", "Db3", "F3", "Ab3"], duration: "1n", velocity: 0.5 },
        { notes: ["Ab2", "Bb2", "Eb3", "F3", "G3"], duration: "1n", velocity: 0.5 },
        { notes: ["Eb3", "F3", "G3", "Bb3"], duration: "1n", velocity: 0.5 },
        { notes: ["Bb2", "C3", "D3", "F3"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "parallel-mode-oscillation",
    name: "Parallel Major/Minor Oscillation",
    category: "harmonic-devices",
    description:
      "Toggling between the parallel major and minor tonic within a single progression — not just borrowing one chord, but flipping the entire mode back and forth. Imaj9/G# → im/G: the bass drops a half step and the chord quality inverts. Film composers and orchestrators use this to shift emotional lighting mid-scene. The half-step bass motion (major 3rd → minor 3rd) is the smallest physical movement with the largest emotional impact.",
    tags: ["film", "classical", "chromatic", "modulation"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["E3", "G#3", "B3", "D#4", "F#4"], duration: "1n", velocity: 0.55 },
        { notes: ["E3", "G3", "B3"], duration: "1n", velocity: 0.5 },
        { notes: ["E3", "G#3", "B3", "D#4", "F#4"], duration: "1n", velocity: 0.55 },
        { notes: ["E3", "G3", "B3"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "vmaj9-bright-dominant",
    name: "Vmaj9 (Bright Dominant)",
    category: "harmonic-devices",
    description:
      "A major 9th chord built on the fifth degree — Bmaj9 in E = B-D#-F#-A#-C#. The leading tone (D#) is present, so it still pulls toward the tonic, but the major 7th (A# instead of A) replaces dominant urgency with luminous warmth. It's a dominant that resolves by attraction rather than tension. Orchestral writing, film scoring, and Louis Cole use this when the arrival should feel inevitable but gentle rather than dramatic.",
    tags: ["voicing", "film", "jazz", "orchestration"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["B2", "D#3", "F#3", "A#3", "C#4"], duration: "1n", velocity: 0.55 },
        { notes: ["E3", "G#3", "B3", "D#4"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "prog-louis-cole-orchestral",
    name: "i → bIII → Vmaj9 → iv6 → Imaj9 → i (Orchestral Mode Shift)",
    category: "progressions",
    description:
      "A Louis Cole orchestral progression that lives in the crack between E minor and E major. It starts in minor, passes through a chromatic diminished, introduces a Vmaj9 (major-quality dominant), then oscillates between Emaj9 and Em — the bass dropping G#→G each time to flip the mode. The iiø7→V7 cadence repeats three times with increasingly dense voicings (Am9, C#m11), and the whole thing resolves back to bare Em. Mahler-scale emotional arc in a pop structure.",
    tags: ["film", "classical", "chromatic", "orchestration"],
    audio: {
      tempo: 62,
      events: [
        { notes: ["E3", "G3", "B3"], duration: "2n", velocity: 0.55 },
        { notes: ["G2", "B2", "D3", "F#3"], duration: "2n", velocity: 0.55 },
        { notes: ["B2", "D#3", "F#3", "A#3", "C#4"], duration: "2n", velocity: 0.6 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.55 },
        { notes: ["G#2", "B2", "D#3", "E3", "F#3"], duration: "2n", velocity: 0.55 },
        { notes: ["G2", "B2", "E3"], duration: "2n", velocity: 0.5 },
        { notes: ["F#2", "A2", "C3", "E3"], duration: "4n", velocity: 0.55 },
        { notes: ["B2", "D#3", "F#3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["E3", "G3", "B3"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "minor-iv-major-6",
    name: "Minor iv with Major 6th (iv6)",
    category: "harmonic-devices",
    description:
      "The minor iv chord with an added major 6th creates a bittersweet, nostalgic color distinct from a plain minor iv. The major 6th adds warmth and ambiguity — the chord hovers between minor and diminished territory. A signature sound in jazz, film, and Louis Cole's harmonic palette.",
    tags: ["harmonic color", "jazz", "film", "soul", "borrowed chord"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.65 },
        { notes: ["F2", "Ab2", "C3", "D3"], duration: "1n", velocity: 0.6 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "semitone-voice-leading",
    name: "Semitone Voice Leading",
    category: "voice-leading",
    description:
      "Multiple voices moving by semitone simultaneously, creating smooth chromatic motion between chords. Unlike single chromatic passing tones, this involves parallel or contrary semitone movement across the voicing. Gives progressions a liquid, inevitable quality.",
    tags: ["voice-leading", "chromatic", "jazz", "classical", "film"],
    audio: {
      tempo: 66,
      events: [
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.6 },
        { notes: ["Ab2", "C3", "Eb3", "Gb3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.65 },
        { notes: ["Gb2", "Bb2", "Db3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "A2", "C3", "E3"], duration: "1n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "chromatic-diminished-neighbor",
    name: "Chromatic Diminished Neighbor",
    category: "harmonic-devices",
    description:
      "A diminished 7th chord that orbits a target chord from a semitone away, functioning as a chromatic neighbor rather than a passing chord. Unlike passing diminished chords that connect two different harmonies, this one decorates and intensifies a single destination — approaching it, surrounding it, or delaying its arrival.",
    tags: ["chromatic", "diminished", "jazz", "classical", "film", "passing chords"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "2n", velocity: 0.65 },
        { notes: ["C3", "Eb3", "Gb3", "A3"], duration: "4n", velocity: 0.6 },
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "2n.", velocity: 0.65 },
        { notes: ["D3", "F3", "Ab3", "B3"], duration: "4n", velocity: 0.6 },
        { notes: ["C#3", "E3", "G#3", "B3"], duration: "1n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "bass-reinterpretation",
    name: "Bass Reinterpretation",
    category: "harmonic-devices",
    description:
      "Presenting the same upper-structure harmony over a different bass note, fundamentally changing how the chord is perceived. Not just an inversion — the new bass recontextualizes the chord's function, implying a different root, mode, or tonal center. Am6 heard over A is subdominant color; heard over C it becomes a tonic-area sonority.",
    tags: ["bass", "jazz", "voicing", "soul", "film"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["B2", "D#3", "F#3", "A3"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "2n", velocity: 0.65 },
        { notes: ["B2", "D#3", "F#3", "A3"], duration: "2n", velocity: 0.7 },
        { notes: ["C3", "E3", "F#3", "A3"], duration: "2n", velocity: 0.65 },
        { notes: ["E2", "G#2", "B2", "D3"], duration: "1n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "reharmonized-resolution",
    name: "Reharmonized Resolution",
    category: "harmonic-devices",
    description:
      "A dominant chord resolves not to its expected tonic but to an unexpected chord that shares enough common tones to feel connected yet harmonically surprising. Different from a deceptive cadence (V→vi) — the target chord is more remote, often a borrowed subdominant color or chromatic mediant. The resolution satisfies the ear while subverting expectation.",
    tags: ["jazz", "soul", "film", "resolution"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["E3", "G#3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["F2", "Ab2", "C3", "D3"], duration: "2n", velocity: 0.6 },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "2n", velocity: 0.6 },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "2n", velocity: 0.7 },
        { notes: ["A2", "C3", "E3", "F#3"], duration: "1n", velocity: 0.6 },
      ],
    },
  },

  // ── Chord progressions: taste-specific additions ─────────

  {
    id: "prog-persona-acid-jazz",
    name: "im7 → ♭VII7 → ♭VImaj7 → V7 (Persona Acid Jazz)",
    category: "progressions",
    description:
      "Shoji Meguro's signature minor key acid jazz chain — the sound of Persona 3/4/5. The im7 establishes a cool minor groove, ♭VII7 adds dominant tension a whole step below, ♭VImaj7 provides unexpected warmth, and V7 pulls back to the top. The whole thing cycles over a funk beat with walking bass. It's jazz harmony that grooves like pop and broods like film noir. 'Beneath the Mask,' 'Last Surprise,' and half the Persona catalog live in this harmonic world.",
    tags: ["jazz", "funk", "persona", "vgm", "acid jazz", "minor"],
    audio: {
      tempo: 108,
      events: [
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n", velocity: 0.6 },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n", velocity: 0.6 },
        { notes: ["F2", "A2", "C3", "E3"], duration: "2n", velocity: 0.6 },
        { notes: ["E2", "G#2", "B2", "D3"], duration: "2n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-liquid-dnb",
    name: "im9 → ♭VImaj7 → IVm7 → V7sus (Liquid DnB)",
    category: "progressions",
    description:
      "The liquid drum and bass harmonic formula — arpeggiated minor 9th chords over rapid breakbeats, moving through diatonic minor territory with lush extensions. The im9 is the home base; ♭VImaj7 provides that wistful major color in a minor context; IVm7 deepens the melancholy; V7sus refuses to fully resolve, keeping the cycle floating. At 170+ BPM the arpeggiated voicings blur into texture — harmonic rhythm and rhythmic texture become the same thing.",
    tags: ["dnb", "liquid", "electronic", "minor", "arpeggiated"],
    audio: {
      tempo: 170,
      events: [
        { notes: ["A2"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["E3"], duration: "8n", velocity: 0.5 },
        { notes: ["G3"], duration: "8n", velocity: 0.45 },
        { notes: ["F2"], duration: "8n", velocity: 0.5 },
        { notes: ["A2"], duration: "8n", velocity: 0.45 },
        { notes: ["C3"], duration: "8n", velocity: 0.5 },
        { notes: ["E3"], duration: "8n", velocity: 0.45 },
        { notes: ["D2"], duration: "8n", velocity: 0.5 },
        { notes: ["F2"], duration: "8n", velocity: 0.45 },
        { notes: ["A2"], duration: "8n", velocity: 0.5 },
        { notes: ["C3"], duration: "8n", velocity: 0.45 },
        { notes: ["E2"], duration: "8n", velocity: 0.5 },
        { notes: ["G2"], duration: "8n", velocity: 0.45 },
        { notes: ["B2"], duration: "8n", velocity: 0.5 },
        { notes: ["D3"], duration: "8n", velocity: 0.45 },
      ],
    },
  },
  {
    id: "prog-neo-soul-chromatic",
    name: "im9 → im(maj7) → im7 → im6 (Neo-Soul Chromatic Descent)",
    category: "progressions",
    description:
      "A static minor chord with a descending chromatic inner voice — the 8th drops to maj7, drops to ♭7, drops to 6th. The root and 5th stay locked; only one voice moves, and it moves by half steps. Erykah Badu, D'Angelo, and Robert Glasper use this as a hypnotic vamp — the bass player sits on one note while the keyboard player traces that slow chromatic descent. It's not really 'four chords' — it's one chord with a line moving through it.",
    tags: ["neo-soul", "rnb", "chromatic", "vamp", "minor"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D2", "F3", "A3", "C4", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["D2", "F3", "A3", "C#4", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["D2", "F3", "A3", "C4", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["D2", "F3", "A3", "B3", "E4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-nier-minor-wander",
    name: "i → III → VI → iv (NieR Diatonic Wander)",
    category: "progressions",
    description:
      "Slow, diatonic movement through the natural minor scale's major and minor triads — no dominant function, no leading tone, no urgency. Each chord drifts to the next through common tones. Keiichi Okabe uses this kind of unhurried harmonic motion throughout NieR — the progression doesn't push toward resolution, it wanders like the player exploring ruins. The emotional weight comes from tempo, orchestration, and the singer's voice, not from harmonic tension.",
    tags: ["vgm", "nier", "minor", "diatonic", "melancholic", "ambient"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "1n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3"], duration: "1n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4"], duration: "1n", velocity: 0.5 },
        { notes: ["D3", "F3", "A3"], duration: "1n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "prog-fusion-sus-lydian",
    name: "Isus2 → IVmaj7♯11 → Isus2 (Fusion Sus/Lydian Vamp)",
    category: "progressions",
    description:
      "A bright, floating two-chord vamp between a suspended tonic and a Lydian-colored IV chord. The sus2 leaves the tonic open (no third = no major/minor commitment), and the IVmaj7#11 adds that Lydian brightness without ever resolving the #11. Owane, Plini, and Ichika Nito live in this harmonic space — it's the sound of technical guitar playing over beautiful, non-functional harmony. The vamp can go on indefinitely because neither chord creates tension that demands resolution.",
    tags: ["fusion", "lydian", "sus", "guitar", "owane", "bright"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["C3", "D3", "G3", "C4"], duration: "2n", velocity: 0.55 },
        { notes: ["C3", "D3", "G3", "C4"], duration: "2n", velocity: 0.5 },
        { notes: ["F3", "A3", "B3", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["F3", "A3", "B3", "E4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-extended-chord-planing",
    name: "Parallel Extended Chord Planing",
    category: "progressions",
    description:
      "Moving maj9, min11, or other extended chord voicings in parallel — same voicing shape, different roots — ignoring functional harmony completely. The chords don't 'progress' in a tonal sense; they glide. Debussy did this with triads; fusion and prog do it with 9ths and 11ths. The effect is cinematic and dreamlike — each chord is a complete sonic world, and the movement between them is like panning across a landscape rather than following a narrative arc.",
    tags: ["planing", "parallel", "extended", "fusion", "cinematic"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.55 },
        { notes: ["Eb3", "G3", "Bb3", "D4", "F4"], duration: "2n", velocity: 0.55 },
        { notes: ["Gb3", "Bb3", "Db4", "F4", "Ab4"], duration: "2n", velocity: 0.55 },
        { notes: ["A3", "C#4", "E4", "G#4", "B4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-post-hardcore-clean",
    name: "I → iii → IV → vi (Post-Hardcore Clean Section)",
    category: "progressions",
    description:
      "The pretty progression between the breakdowns — major key, emotionally open, often with clean guitars and ambient delay. Counterparts, Being As An Ocean, and La Dispute use this kind of progression for their vulnerable moments. The I → iii motion is the key: it's brighter than I → vi but more introspective than I → V. The IV → vi at the end tilts toward melancholy without committing to it. It's hope with a shadow.",
    tags: ["post-hardcore", "metalcore", "clean", "major", "emotional"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n", velocity: 0.5 },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n", velocity: 0.5 },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n", velocity: 0.55 },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n", velocity: 0.5 },
      ],
    },
  },
  {
    id: "prog-metalcore-pedal-dissonance",
    name: "Open-String Pedal Against Moving Power Chords",
    category: "progressions",
    description:
      "An open low string (usually drop-tuned) droning while power chords move chromatically or diatonically above it — creating dissonances that would be 'wrong' in classical voice leading but are the entire point in metalcore. The pedal is the anchor; the moving chords create waves of tension and release against it. Counterparts, Architects, and Northlane use this constantly. The dissonance is controlled because the power chord voicing is simple — the clash is always between the pedal and one or two notes.",
    tags: ["metalcore", "pedal", "dissonance", "power chord", "drop tuning"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["D2", "D3", "A3"], duration: "4n", velocity: 0.75 },
        { notes: ["D2", "Eb3", "Bb3"], duration: "4n", velocity: 0.7 },
        { notes: ["D2", "F3", "C4"], duration: "4n", velocity: 0.7 },
        { notes: ["D2", "Eb3", "Bb3"], duration: "4n", velocity: 0.7 },
        { notes: ["D2", "D3", "A3"], duration: "2n", velocity: 0.75 },
      ],
    },
  },
  {
    id: "prog-aint-nobody-vamp",
    name: "im7 Funk Vamp (\"Ain't Nobody\" Style)",
    category: "progressions",
    description:
      "A sticky one-chord minor 7th funk vamp where the groove IS the harmony — the rhythm section locks into a single im7 and the melodic interest comes from the bass line, syncopated keyboard stabs, and vocal phrasing rather than chord changes. Chaka Khan's 'Ain't Nobody,' Herbie Hancock's 'Chameleon,' and countless funk tracks prove that one chord is enough if the pocket is deep enough. The 7th keeps it from feeling static; the minor color keeps it cool.",
    tags: ["funk", "vamp", "one-chord", "minor", "chaka khan", "groove"],
    audio: {
      tempo: 108,
      events: [
        { notes: ["E2"], duration: "8n", velocity: 0.65 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "8n", velocity: 0.5 },
        { notes: ["E2"], duration: "8n", velocity: 0.55 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "16n", velocity: 0.45 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "16n", velocity: 0.5 },
        { notes: ["E2"], duration: "8n", velocity: 0.6 },
        { notes: ["G2"], duration: "8n", velocity: 0.55 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "8n", velocity: 0.5 },
        { notes: ["E2"], duration: "8n", velocity: 0.65 },
      ],
    },
  },
  {
    id: "prog-city-pop",
    name: "IVmaj7 → iii7 → vi7 → IVmaj7 (City Pop)",
    category: "progressions",
    description:
      "The Japanese city pop harmonic loop — warm, nostalgic, endlessly cyclical. Tatsuro Yamashita, Mariya Takeuchi, and Toshiki Kadomatsu built an entire genre on these kinds of smooth diatonic 7th-chord cycles. The IVmaj7 start avoids the stability of I, giving everything a slightly suspended, yearning quality. This is also the source material that Death's Dynamic Shroud and vaporwave artists chop, slow, and process — the original sound before the aesthetic filter.",
    tags: ["city pop", "japanese", "vaporwave", "nostalgic", "smooth"],
    audio: {
      tempo: 105,
      events: [
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n", velocity: 0.55 },
        { notes: ["E3", "G3", "B3", "D4"], duration: "2n", velocity: 0.55 },
        { notes: ["A3", "C4", "E4", "G4"], duration: "2n", velocity: 0.55 },
        { notes: ["F3", "A3", "C4", "E4"], duration: "2n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-mahler-tragic-arc",
    name: "I → vi → iv → ♭VI → V → i (Mahlerian Tragic Arc)",
    category: "progressions",
    description:
      "A progression that begins in major and ends in minor — the tonal equivalent of a story that starts hopeful and ends in tragedy. The I → vi begins warmly; iv borrows from minor, darkening; ♭VI deepens the shadow; V could resolve to either major or minor, and it chooses minor. Mahler's symphonies are built on these kinds of tonal arcs — not just chord-to-chord, but entire movements that trace a journey from light to darkness (or the reverse). The progression in miniature captures that arc.",
    tags: ["classical", "romantic", "mahler", "tragic", "major-to-minor"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n", velocity: 0.55 },
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.55 },
        { notes: ["F2", "Ab2", "C3"], duration: "2n", velocity: 0.55 },
        { notes: ["Ab2", "C3", "Eb3"], duration: "2n", velocity: 0.55 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.6 },
        { notes: ["C3", "Eb3", "G3"], duration: "1n", velocity: 0.55 },
      ],
    },
  },
  {
    id: "prog-anime-op-power",
    name: "vi → IV → V → iii → vi (Anime OP Power Progression)",
    category: "progressions",
    description:
      "A high-energy minor-key loop common in anime openings — distinct from the Royal Road (IV → V → iii → vi) by starting on vi and cycling through a more driving sequence. The vi → IV is immediately emotional; V → iii is the unexpected move that gives it that distinctly 'anime' quality — triumphant but bittersweet. Attack on Titan, My Hero Academia, and countless shonen OPs use variations of this. Works at high tempo with distorted guitars and orchestral hits.",
    tags: ["anime", "vgm", "japanese", "minor", "energetic", "rock"],
    audio: {
      tempo: 155,
      events: [
        { notes: ["A2", "C3", "E3"], duration: "2n", velocity: 0.7 },
        { notes: ["F2", "A2", "C3"], duration: "2n", velocity: 0.65 },
        { notes: ["G2", "B2", "D3"], duration: "2n", velocity: 0.7 },
        { notes: ["E2", "G2", "B2"], duration: "2n", velocity: 0.65 },
        { notes: ["A2", "C3", "E3"], duration: "1n", velocity: 0.7 },
      ],
    },
  },
  {
    id: "prog-lofi-jazz-minor",
    name: "ii7 → V7 → Imaj7 → vi7 (Lo-Fi Jazz Loop)",
    category: "progressions",
    description:
      "The backbone of lo-fi hip hop and chill beats — a ii-V-I-vi cycle with jazz voicings played at a lazy tempo over vinyl-crackle drums. The ii-V-I is textbook jazz, but the vi7 at the end keeps it from resolving fully, sending it back around the cycle. Nujabes, J Dilla, and the entire lo-fi YouTube world run on this loop. What makes it 'lo-fi' is the production (saturation, sidechain, tape hiss) rather than the harmony — the chords themselves are clean, warm jazz.",
    tags: ["jazz", "lo-fi", "hip hop", "chill", "nujabes"],
    audio: {
      tempo: 78,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n", velocity: 0.5 },
        { notes: ["G3", "B3", "D4", "F4"], duration: "2n", velocity: 0.5 },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n", velocity: 0.5 },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n", velocity: 0.5 },
      ],
    },
  },

  // ── Microtonality / Xenharmony ──────────────────────────

  {
    id: "just-intonation",
    name: "Just Intonation",
    category: "microtonality",
    description:
      "Tuning intervals to exact whole-number frequency ratios — a perfect 5th as 3:2, a major 3rd as 5:4, instead of the tempered approximations in 12-TET. The result is intervals that lock in with a purity and stillness that equal temperament can never achieve — no beating, no wobble, just clean resonance. The tradeoff: you can't freely modulate because different keys have different-sized intervals. Sevish uses JI for moments of crystalline calm before diving into weirder tunings.",
    tags: ["microtonal", "tuning", "just intonation", "pure intervals", "sevish"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C3"], duration: "2n" },
        { notes: ["E3"], duration: "2n" },
        { notes: ["G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "19-tet",
    name: "19-TET (19 Equal Divisions of the Octave)",
    category: "microtonality",
    description:
      "Dividing the octave into 19 equal steps instead of 12. The closest EDO to standard tuning that actually improves on it — 19-TET's major thirds are nearly pure (closer to 5:4 than 12-TET's), and it has better minor thirds too. You get familiar-sounding triads but with a sweeter, more resonant quality. The 'gateway drug' EDO: recognizable enough to not alienate listeners, different enough to make your ears perk up.",
    tags: ["microtonal", "tuning", "edo", "19tet", "xenharmonic"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["G3", "B3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "22-tet",
    name: "22-TET (22 Equal Divisions of the Octave)",
    category: "microtonality",
    description:
      "Sevish's favorite playground — 22 equal divisions of the octave. The intervals are alien enough to sound genuinely 'other' but structured enough to build coherent harmony. 22-TET has excellent approximations of 7-limit intervals (the 'blue' 7th, the septimal minor third) that don't exist in 12-TET at all. It's where microtonal music starts to sound like music from a parallel universe rather than 'out of tune' Western music.",
    tags: ["microtonal", "tuning", "edo", "22tet", "sevish", "xenharmonic"],
    audio: {
      tempo: 95,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "31-tet",
    name: "31-TET (31 Equal Divisions of the Octave)",
    category: "microtonality",
    description:
      "The sweet-spot EDO for extended harmony — 31-TET approximates 5-limit just intonation extremely well while also offering good 7-limit and 11-limit intervals. You get pure-sounding triads AND exotic intervals that have no 12-TET equivalent. Renaissance theorists actually proposed 31-tone keyboards. For composition, 31-TET is rich enough to build entire tonal systems with functional harmony that works differently from 12-TET but still feels 'logical.'",
    tags: ["microtonal", "tuning", "edo", "31tet", "extended harmony"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "bohlen-pierce",
    name: "Bohlen-Pierce Scale",
    category: "microtonality",
    description:
      "A scale that divides the tritave (3:1, an octave plus a fifth) into 13 equal steps instead of dividing the octave into 12. Nothing about this scale maps onto Western music — there is no octave, no familiar fifth, no major or minor triad as we know them. It's genuinely alien harmony, not 'detuned' familiar harmony. The fundamental consonance is 3:5:7 instead of 4:5:6. Sevish uses Bohlen-Pierce to create music that sounds otherworldly without sounding 'wrong.'",
    tags: ["microtonal", "tuning", "bohlen-pierce", "non-octave", "alien", "sevish"],
    audio: {
      tempo: 75,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["C4"], duration: "4n" },
        { notes: ["E4"], duration: "2n" },
      ],
    },
  },
  {
    id: "harmonic-series-chords",
    name: "Harmonic Series Chords",
    category: "microtonality",
    description:
      "Building chords directly from the overtone series — using partials 4:5:6:7 for a 'natural' dominant 7th, or 6:7:9 for a septimal minor triad. These chords have a primal, resonant quality because they align with the physics of vibrating objects. The 7th harmonic (7:4) is notably flatter than a 12-TET minor 7th — it's the 'blue note' that blues singers naturally reach for. Harmonic series chords are the acoustic foundation that all tuning systems attempt to approximate.",
    tags: ["microtonal", "harmonic series", "overtones", "natural", "spectral"],
    audio: {
      tempo: 65,
      events: [
        { notes: ["C2"], duration: "2n" },
        { notes: ["C2", "C3"], duration: "2n" },
        { notes: ["C2", "C3", "G3"], duration: "2n" },
        { notes: ["C2", "C3", "G3", "C4"], duration: "2n" },
        { notes: ["C2", "C3", "G3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "quarter-tones",
    name: "Quarter Tones (24-TET)",
    category: "microtonality",
    description:
      "Dividing each semitone in half — 24 equal steps per octave. The most accessible entry point to microtonality because you keep all of 12-TET and add notes between. Arabic maqam music uses quarter tones natively; contemporary classical composers (Ives, Hába, Grisey) explored them extensively. Quarter tones add expressive inflections that feel like 'bending' into or away from familiar notes — the musical equivalent of adding more shades to a limited color palette.",
    tags: ["microtonal", "tuning", "quarter tone", "24tet", "arabic", "maqam"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["D3"], duration: "4n" },
        { notes: ["E3"], duration: "4n" },
        { notes: ["F3"], duration: "4n" },
        { notes: ["G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "non-octave-tuning",
    name: "Non-Octave Tuning",
    category: "microtonality",
    description:
      "Tuning systems where the interval of repetition is something other than the octave (2:1). Bohlen-Pierce uses the tritave (3:1). Others use the '5th' (3:2), the 'double octave' (4:1), or arbitrary intervals. Removing the octave — the most fundamental assumption in nearly all world music — is the most radical microtonal move possible. Melodies can't be transposed 'up an octave'; there IS no octave. The entire concept of register changes.",
    tags: ["microtonal", "tuning", "non-octave", "radical", "xenharmonic"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C3"], duration: "4n" },
        { notes: ["G3"], duration: "4n" },
        { notes: ["D4"], duration: "4n" },
        { notes: ["A4"], duration: "4n" },
        { notes: ["E5"], duration: "2n" },
      ],
    },
  },
  {
    id: "comma-pumping",
    name: "Comma Pumping",
    category: "microtonality",
    description:
      "A chord progression that, in just intonation, drifts sharp or flat each time it cycles because the intervals don't quite close the loop — the 'comma' is the tiny pitch discrepancy that accumulates. In 12-TET this is invisible (tempered away), but in JI you can hear the pitch literally spiral upward or downward with each repetition. Sevish and other microtonal composers exploit this as a compositional device: the pitch drift becomes the feature, creating a sense of perpetual ascent or descent.",
    tags: ["microtonal", "comma", "just intonation", "drift", "sevish"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "C3", "E3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["G2", "B2", "D3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "subharmonic-series",
    name: "Subharmonic Series",
    category: "microtonality",
    description:
      "The mirror image of the overtone series — instead of frequency ratios 1:2:3:4:5, you get 1:1/2:1/3:1/4:1/5 (or equivalently, equal divisions of a string). Where the harmonic series produces major-ish sonorities naturally, the subharmonic series produces minor-ish ones. Utonality (Partch's term) is harmony built from subharmonics. The resulting chords have an uncanny, hollow quality — recognizably related to minor but with a different weight and darkness.",
    tags: ["microtonal", "subharmonic", "undertones", "partch", "utonality"],
    audio: {
      tempo: 70,
      events: [
        { notes: ["C4"], duration: "2n" },
        { notes: ["C3", "C4"], duration: "2n" },
        { notes: ["F2", "C3", "C4"], duration: "2n" },
        { notes: ["F2", "Ab2", "C3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "spectral-harmony",
    name: "Spectral Harmony",
    category: "microtonality",
    description:
      "Tuning chords to the actual frequency spectrum of a sound — analyzing what partials are present in a guitar note, a bell, a voice, a synth, and building harmony from those specific frequencies. Pioneered by Grisey, Murail, and the French spectralists. Instead of imposing a pre-built scale on sound, you let the sound dictate the harmony. In electronic music, Sevish and others use spectral analysis to find 'the chords that live inside a single note.'",
    tags: ["microtonal", "spectral", "overtones", "electronic", "sevish"],
    audio: {
      tempo: 60,
      events: [
        { notes: ["C2"], duration: "2n" },
        { notes: ["C2", "C3", "G3"], duration: "2n" },
        { notes: ["C2", "C3", "G3", "E4"], duration: "2n" },
        { notes: ["C2", "C3", "G3", "E4", "Bb4"], duration: "1n" },
      ],
    },
  },
  {
    id: "microtonal-voice-leading",
    name: "Microtonal Voice Leading",
    category: "microtonality",
    description:
      "Voice leading with intervals smaller than a semitone — movements of quarter tones, sixth tones, or arbitrary microtonal steps between chord tones. Smaller intervals mean smoother motion: a voice moving by 50 cents is half as dramatic as a semitone shift. In dense microtonal harmony, voices can glide between chords with almost imperceptible motion, creating a liquid, morphing quality that's impossible in 12-TET. The harmonic rhythm feels continuous rather than stepped.",
    tags: ["microtonal", "voice-leading", "smooth", "continuous", "xenharmonic"],
    audio: {
      tempo: 65,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["B2", "D3", "G3"], duration: "1n" },
      ],
    },
  },

  // ── Passing Chords (additional) ─────────────────────────
  {
    id: "augmented-passing-chord",
    name: "Augmented Passing Chord (I → I+ → IV)",
    category: "harmonic-devices",
    description:
      "An augmented triad on the tonic connects I to IV by raising the 5th a half step — the raised 5th becomes the root of IV. The bass stays still while one voice climbs chromatically (G→G#→A in C major). Smoother than jumping straight to IV and adds a brief, shimmering instability. Beatles, Stevie Wonder, and classic soul use this constantly.",
    tags: ["augmented", "chromatic", "passing chords", "soul", "pop"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G#3"], duration: "2n" },
        { notes: ["C3", "F3", "A3"], duration: "1n" },
      ],
    },
  },
  {
    id: "passing-64-chord",
    name: "Passing 6/4 Chord",
    category: "harmonic-devices",
    description:
      "A second-inversion triad that connects two root-position or first-inversion chords via stepwise bass motion. The 6/4 chord doesn't function as its own harmony — it's a byproduct of the bass passing between two stable chords. I → V6/4 → I6 with bass C→D→E. One of the most fundamental voice-leading patterns in tonal music, drilled in every theory class but invisible to most pop musicians.",
    tags: ["inversion", "voice-leading", "passing chords", "classical"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["D3", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["E3", "G3", "C4", "E4"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-dominant-passing",
    name: "Chromatic Dominant Passing Chord",
    category: "harmonic-devices",
    description:
      "A dominant 7th chord built on a chromatic degree, used to connect two diatonic chords by half-step bass motion. Not a secondary dominant (it doesn't resolve to a diatonic chord a 4th above) — it just passes through. bVII7 between I and vi, or #I7 between I and ii. The dominant quality gives each step weight and direction even though it's just passing by.",
    tags: ["dominant", "chromatic", "passing chords", "jazz"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C#3", "F3", "G#3", "B3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "diatonic-passing-chords",
    name: "Diatonic Passing Chords",
    category: "harmonic-devices",
    description:
      "Chords built on scale degrees between two target chords, filling the gap with diatonic harmony. I → ii → iii → IV uses ii and iii as passing chords. No chromaticism needed — the diatonic scale provides enough intermediate harmonies to smooth any jump. Less dramatic than chromatic passing chords but more natural-sounding. The backbone of hymn harmonization and folk arranging.",
    tags: ["diatonic", "stepwise", "passing chords", "folk", "hymn"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "4n" },
        { notes: ["F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "passing-minor-iv",
    name: "Passing iv (I → IV → iv → I)",
    category: "progressions",
    description:
      "The minor iv chord passes between IV and I, creating a chromatic descent in one voice (A→Ab→G in C major). The shift from major IV to minor iv is a moment of bittersweet shadow before resolving home. One of the most emotionally potent two-chord moves in all of pop music. Radiohead, Adele, and every songwriter who ever wanted to make a listener cry.",
    tags: ["borrowed chord", "minor iv", "chromatic", "passing chords", "emotional"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "2n" },
        { notes: ["F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-walkdown-passing",
    name: "Chromatic Walkdown with Passing Chords",
    category: "harmonic-devices",
    description:
      "A descending chromatic bass line where every half step gets its own chord on top. I → I/7 → I/b7 → I/6 → IV, or V → bV → IV → bIV → I. Each passing chord is harmonized to create smooth voice leading above the moving bass. The emotional weight comes from the relentless downward pull — gravity made audible. Film scores, R&B ballads, and baroque chaconnes all depend on this.",
    tags: ["chromatic", "descending", "bass line", "passing chords", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "D3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "G3"], duration: "2n" },
        { notes: ["A2", "C3", "F3"], duration: "1n" },
      ],
    },
  },
  {
    id: "chromatic-walkup-passing",
    name: "Chromatic Walkup with Passing Chords",
    category: "harmonic-devices",
    description:
      "An ascending chromatic bass line harmonized at every step — the opposite of the walkdown. I → #Idim → ii → #IIdim → iii, or IV → #IVdim → V. Each chromatic step builds tension and momentum. The upward motion feels like climbing toward a summit. Gospel, ragtime, and musical theater use ascending chromatic passing chords to build excitement before a big arrival.",
    tags: ["chromatic", "ascending", "bass line", "passing chords", "gospel"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C#3", "E3", "G3", "Bb3"], duration: "4n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["D#3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "passing-augmented-sixth",
    name: "Passing Augmented 6th Chord",
    category: "harmonic-devices",
    description:
      "An augmented 6th chord (Italian, French, or German) used in passing rather than as a pre-dominant. The augmented 6th interval expands outward by half step in contrary motion, connecting two chords with maximum voice-leading efficiency. When used as a passing chord it's less dramatic than the textbook pre-dominant version — more of a sophisticated color than a structural event.",
    tags: ["augmented sixth", "chromatic", "passing chords", "classical", "voice-leading"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["Ab2", "C3", "F#3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "tritone-sub-as-passing",
    name: "Tritone Sub as Passing Chord",
    category: "harmonic-devices",
    description:
      "A tritone substitution used not to replace V but as a chromatic passing chord between two diatonic chords. bII7 passes between ii and I (Db7 connecting Dm to C), creating a half-step bass descent. The tritone sub's dominant quality gives the passing motion direction and urgency. Jazz pianists drop these into standards the way chefs add salt — a little goes a long way.",
    tags: ["tritone sub", "jazz", "chromatic", "passing chords"],
    audio: {
      tempo: 90,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "1n" },
      ],
    },
  },
  {
    id: "double-chromatic-approach-chord",
    name: "Double Chromatic Approach Chord",
    category: "harmonic-devices",
    description:
      "Approaching a target chord from both a half step above AND below simultaneously — two passing chords that converge on the destination. The voices move in contrary motion, creating a pinching effect that locks onto the target with inevitability. Jazz arrangers use this for hits and accents; gospel musicians use it to intensify arrivals. Two steps of maximum tension compressed into one moment.",
    tags: ["chromatic", "approach", "passing chords", "jazz", "gospel"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["Db3", "E3", "Ab3"], duration: "4n" },
        { notes: ["B2", "Eb3", "G#3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },
  {
    id: "secondary-dominant-as-passing",
    name: "Secondary Dominant as Passing Chord",
    category: "harmonic-devices",
    description:
      "A secondary dominant (V/x) used in passing between two diatonic chords rather than resolving to its target. V/vi passes between I and IV; V/V passes between iii and I. The dominant quality propels the bass forward but the resolution is 'wrong' — the chord just passes through on its way somewhere else. Creates harmonic color without the commitment of actual tonicization.",
    tags: ["secondary dominant", "chromatic", "passing chords", "jazz", "pop"],
    audio: {
      tempo: 85,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["E3", "G#3", "B3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "neighbor-passing-chord",
    name: "Neighbor Chord (Embellishing Passing Chord)",
    category: "harmonic-devices",
    description:
      "A chord that moves away from a harmony by step and returns — like a passing chord that doubles back instead of continuing. I → ii → I or I → bVII → I. The neighbor chord decorates without progressing. Creates a gentle rocking motion, adding harmonic interest to a static passage. The difference between a 'passing' and 'neighbor' chord is whether it keeps going or comes home.",
    tags: ["neighbor", "embellishing", "passing chords", "stepwise"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["D3", "F3", "A3"], duration: "2n" },
        { notes: ["C3", "E3", "G3"], duration: "1n" },
      ],
    },
  },

  // ── Non-Tonic-Start Progressions ──────────────────────────
  {
    id: "prog-vi-v-iv-v",
    name: "vi → V → IV → V (Epic Build)",
    category: "progressions",
    description:
      "Starting on the relative minor creates instant drama, then descends to IV before climbing back to V. The unresolved ending begs repetition. Common in K-pop, epic pop, and anthemic choruses.",
    tags: ["pop", "dramatic", "vi-start", "build", "anthemic"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-vi-ii-v-i",
    name: "vi → ii → V → I (Circle from vi)",
    category: "progressions",
    description:
      "A full circle-of-fifths descent launched from the relative minor. Each chord falls a fifth to the next, creating irresistible forward motion that arrives home with earned satisfaction. Jazz-pop crossover staple.",
    tags: ["jazz", "pop", "vi-start", "circle of fifths", "forward motion"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-vi-bvi-bvii-i",
    name: "vi → bVI → bVII → I (Chromatic Ascent)",
    category: "progressions",
    description:
      "Starts in the relative minor then steps chromatically upward through borrowed chords to reach a triumphant major tonic. The bVI→bVII→I creates a cinematic lift, like emerging from shadow into light.",
    tags: ["chromatic", "borrowed chord", "vi-start", "cinematic", "triumphant"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-vi-v-iv-iii",
    name: "vi → V → IV → iii (Stepwise Descent)",
    category: "progressions",
    description:
      "Four chords descending stepwise from vi through the diatonic scale. Each chord melts into the next by step, creating a falling sensation that never resolves — melancholic, introspective, endlessly loopable.",
    tags: ["descending", "vi-start", "indie", "melancholic", "stepwise"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["E2", "G2", "B2", "E3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-vi-iv-ii-v",
    name: "vi → IV → ii → V (Anthemic Build)",
    category: "progressions",
    description:
      "Opens in minor territory then builds through subdominant chords to the dominant. Each chord intensifies the pull toward resolution without giving it — perfect for pre-choruses and worship builds.",
    tags: ["build", "vi-start", "worship", "anthemic", "tension"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-iii-vi-ii-v",
    name: "iii → vi → ii → V (Mediant Circle)",
    category: "progressions",
    description:
      "Full circle-of-fifths chain starting from the mediant. The iii chord's ambiguity — is it minor or a rootless Imaj7? — gives the opening an ethereal, floating quality before the chain locks in.",
    tags: ["jazz", "iii-start", "circle of fifths", "ethereal", "smooth"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-iii-iv-v-vi",
    name: "iii → IV → V → vi (Ascending Deceptive)",
    category: "progressions",
    description:
      "Three chords climb diatonically from iii through IV and V, building expectation of a triumphant I — then the deceptive resolution to vi pulls the rug out. A signature anime/JRPG emotional gut-punch.",
    tags: ["ascending", "iii-start", "deceptive", "jrpg", "emotional"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-iii-ii-i",
    name: "iii → ii → I (Stepwise Homecoming)",
    category: "progressions",
    description:
      "Three chords descending by step to the tonic. The mediant's gentle ambiguity flows through the supertonic's soft pull into a warm arrival home. Sparse, folky, and satisfying in its simplicity.",
    tags: ["descending", "iii-start", "folk", "stepwise", "gentle"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-v-vi-iv-i",
    name: "V → vi → IV → I (Deceptive Opening)",
    category: "progressions",
    description:
      "Opens with maximum tension on the dominant, then immediately swerves to vi instead of resolving. The deceptive start creates surprise, then the familiar IV→I plagal motion brings warmth and closure.",
    tags: ["surprise", "V-start", "pop", "deceptive", "resolution"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-v-bvii-iv-i",
    name: "V → bVII → IV → I (Double Plagal from V)",
    category: "progressions",
    description:
      "Launches from the dominant then cascades down through borrowed bVII and IV to the tonic — each chord a fourth above the next. A rock staple that feels like rolling downhill with unstoppable momentum.",
    tags: ["rock", "V-start", "borrowed chord", "mixolydian", "momentum"],
    audio: {
      tempo: 80,
      events: [
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-v-iv-vi-i",
    name: "V → IV → vi → I (Retrogressive Detour)",
    category: "progressions",
    description:
      "The V→IV retrogression immediately subverts expectations — the harmony moves away from resolution instead of toward it. Passing through vi adds a bittersweet shadow before the final arrival on I.",
    tags: ["retrogressive", "V-start", "bittersweet", "alternative", "unexpected"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-bvii-bvi-v-i",
    name: "bVII → bVI → V → I (Chromatic Descent to V)",
    category: "progressions",
    description:
      "Three chords descending chromatically by semitone in the bass — bVII to bVI to V — before resolving to I. The chromatic squeeze onto the dominant makes the final resolution feel inevitable. Classic film scoring move.",
    tags: ["chromatic", "descending", "bVII-start", "film", "dramatic"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-bvii-i-bvii-iv",
    name: "bVII → I → bVII → IV (Mixolydian Shuttle)",
    category: "progressions",
    description:
      "Oscillates between bVII and I — the hallmark of mixolydian rock — then drops to IV for a plagal extension. The lack of leading tone gives it a raw, bluesy openness. Think classic rock riffs and jam sessions.",
    tags: ["mixolydian", "bVII-start", "rock", "blues", "vamp"],
    audio: {
      tempo: 84,
      events: [
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-bii-v-i",
    name: "bII → V → I (Neapolitan Launch)",
    category: "progressions",
    description:
      "Opens on the Neapolitan — a half step above tonic — creating maximum chromatic tension, then resolves through the dominant. The bII→V bass motion spans a tritone, concentrating all the harmonic energy into two moves.",
    tags: ["neapolitan", "bII-start", "chromatic", "classical", "dramatic"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["Db3", "F3", "Ab3", "Db4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-bii-bvii-bvi-v",
    name: "bII → bVII → bVI → V (Flat-Side Chromatic Descent)",
    category: "progressions",
    description:
      "Four chords descending chromatically from the Neapolitan through the flat side of the key. Each root falls by whole step, creating a long chromatic runway that makes the dominant feel earned. Cinematic and grand.",
    tags: ["chromatic", "descending", "bII-start", "film", "neapolitan"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["Db3", "F3", "Ab3", "Db4"], duration: "2n" },
        { notes: ["Bb2", "D3", "F3", "Bb3"], duration: "2n" },
        { notes: ["Ab2", "C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-ii-iii-iv-v",
    name: "ii → iii → IV → V (Ascending Diatonic Climb)",
    category: "progressions",
    description:
      "Four chords ascending stepwise through the diatonic scale. Each step builds energy and expectation — an escalator of rising tension. The unresolved ending on V leaves the listener leaning forward, perfect for pre-choruses.",
    tags: ["ascending", "ii-start", "build", "stepwise", "tension"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-ii-iv-v-vi",
    name: "ii → IV → V → vi (Subdominant Launch, Deceptive Land)",
    category: "progressions",
    description:
      "Launches from the supertonic, builds through subdominant and dominant, then denies resolution with a deceptive cadence to vi. The journey from ii to vi traces the minor side of the key — earnest and searching.",
    tags: ["ii-start", "deceptive", "pop", "searching", "emotional"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["A3", "C4", "E4", "A4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-ii-v-vi",
    name: "ii → V → vi (Deceptive ii-V)",
    category: "progressions",
    description:
      "The classic ii-V setup with the rug pulled — instead of resolving to I, it lands on vi. The relative minor shares two of three notes with the expected tonic, so the landing is wrong but almost right. Bittersweet and restless.",
    tags: ["ii-start", "deceptive", "jazz", "bittersweet", "surprise"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "1n" },
      ],
    },
  },
  {
    id: "prog-viio-i-iv-v",
    name: "vii° → I → IV → V (Diminished Launch)",
    category: "progressions",
    description:
      "Opens on the most unstable diatonic chord — the diminished triad on the leading tone — and immediately resolves to I, releasing the tension. The IV→V that follows rebuilds momentum for the next cycle.",
    tags: ["diminished", "vii-start", "tension-release", "resolution", "classical"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["B2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-viio-iii-vi-ii",
    name: "vii° → iii → vi → ii (Diminished Circle)",
    category: "progressions",
    description:
      "The diminished triad resolves deceptively to iii, then cascades through a circle of fifths. Each chord is minor or diminished — the progression lives entirely in the dark side of the key. Haunting and restless.",
    tags: ["diminished", "vii-start", "circle of fifths", "dark", "minor"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["B2", "D3", "F3"], duration: "2n" },
        { notes: ["E3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["D3", "F3", "A3", "D4"], duration: "2n" },
      ],
    },
  },

  // ── Slash Chords & Inversions ─────────────────────────────
  {
    id: "slash-chord-basics",
    name: "Slash Chords (Chord/Bass Note)",
    category: "harmonic-devices",
    description:
      "A chord played over a different bass note — written as Chord/Bass. C/E means a C major triad with E in the bass. Slash chords create smooth bass lines, imply richer harmony, and let you redefine a chord's function by changing its lowest note. The single most powerful tool for making basic progressions sound professional.",
    tags: ["slash chord", "inversion", "bass", "voice-leading", "fundamental"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["G2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-walkdown",
    name: "Slash Chord Walkdown (I → I/7 → I/b7 → I/6)",
    category: "progressions",
    description:
      "The same chord on top while the bass walks down chromatically: C → C/B → C/Bb → C/A. The descending bass creates harmonic motion from a single chord. The sound of every soul, gospel, and worship outro. James Brown, Stevie Wonder, and every church organist knows this move.",
    tags: ["slash chord", "chromatic", "descending", "bass", "gospel", "soul"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["B2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["Bb2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["A2", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-walkup",
    name: "Slash Chord Walkup (I → I/2 → I/3 → IV)",
    category: "progressions",
    description:
      "The bass climbs stepwise under a held chord: C → C/D → C/E → F. Each bass note recontextualizes the upper triad — C/D implies a Dsus4, C/E is first inversion. The ascending line creates lift and momentum into the IV chord. A pop and worship staple.",
    tags: ["slash chord", "ascending", "bass", "pop", "worship"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["D2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["E2", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-chromatic-bass",
    name: "Chromatic Bass Under Diatonic Chords",
    category: "progressions",
    description:
      "Diatonic chords on top with a bass line that moves chromatically underneath, creating slash chords at every step. The upper harmony says 'everything is normal' while the bass says 'something is shifting.' The tension between the two is what makes film scores sound emotional.",
    tags: ["slash chord", "chromatic", "bass", "film", "voice-leading"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["B2", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["Bb2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-pedal-bass",
    name: "Chords Over Pedal Bass",
    category: "progressions",
    description:
      "Multiple chords move on top while the bass stays on a single note — typically the tonic or dominant. Every chord becomes a slash chord against the pedal. Creates a dreamlike floating quality where the harmony drifts but the ground never moves. Radiohead, Sigur Rós, and ambient music live here.",
    tags: ["slash chord", "pedal", "atmospheric", "ambient", "indie"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["C2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["C2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C2", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-dominant-pedal",
    name: "Chords Over Dominant Pedal",
    category: "progressions",
    description:
      "Chords change on top while the bass holds the 5th scale degree. Every chord becomes a slash-over-G (in C major). The sustained dominant creates mounting tension — the bass is begging to resolve to C but the upper voices keep wandering. When the bass finally moves to the tonic, the release is cathartic.",
    tags: ["slash chord", "pedal", "tension", "dominant", "build"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["G2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["G2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C2", "C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "slash-chord-first-inversion-chain",
    name: "First Inversion Chain",
    category: "progressions",
    description:
      "A sequence of chords all in first inversion — the 3rd in the bass. This puts every chord's bass note a third apart from the root, creating a smooth, connected bass line that glides between chords. Medieval fauxbourdon evolved into this. The sound is gentle, hymn-like, and inevitable.",
    tags: ["slash chord", "inversion", "fauxbourdon", "voice-leading", "smooth"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["F2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["G2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A2", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-second-inversion",
    name: "Second Inversion Color Chords",
    category: "harmonic-devices",
    description:
      "A chord with its 5th in the bass — the most unstable inversion. In classical theory it's restricted, but in pop, jazz, and film scoring, second inversions are color tools. C/G sounds like a G chord with upper extensions. The ambiguity is the point — is it C or G? Both. Neither. Beautiful.",
    tags: ["slash chord", "inversion", "ambiguous", "harmonic color", "jazz"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["B2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "F3", "A3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-tritone-bass",
    name: "Tritone Bass Substitution",
    category: "harmonic-devices",
    description:
      "Placing a chord over a bass note a tritone away — like C/F# or Dm7/Ab. The tritone bass creates maximum dissonance and gravitational pull. It's how jazz musicians reharmonize on the fly: any chord can be darkened by dropping its bass a tritone. The resulting slash chord implies a completely different dominant function.",
    tags: ["slash chord", "tritone sub", "jazz", "reharmonization", "tension"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["Ab2", "D3", "F3", "B3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-maj-over-min",
    name: "Major Triad Over Minor Bass",
    category: "harmonic-devices",
    description:
      "A major triad played over an unrelated minor-sounding bass note — like C/A (Am7 implied), Eb/C (Cm with a dark upper structure), or G/E (Em7 implied). The major triad brings brightness while the minor bass adds depth. This is how neo-soul and gospel create those lush, ambiguous voicings.",
    tags: ["slash chord", "voicing", "neo-soul", "gospel", "ambiguous"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["E2", "G3", "B3", "D4"], duration: "2n" },
        { notes: ["D2", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-bass-contrary",
    name: "Contrary Motion Bass Line",
    category: "progressions",
    description:
      "The melody or upper voices move in one direction while the bass moves in the opposite direction, creating slash chords at every intersection. The widening gap between voices creates a sense of expansion; the narrowing gap creates urgency. The oldest trick in counterpoint, now powered by slash chord notation.",
    tags: ["slash chord", "contrary motion", "voice-leading", "counterpoint", "classical"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["B2", "F3", "A3", "D4"], duration: "2n" },
        { notes: ["Bb2", "G3", "Bb3", "E4"], duration: "2n" },
        { notes: ["A2", "A3", "C4", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "slash-chord-iv-over-v",
    name: "IV/V (Subdominant Over Dominant Bass)",
    category: "harmonic-devices",
    description:
      "The IV chord played over the 5th scale degree in the bass — F/G in C major. This creates a Vsus4 or V11 sound without explicitly naming it. The subdominant upper structure softens the dominant's aggressiveness. Used constantly in pop, R&B, and film to create a 'floating dominant' that resolves gently.",
    tags: ["slash chord", "dominant", "subdominant", "pop", "rnb", "film"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["G2", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G2", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-slash-chord-descent",
    name: "I → V/7 → vi → IV/3 (Smooth Bass Descent)",
    category: "progressions",
    description:
      "The pop four-chord progression with inversions chosen to create a smooth descending bass line: C→B→A→A (or C→B→A→F with F/A). Every chord connects to the next by step or semitone in the bass. This is why some pop songs feel effortless — the chords are simple but the bass voice-leads like Bach.",
    tags: ["slash chord", "descending", "pop", "voice-leading", "smooth"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["B2", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
        { notes: ["A2", "C3", "F3", "A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "prog-slash-chord-ascent",
    name: "I/3 → IV → V/7 → I (Ascending Bass Line)",
    category: "progressions",
    description:
      "Inversions chosen to create a rising bass: E→F→B→C (in C major). The ascending bass builds energy and forward motion even though the chords themselves are completely diatonic. The secret weapon for verses that need to build into a chorus without getting harmonically complex.",
    tags: ["slash chord", "ascending", "pop", "voice-leading", "build"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["B2", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },

  // ── Collaborative Build: E Minor Cinematic Journey ────────
  {
    id: "prog-em-cinematic-journey",
    name: "E Minor Cinematic Journey (Line Cliché → Major Pivot → ii-V Cycles)",
    category: "progressions",
    description:
      "A 28-chord through-composed journey built by chaining concepts together. Opens with a line cliché — the inner voice chromatically descends D#→D→C#→C over an E pedal, creating movement within stillness. Steps through the relative major via secondary dominants (D9→Gmaj7, F#7b9→Bm7). A passing diminished chord (Bb°7) bridges Bm down to Am. The pivot: Bmaj7/D# reveals B as MAJOR for the first time, and Emaj9/G# confirms — we're suddenly in E major. The brightness lingers through F#m11 and A/C#, then another passing diminished (A#°7) pulls us back to minor. Cmaj7 glows as a chromatic neighbor before F#m7b5→B7sus4→B7 locks the minor ii-V. Resolution cycles through slash chords (Em/G, Cmaj7/E) echoing the opening, with B7/D# delivering the final push home to Em9.",
    tags: ["line cliché", "major-minor ambiguity", "passing chords", "slash chord", "chromatic", "voice-leading", "cinematic", "film", "secondary dominant"],
    audio: {
      tempo: 66,
      events: [
        // Section A: Line cliché (D#→D→C#→C over E pedal)
        { notes: ["E2", "G3", "B3", "D#4"], duration: "1n" },
        { notes: ["E2", "G3", "B3", "D4"], duration: "1n" },
        { notes: ["E2", "G3", "B3", "C#4"], duration: "1n" },
        { notes: ["E2", "G3", "B3", "C4"], duration: "1n" },
        // Section B: Stepping toward relative major
        { notes: ["A2", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D2", "F#3", "A3", "C4", "E4"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "F#3"], duration: "2n" },
        { notes: ["F#2", "A#2", "E3", "G3"], duration: "2n" },
        // Section C: Chromatic tension → surprise
        { notes: ["B2", "D3", "F#3", "A3"], duration: "2n" },
        { notes: ["Bb2", "Db3", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["F#2", "D3", "A3", "C4"], duration: "2n" },
        { notes: ["G2", "D3", "F#3", "B3"], duration: "2n" },
        { notes: ["D#2", "B2", "F#3", "A#3"], duration: "1n" },
        // Section D: Major/minor pivot
        { notes: ["G#2", "B2", "D#3", "F#3"], duration: "1n" },
        { notes: ["F#2", "A2", "E3", "B3"], duration: "2n" },
        { notes: ["C#3", "E3", "A3", "C#4"], duration: "2n" },
        { notes: ["A#2", "C#3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "F#3", "A3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["F#2", "A2", "C3", "E3"], duration: "2n" },
        { notes: ["B2", "E3", "F#3", "A3"], duration: "2n" },
        // Section E: Resolution cycle
        { notes: ["B2", "D#3", "F#3", "A3"], duration: "2n" },
        { notes: ["G2", "B2", "E3", "G3"], duration: "2n" },
        { notes: ["E2", "G3", "B3", "C4"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["D#3", "F#3", "A3", "B3"], duration: "2n" },
        { notes: ["E2", "G3", "B3", "D4", "F#4"], duration: "1n" },
      ],
    },
  },

  // ── Gap-Fill: Chromatic Neighbors & Harmonic Momentum ─────
  {
    id: "chromatic-neighbor-chord",
    name: "Chromatic Neighboring Chord",
    category: "harmonic-devices",
    description:
      "Any chord a half step above or below the target used as an embellishment — the target leaves, visits its chromatic neighbor, and returns. Unlike passing chords (which keep going), neighbor chords come home. I → bII → I is a lower chromatic neighbor (the Neapolitan rocking motion); I → #Imaj7 → ii is an upper chromatic approach that blurs into voice leading. Snarky Puppy, Louis Cole, and Shimomura all use chromatic neighbors to add color without changing the underlying harmonic function — the chord never really left, it just shimmered.",
    tags: ["chromatic", "neighbor", "embellishing", "harmonic color", "voice-leading"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "Db4"], duration: "4n" },
        { notes: ["D3", "F3", "A3", "C4"], duration: "2n." },
      ],
    },
  },
  {
    id: "harmonic-momentum",
    name: "Harmonic Momentum",
    category: "harmonic-devices",
    description:
      "The forces that propel harmony forward — or deliberately stall it. Root motion by falling fifth is the strongest engine (ii→V→I, circle progressions). Secondary dominants stack momentum by chaining dominant-to-tonic resolutions. Rising bass lines build energy; falling bass lines release it. Accelerating harmonic rhythm compresses changes closer together, creating urgency. Conversely, pedal points, plagal motion, and modal vamps reduce momentum intentionally. The contrast between sections of high and low momentum is what makes arrangement feel alive — Louis Cole's writing constantly shifts between frantic harmonic acceleration and sudden static vamps. Understanding momentum means knowing not just which chords to use, but how fast to change them and where to let the music breathe.",
    tags: ["harmonic rhythm", "forward motion", "momentum", "arrangement", "tension"],
    audio: {
      tempo: 100,
      events: [
        { notes: ["D3", "F3", "A3", "C4"], duration: "1n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "G3"], duration: "4n" },
        { notes: ["D3", "F#3", "A3", "C4"], duration: "4n" },
        { notes: ["G2", "B2", "D3", "F3"], duration: "4n" },
        { notes: ["C3", "E3", "G3"], duration: "2n." },
      ],
    },
  },

  // ── Voice Leading ─────────────────────────────────────────
  {
    id: "vl-common-tone",
    name: "Common-Tone Voice Leading",
    category: "voice-leading",
    description:
      "When two chords share one or more notes, hold those notes in the same voice and move only the voices that need to change. C major (C-E-G) to A minor (A-C-E) shares C and E — only G moves to A. The shared notes create continuity while the moving voice provides harmonic change. The foundation of all smooth voice leading.",
    tags: ["voice-leading", "common tone", "smooth", "fundamental"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["C3", "E3", "A3", "C4"], duration: "2n" },
        { notes: ["C3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["B2", "F3", "G3", "B3"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-stepwise-motion",
    name: "Stepwise Voice Leading",
    category: "voice-leading",
    description:
      "Every voice moves by step (half or whole step) or stays put — no leaps. The smoothest possible connection between any two chords. When all four voices move by step, chord changes feel like a continuous flow rather than discrete jumps. This is why jazz voicings sound so liquid compared to block strumming.",
    tags: ["voice-leading", "stepwise", "smooth", "jazz", "fundamental"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["B2", "D3", "F3", "A3"], duration: "2n" },
        { notes: ["Bb2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["A2", "C3", "E3", "A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-contrary-motion",
    name: "Contrary Motion",
    category: "voice-leading",
    description:
      "Two voices move in opposite directions — one ascending while the other descends. Creates a sense of expansion (voices diverging) or compression (voices converging). The most independent-sounding voice relationship. Bach uses it constantly. In film scoring, converging voices build tension; diverging voices release it.",
    tags: ["voice-leading", "contrary motion", "counterpoint", "independence"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "C4"], duration: "2n" },
        { notes: ["D3", "D4"], duration: "2n" },
        { notes: ["C3", "E4"], duration: "2n" },
        { notes: ["B2", "F4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-parallel-motion",
    name: "Parallel Motion",
    category: "voice-leading",
    description:
      "Two or more voices move in the same direction by the same interval — parallel thirds, parallel sixths, or parallel triads. Classical theory restricts parallel fifths and octaves, but parallel thirds and sixths sound lush and are used everywhere. Debussy broke the rules with parallel fifths and it sounded incredible.",
    tags: ["voice-leading", "parallel", "thirds", "sixths", "debussy"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3"], duration: "2n" },
        { notes: ["D3", "F3"], duration: "2n" },
        { notes: ["E3", "G3"], duration: "2n" },
        { notes: ["F3", "A3"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-oblique-motion",
    name: "Oblique Motion",
    category: "voice-leading",
    description:
      "One voice holds a note while the other voice moves. The stationary voice becomes an anchor — a reference point that makes the moving voice's motion feel deliberate. Pedal tones are oblique motion taken to the extreme. It's how you create harmonic change while maintaining continuity.",
    tags: ["voice-leading", "oblique", "pedal", "anchor", "continuity"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "G3"], duration: "2n" },
        { notes: ["C3", "A3"], duration: "2n" },
        { notes: ["C3", "B3"], duration: "2n" },
        { notes: ["C3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-voice-crossing",
    name: "Voice Crossing",
    category: "voice-leading",
    description:
      "A lower voice temporarily moves above a higher voice, or vice versa. The voices swap registers, creating a brief moment of timbral ambiguity. Used sparingly it adds interest; used carelessly it creates mud. Jazz pianists cross voices constantly in their voicings — the alto voice dips below the tenor for one chord, then comes back.",
    tags: ["voice-leading", "crossing", "voicing", "jazz", "texture"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["E3", "G3", "C4"], duration: "2n" },
        { notes: ["F3", "A3", "D4"], duration: "2n" },
        { notes: ["A3", "F3", "C4"], duration: "2n" },
        { notes: ["G3", "E3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-chromatic-voice-leading",
    name: "Chromatic Voice Leading",
    category: "voice-leading",
    description:
      "Voices move by half step between chords, even when the chords themselves aren't chromatically related. Cmaj7 (C-E-G-B) to Dbmaj7 (Db-F-Ab-C): every voice shifts up one semitone. The smallest possible motion creates the biggest harmonic surprise. This is how Coltrane changes and chromatic mediants actually work at the voice level.",
    tags: ["voice-leading", "chromatic", "semitone", "coltrane", "surprise"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["Db3", "F3", "Ab3", "C4"], duration: "2n" },
        { notes: ["D3", "F#3", "A3", "C#4"], duration: "2n" },
        { notes: ["Eb3", "G3", "Bb3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-drop-2-voicing",
    name: "Drop 2 Voicings",
    category: "voice-leading",
    description:
      "Take a close-position chord and drop the second-highest note down an octave. Cmaj7 close (B-C-E-G) becomes Drop 2 (E-B-C-G). This opens up the voicing, puts it in a guitar/piano-friendly range, and creates beautiful voice leading between chords. The standard jazz guitar and piano voicing technique.",
    tags: ["voice-leading", "voicing", "drop 2", "jazz", "guitar"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E3", "B3", "C4", "G4"], duration: "2n" },
        { notes: ["D3", "A3", "B3", "F4"], duration: "2n" },
        { notes: ["C3", "G3", "A3", "E4"], duration: "2n" },
        { notes: ["B2", "F3", "G3", "D4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-close-vs-open",
    name: "Close vs Open Position",
    category: "voice-leading",
    description:
      "Close position: all chord tones within one octave (C-E-G-B). Open position: spread across more than an octave (C-G-B-E). Close position sounds dense and punchy. Open position sounds spacious and orchestral. The same four notes feel completely different depending on how far apart you spread them. Arrangers switch between the two for contrast.",
    tags: ["voice-leading", "voicing", "close position", "open position", "arranging"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "B3"], duration: "4n" },
        { notes: ["C3", "G3", "B3", "E4"], duration: "2n" },
        { notes: ["C3", "G3", "B3", "E4"], duration: "4n" },
      ],
    },
  },
  {
    id: "vl-resolution-tendency",
    name: "Tendency Tones & Resolution",
    category: "voice-leading",
    description:
      "Certain notes want to resolve in specific directions: the leading tone (7th degree) pulls up to the tonic, the 4th degree pulls down to the 3rd, the tritone in a dominant 7th wants to resolve inward or outward. Understanding these tendencies lets you either satisfy them (resolution) or deny them (surprise). Every musical emotion lives in this tension.",
    tags: ["voice-leading", "resolution", "tendency", "tension-release", "fundamental"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["B2", "D3", "F3", "B3"], duration: "2n" },
        { notes: ["C3", "C3", "E3", "C4"], duration: "2n" },
        { notes: ["G2", "B2", "F3", "G3"], duration: "2n" },
        { notes: ["C3", "C3", "E3", "G3"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-suspension-resolution",
    name: "Suspension & Resolution (4-3, 7-6, 9-8)",
    category: "voice-leading",
    description:
      "Hold a note from the previous chord while the other voices change, creating a dissonance that then resolves by step. A 4-3 suspension holds the 4th over a new chord then drops to the 3rd. The moment of friction before resolution is what makes suspensions so expressive — you feel the pull.",
    tags: ["voice-leading", "suspension", "resolution", "dissonance", "tension-release"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "F3", "A3", "C4"], duration: "2n" },
        { notes: ["G2", "F3", "G3", "D4"], duration: "2n" },
        { notes: ["G2", "E3", "G3", "D4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-retardation",
    name: "Retardation (Upward Suspension)",
    category: "voice-leading",
    description:
      "Like a suspension but the held note resolves upward instead of downward. The 7th holds over and resolves up to the octave (7-8), or the 2nd resolves up to the 3rd. Less common than downward suspensions, so it sounds slightly unexpected. Creates an uplifting, yearning quality — the voice is reaching up to its resolution.",
    tags: ["voice-leading", "retardation", "suspension", "resolution", "yearning"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "B2", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "vl-anticipation",
    name: "Anticipation",
    category: "voice-leading",
    description:
      "A note from the next chord arrives early — before the other voices change. The opposite of a suspension: instead of holding the old note too long, one voice jumps to the new note too soon. Creates a sense of eagerness and forward pull. Common in pop melodies and gospel piano where the melody anticipates the chord change.",
    tags: ["voice-leading", "anticipation", "forward motion", "pop", "gospel"],
    audio: {
      tempo: 76,
      events: [
        { notes: ["F3", "A3", "C4"], duration: "4n" },
        { notes: ["F3", "A3", "B3"], duration: "4n" },
        { notes: ["E3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },

  // ── Inversions ────────────────────────────────────────────
  {
    id: "inv-root-position",
    name: "Root Position (5/3)",
    category: "voice-leading",
    description:
      "The root of the chord is in the bass. The most stable, grounded sound — the chord is 'standing on its own feet.' Root position chords define key centers and create strong bass lines. When you want clarity and authority, root position is the default. But using it for every chord makes the bass line jumpy.",
    tags: ["inversion", "root position", "stable", "bass", "fundamental"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["F3", "A3", "C4", "F4"], duration: "2n" },
        { notes: ["G3", "B3", "D4", "G4"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "inv-first-inversion",
    name: "First Inversion (6/3)",
    category: "voice-leading",
    description:
      "The 3rd of the chord is in the bass. Lighter and less grounded than root position — the chord floats. First inversions are the voice leading workhorse: they let you create smooth, stepwise bass lines between chords. C/E → F → G/B → C gives you a rising bass (E-F-G-C) instead of jumps (C-F-G-C).",
    tags: ["inversion", "first inversion", "slash chord", "bass", "voice-leading"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["B2", "D3", "G3", "B3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "inv-second-inversion",
    name: "Second Inversion (6/4)",
    category: "voice-leading",
    description:
      "The 5th of the chord is in the bass. Inherently unstable — the bass note doesn't feel like the root, creating ambiguity. In classical theory, second inversions are restricted to three specific uses: cadential (I6/4 before V), passing (between two positions of the same chord), and pedal (over a held bass). In pop and jazz, that instability is a feature, not a bug.",
    tags: ["inversion", "second inversion", "unstable", "ambiguous", "cadential"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["G2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "1n" },
      ],
    },
  },
  {
    id: "inv-third-inversion",
    name: "Third Inversion (4/2)",
    category: "voice-leading",
    description:
      "The 7th of a seventh chord is in the bass — like Cmaj7/B or G7/F. The most dissonant inversion because the bass note forms a half step or whole step against the root above it. That friction makes third inversions incredibly useful as passing chords: the bass wants to resolve down by step, pulling the harmony forward.",
    tags: ["inversion", "third inversion", "seventh chord", "passing chords", "tension"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["F2", "G2", "B2", "D3"], duration: "2n" },
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["B2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "inv-choosing-inversions",
    name: "Choosing Inversions for Bass Lines",
    category: "voice-leading",
    description:
      "The art of picking which inversion of each chord creates the best bass line. The same I→IV→V→I progression sounds completely different with bass lines C-F-G-C (all root) vs. C-C-B-C (common tone + step) vs. E-F-G-C (ascending). The chords are identical — only the bass voice changes. This is why arrangers think in bass lines, not just chord symbols.",
    tags: ["inversion", "bass", "voice-leading", "arranging", "slash chord"],
    audio: {
      tempo: 72,
      events: [
        { notes: ["E2", "C3", "E3", "G3"], duration: "2n" },
        { notes: ["F2", "A2", "C3", "F3"], duration: "2n" },
        { notes: ["G2", "B2", "D3", "G3"], duration: "2n" },
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-parsimonious",
    name: "Parsimonious Voice Leading (Neo-Riemannian)",
    category: "voice-leading",
    description:
      "Moving between chords by changing just one note by one semitone. C major (C-E-G) → C minor (C-Eb-G) → Ab major (C-Eb-Ab) → Ab minor (Cb-Eb-Ab). Each chord is one note away from the next, but the harmonic distance traveled is enormous. This is how film composers move between distant keys without it sounding random — every step is tiny but the journey is vast.",
    tags: ["voice-leading", "neo-riemannian", "chromatic", "film", "transformation"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "G3"], duration: "2n" },
        { notes: ["C3", "Eb3", "Ab3"], duration: "2n" },
        { notes: ["B2", "Eb3", "Ab3"], duration: "2n" },
      ],
    },
  },
  {
    id: "vl-voice-exchange",
    name: "Voice Exchange",
    category: "voice-leading",
    description:
      "Two voices swap notes: the bass takes the soprano's note while the soprano takes the bass's note. In C major: bass goes C→E while soprano goes E→C, or bass C→G while soprano G→C. The chord stays the same but the voicing inverts. Creates smooth motion with zero harmonic change — pure voice-leading elegance.",
    tags: ["voice-leading", "exchange", "inversion", "counterpoint", "elegant"],
    audio: {
      tempo: 68,
      events: [
        { notes: ["C3", "E3", "G3", "C4"], duration: "2n" },
        { notes: ["E3", "E3", "G3", "G3"], duration: "4n" },
        { notes: ["E3", "E3", "G3", "C4"], duration: "4n" },
        { notes: ["E2", "C3", "G3", "C4"], duration: "2n" },
      ],
    },
  },
];

export const concepts: Concept[] = _concepts.map((c) =>
  c.category === "progressions" && PROGRESSION_NOVELTY[c.id] !== undefined
    ? { ...c, novelty: PROGRESSION_NOVELTY[c.id] }
    : c
);
