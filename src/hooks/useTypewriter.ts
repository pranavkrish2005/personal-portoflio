import { useEffect, useState } from 'react'

interface Options {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
}

// Cycles through `words`, typing and deleting each one with a blinking caret.
// Fully self-cleaning: the timeout is cleared on unmount so StrictMode's
// double-invoke in dev doesn't spawn duplicate loops.
export function useTypewriter({
  words,
  typeSpeed = 85,
  deleteSpeed = 45,
  pauseTime = 1600,
}: Options) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = words[wordIndex % words.length]

      if (deleting) {
        charIndex--
      } else {
        charIndex++
      }
      setText(current.slice(0, charIndex))

      let delay = deleting ? deleteSpeed : typeSpeed

      if (!deleting && charIndex === current.length) {
        deleting = true
        delay = pauseTime
      } else if (deleting && charIndex === 0) {
        deleting = false
        wordIndex++
        delay = typeSpeed
      }

      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timer)
  }, [words, typeSpeed, deleteSpeed, pauseTime])

  return text
}
