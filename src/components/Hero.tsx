import { useTypewriter } from '../hooks/useTypewriter'
import heroBg from '../assets/images/hero-bg-placeholder.jpg'

const ROLES = [
  'Full Stack Developer',
  'AI/ML Enthusiast',
  'Software Engineer',
  'Web Developer',
  'Mobile Developer',
  'Software Architect',
]

export default function Hero() {
  const typed = useTypewriter({ words: ROLES })

  return (
    <header id="top-header">
      {/* FAR layer: a real image (swap hero-bg-placeholder.jpg for your own
          in src/assets/images/) so the parallax drift is easy to see —
          textured content shows motion far more clearly than a soft gradient. */}
      <div className="hero-background" aria-hidden="true">
        <img className="hero-bg-img" src={heroBg} alt="" />
        <div className="hero-bg-tint" />
      </div>

      {/* NEAR layer: content at default depth -> scrolls at normal speed */}
      <div id="hero-name">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 className="hero-name-text">Pranav Krishnan</h1>
          <p id="skills" className="hero-role">
            {typed}
            <span className="caret" aria-hidden="true" />
          </p>
        </div>
      </div>
    </header>
  )
}
