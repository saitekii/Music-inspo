import { useEffect, useRef } from "react";

interface ContrastPair {
  a: string;
  b: string;
  desc: string;
  ex: string;
}

interface ContrastCategory {
  icon: string;
  title: string;
  items: ContrastPair[];
}

const CONTRAST_DATA: ContrastCategory[] = [
  { icon: "🔊", title: "Dynamics", items: [
    { a: "Loud", b: "Soft", desc: "The most immediate contrast. Full band fortissimo dropping to a solo whisper.", ex: "Pixies quiet-loud-quiet, Mahler's subito piano" },
    { a: "Subito forte", b: "Subito piano", desc: "Instant volume jumps without transition — the shock factor.", ex: "Beethoven's Eroica, hardcore breakdowns" },
    { a: "Crescendo", b: "Decrescendo", desc: "Gradual builds and fades create anticipation and release.", ex: "Ravel's Bolero, post-rock builds" },
    { a: "Terraced", b: "Gradual", desc: "Baroque-style instant level shifts vs. smooth dynamic curves.", ex: "Harpsichord concerto vs. orchestral swell" },
    { a: "Compressed", b: "Dynamic", desc: "Flat loudness vs. wide dynamic range — felt more than heard.", ex: "Modern pop master vs. jazz trio recording" },
    { a: "Accented", b: "Ghost notes", desc: "Hard-hit notes against barely-there touches in the same phrase.", ex: "Funk drumming, Jaco Pastorius bass lines" },
  ]},
  { icon: "⏱️", title: "Tempo and time", items: [
    { a: "Fast", b: "Slow", desc: "Shifting speed between sections. The half-time breakdown. The double-time solo.", ex: "Metalcore half-time breakdowns, jazz trading fours" },
    { a: "Rubato", b: "Strict time", desc: "Free, expressive timing against locked-in metronomic feel.", ex: "Chopin rubato into march sections" },
    { a: "Metric modulation", b: "Steady pulse", desc: "The tempo shifts but a subdivision stays constant — disorienting and exciting.", ex: "Tool, Meshuggah, Stravinsky" },
    { a: "Accelerando", b: "Ritardando", desc: "Speeding up or slowing down to push energy forward or pull it back.", ex: "Romantic cadenzas, drum fills speeding into chorus" },
    { a: "Straight", b: "Swung", desc: "Rigid subdivision vs. lopsided shuffle feel in the same tune.", ex: "Fusion tunes switching feel mid-song" },
    { a: "Free time", b: "In tempo", desc: "Unmetered atmospheric intro dissolving into a locked groove.", ex: "NieR: Automata intros, jazz ballad rubato heads" },
  ]},
  { icon: "🥁", title: "Rhythm and meter", items: [
    { a: "On the beat", b: "Syncopated", desc: "Predictable downbeat emphasis vs. displaced, off-beat accents.", ex: "Four-on-the-floor vs. funk upbeats" },
    { a: "Simple meter", b: "Complex meter", desc: "4/4 comfort vs. 7/8 or 5/4 unease. Switching between them is electric.", ex: "Dave Brubeck's Take Five, Radiohead's 15 Step" },
    { a: "Polyrhythm", b: "Unison rhythm", desc: "Multiple conflicting rhythmic layers vs. everyone hitting the same pattern.", ex: "Afrobeat polyrhythm into unison hits" },
    { a: "Busy", b: "Sparse", desc: "Hyperactive sixteenth-note runs vs. whole notes with space.", ex: "Chick Corea vs. Miles Davis" },
    { a: "Regular phrase", b: "Irregular phrase", desc: "4-bar and 8-bar norms vs. 5, 7, or 3-bar phrases that keep you guessing.", ex: "Owane's odd-length riffs" },
    { a: "Groove", b: "No groove", desc: "Rhythmic momentum vs. suspended, floating, pulse-free passages.", ex: "Funk vamp into ambient interlude" },
  ]},
  { icon: "💎", title: "Harmony", items: [
    { a: "Consonant", b: "Dissonant", desc: "Sweet, resolved chords vs. crunchy, tension-filled ones.", ex: "Major triad vs. b9 cluster, Counterparts' clean vs. heavy" },
    { a: "Major", b: "Minor", desc: "Bright vs. dark — the most fundamental harmonic color shift.", ex: "Picardy third, parallel major/minor toggle" },
    { a: "Diatonic", b: "Chromatic", desc: "Staying in key vs. slipping outside it. Comfort vs. surprise.", ex: "Pop verse vs. jazz reharmonization" },
    { a: "Simple chords", b: "Extended chords", desc: "Triads vs. 9ths, 11ths, 13ths — clean vs. lush.", ex: "Power chords into neo-soul voicings" },
    { a: "Expected resolution", b: "Deceptive resolution", desc: "V–I vs. V–vi or V–bVI. The rug pull.", ex: "Deceptive cadence, Coltrane substitutions" },
    { a: "Tonal", b: "Atonal", desc: "Key center vs. no key center. Ground vs. freefall.", ex: "Radiohead, late Coltrane, Schoenberg" },
    { a: "Modal", b: "Functional", desc: "Static modal color vs. directed chord progressions pulling to a tonic.", ex: "Dorian vamp vs. ii-V-I" },
    { a: "Borrowed chord", b: "Diatonic chord", desc: "Modal interchange sneaks in color from parallel modes.", ex: "bVI in a major key, Radiohead's use of bIII" },
  ]},
  { icon: "🎵", title: "Melody", items: [
    { a: "Stepwise", b: "Leaps", desc: "Smooth conjunct motion vs. dramatic interval jumps.", ex: "Gregorian chant vs. Coltrane's wide intervals" },
    { a: "High register", b: "Low register", desc: "Soaring melodies vs. deep bass lines — range as drama.", ex: "Soprano sax vs. baritone, falsetto vs. chest voice" },
    { a: "Legato", b: "Staccato", desc: "Connected, flowing lines vs. short, detached notes.", ex: "Cello melody vs. pizzicato passage" },
    { a: "Simple", b: "Ornate", desc: "Clean, singable melody vs. embellished, virtuosic runs.", ex: "Theme statement vs. variation, head vs. solo" },
    { a: "Vocal melody", b: "Instrumental melody", desc: "Human voice vs. instrument carrying the line — different emotional weight.", ex: "NieR's wordless vocal into orchestra" },
    { a: "Repetitive motif", b: "Through-composed", desc: "Obsessive loops vs. ever-changing melody.", ex: "Ostinato vs. Romantic-era through-composed theme" },
  ]},
  { icon: "🌊", title: "Texture and density", items: [
    { a: "Thick", b: "Thin", desc: "Full ensemble saturation vs. a single instrument exposed.", ex: "Orchestra tutti into solo oboe" },
    { a: "Homophonic", b: "Polyphonic", desc: "All parts moving together vs. independent contrapuntal voices.", ex: "Hymn chorale vs. Bach fugue" },
    { a: "Unison", b: "Harmony", desc: "Everyone on the same note vs. spread out in intervals.", ex: "Metal unison riff into harmonized guitar leads" },
    { a: "Solo", b: "Ensemble", desc: "One voice alone vs. the full group. Intimacy vs. power.", ex: "Jazz trio trading solos, concerto form" },
    { a: "Additive layers", b: "Subtractive stripping", desc: "Building up instruments one by one vs. peeling them away.", ex: "Bolero's additive orchestration, breakdown sections" },
    { a: "Rhythmic unison", b: "Rhythmic independence", desc: "All parts locking vs. each doing their own thing.", ex: "Hocket, Steve Reich phasing" },
  ]},
  { icon: "🎨", title: "Timbre and tone color", items: [
    { a: "Bright", b: "Dark", desc: "High-harmonic sparkle vs. warm, filtered, fundamental-heavy sound.", ex: "Bridge pickup vs. neck pickup, muted trumpet vs. open" },
    { a: "Acoustic", b: "Electronic", desc: "Organic instrument sound vs. synthesized textures.", ex: "NieR's orchestral-electronic hybrid, Deathbrain" },
    { a: "Clean", b: "Distorted", desc: "Pure signal vs. harmonic saturation, grit, or fuzz.", ex: "Clean arpeggios into heavy distortion" },
    { a: "Wet", b: "Dry", desc: "Reverb/delay-drenched vs. close and intimate.", ex: "Shoegaze wash vs. dry funk guitar" },
    { a: "Warm", b: "Cold", desc: "Analog warmth vs. digital precision or metallic edge.", ex: "Tape saturation vs. crystal-clear digital" },
    { a: "Familiar", b: "Alien", desc: "Recognizable instruments vs. processed-beyond-recognition textures.", ex: "Death's Dynamic Shroud, granular synthesis" },
    { a: "Sustain", b: "Percussive", desc: "Held, singing tones vs. sharp transient attacks.", ex: "Pad synth vs. marimba, bowed vs. plucked strings" },
  ]},
  { icon: "🏛️", title: "Form and structure", items: [
    { a: "Verse energy", b: "Chorus energy", desc: "Restrained storytelling vs. explosive emotional payoff.", ex: "Nearly every pop and rock song" },
    { a: "Bridge", b: "Everything else", desc: "The deliberate departure — new key, new feel, new texture.", ex: "Beatles bridges, anime OP key change bridges" },
    { a: "Breakdown", b: "Full arrangement", desc: "Stripping to drums and bass before the full band crashes back.", ex: "Funk breakdowns, EDM drops, metalcore breakdowns" },
    { a: "Intro", b: "Climax", desc: "The journey from opening statement to peak intensity.", ex: "Mahler symphonic arcs, post-rock crescendos" },
    { a: "Repetition", b: "Variation", desc: "Establishing a pattern then subverting it — the setup and payoff.", ex: "Theme and variations form, progressive development" },
    { a: "Predictable form", b: "Surprising form", desc: "Standard AABA vs. unexpected section orders or lengths.", ex: "Radiohead, prog rock suites" },
  ]},
  { icon: "🎤", title: "Vocal techniques", items: [
    { a: "Singing", b: "Speaking", desc: "Pitched melody vs. spoken word, rap, or Sprechstimme.", ex: "Kendrick Lamar, musical theater recitative" },
    { a: "Chest voice", b: "Falsetto", desc: "Full, grounded tone vs. airy, ethereal head voice.", ex: "Louis Cole's vocal range, Prince" },
    { a: "Solo voice", b: "Choir", desc: "Intimate individual expression vs. massive choral power.", ex: "NieR's solo-to-choir transitions" },
    { a: "Lyrics", b: "Wordless vocals", desc: "Semantic meaning vs. pure vocal texture and emotion.", ex: "SERAPHINE NOIR, NieR's Emi Evans vocals" },
    { a: "Harmony vocals", b: "Unison vocals", desc: "Stacked harmonies vs. everyone on the same pitch.", ex: "Beach Boys harmonies vs. unison gang vocals" },
  ]},
  { icon: "↕️", title: "Register and range", items: [
    { a: "Wide voicing", b: "Close voicing", desc: "Notes spread across octaves vs. clustered together.", ex: "Open jazz voicings vs. cluster chords" },
    { a: "Bass drop", b: "High climax", desc: "Plunging to the lowest register vs. soaring to the highest.", ex: "808 drops, soprano climax in opera" },
    { a: "Register shift", b: "Same register", desc: "Moving the same melody to a completely different octave.", ex: "Orchestral octave doublings, bass solo in high register" },
    { a: "Narrow range", b: "Wide range", desc: "Melody contained in a few notes vs. spanning multiple octaves.", ex: "Chant-like melody vs. virtuosic arpeggio sweep" },
  ]},
  { icon: "🎧", title: "Production and space", items: [
    { a: "Wide stereo", b: "Mono center", desc: "Panoramic spread vs. focused center image.", ex: "Stereo chorus guitars collapsing to mono riff" },
    { a: "Reverberant", b: "Intimate/close", desc: "Cathedral-size space vs. whisper-in-your-ear proximity.", ex: "Ambient section into dry spoken word" },
    { a: "Lo-fi", b: "Hi-fi", desc: "Degraded, filtered, warm sound vs. pristine clarity.", ex: "Lo-fi hip hop intros, vaporwave processing" },
    { a: "Filtered", b: "Full spectrum", desc: "Frequency-restricted sound opening up to full bandwidth.", ex: "EDM filter sweeps, DJ builds" },
    { a: "Silence", b: "Sound", desc: "The most powerful contrast of all. Nothing vs. everything.", ex: "Grand pauses, fermata rests before final chord" },
  ]},
  { icon: "❤️", title: "Emotional and narrative", items: [
    { a: "Tension", b: "Release", desc: "Building unresolved energy vs. satisfying resolution.", ex: "Dominant 7th resolving to tonic, suspension resolving" },
    { a: "Dark", b: "Light", desc: "Ominous, heavy mood vs. bright, hopeful mood.", ex: "Minor key verse into major chorus" },
    { a: "Aggressive", b: "Tender", desc: "Raw power and intensity vs. gentle vulnerability.", ex: "Counterparts' heavy vs. clean sections" },
    { a: "Playful", b: "Serious", desc: "Lighthearted, quirky energy vs. weighty gravitas.", ex: "Louis Cole's humor vs. emotional depth" },
    { a: "Familiar", b: "Foreign", desc: "Musically 'home' vs. somewhere unexpected and new.", ex: "Tonic key vs. distant modulation, genre-splicing" },
    { a: "Nostalgia", b: "Futurism", desc: "Retro sounds and references vs. cutting-edge, unfamiliar textures.", ex: "City pop revival into glitch production" },
  ]},
  { icon: "🌍", title: "Genre and style juxtaposition", items: [
    { a: "Genre A", b: "Genre B", desc: "Smashing two worlds together in one piece. The genre splice.", ex: "SERAPHINE NOIR's jazz-VGM fusion, Knower's jazz-EDM" },
    { a: "Traditional", b: "Modern", desc: "Classical/acoustic tradition vs. contemporary production or technique.", ex: "Shimomura blending orchestral with electronic" },
    { a: "Eastern", b: "Western", desc: "Non-Western scales, instruments, or tuning vs. Western harmony.", ex: "Hirajoshi scale in a rock context, Arabic maqam in jazz" },
    { a: "Acoustic set", b: "Electric set", desc: "Unplugged section vs. full electric band.", ex: "MTV Unplugged format, Opeth's dual identity" },
  ]},
];

const TOTAL = CONTRAST_DATA.reduce((sum, c) => sum + c.items.length, 0);

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContrastModal({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="contrast-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="contrast-modal">
        <div className="contrast-header">
          <div>
            <h2 className="contrast-title">Contrast in music</h2>
            <span className="contrast-subtitle">{CONTRAST_DATA.length} categories, {TOTAL} techniques</span>
          </div>
          <button className="contrast-close" onClick={onClose} title="Close">
            &times;
          </button>
        </div>
        <div className="contrast-body">
          {CONTRAST_DATA.map((cat) => (
            <details key={cat.title} className="contrast-category">
              <summary className="contrast-cat-head">
                <span className="contrast-cat-icon">{cat.icon}</span>
                <span className="contrast-cat-title">{cat.title}</span>
                <span className="contrast-cat-count">{cat.items.length}</span>
              </summary>
              <div className="contrast-cat-body">
                {cat.items.map((pair) => (
                  <div key={pair.a + pair.b} className="contrast-pair">
                    <div className="contrast-poles">
                      <span className="contrast-pole">{pair.a}</span>
                      <span className="contrast-vs">vs</span>
                      <span className="contrast-pole">{pair.b}</span>
                    </div>
                    <div className="contrast-pair-text">
                      <div className="contrast-pair-desc">{pair.desc}</div>
                      <div className="contrast-pair-ex">{pair.ex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
