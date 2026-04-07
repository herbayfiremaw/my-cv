import About from './components/About'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/languages" element={<Languages />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2026 Mihail Nachev. Built with React & TypeScript.</p>
      </footer>
    </div>
  )
}

export default App
