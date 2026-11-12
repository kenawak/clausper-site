import { Icon } from './Icon'
import { CopyButton } from './CopyButton'

const Wave = () => (
  <span className="wave" aria-hidden="true"><i /><i /><i /><i /><i /></span>
)

// The terminal as Clausper draws it: transcript on the left, docked pane on the right.
function TerminalMock() {
  return (
    <aside className="glass tty" aria-label="Claude Code with the Clausper pane">
      <div className="tty-bar"><span>claude — shop — 118×34</span><span className="tab">Clausper</span></div>
      <div className="tty-main">
        <div className="tty-left">
          <div className="u">&gt; fix the login redirect bug</div>
          <div className="a"><span className="bul">⏺</span> The redirect ran before the session cookie was written, so the first request after sign-in had no session. Moved the redirect into the cookie callback and added a regression test.</div>
          <div className="a dim"><span className="bul">⏺</span> Update(src/auth.ts)<br /><span className="sub">⎿  Updated src/auth.ts with 4 additions and 2 removals</span></div>
          <div className="a dim"><span className="bul">⏺</span> Bash(npm test)<br /><span className="sub">⎿  12 passing (1.8s)</span></div>
          <div className="band"><span className="lbl">Clausper</span> <span className="cap">Fixed the login redirect bug. Two files changed and the tests pass.</span> <span className="btn-t">[ stop ]</span></div>
          <div className="box">│ &gt; <span className="cur">▍</span></div>
          <div className="hint">Clausper: listening… <Wave /></div>
        </div>
        <div className="tty-right">
          <div className="ph"><b>Clausper</b> <span>listening… · ears auto</span></div>
          <div className="pk"><span>m: mute</span><span>a: say again</span><span>s: stop</span><span>l: listen</span></div>
          <div className="pc">What next?</div>
          <div className="pt">• Fixed the login redirect bug <span>2s</span></div>
          <div className="pd">  2 changes: auth.ts, auth.test.ts</div>
          <div className="pt dim">• Added rate limiting to the API <span>4m</span></div>
          <div className="pd">  3 changes: limiter.ts, server.ts, README.md</div>
          <div className="pt dim">~ Explained the deploy failure <span>11m</span></div>
          <div className="pd">  no changes</div>
        </div>
      </div>
    </aside>
  )
}

export function Hero() {
  return (
    <div className="banner" aria-label="Clausper in one picture">
      <div className="hero-copy">
        <span className="tag mono"><span className="dot" /> Voice mod for Claude Code</span>
        <h1>Hear what Claude did. <em>Say what's next.</em></h1>
        <p className="lede">A spoken summary after every reply, live captions, the files it touched, and your voice as the next prompt.</p>
        <span className="hero-line">macOS · runs on your Claude subscription · voice never leaves the machine</span>
        <div className="hero-cta">
          <CopyButton className="btn btn-accent" label="Copy install line" />
          <a className="btn btn-light" href="#install">Set up listening <Icon name="arrow" /></a>
        </div>
      </div>
      <TerminalMock />
    </div>
  )
}
