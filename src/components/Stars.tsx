import { useEffect, useState } from 'react'
import { Icon } from './Icon'

// Live star count from GitHub's public API; hidden until it answers.
export function Stars() {
  const [count, setCount] = useState<number | null>(null)
  useEffect(() => {
    fetch('https://api.github.com/repos/kenawak/clausper')
      .then(r => (r.ok ? r.json() : null))
      .then(d => { if (d && typeof d.stargazers_count === 'number') setCount(d.stargazers_count) })
      .catch(() => undefined)
  }, [])
  return (
    <a className="btn btn-light stars" href="https://github.com/kenawak/clausper" rel="noopener" title="Stars on GitHub">
      <Icon name="github" /><span>{count === null ? 'GitHub' : `★ ${count.toLocaleString()}`}</span>
    </a>
  )
}
