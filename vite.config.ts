import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const isUserSite = repository?.toLowerCase().endsWith('.github.io')

  // Priority: explicit override > inferred GitHub Pages path > relative fallback.
  const productionBase =
    process.env.VITE_BASE_PATH ??
    (isUserSite ? '/' : repository ? `/${repository}/` : './')

  return {
    plugins: [react()],
    base: command === 'build' ? productionBase : '/',
  }
})
