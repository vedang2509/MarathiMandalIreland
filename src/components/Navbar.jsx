import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="logo">
  <img
    src={`${import.meta.env.BASE_URL}images/MMI Logo.jpeg`}
    alt="Marathi Mandal Ireland Logo"
  />
  <span>Marathi Mandal Ireland</span>
</div>


        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/varshik-ank" onClick={() => setOpen(false)}>वार्षिक अंक</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
