import { CATEGORY_LABELS, type Category } from "../types/concept";

interface SidebarProps {
  categories: Category[];
  selected: Category | null;
  onSelect: (category: Category | null) => void;
  counts: Record<Category, number>;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({ categories, selected, onSelect, counts, theme, onToggleTheme, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <nav className={`sidebar${collapsed ? " collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && <h1 className="logo">Music Inspo</h1>}
        <div className="sidebar-header-actions">
          <button
            className="btn-theme"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="btn-theme btn-collapse"
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>
      </div>
      <ul className="category-list">
        <li>
          <button
            className={`category-btn ${selected === null ? "active" : ""}`}
            onClick={() => onSelect(null)}
            title={collapsed ? "All" : undefined}
          >
            {collapsed ? "🎵" : "All"}
            {!collapsed && (
              <span className="count">
                {Object.values(counts).reduce((a, b) => a + b, 0)}
              </span>
            )}
          </button>
        </li>
        {categories.map((cat) => {
          const label = CATEGORY_LABELS[cat];
          const emoji = label.match(/^\p{Emoji_Presentation}/u)?.[0] ?? "♪";
          return (
            <li key={cat}>
              <button
                className={`category-btn ${selected === cat ? "active" : ""}`}
                onClick={() => onSelect(cat)}
                title={collapsed ? label : undefined}
              >
                {collapsed ? emoji : label}
                {!collapsed && <span className="count">{counts[cat]}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
