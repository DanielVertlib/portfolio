import NavBar from "components/NavBar/navbar"
import About from "pages/About/about"
import Projects from "pages/Projects/projects"
import Skills from "pages/Skills/skills"
import Contact from "pages/Contact/contact"

import './App.scss'

function App() {
  return (
    <div className="dark app">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
