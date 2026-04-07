import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/languages">Languages</NavLink>
        </nav>
    )
}

export default Navbar
