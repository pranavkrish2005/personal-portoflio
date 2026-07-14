import './App.css'
import { useScrollReveal } from './hooks/useScrollReveal'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  useScrollReveal()

  return (
    <>
      {/* Rendered OUTSIDE .wrapper: that div has `perspective` set for the
          parallax effect, and `perspective` makes an element a containing
          block for `position: fixed` descendants (same as `transform` does).
          Cursor was fixed relative to the scrolling wrapper instead of the
          real viewport, so it slid away whenever you scrolled. */}
      <Cursor />
      <div className="wrapper">
        <Hero />
        <main id="main">
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
