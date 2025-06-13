import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
     jsxRuntime: 'classic'
  })],
  root: './',
  base: '/portfolio/',
  esbuild: {
    loader: 'jsx', 
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
