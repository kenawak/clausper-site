import { Legal } from './Legal'

export function Terms() {
  return (
    <Legal crumb="terms" title="Terms of use" updated="12 November 2026">
      <h2>The software</h2>
      <p>Clausper is open source under the MIT License. You may use, copy, modify and redistribute it under that license's terms, which are in the LICENSE file of the repository at github.com/kenawak/clausper.</p>

      <h2>No warranty</h2>
      <p>Clausper is provided "as is", without warranty of any kind, express or implied, including the warranties of merchantability, fitness for a particular purpose and non-infringement. In no event shall the author be liable for any claim, damages or other liability arising from the software or its use. In plain terms: it speaks summaries and submits what it hears you say; check what it submits before relying on it for anything that matters.</p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Clausper acts inside your own Claude Code account and is bound by Anthropic's terms for that account. Usage it generates, such as summary calls, counts against your plan.</li>
        <li>In listen mode, Clausper submits transcribed speech as your prompt. You are responsible for what you say and for reviewing what Claude does in response. Use fill mode if you want to confirm each prompt first.</li>
        <li>Microphone access is granted by you, through macOS, and can be withdrawn at any time in System Settings.</li>
      </ul>

      <h2>Third-party software</h2>
      <p>Listen mode relies on sox and whisper.cpp, installed by you and governed by their own licenses. The whisper model file is distributed by its authors under their terms.</p>

      <h2>This website</h2>
      <p>The content of clausper.kenawak.dev is provided for information. The site may change or go offline without notice.</p>

      <h2>Contact</h2>
      <p>Open an issue at github.com/kenawak/clausper/issues.</p>
    </Legal>
  )
}
