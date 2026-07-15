import { useEffect, useRef, useState } from 'react'

// Custom cursor: a small hollow white circle that follows the mouse.
//
// Behavior:
//  - Over real TEXT  -> cursor hides (the text itself does the bold+scale).
//  - Over a project card's empty space -> cursor stays VISIBLE but inverts:
//    filled + bordered with the page background so it reads against the flood.
//  - Everywhere else -> plain hollow white ring.
//
// Text detection is automatic: H1–H4, P, LI, A, SPAN containing visible text.
// Opt an element OUT by adding data-cursor="none".
const TEXT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'P', 'LI', 'A', 'SPAN'])

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [inverted, setInverted] = useState(false)
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

    // True only when the element itself is a text tag holding visible text.
    // Note we check the element directly rather than `closest()`, so hovering
    // the padding/empty area of a card does NOT count as hovering text.
    const isTextTarget = (el: HTMLElement | null): boolean => {
      if (!el) return false
      if (el.closest('[data-cursor="none"]')) return false
      if (!TEXT_TAGS.has(el.tagName)) return false
      if (!el.textContent?.trim()) return false
      // The card itself is an <a> (a TEXT_TAG) whose textContent includes all
      // its children — exclude it so only the inner text nodes qualify.
      if (el.hasAttribute('data-cursor')) return false
      return true
    }

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const onText = isTextTarget(el)
      // Inside a project card the flood turns the background to the accent
      // color, so an outline-only white ring vanishes. Fill it with the page
      // background instead so it stays visible against the flood.
      setInverted(!onText && !!el?.closest('[data-cursor="highlight"]'))
      // Hide ONLY over real text; empty space in a card keeps the cursor.
      setHidden(onText)
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
        inverted ? ' is-inverted' : ''
      }${clicked ? ' is-clicked' : ''}`}
      aria-hidden="true"
    />
  )
}
