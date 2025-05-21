import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-new/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    // Enable sourcemaps for better debugging
    sourcemap: true,
    // Consistent minification settings
    minify: 'esbuild',
    // Add CSS specific settings
    cssCodeSplit: true,
    cssMinify: true
  }
}) 