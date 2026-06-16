import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const githubPagesBase = repositoryName ? `/${repositoryName}/` : './'
  const productionBase = process.env.VITE_BASE_PATH ?? githubPagesBase

  return {
    plugins: [react()],
    base: command === 'build' ? productionBase : '/',
  }
})
