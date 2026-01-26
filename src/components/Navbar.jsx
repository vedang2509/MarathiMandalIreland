import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>Marathi Mandal Ireland</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/varshik-ank">वार्षिक अंक</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}