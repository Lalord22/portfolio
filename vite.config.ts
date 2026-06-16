import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const isUserOrOrgPage = repoName.endsWith('.github.io')
  const defaultProductionBase = repoName && !isUserOrOrgPage ? `/${repoName}/` : './'
  const productionBase = process.env.VITE_BASE_PATH ?? defaultProductionBase

  return {
    plugins: [react()],
    base: command === 'build' ? productionBase : '/',
  }
})
