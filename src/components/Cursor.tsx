import { useEffect, useRef, useState } from 'react'

// Custom cursor: a small hollow white circle that follows the mouse.
// It hides when hovering "text-like" elements or anything explicitly tagged
// [data-cursor="highlight"]; those elements then get their hover treatment
// from CSS (bold + enlarge for text, color-flood for project cards).
//
// Text detection is automatic: we treat H1–H4, P, LI, A, and SPAN that
// contain actual text as hover targets, so you don't have to tag each one.
// Opt an element OUT by adding data-cursor="none".
const TEXT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'P', 'LI', 'A', 'SPAN'])

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (dot) dot.style.transform = `translate(${x}px, ${y}px)`
          raf = 0
        })
      }
    }

    const isHoverTarget = (el: HTMLElement | null): boolean => {
      if (!el) return false
      // explicit opt-out
      if (el.closest('[data-cursor="none"]')) return false
      // explicit opt-in (project cards, etc.)
      if (el.closest('[data-cursor="highlight"]')) return true
      // automatic: a text tag that actually contains visible text
      if (TEXT_TAGS.has(el.tagName) && el.textContent?.trim()) return true
      return false
    }

    const over = (e: MouseEvent) => {
      setHidden(isHoverTarget(e.target as HTMLElement))
    }

    const down = () => setClicked(true)
    const up = () => setClicked(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className={`cursor-dot${hidden ? ' is-hidden' : ''}${
        clicked ? ' is-clicked' : ''
      }`}
      aria-hidden="true"
    />
  )
}
