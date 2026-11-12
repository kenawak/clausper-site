import type { ReactNode } from 'react'
import { TopBar } from '../components/TopBar'
import { Footer } from '../components/Footer'

export function Legal({ crumb, title, updated, children }: { crumb: string; title: string; updated: string; children: ReactNode }) {
  return (
    <div className="cl legal">
      <TopBar crumb={crumb} />
      <main className="wrap">
        <div className="head">
          <span className="mono" style={{ color: 'var(--ink-3)' }}>{crumb}</span>
          <h1>{title}</h1>
          <p>Last updated {updated}. Questions: open an issue at github.com/kenawak/clausper.</p>
        </div>
        <article className="prose">{children}</article>
      </main>
      <Footer />
    </div>
  )
}
