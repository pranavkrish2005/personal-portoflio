import { useEffect } from 'react'

// Reveals `.reveal` elements as they enter view. The page scrolls INSIDE the
// `.wrapper` div (for the CSS parallax), so the observer must use that element
// as its root — not the default viewport — or it never fires. Hardened with an
// immediate reveal for on-screen elements and a safety sweep.
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const root = document.querySelector<HTMLElement>('.wrapper')
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal')
    )

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const reveal = (el: Element) => el.classList.add('is-visible')

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            obs.unobserve(entry.target)
          }
        })
      },
      { root, threshold: 0.01, rootMargin: '0px 0px -8% 0px' }
    )

    const viewportH = root ? root.clientHeight : window.innerHeight

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportH && rect.bottom > 0) {
        reveal(el)
      } else {
        observer.observe(el)
      }
    })

    const safety = window.setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) reveal(el)
      })
    }, 3000)

    return () => {
      observer.disconnect()
      window.clearTimeout(safety)
    }
  }, [])
}
