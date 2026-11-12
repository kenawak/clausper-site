import { TopBar } from '../components/TopBar'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { RELEASES, type Group } from '../data/releases'

const LABEL: Record<Group['kind'], string> = { added: 'Added', fixed: 'Fixed', changed: 'Changed' }

export function Changelog() {
  return (
    <div className="cl">
      <TopBar crumb="changelog" />
      <main className="wrap">
        <div className="head">
          <span className="mono" style={{ color: 'var(--ink-3)' }}>Changelog</span>
          <h1>What changed in Clausper</h1>
          <p>Every release of the voice mod for Claude Code, newest first. The same notes live in <code>CHANGELOG.md</code> in the repository.</p>
          <div className="sub">
            <a href="https://github.com/kenawak/clausper/blob/main/CHANGELOG.md" rel="noopener"><Icon name="tag" size={14} /> CHANGELOG.md</a>
            <a href="https://github.com/kenawak/clausper/commits/main" rel="noopener"><Icon name="github" size={14} /> Commits</a>
          </div>
        </div>
        <div className="log">
          {RELEASES.map((r, i) => (
            <article className="release" id={`v${r.version.replace(/\./g, '-')}`} key={r.version}>
              <aside className="rail">
                <span className={`ver${i === 0 ? ' latest' : ''}`}>v{r.version}</span>
                <span className="date">{r.date}</span>
                <span className="counts">
                  {r.groups.map(g => <span key={g.kind} className={`k ${g.kind}`}>{g.items.length} {g.kind}</span>)}
                </span>
              </aside>
              <div className="notes">
                <h2>{r.title}</h2>
                {r.intro && <p>{r.intro}</p>}
                {r.groups.map(g => (
                  <div className={`group ${g.kind}`} key={g.kind}>
                    <h3>{LABEL[g.kind]}</h3>
                    <ul>{g.items.map((item, j) => <li key={j}>{item}</li>)}</ul>
                  </div>
                ))}
                {r.shot && (
                  <div className="shot"><div className="term">{r.shot}</div>{r.caption && <p className="cap-text">{r.caption}</p>}</div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
