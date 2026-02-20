import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        {/* Logo */}
        <a href="#/" className="logo" onClick={() => setOpen(false)}>
          <img
            src={`${import.meta.env.BASE_URL}images/MMI Logo.jpeg`}
            alt="Marathi Mandal Ireland Logo"
          />
          <span>Marathi Mandal Ireland</span>
        </a>

        {/* Right side: Nav + Theme + Menu */}
        <div className="nav-right">
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/varshik-ank" onClick={() => setOpen(false)}>वार्षिक अंक</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </nav>

          {/* Dark mode toggle at END */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            🌙
          </button>

          {/* Mobile menu toggle */}
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
