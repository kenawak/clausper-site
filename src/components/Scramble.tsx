import { useEffect, useRef, useState, type ElementType } from 'react'
import { reducedMotion } from '../motion'

const GLYPHS = '░▒▓█▚▞╱╲<>/|=+*#:-.'

// Text that decodes from terminal noise into its letters, on hover (and once on
// mount when `once`). Renders the plain text on the server, so crawlers read it.
export function Scramble({ text, as: Tag = 'span', className, once = false }: { text: string; as?: ElementType; className?: string; once?: boolean }) {
  const [shown, setShown] = useState(text)
  const timer = useRef<number | undefined>(undefined)
  const run = () => {
    if (reducedMotion()) return
    window.clearInterval(timer.current)
    let frame = 0
    const frames = 16
    timer.current = window.setInterval(() => {
      frame += 1
      const settled = (frame / frames) * text.length
      setShown(
        text
          .split('')
          .map((ch, i) => (ch === ' ' || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(''),
      )
      if (frame >= frames) {
        window.clearInterval(timer.current)
        setShown(text)
      }
    }, 28)
  }
  useEffect(() => {
    if (once) run()
    return () => window.clearInterval(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <Tag className={className} onMouseEnter={run}>{shown}</Tag>
}
