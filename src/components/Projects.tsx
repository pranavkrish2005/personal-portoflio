import { useRef } from 'react'
import type { CSSProperties } from 'react'

interface Project {
  title: string
  blurb: string
  href: string
  // Name of the image file you'll drop into src/assets/images/.
  asset: string
  tech: string[]
  accent: 'coral' | 'yellow' | 'blue'
}

// Placeholder content — swap copy/links/tech, and replace the `asset` strings
// with the real filenames you add to src/assets/images/.
const PROJECTS: Project[] = [
  {
    title: 'Lorem Ipsum One',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    href: '#',
    asset: 'project-one.png',
    tech: ['React', 'TypeScript', 'Node.js'],
    accent: 'coral',
  },
  {
    title: 'Lorem Ipsum Two',
    blurb:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    href: '#',
    asset: 'project-two.png',
    tech: ['Python', 'PyTorch', 'Pandas'],
    accent: 'yellow',
  },
  {
    title: 'Lorem Ipsum Three',
    blurb:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    href: '#',
    asset: 'project-three.png',
    tech: ['Swift', 'Firebase', 'REST API'],
    accent: 'blue',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // On hover, measure the asset box's center RELATIVE TO THE CARD and feed it
  // to the flood via CSS vars, so the color always expands out of the image.
  // (Card-relative, not viewport-relative: the flood is absolutely positioned
  // inside the card, so viewport percentages would put the origin far off-box.)
  const setOrigin = () => {
    const card = cardRef.current
    const img = imageRef.current
    if (!card || !img) return
    const cardRect = card.getBoundingClientRect()
    const imgRect = img.getBoundingClientRect()
    const cx =
      ((imgRect.left + imgRect.width / 2 - cardRect.left) / cardRect.width) * 100
    const cy =
      ((imgRect.top + imgRect.height / 2 - cardRect.top) / cardRect.height) * 100
    card.style.setProperty('--fx', `${cx}%`)
    card.style.setProperty('--fy', `${cy}%`)
  }

  return (
    <a
      ref={cardRef}
      href={project.href}
      className={`project-card project-card--${project.accent} reveal reveal-stagger`}
      style={{ '--i': index } as CSSProperties}
      data-cursor="highlight"
      onMouseEnter={setOrigin}
      onFocus={setOrigin}
    >
      {/* Color flood: expands from the asset box on hover */}
      <span className="project-flood" aria-hidden="true" />

      <div className="project-inner">
        <div className="project-visual">
          {/* Image pops out beyond the border on hover.
              Replace the placeholder below with:
              <img className="project-img" src={importedAsset} alt={project.title} />
              once you've added and imported the real file. */}
          <div className="project-image" ref={imageRef}>
            {/* data-cursor="none" keeps the filled cursor visible over the
                image instead of hiding it as if this label were body text. */}
            <span className="asset-name" data-cursor="none">
              {project.asset}
            </span>
          </div>
        </div>

        <div className="project-desc">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-blurb">{project.blurb}</p>

          {/* Tech stack chips */}
          <ul className="tech-list">
            {project.tech.map((t) => (
              <li className="tech-chip" key={t}>
                {t}
              </li>
            ))}
          </ul>

          <span className="project-link">View project →</span>
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-heading reveal">Projects</h2>
      <div className="project-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
