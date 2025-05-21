import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    // Reduce complexity of the build
    sourcemap: false,
    // No minification for easier debugging
    minify: false
  }
})

