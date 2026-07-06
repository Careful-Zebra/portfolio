import Hero from './components/Hero.tsx'
import './App.css'
import Projects from './components/Projects.tsx'
import Nav from './components/Nav.tsx'
import About from './components/About.tsx'

function App() {

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>

      
    </>
  )
}

export default App
