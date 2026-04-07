import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav>
            <div className="nav-inner">
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
                    <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                    <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
                    <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
                    <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
                    <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
                    <NavLink to="/languages" onClick={closeMenu}>Languages</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
