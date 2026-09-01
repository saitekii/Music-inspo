import { useEffect, useMemo, useRef, useState } from "react";
import * as Tone from "tone";
import type { AudioData } from "../types/concept";

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTE_RE = /^([A-G])(#|b)?(\d+)$/;

const PITCH_COLORS = [
  "#e8524e", // C  - red
  "#5088d0", // C# - blue
  "#dbb830", // D  - gold
  "#8850c8", // D# - violet
  "#42b862", // E  - green
  "#e05480", // F  - pink-red
  "#42c4d0", // F# - cyan
  "#e8883a", // G  - orange
  "#5c58b8", // G# - indigo
  "#90c040", // A  - yellow-green
  "#c24aa2", // A# - magenta
  "#42b09e", // B  - teal
];

const DURATION_CACHE: Record<string, number> = {};

function noteToMidi(note: string): number {
  const m = NOTE_RE.exec(note);
  if (!m) return 60;
  const letter = m[1];
  const accidental = m[2] ?? "";
  const octave = parseInt(m[3], 10);
  const base = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[letter] ?? 0;
  const mod = accidental === "#" ? 1 : accidental === "b" ? -1 : 0;
  return (octave + 1) * 12 + base + mod;
}

function midiToLabel(midi: number): string {
  return NOTE_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}

function durationToTicks(dur: string): number {
  if (DURATION_CACHE[dur] !== undefined) return DURATION_CACHE[dur];
  try {
    const ticks = Tone.Time(dur).toTicks();
    DURATION_CACHE[dur] = ticks;
    return ticks;
  } catch {
    return 192;
  }
}

interface NoteBlock {
  midi: number;
  startTick: number;
  lengthTicks: number;
  velocity: number;
}

interface PianoRollProps {
  audio: AudioData;
  isPlaying?: boolean;
  onPlay?: () => void;
  onStop?: () => void;
}

export function PianoRoll({ audio, isPlaying, onPlay, onStop }: PianoRollProps) {
  const [expanded, setExpanded] = useState(false);
  const playheadRef = useRef<SVGLineElement>(null);
  const exPlayheadRef = useRef<SVGLineElement>(null);
  const noteRefsInline = useRef<(SVGRectElement | null)[]>([]);
  const noteRefsEx = useRef<(SVGRectElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  const { blocks, minMidi, maxMidi, totalTicks } = useMemo(() => {
    const allBlocks: NoteBlock[] = [];
    let tick = 0;
    let lo = 127,
      hi = 0;
    for (const event of audio.events) {
      const len = durationToTicks(event.duration);
      for (const note of event.notes) {
        const midi = noteToMidi(note);
        if (midi < lo) lo = midi;
        if (midi > hi) hi = midi;
        allBlocks.push({
          midi,
          startTick: tick,
          lengthTicks: len,
          velocity: event.velocity ?? 0.7,
        });
      }
      tick += len;
    }
    lo = Math.max(0, lo - 2);
    hi = Math.min(127, hi + 2);
    return { blocks: allBlocks, minMidi: lo, maxMidi: hi, totalTicks: tick };
  }, [audio]);

  const pitchRange = maxMidi - minMidi + 1;

  const rowH = 14;
  const labelW = 38;
  const rollH = pitchRange * rowH;
  const rollW = Math.max(300, Math.min(600, totalTicks * 0.3));
  const svgW = labelW + rollW;
  const tScale = rollW / totalTicks;

  const eRowH = 20;
  const eLabelW = 50;
  const eRollH = pitchRange * eRowH;
  const eRollW = Math.max(800, totalTicks * 0.5);
  const eSvgW = eLabelW + eRollW;
  const eTScale = eRollW / totalTicks;

  const rows = useMemo(() => {
    const r: { midi: number; label: string; isBlack: boolean }[] = [];
    for (let m = maxMidi; m >= minMidi; m--) {
      const pc = m % 12;
      r.push({
        midi: m,
        label: midiToLabel(m),
        isBlack: [1, 3, 6, 8, 10].includes(pc),
      });
    }
    return r;
  }, [minMidi, maxMidi]);

  useEffect(() => {
    if (!isPlaying) {
      cancelAnimationFrame(animRef.current);
      if (playheadRef.current) playheadRef.current.style.display = "none";
      if (exPlayheadRef.current) exPlayheadRef.current.style.display = "none";
      [noteRefsInline, noteRefsEx].forEach((refs) =>
        refs.current.forEach((el) => {
          if (el) {
            el.style.filter = "";
            el.style.opacity = el.dataset.baseOpacity ?? "";
          }
        })
      );
      return;
    }

    if (playheadRef.current) playheadRef.current.style.display = "";
    if (exPlayheadRef.current) exPlayheadRef.current.style.display = "";

    const animate = () => {
      const tick = Tone.getTransport().ticks;

      if (playheadRef.current) {
        const x = labelW + tick * tScale;
        playheadRef.current.setAttribute("x1", String(x));
        playheadRef.current.setAttribute("x2", String(x));
      }

      if (exPlayheadRef.current) {
        const x = eLabelW + tick * eTScale;
        exPlayheadRef.current.setAttribute("x1", String(x));
        exPlayheadRef.current.setAttribute("x2", String(x));
        if (scrollRef.current) {
          const vw = scrollRef.current.clientWidth;
          scrollRef.current.scrollLeft = Math.max(0, x - vw / 3);
        }
      }

      const highlightRefs = (
        refs: React.MutableRefObject<(SVGRectElement | null)[]>
      ) => {
        for (let i = 0; i < blocks.length; i++) {
          const el = refs.current[i];
          if (!el) continue;
          const b = blocks[i];
          const active =
            tick >= b.startTick && tick < b.startTick + b.lengthTicks;
          el.style.filter = active
            ? "brightness(1.5) drop-shadow(0 0 3px rgba(255,255,255,0.4))"
            : "";
          el.style.opacity = active ? "1" : (el.dataset.baseOpacity ?? "");
        }
      };
      highlightRefs(noteRefsInline);
      highlightRefs(noteRefsEx);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPlaying, expanded, blocks, tScale, eTScale, labelW, eLabelW]);

  useEffect(() => {
    if (!expanded) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expanded]);

  const renderGrid = (lw: number, rh: number, rw: number, sw: number) =>
    rows.map((row, i) => (
      <g key={row.midi}>
        <rect
          x={0}
          y={i * rh}
          width={lw}
          height={rh}
          className={row.isBlack ? "pr-key-black" : "pr-key-white"}
        />
        <text
          x={lw - 4}
          y={i * rh + rh * 0.75}
          className="pr-label"
          textAnchor="end"
        >
          {row.label}
        </text>
        <rect
          x={lw}
          y={i * rh}
          width={rw}
          height={rh}
          className={row.isBlack ? "pr-row-black" : "pr-row-white"}
        />
        {row.midi % 12 === 0 && (
          <line
            x1={lw}
            y1={i * rh}
            x2={sw}
            y2={i * rh}
            className="pr-octave-line"
          />
        )}
      </g>
    ));

  const renderNotes = (
    lw: number,
    rh: number,
    ts: number,
    refs: React.MutableRefObject<(SVGRectElement | null)[]>
  ) =>
    blocks.map((block, i) => {
      const y = (maxMidi - block.midi) * rh + 1;
      const x = lw + block.startTick * ts;
      const w = Math.max(2, block.lengthTicks * ts - 1);
      const h = rh - 2;
      const opacity = 0.5 + block.velocity * 0.5;
      return (
        <rect
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          x={x}
          y={y}
          width={w}
          height={h}
          rx={2}
          fill={PITCH_COLORS[block.midi % 12]}
          opacity={opacity}
          data-base-opacity={opacity}
        />
      );
    });

  return (
    <>
      <div className="piano-roll-wrapper">
        <div className="pr-controls">
          <button
            className="btn-pr-expand"
            onClick={() => setExpanded(true)}
            title="Expand piano roll"
          >
            ⛶
          </button>
        </div>
        <svg
          className="piano-roll"
          viewBox={`0 0 ${svgW} ${rollH}`}
          preserveAspectRatio="none"
          width="100%"
          height={Math.min(rollH, 220)}
        >
          {renderGrid(labelW, rowH, rollW, svgW)}
          {renderNotes(labelW, rowH, tScale, noteRefsInline)}
          <line
            ref={playheadRef}
            x1={labelW}
            y1={0}
            x2={labelW}
            y2={rollH}
            className="pr-playhead"
            style={{ display: "none" }}
          />
        </svg>
      </div>

      {expanded && (
        <div className="pr-overlay" onClick={() => setExpanded(false)}>
          <div className="pr-expanded" onClick={(e) => e.stopPropagation()}>
            <div className="pr-expanded-header">
              {onPlay && onStop && (
                <button
                  className={`btn-play ${isPlaying ? "playing" : ""}`}
                  onClick={isPlaying ? onStop : onPlay}
                >
                  {isPlaying ? "■" : "▶"}
                </button>
              )}
              <div className="pr-color-legend">
                {NOTE_NAMES.map((name, i) => (
                  <span key={name} className="pr-legend-item">
                    <span
                      className="pr-legend-swatch"
                      style={{ background: PITCH_COLORS[i] }}
                    />
                    {name}
                  </span>
                ))}
              </div>
              <button
                className="btn-pr-close"
                onClick={() => setExpanded(false)}
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
            <div className="pr-expanded-scroll" ref={scrollRef}>
              <svg
                className="piano-roll piano-roll-expanded"
                viewBox={`0 0 ${eSvgW} ${eRollH}`}
                width={eSvgW}
                height={eRollH}
              >
                {renderGrid(eLabelW, eRowH, eRollW, eSvgW)}
                {renderNotes(eLabelW, eRowH, eTScale, noteRefsEx)}
                <line
                  ref={exPlayheadRef}
                  x1={eLabelW}
                  y1={0}
                  x2={eLabelW}
                  y2={eRollH}
                  className="pr-playhead"
                  style={{ display: "none" }}
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
