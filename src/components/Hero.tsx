import { Icon } from './Icon'
import { CopyButton } from './CopyButton'
import { Scramble } from './Scramble'
import { Wave } from './Wave'
import { AsciiImage } from './AsciiImage'

// The terminal as Clausper draws it: transcript on the left, docked pane on the right.
export function TerminalMock() {
  return (
    <aside className="tty" aria-label="Claude Code with the Clausper pane">
      <div className="tty-bar"><span>claude — shop — 118×34</span><span className="tab">Clausper</span></div>
      <div className="tty-main">
        <div className="tty-left">
          <div className="u">&gt; fix the login redirect bug</div>
          <div className="a"><span className="bul">⏺</span> The redirect ran before the session cookie was written, so the first request after sign-in had no session. Moved the redirect into the cookie callback and added a regression test.</div>
          <div className="a dim"><span className="bul">⏺</span> Update(src/auth.ts)<br /><span className="sub">⎿  Updated src/auth.ts with 4 additions and 2 removals</span></div>
          <div className="a dim"><span className="bul">⏺</span> Bash(npm test)<br /><span className="sub">⎿  12 passing (1.8s)</span></div>
          <div className="band"><span className="lbl">Clausper</span> <span className="cap typed">Fixed the login redirect bug. Two files changed and the tests pass.</span> <span className="btn-t">[ stop ]</span></div>
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
    <>
      <section className="hero">
        <span className="mono eyebrow">voice mod for claude code</span>
        <h1>
          <Scramble text="Hear what Claude did." once />{' '}
          <Scramble as="em" text="Say what's next." once />
        </h1>
        <p className="lede">A spoken summary after every reply. Live captions. The files it touched. Your voice as the next prompt.</p>
        <div className="install-row">
          <code className="install-line">
            <span className="dim">$</span> /plugin install clausper <span className="dim">--marketplace</span> kenawak/clausper
          </code>
          <CopyButton className="btn btn-dark" label="Copy" />
        </div>
        <div className="hero-foot mono">
          <Wave /> <span>macOS & Linux · on your subscription · nothing leaves the machine</span>
          <a href="#install" className="more">set up listening <Icon name="arrow" size={14} /></a>
        </div>
      </section>
      <section className="show">
        <AsciiImage src="/assets/hero.jpg" alt="A mountain lake at dusk, the kind of place you would rather be than reading 150 lines of terminal output" />
        <TerminalMock />
      </section>
    </>
  )
}
