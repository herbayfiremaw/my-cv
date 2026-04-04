import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiGit, SiLinux } from 'react-icons/si'
import './Skills.css'

function Skills() {
    return (
        <section className="skills">
            <h2>Technical Skills</h2>
            <ul>
                <li>Programming Languages: <SiJavascript /> Javascript, <SiTypescript /> TypeScript, <SiPython /> Python</li>
                <li>Frontend Frameworks: <SiReact /> React.tsx</li>
                <li>Backend & Databases: <SiNodedotjs /> Node.js, <SiPostgresql /> PostgreSQL</li>
                <li>Tools & DevOps: <SiDocker /> Docker, <SiGit /> Git, <SiLinux /> Linux</li>
                <li>Core Concepts: Object-Oriented Programming (OOP)</li>
            </ul>
        </section>
    )
}
export default Skills
