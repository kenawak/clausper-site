import { renderToString } from 'react-dom/server'
import { Landing } from './pages/Landing'
import { Changelog } from './pages/Changelog'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'

export const pages: Record<string, () => string> = {
  'index.html': () => renderToString(<Landing />),
  'changelog.html': () => renderToString(<Changelog />),
  'privacy.html': () => renderToString(<Privacy />),
  'terms.html': () => renderToString(<Terms />),
}
