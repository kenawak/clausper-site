import { Legal } from './Legal'

export function Privacy() {
  return (
    <Legal crumb="privacy" title="Privacy policy" updated="12 November 2026">
      <h2>The short version</h2>
      <p>Clausper runs on your computer. Your voice, your recordings and the files it shows you never leave it. The one thing that does leave is the text of a Claude Code reply, sent to Anthropic through your own Claude Code session so that a model can summarize it, exactly as your session already sends your conversation. Clausper has no servers, collects no analytics, and keeps no account.</p>

      <h2>What the mod processes</h2>
      <ul>
        <li><strong>Reply text.</strong> After each turn, Clausper reads the reply Claude Code just produced. Short replies are spoken as they are. Long replies are sent, with a fixed summarizing instruction, through your Claude Code session to the Anthropic API your session is already using. That call is subject to Anthropic's own privacy terms for your account. Clausper adds no other recipient.</li>
        <li><strong>Speech.</strong> Summaries are spoken by the macOS system voice on your machine. Nothing is sent to a speech service.</li>
        <li><strong>Microphone.</strong> In listen mode, after you turn it on, Clausper records from your default microphone until you pause, writes the audio into a private folder it creates in your temporary directory, transcribes it with whisper.cpp running locally, submits the words as your next prompt (or places them in the prompt box), and deletes the folder. Recording only happens after you enable listen mode or press listen. macOS asks for microphone permission the first time.</li>
        <li><strong>Files and commands.</strong> The pane lists the paths of files Claude edited and the commands it ran in your session, and shows a file's git diff or contents when you ask. This stays on your machine.</li>
        <li><strong>Settings.</strong> Your chosen voice, listen mode, wake-word and private-mode switches are stored in the plugin store Claude Code provides on your machine.</li>
      </ul>

      <h2>What the mod does not do</h2>
      <ul>
        <li>No telemetry, crash reporting, or usage analytics.</li>
        <li>No accounts, cookies, or identifiers.</li>
        <li>No reading of credentials, keys or tokens. It reads five environment variables: <code>HOME</code> and <code>USER</code>, and the optional <code>CLAUSPER_WHISPER_MODEL</code>, <code>CLAUSPER_RECORDER</code> and <code>CLAUSPER_WHISPER</code> overrides.</li>
        <li>No network calls of its own. The only outbound request is the summary call made through Claude Code.</li>
      </ul>

      <h2>This website</h2>
      <p>clausper.kenawak.dev is a static site with no analytics and no cookies. It stores one preference, your light or dark theme choice, in your browser's local storage. Fonts are loaded from Google Fonts, and the star count in the top bar is fetched from GitHub's public API; each of those receives your IP address when the page loads, under Google's and GitHub's privacy policies. The site is hosted on infrastructure controlled by the author and served through Cloudflare, which processes requests under its own privacy policy.</p>

      <h2>Children</h2>
      <p>Clausper is a developer tool and is not directed at people under 18.</p>

      <h2>Changes</h2>
      <p>Changes to this policy are recorded in the project's changelog and in the "last updated" date above.</p>
    </Legal>
  )
}
