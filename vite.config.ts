import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two plain HTML entries: the landing page and the changelog. No router, so any
// static host serves /changelog.html without a fallback rule.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: 'index.html', changelog: 'changelog.html', privacy: 'privacy.html', terms: 'terms.html' },
    },
  },
})
