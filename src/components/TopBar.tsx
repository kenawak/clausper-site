import { Icon } from './Icon'
import { Stars } from './Stars'
import { useTheme } from '../theme'

export function TopBar({ crumb }: { crumb?: string }) {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <header className="wrap top">
      <a className="brand" href="/" aria-label="Clausper home">
        <span className="mark"><Icon name="waves" /></span>Clausper
      </a>
      {crumb ? <span className="crumb">/ {crumb}</span> : (
        <nav className="toplinks" aria-label="Sections">
          <a href="#features">features</a>
          <a href="#how">how</a>
          <a href="#install">install</a>
          <a href="/changelog.html">changelog</a>
        </nav>
      )}
      <div className="top-actions">
        {crumb && <a className="btn btn-light" href="/"><Icon name="arrowLeft" /><span>Back</span></a>}
        <Stars />
        <button className="btn btn-light icon-btn" type="button" aria-label="Switch theme" title="Switch theme" onClick={toggle}>
          <Icon name={dark ? 'sun' : 'moon'} />
        </button>
      </div>
    </header>
  )
}
