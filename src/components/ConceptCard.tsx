import { forwardRef, useState } from "react";
import type { Concept } from "../types/concept";
import { PianoRoll } from "./PianoRoll";

interface ConceptCardProps {
  concept: Concept;
  highlight?: boolean;
  isPlaying: boolean;
  isFavorite: boolean;
  onPlay: () => void;
  onStop: () => void;
  onExportMidi: () => void;
  onMidiDragStart: (e: React.DragEvent) => void;
  onToggleFavorite: () => void;
  onTagClick: (tag: string) => void;
  onSendToSketch?: () => void;
}

export const ConceptCard = forwardRef<HTMLDivElement, ConceptCardProps>(
  function ConceptCard(
    { concept, highlight, isPlaying, isFavorite, onPlay, onStop, onExportMidi, onMidiDragStart, onToggleFavorite, onTagClick, onSendToSketch },
    ref
  ) {
    const [showRoll, setShowRoll] = useState(false);

    return (
      <div
        ref={ref}
        className={`concept-card${highlight ? " highlight" : ""}${isPlaying ? " playing" : ""}`}
      >
        <div className="concept-header">
          <h3 className="concept-name">{concept.name}</h3>
          <div className="concept-actions">
            <button
              className={`btn-fav${isFavorite ? " active" : ""}`}
              onClick={onToggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? "★" : "☆"}
            </button>
            <button
              className={`btn-play ${isPlaying ? "playing" : ""}`}
              onClick={isPlaying ? onStop : onPlay}
              aria-label={isPlaying ? "Stop" : "Play"}
            >
              {isPlaying ? "■" : "▶"}
            </button>
            <button
              className={`btn-roll${showRoll ? " active" : ""}`}
              onClick={() => setShowRoll(!showRoll)}
              aria-label="Toggle piano roll"
              title="Piano roll"
            >
              ♫
            </button>
            <button
              className="btn-midi"
              onClick={onExportMidi}
              draggable
              onDragStart={onMidiDragStart}
              aria-label="Download MIDI"
              title="Click to download, or drag into your DAW"
            >
              MIDI
            </button>
            {onSendToSketch && (
              <button
                className="btn-sketch-send"
                onClick={onSendToSketch}
                aria-label="Send to sketch"
                title="Send to sketch"
              >
                ✎
              </button>
            )}
            <a
              className="btn-yt"
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(concept.name + " music example")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find examples on YouTube"
              title="Find examples on YouTube"
            >
              YT
            </a>
          </div>
        </div>
        {showRoll && (
          <PianoRoll audio={concept.audio} isPlaying={isPlaying} onPlay={onPlay} onStop={onStop} />
        )}
        <p className="concept-description">{concept.description}</p>
        <div className="concept-tags">
          {concept.tags.map((tag) => (
            <button key={tag} className="tag" onClick={() => onTagClick(tag)}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    );
  }
);
