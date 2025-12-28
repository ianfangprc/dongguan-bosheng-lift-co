import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // SEO OPTIMIZATION: Use root base for clean URLs (BrowserRouter)
  base: '/', 
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 5173,
    strictPort: false,
    // Add history fallback for local development
    historyApiFallback: true,
  }
})