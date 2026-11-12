import type { ReactNode } from 'react'
import type { IconName } from '../components/Icon'

export type Feature = { label: string; icon: IconName; title: string; body: string; foot: string; shot: ReactNode }

// Each preview is a fragment of the real UI: the band, the pane, a diff, a command's output.
export const FEATURES: Feature[] = [
  {
    label: 'turn.complete → say', icon: 'volume', title: 'Spoken summary',
    body: 'The opening sentence plays the moment Claude stops. Haiku writes the two sentences that follow while you listen. Short replies are read as they are.',
    foot: 'macOS voice · /clausper voice Samantha',
    shot: (<>
      <span className="i">⏺ Moved the redirect into the cookie callback and added a regression…</span>
      <span className="i">  ⎿  1,842 chars · 41 lines</span>
      <span className="cap">Fixed the login redirect bug.</span>
      <span className="i">  spoken 0.4 s after the turn ended</span>
      <span className="cap">Two files changed and the tests pass.</span>
      <span className="i">  haiku summary · 1.4 s · 612 in / 48 out</span>
    </>),
  },
  {
    label: 'AbovePrompt band', icon: 'captions', title: 'Live captions',
    body: 'Each sentence shows above the prompt while it is spoken, in the same cyan the pane uses, with a stop button beside it. Captions follow the voice because each sentence is its own utterance.',
    foot: '/clausper captions on · off',
    shot: (<>
      <span className="i">⏺ Bash(claude plugin test .)</span>
      <span className="i">  ⎿  7 pass, 0 fail</span>
      <span><span className="i">Clausper</span> <span className="cap">Validation passes and all seven tests pass.</span> <span className="i">[ stop ]</span></span>
      <span className="box">│ &gt; <span className="y">▍</span></span>
      <span className="i">? for shortcuts</span>
    </>),
  },
  {
    label: 'git diff -- src/auth.ts', icon: 'diff', title: 'What changed, clickable',
    body: 'Every file Claude edited or wrote, and every command it ran, listed per turn. Press a file for its uncommitted diff, open it in your editor, or copy its path.',
    foot: 'Edit · Write · NotebookEdit · Bash',
    shot: (<>
      <span className="h">@@ -41,7 +41,9 @@ export async function finishLogin(</span>
      <span className="r">-  res.redirect('/dashboard')</span>
      <span className="r">-  await setSessionCookie(res, session)</span>
      <span className="a">+  await setSessionCookie(res, session, () =&gt; {'{'}</span>
      <span className="a">+    res.redirect('/dashboard')</span>
      <span className="a">+  {'}'})</span>
      <span className="i">b: back  o: open in editor  c: copy path</span>
    </>),
  },
  {
    label: 'rec · whisper-cli', icon: 'mic', title: 'Listen mode',
    body: 'After the summary Clausper asks “What next?”, beeps, records until you pause, transcribes on your Mac, and sends the words as your prompt. Say “cancel” to skip a turn.',
    foot: '/clausper listen auto · fill · off',
    shot: (<>
      <span className="tl"><span>beep</span><span className="bar" /><span>pause 1.5 s</span></span>
      <span className="i">heard 3.9 s · transcribed in 0.3 s</span>
      <span><span className="i">Clausper heard:</span> add a readme and commit it</span>
      <span className="box">│ &gt; <span className="o">add a readme and commit it</span></span>
      <span className="i">last listen: Heard 3.9 s: "add a readme and commit it"</span>
    </>),
  },
  {
    label: 'pane › turn detail', icon: 'key', title: 'No API key',
    body: 'Summaries are a model call made by your Claude Code session, so they count against the subscription you already have. Nothing to sign up for, nothing to rotate.',
    foot: 'Claude Code mod · hooks module',
    shot: (<>
      <span><span className="i">b: back</span>  <span className="i">r: read this one</span></span>
      <span>Fixed the login redirect bug</span>
      <span className="i">2s ago · 1,842 chars in the reply · summary in 1.4s</span>
      <span className="wrap i">Haiku ran through your own session: no key, no separate bill.</span>
      <span className="y">Needs you: <span style={{ color: '#e9e6df' }}>Should the old redirect test be deleted?</span></span>
    </>),
  },
  {
    label: '/clausper setup', icon: 'lock', title: 'Private by design',
    body: 'Recording and transcription are local programs on your Mac. Clausper adds no network calls of its own; the only one is the request Claude Code already makes.',
    foot: 'MIT · github.com/kenawak/clausper',
    shot: (<>
      <span>recorder (sox rec): <span className="a">/opt/homebrew/bin/rec</span></span>
      <span>whisper (whisper.cpp): <span className="a">/opt/homebrew/bin/whisper-cli</span></span>
      <span>model: <span className="a">~/.clausper/models/ggml-base.en.bin</span></span>
      <span className="i">141 MB on disk · Metal · ~0.3 s per utterance</span>
      <span>Ready to listen.</span>
    </>),
  },
]

export const STEPS = [
  { n: '01', title: 'The turn ends', body: 'A hook sees the reply the moment Claude stops. Short replies are spoken as they are, with no wait.', ms: '0 ms' },
  { n: '02', title: 'The opening line plays', body: 'For long replies, Clausper reads the first sentence at once while Haiku writes a two-sentence summary through your session.', ms: '≈ 1–2 s' },
  { n: '03', title: 'The summary and the ask', body: 'You hear what changed and what needs your decision. Each sentence shows as a caption while it plays.', ms: 'sentence by sentence' },
  { n: '04', title: '“What next?”', body: 'A short beep, then Clausper listens, stops at your pause, transcribes locally, and sends your words as the next prompt.', ms: '≈ 0.3 s to transcribe' },
]

export const COMMANDS: Array<[string, ReactNode]> = [
  ['/clausper', 'Open the pane'],
  ['/clausper mute · unmute', 'Silence or restore speech'],
  ['/clausper again', 'Repeat the last summary'],
  ['/clausper stop', 'Cut speech off'],
  ['/clausper captions on · off', 'Show or hide the caption line'],
  ['/clausper listen', 'Listen once, right now'],
  ['/clausper listen auto · fill · off', 'Hands-free, prompt box only, or never'],
  ['/clausper voice Samantha', <>Pick a system voice; <code>voices</code> lists them</>],
  ['/clausper setup', 'Check the listening tools'],
]

export const FAQS: Array<[string, ReactNode]> = [
  ['Does it cost extra?', 'No. Summaries are written by Haiku through your own Claude Code session, so they count against the subscription you already have. There is no API key to buy and no account to create.'],
  ['Where does my voice go?', 'Nowhere. Recording uses sox and transcription uses whisper.cpp, both running on your Mac with a model stored in your home folder. Clausper adds no network calls of its own.'],
  ['Will it read me the whole reply?', 'No, that is the point. Short replies are read as they are. Long ones get the opening sentence at once, then a two-sentence summary plus anything Claude asked you. The full text stays in the terminal.'],
  ['What if it mishears me?', 'Say “cancel” to skip a turn. Use fill mode and Clausper puts your words in the prompt box instead of sending them, so you can check them first. The pane shows what it heard and for how long.'],
  ['Does it work on Linux or Windows?', 'The pane, captions and change list work anywhere Claude Code runs. Speech uses the macOS system voice today, and listening is tested on macOS. Linux speech is on the list.'],
  ['Can I pick the voice?', <>Yes. Run <code>/clausper voices</code> to list every voice installed on your Mac and <code>/clausper voice Samantha</code> to choose one. The choice is remembered.</>],
]
