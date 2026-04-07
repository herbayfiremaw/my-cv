import './About.css'

function About() {
    return (
        <section className="about">
            <div className="content-width">
                <h2>About Me</h2>
                <p className="about-intro">Highly motivated and self-driven aspiring software developer with a solid foundation in modern web technologies and back-end systems. Currently advancing my technical expertise through comprehensive coursework and active hands-on project development. Bringing a unique blend of analytical problem-solving, structured programming knowledge, and a strong work ethic to a dynamic engineering team.</p>

                <div className="about-highlights">
                    <div className="highlight-card">
                        <span className="highlight-icon">🎓</span>
                        <h3>Education</h3>
                        <p>Studying Japanology at Sofia University while pursuing software engineering through self-directed learning and Boot.dev.</p>
                    </div>
                    <div className="highlight-card">
                        <span className="highlight-icon">💻</span>
                        <h3>Tech Focus</h3>
                        <p>Specializing in React, TypeScript, and Node.js with hands-on experience in Docker, Git, and Linux environments.</p>
                    </div>
                    <div className="highlight-card">
                        <span className="highlight-icon">🌍</span>
                        <h3>Languages</h3>
                        <p>Fluent in Bulgarian and English (C2), with intermediate Japanese (B2) — bringing a global perspective.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
