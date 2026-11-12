import type { CSSProperties } from 'react'

// Line icons as paths (Lucide-style), stroke follows currentColor.
const PATHS = {
  waves: 'M2 12h2M6 8v8M10 4v16M14 7v10M18 10v4M22 12h0',
  volume: 'M11 5 6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14',
  captions: 'M5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM7 15h4M13 15h4M7 11h2M11 11h6',
  diff: 'M12 3v18M5 8h6M8 5v6M13 16h6',
  mic: 'M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0zM5 11a7 7 0 0 0 14 0M12 18v3M8 21h8',
  key: 'M4 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6.9-2.9 9.1-9.1M15 5l3 3M18 2l3 3',
  lock: 'M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4',
  copy: 'M11 9h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  check: 'm5 12 5 5L20 7',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  arrowLeft: 'M19 12H5M11 18l-6-6 6-6',
  github: 'M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  info: 'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zM12 8h.01M11 12h1v4h1',
  moon: 'M21 13.5A8.5 8.5 0 0 1 10.5 3a7 7 0 1 0 10.5 10.5z',
  sun: 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  tag: 'M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7 7h.01',
} as const

export type IconName = keyof typeof PATHS

export function Icon({ name, size, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  const sized = size ? { width: size, height: size, ...style } : style
  return (
    <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" style={sized}>
      <path d={PATHS[name]} />
    </svg>
  )
}
