import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'portfolio'
  const productionBase = repoName ? `/${repoName}/` : '/'

  return {
    plugins: [react()],
    base: command === 'build' ? productionBase : '/',
  }
})
