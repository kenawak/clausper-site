# clausper-site

The landing page and changelog for [Clausper](https://github.com/kenawak/clausper), the voice mod for Claude Code. Vite + React + TypeScript, plain CSS, no UI framework.

    npm install
    npm run dev       # http://localhost:5173
    npm run build     # static output in dist/

Two HTML entries, `index.html` and `changelog.html`, so any static host serves both without a SPA fallback. Release notes live in `src/data/releases.tsx`; keep them in step with CHANGELOG.md in the mod repository.

Deploy anywhere that builds Node: build command `npm run build`, output `dist`. Railpack (Railway, Dokploy, Coolify) detects Vite and serves `dist` with Caddy on its own.
