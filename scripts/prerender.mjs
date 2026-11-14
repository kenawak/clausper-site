// After `vite build`, render each page to static HTML so crawlers and link
// previews see the content without running JavaScript. The client hydrates.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const { pages } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
for (const [file, render] of Object.entries(pages)) {
  const path = resolve(dist, file)
  const html = readFileSync(path, 'utf8')
  const out = html.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`)
  if (out === html) throw new Error(`no root in ${file}`)
  writeFileSync(path, out)
  console.log(`prerendered ${file}`)
}
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
