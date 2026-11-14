import type { ReactNode } from 'react'

export type Group = { kind: 'added' | 'fixed' | 'changed'; items: ReactNode[] }
export type Release = { version: string; date: string; title: string; intro?: string; groups: Group[]; shot?: ReactNode; caption?: string }

// Newest first. Keep in step with CHANGELOG.md in the mod repository.
export const RELEASES: Release[] = [
  {
    version: '0.3.0', date: '14 Nov 2026', title: 'Hardening the one thing that can hear you',
    intro: 'A mod that listens deserves a threat model. This release writes it down in SECURITY.md and closes the gaps it names.',
    groups: [
      { kind: 'added', items: [
        <>Wake word, on by default: in auto listen mode only a sentence that starts with "Clausper" or "Claude" is sent. Anything else goes to the prompt box for you to confirm. <code>/clausper wake off</code> disables it.</>,
        <><code>/clausper private on</code>: no model call at all. Summaries are the reply's own opening sentences, so nothing leaves the machine.</>,
        'SECURITY.md: what the mod runs, sends and submits, how to verify it from the source, and how to report.',
      ] },
      { kind: 'changed', items: [
        <>The recorder and transcriber are looked up only in the package managers' folders or at <code>CLAUSPER_RECORDER</code> / <code>CLAUSPER_WHISPER</code>. PATH is never searched.</>,
        'Each recording lives in a private mktemp folder that is deleted afterwards, instead of a predictable file in /tmp.',
        "Stop ends only your own user's speech processes.",
      ] },
    ],
  },
  {
    version: '0.2.4', date: '12 Nov 2026', title: 'No binaries, no encoded data',
    groups: [
      { kind: 'changed', items: [
        'The cue tones are synthesized in code when the mod loads, so the source holds neither .wav files nor base64 strings.',
        'The setup hint no longer embeds a download URL; the README says where the model file comes from.',
      ] },
    ],
  },
  {
    version: '0.2.3', date: '12 Nov 2026', title: 'Ready for the plugin directory',
    intro: "Anthropic's directory reads a mod's source as written and holds anything it cannot account for. This release gives it nothing to hold.",
    groups: [
      { kind: 'changed', items: [
        'The two beeps are embedded in the source instead of shipped as .wav files, so the plugin contains no binary files.',
        "Source rewritten to the directory's plain-call rules, with no change in behavior.",
        'The README now lists every program the mod runs and why, the one model call it makes, and exactly what it submits as a prompt in listen mode.',
      ] },
    ],
  },
  {
    version: '0.2.2', date: '12 Nov 2026', title: 'Listening that actually hears you',
    intro: "Testing with the Mac's own voice as the speaker showed the recorder stopping after a fifth of a second, or never starting. This release is about that.",
    groups: [
      { kind: 'fixed', items: [
        'Captures shorter than a word are treated as a click or a breath and retried, up to three times, instead of ending with "I didn\'t hear anything".',
        'Recorder threshold lowered to 2 % of full scale and the stop pause set to 1.5 s, the settings that transcribed correctly in tests.',
        'Whisper runs with non-speech tokens suppressed and no temperature fallback, so a quiet room no longer comes back as "[MUSIC PLAYING]".',
      ] },
      { kind: 'added', items: [
        'A short high beep when listening starts and a lower one when it stops.',
        <>A <code>last listen</code> line in the pane: seconds recorded and the words heard, or the exact reason nothing was.</>,
      ] },
    ],
    shot: (<>
      <span><span className="i">Clausper</span> <span className="g">ready · ears auto</span></span>
      <span className="i">last listen: Heard 3.9 s: "add a readme and commit it"</span>
      <span className="i">last listen: Heard nothing above the noise floor (attempt 3: exit 0, 0.2 s of audio)</span>
    </>),
    caption: 'The pane now says what happened, so a miss can be diagnosed instead of guessed at.',
  },
  {
    version: '0.2.1', date: '12 Nov 2026', title: 'Buttons that outlive their budget',
    groups: [
      { kind: 'fixed', items: [
        <>Pressing <code>listen</code>, <code>say again</code> or <code>read this one</code> in the pane ran past the 10-second budget a button handler has, and the engine skipped it. Those handlers now hand the work to a timer, the same way the summary runs.</>,
      ] },
    ],
  },
  {
    version: '0.2.0', date: '12 Nov 2026', title: 'Listen mode, and speech that starts at once',
    intro: 'Two complaints from the first hour of use: the wait before the voice started, and having to type the next prompt by hand.',
    groups: [
      { kind: 'added', items: [
        <>Listen mode. After the summary Clausper asks "What next?", records until you pause, transcribes on your Mac with whisper.cpp, and sends your words as the next prompt. <code>/clausper listen auto|fill|off</code>, remembered across sessions.</>,
        <><code>/clausper setup</code> reports the recorder, transcriber and model, with install hints for whatever is missing.</>,
      ] },
      { kind: 'changed', items: [
        'Short replies are spoken as they are, with no summary call at all.',
        'Long replies start with the opening sentence the moment the turn ends, while Haiku writes the rest. Haiku is told what was already said so it does not repeat it.',
        'The pane shows how long each summary took.',
      ] },
    ],
    shot: (<>
      <span className="cap">Clausper is built, validated, and tested.</span>
      <span className="i">  spoken 0.4 s after the turn ended</span>
      <span className="cap">It speaks a summary after every reply and lists the files it touched.</span>
      <span className="i">  haiku summary · 1.4 s</span>
      <span className="g">What next?</span>
      <span className="box">│ &gt; <span className="o">add a readme and commit it</span></span>
    </>),
    caption: 'The opening line plays first; the summary follows; the next prompt comes from your voice.',
  },
  {
    version: '0.1.1', date: '12 Nov 2026', title: 'Captions',
    groups: [
      { kind: 'added', items: [<>The sentence being spoken shows above the prompt and in the pane, in sync with the voice, because each sentence is now its own utterance. <code>/clausper captions on|off</code>.</>] },
      { kind: 'changed', items: ['Stop ends the whole summary, not only the sentence playing.'] },
    ],
    shot: (<>
      <span><span className="i">Clausper</span> <span className="cap">Validation passes and all four tests pass.</span> <span className="i">[ stop ]</span></span>
      <span className="box">│ &gt; <span className="y">▍</span></span>
    </>),
  },
  {
    version: '0.1.0', date: '12 Nov 2026', title: 'First release',
    intro: 'Built in one session as a Claude Code mod: a hooks module, a state contract and a test suite, loaded live while it was written.',
    groups: [
      { kind: 'added', items: [
        'A spoken summary of every reply through the macOS system voice, written by Haiku through your own Claude Code session. No API key.',
        'The Clausper pane: each turn with its headline, the files Claude edited or wrote and the commands it ran. Press a file for its git diff, to open it in your editor, or to copy its path.',
        'A band above the prompt for terminals too narrow to dock the pane.',
        <>Commands: <code>/clausper</code>, <code>mute</code>, <code>unmute</code>, <code>again</code>, <code>stop</code>, <code>voice &lt;name&gt;</code>, <code>voices</code>, <code>test</code>.</>,
        "When the summary call fails, the reply's own first sentences are spoken instead, so you always hear something.",
      ] },
    ],
  },
]
