import { Icon } from './Icon'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>Clausper · MIT · a mod for Claude Code · clausper.kenawak.dev</span>
        <nav style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }} aria-label="Footer">
          <a href="/changelog.html">Changelog</a>
          <a href="https://github.com/kenawak/clausper/blob/main/SECURITY.md" rel="noopener">Security</a>
          <a href="/privacy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href="https://github.com/kenawak/clausper" rel="noopener"><Icon name="github" size={15} /> kenawak/clausper</a>
        </nav>
      </div>
    </footer>
  )
}
