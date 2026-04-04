import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/languages">Languages</Link>
        </nav>
    )
}

export default Navbar

