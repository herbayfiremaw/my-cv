import './Projects.css'

function Projects() {
    return (
        <section className="projects">
            <div className="content-width">
                <h2>Software Engineering Training & Projects</h2>
                <div className="project-card">
                    <h3>Independent Software Project <span className="status active">In Development</span></h3>
                    <ul>
                        <li>Designing and implementing a comprehensive software project to practically apply modern tech-stack principles, utilizing version control and modern deployment tools.</li>
                    </ul>
                </div>
                <div className="project-card">
                    <h3>Boot.dev Technical Training <span className="status done">Completed</span></h3>
                    <ul>
                        <li>Mastered core programming paradigms, specifically focusing on Functional Programming and Object-Oriented Programming methodologies.</li>
                        <li>Developed strong command-line proficiency through hands-on learning with Linux environments and Git version control.</li>
                        <li>Successfully completed multiple guided projects to solidify advanced concepts in JavaScript, TypeScript and Python.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Projects
