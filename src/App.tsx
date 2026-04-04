import About from './components/About'
import Languages from './components/Languages'
import Experience from './components/Experience'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/education" element={<Education />} />
    </Routes>



    </div>
    
  )
}

export default App
