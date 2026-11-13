import { Children, isValidElement, type ReactNode } from 'react'
import { Icon } from './Icon'
import { Scramble } from './Scramble'
import { CopyButton } from './CopyButton'
import { COMMANDS, FAQS, FEATURES, STEPS } from '../data/features'

// Gives each line of a preview its index as --n, so CSS can stagger the reveal.
function numbered(shot: ReactNode) {
  const lines = isValidElement<{ children?: ReactNode }>(shot) ? Children.toArray(shot.props.children) : Children.toArray(shot)
  return lines.map((line, i) => (
    <span key={i} className="ln" style={{ ['--n' as string]: i }}>{line}</span>
  ))
}

export function Features() {
  return (
    <section id="features">
      <div className="sec-head"><h2><Scramble text="What Clausper does" /> <small>{FEATURES.length} things</small></h2><a href="#install">Install <Icon name="arrow" /></a></div>
      <div className="cards">
        {FEATURES.map(f => (
          <article className="card" key={f.title}>
            <div className="shot"><span className="lvl mono">── {f.label} ──</span><div className="term">{numbered(f.shot)}</div></div>
            <div className="body"><h3><Icon name={f.icon} /><Scramble text={f.title} /></h3><p>{f.body}</p><div className="foot">{f.foot}</div></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how">
      <div className="sec-head"><h2><Scramble text="How a turn sounds" /> <small>4 beats, in order</small></h2></div>
      <div className="steps">
        {STEPS.map(s => (
          <div className="step" key={s.n}><span className="n mono">{s.n} {'─'.repeat(6)}▶</span><h3><Scramble text={s.title} /></h3><p>{s.body}</p><span className="ms mono">{s.ms}</span></div>
        ))}
      </div>
    </section>
  )
}

export function Install() {
  return (
    <section id="install">
      <div className="sec-head"><h2><Scramble text="Install" /> <small>one line, two more for voice input</small></h2></div>
      <p className="sub">Clausper is a Claude Code mod. One line installs it from the public repository; two more set up voice input.</p>
      <div className="install">
        <div>
          <div className="code"><pre>{`# at the Claude Code prompt
`}<span className="k">/plugin install</span>{` clausper --marketplace kenawak/clausper

`}<span className="cm"># listen mode (optional): recorder, transcriber, model</span>{`
brew install sox whisper-cpp
mkdir -p ~/.clausper/models
curl -L -o ~/.clausper/models/ggml-base.en.bin \\
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin

`}<span className="cm"># then, back in Claude Code</span>{`
`}<span className="k">/clausper</span>{` setup
`}<span className="k">/clausper</span>{` listen auto`}</pre></div>
          <div className="note"><Icon name="info" /><span>macOS asks for microphone access the first time Clausper listens. Allow it for your terminal app. Speech needs macOS; the pane and captions work anywhere Claude Code runs.</span></div>
        </div>
        <div className="cmds" aria-label="Commands">
          {COMMANDS.map(([cmd, what]) => (
            <div className="r" key={cmd}><code>{cmd}</code><span>{what}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq">
      <div className="sec-head"><h2><Scramble text="Questions" /> <small>before you install</small></h2></div>
      <div className="faq">
        {FAQS.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div>
      <div className="cta-band">
        <div><h2>Stop reading. Start listening.</h2><p>One line installs it. Your next Claude Code session talks back.</p></div>
        <CopyButton className="btn btn-accent" label="Copy install line" />
      </div>
    </section>
  )
}
