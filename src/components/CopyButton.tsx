import { useState } from 'react'
import { Icon } from './Icon'

export const INSTALL_LINE = '/plugin install clausper --marketplace kenawak/clausper'

export function CopyButton({ text = INSTALL_LINE, label = 'Copy', className = 'btn btn-dark' }: { text?: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard refused: leave the text selectable in the page.
    }
  }
  return (
    <button type="button" className={`${className}${copied ? ' copied' : ''}`} onClick={copy}>
      <Icon name={copied ? 'check' : 'copy'} /> {copied ? 'Copied' : label}
    </button>
  )
}
