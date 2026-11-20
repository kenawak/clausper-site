import type { ReactNode } from 'react'
import type { IconName } from '../components/Icon'

export type Feature = { label: string; icon: IconName; title: string; body: string; foot: string; shot: ReactNode }

// Each preview is a fragment of the real UI: the band, the pane, a diff, a command's output.
export const FEATURES: Feature[] = [
  {
    label: 'turn.complete → say', icon: 'volume', title: 'Spoken summary',
    body: 'The opening sentence plays the moment Claude stops. Haiku writes the two sentences that follow while you listen. Short replies are read as they are.',
    foot: 'system voice or Kokoro · /clausper voice kokoro',
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
    body: 'After the summary Clausper asks “What next?”, beeps, records until you pause, transcribes on your machine, and sends the words as your prompt. Say “cancel” to skip a turn.',
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
    label: '/clausper cost', icon: 'key', title: 'No API key, and the cost shown',
    body: 'Summaries are one Haiku call made by your own Claude Code session, on the subscription you already have. The pane shows what each one used, well under a tenth of a cent at API prices.',
    foot: 'short replies and private mode: no call at all',
    shot: (<>
      <span>Fixed the login redirect bug</span>
      <span className="i">2s ago · summary in 1.4 s · 2.3k tokens · $0.002</span>
      <span className="i">/clausper cost</span>
      <span>this session: <span className="a">14 summaries · $0.034</span></span>
      <span className="i">today $0.071 · all time $0.42</span>
    </>),
  },
  {
    label: 'tts/kokoro.py', icon: 'waves', title: 'A voice that sounds human',
    body: 'Kokoro is an open-weight neural voice that runs on your CPU. One command sets it up, each download checked against a pinned hash. After that it speaks fully offline.',
    foot: '/clausper voice kokoro · af_heart · bm_george',
    shot: (<>
      <span className="i">/clausper voice kokoro</span>
      <span className="i">  fetching kokoro-v1.0.onnx · 326 MB · sha256 ok</span>
      <span className="i">  packages pinned by hash · ok</span>
      <span className="g">Clausper voice set to Kokoro af_heart.</span>
      <span className="cap">Hello. This is the new voice.</span>
    </>),
  },
  {
    label: 'keys/clausper-keys.swift', icon: 'tag', title: 'A key to stop it',
    body: 'Press ⌃⌥S in any app and Clausper stops mid-sentence, even with the terminal in the background. Give mute, again and listen their own chords too.',
    foot: '/clausper keys stop cmd+shift+s',
    shot: (<>
      <span className="i">/clausper keys</span>
      <span>stop: <span className="a">⌃⌥S</span>   mute: <span className="a">⌃⌥M</span></span>
      <span>again: <span className="i">off</span>   listen: <span className="i">off</span></span>
      <span className="i">Helper: ready · no Accessibility permission needed</span>
    </>),
  },
  {
    label: '/clausper setup', icon: 'lock', title: 'Private by design',
    body: 'Recording, transcription and the Kokoro voice are local programs on your machine. Clausper adds no network calls of its own; the only one is the request Claude Code already makes.',
    foot: 'MIT · github.com/kenawak/clausper',
    shot: (<>
      <span>recorder (sox rec): <span className="a">/opt/homebrew/bin/rec</span></span>
      <span>whisper (whisper.cpp): <span className="a">/opt/homebrew/bin/whisper-cli</span></span>
      <span>model: <span className="a">~/.clausper/models/ggml-base.en.bin</span></span>
      <span className="i">141 MB on disk · Metal · ~0.3 s per utterance</span>
      <span>Ready to listen.</span>
    </>),
  },
  {
    label: '~/.clausper/floor', icon: 'volume', title: 'Sessions take turns',
    body: 'Run several Claude Code sessions at once. When two finish together, one speaks while the other waits, then names its project first so you know whose summary it is.',
    foot: 'one voice at a time · one listener at a time',
    shot: (<>
      <span className="cap">Fixed the login redirect bug.</span>
      <span className="i">  shop · speaking</span>
      <span className="i">  weather-app · waiting for its turn</span>
      <span className="cap">In weather app. The forecast cache now expires hourly.</span>
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
  ['/clausper stop', <>Cut speech off; <code>⌃⌥S</code> from any app</>],
  ['/clausper keys', 'Show or change the global shortcuts'],
  ['/clausper cost', 'What summaries used: session, today, all time'],
  ['/clausper captions on · off', 'Show or hide the caption line'],
  ['/clausper listen', 'Listen once, right now'],
  ['/clausper listen auto · fill · off', 'Hands-free, prompt box only, or never'],
  ['/clausper voice kokoro', <>The natural voice; <code>voices</code> lists every voice</>],
  ['/clausper private on · off', 'Skip the model call entirely'],
  ['/clausper setup', 'Check the voice and listening tools'],
]

export const FAQS: Array<[string, ReactNode]> = [
  ['Does it cost extra?', <>No. Summaries are written by Haiku through your own Claude Code session, so they count against the subscription you already have. A summary is one to four thousand tokens, and <code>/clausper cost</code> shows exactly what they used. Short replies make no call at all.</>],
  ['Where does my voice go?', 'Nowhere. Recording uses sox and transcription uses whisper.cpp, both running on your machine with a model stored in your home folder. The Kokoro voice runs locally too. Clausper adds no network calls of its own.'],
  ['Will it read me the whole reply?', 'No, that is the point. Short replies are read as they are. Long ones get the opening sentence at once, then a two-sentence summary plus anything Claude asked you. The full text stays in the terminal.'],
  ['What if it mishears me?', 'Say “cancel” to skip a turn. Use fill mode and Clausper puts your words in the prompt box instead of sending them, so you can check them first. The pane shows what it heard and for how long.'],
  ['Does it work on Linux or Windows?', 'macOS and Linux. On Linux Clausper speaks with espeak-ng or Kokoro and plays audio through PipeWire, PulseAudio or ALSA. The global stop key is macOS only for now; /clausper stop works everywhere. Windows is not supported yet.'],
  ['How do I make it stop talking?', <>Press <code>⌃⌥S</code> in any app on macOS, press <code>s</code> in the pane, or run <code>/clausper stop</code>. <code>/clausper keys stop cmd+shift+s</code> picks a different chord.</>],
  ['Can I pick the voice?', <>Yes. <code>/clausper voice kokoro</code> switches to the natural Kokoro voice and sets it up once. <code>/clausper voices</code> lists every system and Kokoro voice, and <code>/clausper voice af_heart</code> picks one. The choice is remembered.</>],
]
