import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Durante o dev, proxy para backend local:
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})
