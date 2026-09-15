import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Visual Studio locks files inside .vs; watching them crashes the dev server (EBUSY)
      ignored: ['**/.vs/**'],
    },
  },
})
