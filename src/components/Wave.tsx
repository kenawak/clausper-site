import { useEffect, useState } from 'react'
import { reducedMotion } from '../motion'

const BARS = '▁▂▃▄▅▆▇█'
const WIDTH = 28

// A one-line ASCII waveform: listening, drawn in block characters.
export function Wave({ active = true }: { active?: boolean }) {
  const [line, setLine] = useState(() => '▁'.repeat(WIDTH))
  useEffect(() => {
    if (!active || reducedMotion()) return
    let t = 0
    const id = window.setInterval(() => {
      t += 1
      let out = ''
      for (let i = 0; i < WIDTH; i += 1) {
        const v = (Math.sin(i * 0.7 + t * 0.6) + Math.sin(i * 0.23 - t * 0.9) + 2) / 4
        out += BARS[Math.min(BARS.length - 1, Math.floor(v * BARS.length))]
      }
      setLine(out)
    }, 90)
    return () => window.clearInterval(id)
  }, [active])
  return <span className="ascii-wave" aria-hidden="true">{line}</span>
}
