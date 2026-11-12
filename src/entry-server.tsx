import { renderToString } from 'react-dom/server'
import { Landing } from './pages/Landing'
import { Changelog } from './pages/Changelog'

export const pages: Record<string, () => string> = {
  'index.html': () => renderToString(<Landing />),
  'changelog.html': () => renderToString(<Changelog />),
}
