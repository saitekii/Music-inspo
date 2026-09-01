import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as Tone from "tone";
import { ConceptCard } from "./components/ConceptCard";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { concepts } from "./data/concepts";
import { musicalFunctions } from "./data/functions";
import { moods } from "./data/moods";
import { useAudioPlayer, type PlaybackOptions, type SynthPresetId, SYNTH_PRESETS } from "./hooks/useAudioPlayer";
import { VOICING_DENSITIES, type VoicingDensity } from "./utils/chordVoicing";
import { ContrastModal } from "./components/ContrastModal";
import { SketchComposer } from "./components/SketchComposer";
import { InspirationGenerator, type InspirationSet } from "./components/InspirationGenerator";
import { useMidiExport } from "./hooks/useMidiExport";
import { useSoundFont } from "./hooks/useSoundFont";
import type { Category } from "./types/concept";
import { CATEGORY_LABELS } from "./types/concept";

Tone.getContext().lookAhead = 0.01;

const GENRES = [
  { id: "jazz", label: "🎷 Jazz" },
  { id: "funk", label: "🕺 Funk" },
  { id: "rock", label: "🎸 Rock" },
  { id: "pop", label: "🎤 Pop" },
  { id: "soul", label: "💜 Soul" },
  { id: "rnb", label: "🎹 R&B" },
  { id: "blues", label: "🎺 Blues" },
  { id: "gospel", label: "🙏 Gospel" },
  { id: "classical", label: "🎻 Classical" },
  { id: "romantic", label: "🌹 Romantic" },
  { id: "film", label: "🎬 Film" },
  { id: "folk", label: "🪕 Folk" },
  { id: "indie", label: "🌿 Indie" },
  { id: "ambient", label: "🌌 Ambient" },
  { id: "dnb", label: "⚡ D&B" },
] as const;

const MOOD_HUES: Record<string, number> = {
  dreamy: 250,
  funky: 30,
  "heart-wrenching": 350,
  dark: 270,
  epic: 45,
  jazzy: 35,
  mysterious: 180,
  uplifting: 55,
  groovy: 140,
  nostalgic: 25,
  tense: 0,
  soulful: 280,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [search, setSearch] = useState("");
  const [highlightId, setHighlightId] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [transpose, setTranspose] = useState(0);
  const [tuningHz, setTuningHz] = useState(440);
  const [tempoOverride, setTempoOverride] = useState<number | null>(null);
  const [synthPreset, setSynthPreset] = useState<SynthPresetId>("soft-pad");
  const [voicingDensity, setVoicingDensity] = useState<VoicingDensity>("triad");
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showContrast, setShowContrast] = useState(false);
  const [showSketch, setShowSketch] = useState(false);
  const [showInspo, setShowInspo] = useState(false);
  const [sketchImport, setSketchImport] = useState<import("./types/concept").AudioData | null>(null);
  const [inspoSettings, setInspoSettings] = useState<InspirationSet | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showTagExplorer, setShowTagExplorer] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem("sidebar-collapsed") === "true";
  });

  const playbackOpts = useRef<PlaybackOptions>({ transpose: 0, tuningHz: 440, tempoOverride: null, synthPreset: "soft-pad", voicingDensity: "triad" });
  playbackOpts.current.transpose = transpose;
  playbackOpts.current.tuningHz = tuningHz;
  playbackOpts.current.tempoOverride = tempoOverride;
  playbackOpts.current.synthPreset = synthPreset;
  playbackOpts.current.voicingDensity = voicingDensity;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const warmUp = () => {
      if (Tone.getContext().state !== "running") Tone.start();
      window.removeEventListener("pointerdown", warmUp);
    };
    window.addEventListener("pointerdown", warmUp);
    return () => window.removeEventListener("pointerdown", warmUp);
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => {
      localStorage.setItem("sidebar-collapsed", String(!prev));
      return !prev;
    });
  }, []);

  const handleTagClick = useCallback((tag: string) => {
    setSelectedTag(tag);
    setShowTagExplorer(false);
    document.querySelector(".main")?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSendToSketch = useCallback((audio: import("./types/concept").AudioData) => {
    setSketchImport(audio);
    setShowSketch(true);
  }, []);

  const handleApplyInspoToSketch = useCallback((data: InspirationSet) => {
    setInspoSettings(data);
    setShowInspo(false);
    setShowSketch(true);
  }, []);

  const handleNavigateToConcept = useCallback((conceptId: string) => {
    setShowInspo(false);
    setSelectedCategory(null);
    setSelectedMood(null);
    setSelectedGenre(null);
    setSelectedFunction(null);
    setSearch("");
    setShowFavoritesOnly(false);
    setHighlightId(conceptId);
    setTimeout(() => {
      const card = cardRefs.current[conceptId];
      const main = document.querySelector(".main");
      const sticky = document.querySelector(".controls-sticky");
      if (card && main) {
        const stickyH = sticky?.getBoundingClientRect().height ?? 0;
        const cardRect = card.getBoundingClientRect();
        const mainRect = main.getBoundingClientRect();
        const visibleHeight = mainRect.height - stickyH;
        const cardTopInMain = cardRect.top - mainRect.top + main.scrollTop;
        const targetScroll = cardTopInMain - stickyH - (visibleHeight - cardRect.height) / 2;
        main.scrollTo({ top: Math.max(0, targetScroll), behavior: "smooth" });
      }
    }, 300);
    setTimeout(() => setHighlightId(null), 5000);
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const { fileName: sfFileName, presetName: sfPreset, loading: sfLoading, load: sfLoad, unload: sfUnload, samplerRef } = useSoundFont();
  const { play, stop, playingId } = useAudioPlayer(samplerRef, playbackOpts);
  const { exportMidi, getMidiDragUrl } = useMidiExport();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const moodConceptIds = useMemo(() => {
    if (!selectedMood) return null;
    const mood = moods.find((m) => m.id === selectedMood);
    return mood ? new Set(mood.conceptIds) : null;
  }, [selectedMood]);

  const functionConceptIds = useMemo(() => {
    if (!selectedFunction) return null;
    const fn = musicalFunctions.find((f) => f.id === selectedFunction);
    return fn ? new Set(fn.conceptIds) : null;
  }, [selectedFunction]);

  const randomize = useCallback(() => {
    setSelectedCategory(null);
    setSearch("");
    let pool = concepts as typeof concepts;
    if (moodConceptIds) {
      pool = pool.filter((c) => moodConceptIds.has(c.id));
    }
    if (selectedGenre) {
      pool = pool.filter((c) => c.tags.includes(selectedGenre));
    }
    if (functionConceptIds) {
      pool = pool.filter((c) => functionConceptIds.has(c.id));
    }
    if (pool.length === 0) return;
    const concept = pool[Math.floor(Math.random() * pool.length)];
    setHighlightId(concept.id);
    setTimeout(() => {
      const card = cardRefs.current[concept.id];
      const main = document.querySelector(".main");
      const sticky = document.querySelector(".controls-sticky");
      if (card && main) {
        const stickyH = sticky?.getBoundingClientRect().height ?? 0;
        const cardRect = card.getBoundingClientRect();
        const mainRect = main.getBoundingClientRect();
        const visibleHeight = mainRect.height - stickyH;
        const cardTopInMain = cardRect.top - mainRect.top + main.scrollTop;
        const targetScroll = cardTopInMain - stickyH - (visibleHeight - cardRect.height) / 2;
        main.scrollTo({ top: Math.max(0, targetScroll), behavior: "smooth" });
      }
    }, 50);
    setTimeout(() => setHighlightId(null), 4500);
  }, [moodConceptIds, selectedGenre, functionConceptIds]);

  const categories = useMemo(
    () => Object.keys(CATEGORY_LABELS) as Category[],
    []
  );

  const counts = useMemo(() => {
    const c = {} as Record<Category, number>;
    for (const cat of categories) c[cat] = 0;
    for (const concept of concepts) c[concept.category]++;
    return c;
  }, [categories]);

  const allTags = useMemo(() => {
    const tagMap = new Map<string, number>();
    for (const c of concepts) {
      for (const t of c.tags) {
        tagMap.set(t, (tagMap.get(t) ?? 0) + 1);
      }
    }
    return [...tagMap.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = useMemo(() => {
    let result = concepts;
    if (showFavoritesOnly) {
      result = result.filter((c) => favorites.has(c.id));
    }
    if (moodConceptIds) {
      result = result.filter((c) => moodConceptIds.has(c.id));
    }
    if (selectedGenre) {
      result = result.filter((c) => c.tags.includes(selectedGenre));
    }
    if (functionConceptIds) {
      result = result.filter((c) => functionConceptIds.has(c.id));
    }
    if (selectedCategory) {
      result = result.filter((c) => c.category === selectedCategory);
    }
    if (selectedTag) {
      result = result.filter((c) => c.tags.includes(selectedTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [selectedCategory, search, selectedTag, moodConceptIds, selectedGenre, functionConceptIds, showFavoritesOnly, favorites]);

  const grouped = useMemo(() => {
    const groups: Partial<Record<Category, typeof filtered>> = {};
    for (const concept of filtered) {
      (groups[concept.category] ??= []).push(concept);
    }
    if (groups.progressions) {
      groups.progressions.sort((a, b) => (a.novelty ?? 10) - (b.novelty ?? 10));
    }
    return groups;
  }, [filtered]);

  useEffect(() => {
    const main = document.querySelector(".main");
    const sticky = document.querySelector(".controls-sticky");
    if (!main || !sticky) return;

    const onScroll = () => {
      const stickyBottom = sticky.getBoundingClientRect().bottom;
      const headings = main.querySelectorAll(".category-heading");
      let current: string | null = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= stickyBottom + 20) {
          current = h.textContent;
        }
      }
      setCurrentCategory(current);
      setShowScrollTop(main.scrollTop > 400);
    };

    main.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => main.removeEventListener("scroll", onScroll);
  }, [filtered]);

  return (
    <div className="app">
      <Sidebar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        counts={counts}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        collapsed={sidebarCollapsed}
        onToggleCollapse={toggleSidebar}
      />
      <main className="main">
        <div className="controls-sticky">
        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <select
            className="function-select"
            value={selectedFunction ?? ""}
            onChange={(e) => setSelectedFunction(e.target.value || null)}
          >
            <option value="">I need to…</option>
            {Array.from(new Set(musicalFunctions.map((f) => f.group))).map((group) => (
              <optgroup key={group} label={group}>
                {musicalFunctions
                  .filter((f) => f.group === group)
                  .map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
          <button className="btn-random" onClick={randomize} title="Random concept">
            Surprise me
          </button>
          <button className="btn-contrast" onClick={() => setShowContrast(true)} title="Contrast reference">
            Contrast
          </button>
          <button className="btn-sketch" onClick={() => setShowSketch(true)} title="Sketch composer">
            Sketch
          </button>
          <button className="btn-inspo" onClick={() => setShowInspo(true)} title="Random inspiration generator">
            Inspire
          </button>
          <button className={`btn-tags${showTagExplorer ? " active" : ""}`} onClick={() => setShowTagExplorer(!showTagExplorer)} title="Explore tags">
            Tags
          </button>
          <div className="soundfont-controls">
            {!sfFileName && (
              <select
                className="synth-select"
                value={synthPreset}
                onChange={(e) => setSynthPreset(e.target.value as SynthPresetId)}
              >
                {SYNTH_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept=".sf2"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) sfLoad(file);
                e.target.value = "";
              }}
            />
            {sfFileName ? (
              <>
                <span className="sf-label" title={sfPreset ?? undefined}>
                  {sfFileName}
                </span>
                <button className="btn-sf btn-sf-clear" onClick={sfUnload}>
                  Reset
                </button>
              </>
            ) : (
              <button
                className="btn-sf"
                onClick={() => fileInputRef.current?.click()}
                disabled={sfLoading}
              >
                {sfLoading ? "Loading…" : "SoundFont"}
              </button>
            )}
          </div>
        </div>
        <div className="mood-bar">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`mood-pill${selectedMood === mood.id ? " active" : ""}`}
              style={{ "--pill-hue": MOOD_HUES[mood.id] ?? 250 } as React.CSSProperties}
              onClick={() => setSelectedMood(selectedMood === mood.id ? null : mood.id)}
            >
              {mood.label}
            </button>
          ))}
        </div>
        <div className="genre-bar">
          {GENRES.map((genre) => (
            <button
              key={genre.id}
              className={`genre-pill${selectedGenre === genre.id ? " active" : ""}`}
              onClick={() => setSelectedGenre(selectedGenre === genre.id ? null : genre.id)}
            >
              {genre.label}
            </button>
          ))}
        </div>
        <div className="playback-bar">
          <button
            className={`btn-faves-filter${showFavoritesOnly ? " active" : ""}`}
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            title={showFavoritesOnly ? "Show all" : "Show favorites only"}
          >
            {showFavoritesOnly ? "★" : "☆"} Favorites{favorites.size > 0 ? ` (${favorites.size})` : ""}
          </button>
          <div className="pb-divider" />
          <label className="pb-label">
            Transpose
            <select
              className="pb-select"
              value={transpose}
              onChange={(e) => setTranspose(Number(e.target.value))}
            >
              <option value={0}>0</option>
              {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n > 0 ? `+${n}` : n}</option>
              ))}
            </select>
          </label>
          <label className="pb-label">
            A=
            <input
              className="pb-input"
              type="number"
              min={400}
              max={480}
              step={1}
              value={tuningHz}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (v >= 400 && v <= 480) setTuningHz(v);
              }}
            />
            <span className="pb-unit">Hz</span>
          </label>
          <label className="pb-label">
            Tempo
            <input
              className="pb-input pb-input-tempo"
              type="number"
              min={40}
              max={300}
              step={1}
              placeholder="orig"
              value={tempoOverride ?? ""}
              onChange={(e) => {
                const v = e.target.value;
                setTempoOverride(v === "" ? null : Number(v));
              }}
            />
            <span className="pb-unit">BPM</span>
          </label>
          <label className="pb-label">
            Voicing
            <select
              className="pb-select"
              value={voicingDensity}
              onChange={(e) => setVoicingDensity(e.target.value as VoicingDensity)}
            >
              {VOICING_DENSITIES.map((d) => (
                <option key={d.id} value={d.id}>{d.label}</option>
              ))}
            </select>
          </label>
        </div>
        {(selectedMood || selectedGenre || selectedFunction || selectedCategory || search || showFavoritesOnly || selectedTag) && (
          <div className="filter-summary">
            <span className="filter-count">{filtered.length} concept{filtered.length !== 1 ? "s" : ""}</span>
            {selectedTag && (
              <span className="active-tag-filter">
                tag: {selectedTag}
                <button className="btn-clear-tag" onClick={() => setSelectedTag(null)} aria-label="Clear tag filter">×</button>
              </span>
            )}
            <button
              className="btn-clear-filters"
              onClick={() => {
                setSelectedMood(null);
                setSelectedGenre(null);
                setSelectedFunction(null);
                setSelectedCategory(null);
                setSearch("");
                setSelectedTag(null);
                setShowFavoritesOnly(false);
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
        {currentCategory && (
          <div className="current-category-indicator">{currentCategory}</div>
        )}
        {showTagExplorer && (
          <div className="tag-explorer">
            {allTags.map(([tag, count]) => (
              <button
                key={tag}
                className={`tag-explorer-item${selectedTag === tag ? " active" : ""}`}
                onClick={() => {
                  setSelectedTag(selectedTag === tag ? null : tag);
                  document.querySelector(".main")?.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {tag} <span className="tag-count">{count}</span>
              </button>
            ))}
          </div>
        )}
        </div>
        <div className="content">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} className="category-section">
              <h2 className="category-heading">
                {CATEGORY_LABELS[cat as Category]}
              </h2>
              <div className="concept-grid">
                {items!.map((concept) => (
                  <ConceptCard
                    key={concept.id}
                    ref={(el) => { cardRefs.current[concept.id] = el; }}
                    concept={concept}
                    highlight={highlightId === concept.id}
                    searchTerm={search}
                    isPlaying={playingId === concept.id}
                    isFavorite={favorites.has(concept.id)}
                    onPlay={() => play(concept.id, concept.audio)}
                    onStop={stop}
                    onExportMidi={() =>
                      exportMidi(concept.name, concept.audio)
                    }
                    onMidiDragStart={(e) => {
                      e.dataTransfer.setData("DownloadURL", getMidiDragUrl(concept.name, concept.audio));
                      e.dataTransfer.effectAllowed = "copy";
                    }}
                    onToggleFavorite={() => toggleFavorite(concept.id)}
                    onTagClick={handleTagClick}
                    onSendToSketch={() => handleSendToSketch(concept.audio)}
                  />
                ))}
              </div>
            </section>
          ))}
          {filtered.length === 0 && (
            <p className="empty">No concepts match your search.</p>
          )}
        </div>
        {showScrollTop && (
          <button
            className="scroll-top-btn"
            onClick={() => document.querySelector(".main")?.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            title="Back to top"
          >
            ↑
          </button>
        )}
      </main>
      <ContrastModal open={showContrast} onClose={() => setShowContrast(false)} />
      <InspirationGenerator
        open={showInspo}
        onClose={() => setShowInspo(false)}
        onApplyToSketch={handleApplyInspoToSketch}
        onNavigateToConcept={handleNavigateToConcept}
      />
      <SketchComposer
        open={showSketch}
        onClose={() => setShowSketch(false)}
        importAudio={sketchImport}
        onImportDone={() => setSketchImport(null)}
        inspoSettings={inspoSettings}
        onInspoApplied={() => setInspoSettings(null)}
      />
    </div>
  );
}

export default App;
