import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const productionBase = process.env.VITE_BASE_PATH ?? '/portfolio/'

  return {
    plugins: [react()],
    base: command === 'build' ? productionBase : '/',
  }
})
