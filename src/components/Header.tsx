import './Header.css'
import profileImg from '../assets/picture.png'

function Header() {
    return (
        <section className="header">
            <div className="header-content">
                <img src={profileImg} alt="Mihail Nachev" className="header-photo" />
                <p className="header-greeting">Hello, I'm</p>
                <h1>Mihail Nachev</h1>
                <p className="header-tagline">Aspiring Software Developer &bull; 21 years old</p>
                <p className="header-summary">Building modern web applications with React, TypeScript, and Node.js. Based in Sofia, Bulgaria.</p>
                <div className="header-links">
                    <a href="mailto:mihailnachev1@gmail.com" className="header-btn primary">Get in Touch</a>
                    <a href="https://github.com/herbayfiremaw" target="_blank" className="header-btn secondary">GitHub</a>
                </div>
                <div className="header-contact">
                    <span>(+359) 898363770</span>
                    <span>&bull;</span>
                    <span>mihailnachev1@gmail.com</span>
                    <span>&bull;</span>
                    <span>Sofia, Bulgaria</span>
                </div>
            </div>
        </section>
    )
}
export default Header
