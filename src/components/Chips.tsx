const CHIPS: Array<[string, string]> = [
  ['All', '#top'], ['Speak', '#features'], ['Captions', '#features'], ['Changes', '#features'], ['Listen', '#features'],
  ['How it works', '#how'], ['Install', '#install'], ['FAQ', '#faq'], ['Changelog', '/changelog.html'], ['Private', '#features'],
]

export function Chips() {
  return (
    <nav className="chips" aria-label="Jump to">
      {CHIPS.map(([label, href], i) => (
        <a key={label} className={`chip${i === 0 ? ' on' : ''}`} href={href}>{label}</a>
      ))}
    </nav>
  )
}
