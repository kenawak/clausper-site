import { useEffect, useRef, useState } from 'react'

const RAMP = ' .`:-~=+*#%@'
const COLS = 132

// A photo that turns into ASCII art while hovered. The text is rendered once
// from the image's pixels on the client; the server ships only the <img>.
export function AsciiImage({ src, alt }: { src: string; alt: string }) {
  const [ascii, setAscii] = useState('')
  const [fontSize, setFontSize] = useState(8)
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      const rows = Math.round(COLS * (img.height / img.width) * 0.5)
      const canvas = document.createElement('canvas')
      canvas.width = COLS
      canvas.height = rows
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.drawImage(img, 0, 0, COLS, rows)
      const px = ctx.getImageData(0, 0, COLS, rows).data
      let out = ''
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < COLS; x += 1) {
          const i = (y * COLS + x) * 4
          const lum = (0.2126 * (px[i] ?? 0) + 0.7152 * (px[i + 1] ?? 0) + 0.0722 * (px[i + 2] ?? 0)) / 255
          out += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))]
        }
        out += '\n'
      }
      setAscii(out)
    }
  }, [src])

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const fit = () => setFontSize(el.clientWidth / (COLS * 0.6))
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="ascii-wrap" ref={wrap} title="hover: the picture, as your terminal would draw it">
      <img src={src} alt={alt} />
      {ascii && <pre className="ascii" aria-hidden="true" style={{ fontSize, lineHeight: 1 }}>{ascii}</pre>}
      <span className="ascii-tag mono">hover · ascii</span>
    </div>
  )
}
