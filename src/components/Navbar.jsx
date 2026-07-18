import { useState } from "react";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "../data/profile.js";
import "./Navbar.css";

export default function Navbar({ theme, onToggleTheme, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    onNav(id);
  };

  return (
    <header className="navbar-wrap">
      <nav className="navbar glass-panel">
        <button className="logo" onClick={() => handleClick("home")} aria-label="Ir para o início">
          <Code2 size={18} />
          <span>{PROFILE.name.split(" ")[0]}</span>
        </button>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Alternar tema">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu glass-panel">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => handleClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
