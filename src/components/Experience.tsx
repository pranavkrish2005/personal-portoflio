import type { CSSProperties } from 'react'

const SKILLS: { label: string; items: string }[] = [
  { label: 'Programming Languages', items: 'Lorem, Ipsum, Dolor, Sit, Amet' },
  { label: 'Web Development', items: 'Lorem ipsum, dolor sit, amet consectetur' },
  { label: 'Machine Learning & AI', items: 'Lorem, Ipsum, Dolor, Sit' },
  { label: 'Data Management', items: 'Lorem ipsum, dolor sit' },
  { label: 'DevOps & Tools', items: 'Lorem, Ipsum, Dolor' },
]

const ROLES: { title: string; org: string; bullets: string[] }[] = [
  {
    title: 'Lorem Ipsum Role',
    org: 'Placeholder Company',
    bullets: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
  },
  {
    title: 'Another Lorem Role',
    org: 'Placeholder Org',
    bullets: [
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
]

// helper to set the --i stagger index as a CSS custom property
const stagger = (i: number) => ({ '--i': i } as CSSProperties)

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading reveal">Experience &amp; Skills</h2>

      <div className="exp-box reveal">
        <h3 className="exp-subheading">Skills</h3>
        <dl className="skill-grid">
          {SKILLS.map((s, i) => (
            <div
              className="skill-row reveal reveal-stagger"
              style={stagger(i)}
              key={s.label}
            >
              <dt className="skill-label">{s.label}</dt>
              <dd className="skill-items">{s.items}</dd>
            </div>
          ))}
        </dl>

        <hr className="exp-rule" />

        <h3 className="exp-subheading">Experience</h3>
        {ROLES.map((role, i) => (
          <article
            className="exp-entry reveal reveal-stagger"
            style={stagger(i)}
            key={role.title}
          >
            <h4 className="exp-role">
              {role.title} <span className="exp-org">· {role.org}</span>
            </h4>
            <ul className="exp-bullets">
              {role.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
