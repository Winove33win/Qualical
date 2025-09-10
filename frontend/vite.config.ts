import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

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
    // Produz build no backend para ser servido pelo Express
    outDir: path.resolve(__dirname, '../httpdocs/backend/public'),
    emptyOutDir: true
  }
})
