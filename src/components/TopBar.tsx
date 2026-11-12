import { Icon } from './Icon'
import { CopyButton, INSTALL_LINE } from './CopyButton'
import { useTheme } from '../theme'

export function TopBar({ crumb }: { crumb?: string }) {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'
  return (
    <header className="wrap top">
      <a className="brand" href="/" aria-label="Clausper home">
        <span className="mark"><Icon name="waves" /></span>Clausper
      </a>
      {crumb ? (
        <span className="crumb">/ {crumb}</span>
      ) : (
        <div className="searchish" aria-label="Install command">
          <code>
            <span className="dim">/</span>plugin install clausper <span className="dim">--marketplace</span> kenawak/clausper
          </code>
          <CopyButton text={INSTALL_LINE} />
        </div>
      )}
      <div className="top-actions">
        {crumb ? (
          <a className="btn btn-light" href="/"><Icon name="arrowLeft" /><span>Back to Clausper</span></a>
        ) : (
          <a className="btn btn-light" href="#how"><Icon name="info" /><span>How it works</span></a>
        )}
        <button className="btn btn-light icon-btn" type="button" aria-label="Switch theme" title="Switch theme" onClick={toggle}>
          <Icon name={dark ? 'sun' : 'moon'} />
        </button>
        <a className="btn btn-dark" href={crumb ? 'https://github.com/kenawak/clausper/releases' : 'https://github.com/kenawak/clausper'} rel="noopener">
          <Icon name="github" /><span>{crumb ? 'Releases' : 'GitHub'}</span>
        </a>
      </div>
    </header>
  )
}
