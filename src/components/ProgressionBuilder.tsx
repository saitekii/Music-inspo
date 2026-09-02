import { useCallback, useMemo, useRef, useState } from "react";
import * as Tone from "tone";
import {
  type BuilderChord,
  type ChordSuggestion,
  ROOTS,
  QUALITIES,
  chordName,
  chordsToAudio,
  generateVoicing,
  getDiatonicChords,
  suggestNext,
  semiToNote,
  getColorGroups,
  getBassOptions,
  lineClicheMinor,
  minorIiV,
  majorIiV,
  passingDimBelow,
  majorMinorFlip,
  secondaryDom,
} from "../utils/chordEngine";
import { useMidiExport } from "../hooks/useMidiExport";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DURATIONS = [
  { id: "4n", label: "Quarter" },
  { id: "2n", label: "Half" },
  { id: "1n", label: "Whole" },
  { id: "2n.", label: "Dotted half" },
];

const TECHNIQUES = [
  { id: "line-cliche", label: "Line Cliche (minor)", minor: true },
  { id: "minor-ii-v", label: "Minor ii-V", minor: true },
  { id: "major-ii-v", label: "Major ii-V", minor: false },
  { id: "passing-dim", label: "Passing Dim", minor: null },
  { id: "maj-min-flip", label: "Maj/Min Flip", minor: null },
  { id: "secondary-dom", label: "Secondary Dom V", minor: null },
];

export function ProgressionBuilder({ open, onClose }: Props) {
  const [chords, setChords] = useState<BuilderChord[]>([]);
  const [keyRoot, setKeyRoot] = useState("E");
  const [keyQuality, setKeyQuality] = useState<"major" | "minor">("minor");
  const [tempo, setTempo] = useState(72);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const [pickRoot, setPickRoot] = useState("E");
  const [pickQuality, setPickQuality] = useState("minor");
  const [pickBass, setPickBass] = useState("");
  const [pickDuration, setPickDuration] = useState("1n");

  const [colorStep, setColorStep] = useState<{ root: string; reason: string } | null>(null);
  const [colorBass, setColorBass] = useState("");
  const [recolorIdx, setRecolorIdx] = useState<number | null>(null);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);

  const synthRef = useRef<Tone.PolySynth | null>(null);
  const eventsRef = useRef<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [looping, setLooping] = useState(false);
  const loopingRef = useRef(false);
  const playAllRef = useRef<() => void>(() => {});
  const { exportMidi } = useMidiExport();

  const bassNotes = Array.from({ length: 12 }, (_, i) => semiToNote(i, keyRoot));

  const stopPlayback = useCallback(() => {
    for (const id of eventsRef.current) clearTimeout(id);
    eventsRef.current = [];
    synthRef.current?.releaseAll();
    setIsPlaying(false);
    setPlayingIdx(null);
  }, []);

  const playAll = useCallback(() => {
    if (chords.length === 0) return;
    stopPlayback();
    if (Tone.getContext().state !== "running") Tone.start();

    if (!synthRef.current) {
      synthRef.current = new Tone.PolySynth(Tone.Synth, {
        maxPolyphony: 12,
        voice: Tone.Synth,
        options: {
          oscillator: { type: "triangle8" },
          envelope: { attack: 0.05, decay: 0.3, sustain: 0.6, release: 0.8 },
          volume: -10,
        },
      }).toDestination();
    }

    const synth = synthRef.current;
    const audio = chordsToAudio(chords, tempo);
    const beatSec = 60 / tempo;
    const durMap: Record<string, number> = {
      "4n": 1,
      "2n": 2,
      "1n": 4,
      "2n.": 3,
    };

    setIsPlaying(true);
    setPlayingIdx(0);
    let offset = 0;
    const ids: number[] = [];
    audio.events.forEach((ev, idx) => {
      const durBeats = durMap[ev.duration] ?? 4;
      const durSec = durBeats * beatSec;
      const t = offset;
      ids.push(
        window.setTimeout(() => {
          setPlayingIdx(idx);
          synth.releaseAll();
          if (ev.notes.length > 0) {
            synth.triggerAttackRelease(ev.notes, durSec * 0.9);
          }
        }, t * 1000)
      );
      offset += durSec;
    });
    ids.push(window.setTimeout(() => {
      if (loopingRef.current) {
        playAllRef.current();
      } else {
        setIsPlaying(false);
        setPlayingIdx(null);
      }
    }, offset * 1000));
    eventsRef.current = ids;
  }, [chords, tempo, stopPlayback]);

  playAllRef.current = playAll;

  const playSingle = useCallback(
    (chord: BuilderChord) => {
      if (Tone.getContext().state !== "running") Tone.start();
      if (!synthRef.current) {
        synthRef.current = new Tone.PolySynth(Tone.Synth, {
          maxPolyphony: 12,
          voice: Tone.Synth,
          options: {
            oscillator: { type: "triangle8" },
            envelope: { attack: 0.05, decay: 0.3, sustain: 0.6, release: 0.8 },
            volume: -10,
          },
        }).toDestination();
      }
      const notes = generateVoicing(chord.root, chord.quality, chord.bass || undefined);
      if (notes.length > 0) {
        synthRef.current.releaseAll();
        synthRef.current.triggerAttackRelease(notes, "2n");
      }
    },
    []
  );

  const addChord = useCallback(() => {
    const newChord: BuilderChord = {
      root: pickRoot,
      quality: pickQuality,
      bass: pickBass,
      duration: pickDuration,
    };
    if (selectedIdx !== null) {
      setChords((prev) => {
        const next = [...prev];
        next.splice(selectedIdx + 1, 0, newChord);
        return next;
      });
      setSelectedIdx(selectedIdx + 1);
    } else {
      setChords((prev) => [...prev, newChord]);
    }
    playSingle(newChord);
  }, [pickRoot, pickQuality, pickBass, pickDuration, selectedIdx, playSingle]);

  const removeChord = useCallback(
    (idx: number) => {
      setChords((prev) => prev.filter((_, i) => i !== idx));
      if (selectedIdx === idx) setSelectedIdx(null);
      else if (selectedIdx !== null && idx < selectedIdx) setSelectedIdx(selectedIdx - 1);
    },
    [selectedIdx]
  );

  const applyTechnique = useCallback(
    (id: string) => {
      let generated: BuilderChord[] = [];
      const lastChord = chords.length > 0 ? chords[chords.length - 1] : null;

      switch (id) {
        case "line-cliche":
          generated = lineClicheMinor(keyRoot);
          break;
        case "minor-ii-v":
          generated = minorIiV(keyRoot);
          break;
        case "major-ii-v":
          generated = majorIiV(keyRoot);
          break;
        case "passing-dim":
          generated = passingDimBelow(lastChord?.root ?? keyRoot, keyRoot);
          break;
        case "maj-min-flip":
          generated = majorMinorFlip(keyRoot);
          break;
        case "secondary-dom": {
          const nextRoot = lastChord?.root ?? keyRoot;
          generated = secondaryDom(nextRoot, keyRoot);
          break;
        }
      }

      if (generated.length > 0) {
        if (selectedIdx !== null) {
          setChords((prev) => {
            const next = [...prev];
            next.splice(selectedIdx + 1, 0, ...generated);
            return next;
          });
          setSelectedIdx(selectedIdx + generated.length);
        } else {
          setChords((prev) => [...prev, ...generated]);
        }
      }
    },
    [chords, keyRoot, selectedIdx]
  );

  const handleExportMidi = useCallback(() => {
    if (chords.length === 0) return;
    exportMidi("Progression", chordsToAudio(chords, tempo));
  }, [chords, tempo, exportMidi]);

  const diatonic = getDiatonicChords(keyRoot, keyQuality);

  const lastChord = chords.length > 0 ? chords[chords.length - 1] : null;
  const suggestions = useMemo(
    () => suggestNext(lastChord, keyRoot, keyQuality),
    [lastChord?.root, lastChord?.quality, keyRoot, keyQuality]
  );

  const openColorStep = useCallback(
    (s: ChordSuggestion) => {
      setColorStep({ root: s.root, reason: s.reason });
      setColorBass(s.bass || "");
    },
    []
  );

  const colorGroups = useMemo(() => getColorGroups(), []);

  const addFromColor = useCallback(
    (quality: string) => {
      if (!colorStep) return;
      const chord: BuilderChord = {
        root: colorStep.root,
        quality,
        bass: colorBass,
        duration: pickDuration,
      };
      if (recolorIdx !== null) {
        setChords((prev) => {
          const next = [...prev];
          next[recolorIdx] = { ...next[recolorIdx], quality, bass: colorBass || next[recolorIdx].bass };
          return next;
        });
        playSingle({ ...chord, bass: colorBass || chords[recolorIdx]?.bass || "" });
        setRecolorIdx(null);
      } else {
        setChords((prev) => [...prev, chord]);
        playSingle(chord);
      }
      setColorStep(null);
      setColorBass("");
    },
    [colorStep, colorBass, pickDuration, playSingle, recolorIdx, chords]
  );

  const previewColor = useCallback(
    (quality: string) => {
      if (!colorStep) return;
      playSingle({ root: colorStep.root, quality, bass: colorBass, duration: pickDuration });
    },
    [colorStep, colorBass, pickDuration, playSingle]
  );

  const addDiatonic = useCallback(
    (root: string, quality: string) => {
      const chord: BuilderChord = { root, quality, bass: "", duration: pickDuration };
      if (selectedIdx !== null) {
        setChords((prev) => {
          const next = [...prev];
          next.splice(selectedIdx + 1, 0, chord);
          return next;
        });
        setSelectedIdx(selectedIdx + 1);
      } else {
        setChords((prev) => [...prev, chord]);
      }
      playSingle(chord);
    },
    [pickDuration, selectedIdx, playSingle]
  );

  const moveChord = useCallback(
    (idx: number, dir: -1 | 1) => {
      const target = idx + dir;
      if (target < 0 || target >= chords.length) return;
      setChords((prev) => {
        const next = [...prev];
        [next[idx], next[target]] = [next[target], next[idx]];
        return next;
      });
      if (selectedIdx === idx) setSelectedIdx(target);
      else if (selectedIdx === target) setSelectedIdx(idx);
    },
    [chords.length, selectedIdx]
  );

  if (!open) return null;

  const qualityGroups = new Map<string, typeof QUALITIES>();
  for (const q of QUALITIES) {
    if (!qualityGroups.has(q.group)) qualityGroups.set(q.group, []);
    qualityGroups.get(q.group)!.push(q);
  }

  return (
    <div className="builder-overlay" onClick={onClose}>
      <div className="builder-modal" onClick={(e) => e.stopPropagation()}>
        <div className="builder-header">
          <h2>Progression Builder</h2>
          <div className="builder-key-row">
            <label className="builder-label">
              Key
              <select value={keyRoot} onChange={(e) => setKeyRoot(e.target.value)}>
                {ROOTS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <select value={keyQuality} onChange={(e) => setKeyQuality(e.target.value as "major" | "minor")}>
                <option value="minor">Minor</option>
                <option value="major">Major</option>
              </select>
            </label>
            <label className="builder-label">
              Tempo
              <input
                type="number"
                min={30}
                max={300}
                value={tempo}
                onChange={(e) => setTempo(Number(e.target.value))}
                className="builder-tempo-input"
              />
            </label>
            <div className="builder-transport">
              <button onClick={isPlaying ? stopPlayback : playAll} className={`builder-play${isPlaying ? " playing" : ""}`}>
                {isPlaying ? "Stop" : "Play All"}
              </button>
              <button
                onClick={() => { const next = !looping; setLooping(next); loopingRef.current = next; }}
                className={`builder-loop-btn${looping ? " active" : ""}`}
                title="Loop playback"
              >
                Loop
              </button>
              <button onClick={handleExportMidi} className="builder-midi-btn" disabled={chords.length === 0}>
                MIDI
              </button>
              <button
                onClick={() => { stopPlayback(); setChords([]); setSelectedIdx(null); }}
                className="builder-clear-btn"
                disabled={chords.length === 0}
                title="Remove all chords"
              >
                Clear
              </button>
            </div>
          </div>
          <button className="builder-close" onClick={onClose}>×</button>
        </div>

        <div className="builder-timeline-wrap">
          <div className="builder-timeline">
            {chords.length === 0 && (
              <span className="builder-empty">Add chords below or use diatonic/technique shortcuts</span>
            )}
            {chords.map((chord, i) => (
              <div
                key={i}
                className={`builder-chip${selectedIdx === i ? " selected" : ""}${playingIdx === i ? " playing" : ""}${dragOverIdx === i ? " drag-over" : ""}${dragIdx === i ? " dragging" : ""}`}
                draggable
                onDragStart={(e) => { setDragIdx(i); e.dataTransfer.effectAllowed = "move"; }}
                onDragOver={(e) => { e.preventDefault(); setDragOverIdx(i); }}
                onDragLeave={() => { if (dragOverIdx === i) setDragOverIdx(null); }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragIdx !== null && dragIdx !== i) {
                    setChords((prev) => {
                      const next = [...prev];
                      const [moved] = next.splice(dragIdx, 1);
                      next.splice(i, 0, moved);
                      return next;
                    });
                    if (selectedIdx === dragIdx) setSelectedIdx(i);
                    else if (selectedIdx !== null) {
                      const lo = Math.min(dragIdx, i), hi = Math.max(dragIdx, i);
                      if (selectedIdx >= lo && selectedIdx <= hi) {
                        setSelectedIdx(dragIdx < i ? selectedIdx - 1 : selectedIdx + 1);
                      }
                    }
                  }
                  setDragIdx(null);
                  setDragOverIdx(null);
                }}
                onDragEnd={() => { setDragIdx(null); setDragOverIdx(null); }}
                onClick={() => {
                  setSelectedIdx(selectedIdx === i ? null : i);
                  playSingle(chord);
                }}
              >
                <span className="chip-name">{chordName(chord.root, chord.quality, chord.bass || undefined)}</span>
                <span className="chip-dur">{chord.duration}</span>
                <div className="chip-actions">
                  <button onClick={(e) => { e.stopPropagation(); removeChord(i); }} className="chip-remove" title="Remove">×</button>
                </div>
              </div>
            ))}
          </div>
          {chords.length > 0 && (
            <span className="builder-chord-count">{chords.length} chords</span>
          )}
        </div>

        {colorStep ? (
          <div className="builder-suggestions">
            <div className="builder-color-header">
              <h3>What color for {colorStep.root}?</h3>
              <span className="builder-color-reason">{colorStep.reason}</span>
              <button className="builder-color-back" onClick={() => { setColorStep(null); setRecolorIdx(null); }}>Back</button>
            </div>
            <div className="builder-color-bass">
              {getBassOptions(colorStep.root, "major", keyRoot).map((opt) => (
                <button
                  key={opt.bass}
                  className={`builder-bass-btn${colorBass === opt.bass ? " active" : ""}`}
                  onClick={() => setColorBass(opt.bass)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="builder-color-groups">
              {colorGroups.map((g) => (
                <div key={g.label} className="builder-color-group">
                  <span className="builder-color-group-label">{g.label}</span>
                  {g.variants.map((v) => (
                    <button
                      key={v.quality}
                      className="builder-color-btn"
                      onClick={() => addFromColor(v.quality)}
                      onMouseEnter={() => previewColor(v.quality)}
                      title={`${chordName(colorStep.root, v.quality, colorBass || undefined)} — ${v.mood}`}
                    >
                      <span className="color-chord-name">{chordName(colorStep.root, v.quality, colorBass || undefined)}</span>
                      <span className="color-mood">{v.mood}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : suggestions.length > 0 && (
          <div className="builder-suggestions">
            <h3>{chords.length === 0 ? "Start with" : "What next?"}</h3>
            <div className="builder-suggest-row">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  className="builder-suggest-btn"
                  onClick={() => openColorStep(s)}
                  title={s.reason}
                >
                  <span className="suggest-name">{s.bass ? `${s.root}/${s.bass}` : s.root}</span>
                  <span className="suggest-reason">{s.reason}</span>
                </button>
              ))}
              {lastChord && (
                <button
                  className="builder-suggest-btn recolor"
                  onClick={() => {
                    setRecolorIdx(chords.length - 1);
                    setColorStep({ root: lastChord.root, reason: "Recolor — change voicing" });
                    setColorBass(lastChord.bass || "");
                  }}
                  title="Change the voicing/quality of the last chord"
                >
                  <span className="suggest-name">{lastChord.root}</span>
                  <span className="suggest-reason">Recolor last</span>
                </button>
              )}
            </div>
          </div>
        )}

        <div className="builder-controls">
          <div className="builder-section">
            <h3>Diatonic chords in {keyRoot} {keyQuality}</h3>
            <div className="builder-diatonic-row">
              {diatonic.map((d) => (
                <button
                  key={d.roman}
                  className="builder-diatonic-btn"
                  onClick={() => addDiatonic(d.root, d.quality)}
                  title={chordName(d.root, d.quality)}
                >
                  <span className="diatonic-roman">{d.roman}</span>
                  <span className="diatonic-name">{chordName(d.root, d.quality)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="builder-section">
            <h3>Custom chord</h3>
            <div className="builder-picker-row">
              <select value={pickRoot} onChange={(e) => setPickRoot(e.target.value)}>
                {ROOTS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <select value={pickQuality} onChange={(e) => setPickQuality(e.target.value)}>
                {[...qualityGroups.entries()].map(([group, qs]) => (
                  <optgroup key={group} label={group}>
                    {qs.map((q) => (
                      <option key={q.id} value={q.id}>{q.label}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <select value={pickBass} onChange={(e) => setPickBass(e.target.value)}>
                <option value="">No slash</option>
                {bassNotes.map((r) => (
                  <option key={r} value={r}>/{r}</option>
                ))}
              </select>
              <select value={pickDuration} onChange={(e) => setPickDuration(e.target.value)}>
                {DURATIONS.map((d) => (
                  <option key={d.id} value={d.id}>{d.label}</option>
                ))}
              </select>
              <button className="builder-add-btn" onClick={addChord}>
                {selectedIdx !== null ? "Insert after" : "Add"}
              </button>
            </div>
          </div>

          <div className="builder-section">
            <h3>Techniques</h3>
            <div className="builder-technique-row">
              {TECHNIQUES.map((t) => (
                <button
                  key={t.id}
                  className="builder-technique-btn"
                  onClick={() => applyTechnique(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
