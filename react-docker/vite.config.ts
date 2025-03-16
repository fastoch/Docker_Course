import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // the server.watch config is required when using WSL2
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes 
    },
  },
})
