// import { useContext } from "react"

// import { ThemeContext } from "./contexts/theme"

import NavBar from "./components/NavBar/navbar"
import About from "./pages/About/about"
import Projects from "./pages/Projects/projects"
import Skills from "./pages/Skills/skills"

import './App.scss'

function App() {
  // const [{ theme }] = useContext(ThemeContext)
  const theme = 'dark'

  return (
    <div className={`${theme} app`}>
      <NavBar />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
