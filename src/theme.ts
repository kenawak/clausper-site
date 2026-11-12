import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const KEY = 'clausper-theme'

const read = (): Theme => {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

// One deliberate default (light) and a designed dark theme behind a toggle.
// The OS preference is not followed on its own.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read)
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.setAttribute('data-theme', 'dark')
    else root.removeAttribute('data-theme')
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // private window: the choice lasts for this page only
    }
  }, [theme])
  const toggle = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
