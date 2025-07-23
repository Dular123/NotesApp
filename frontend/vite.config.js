import { defineConfig } from 'vite'           // Import Vite config helper
import react from '@vitejs/plugin-react'      // Import Vite plugin for React

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],                         // Enable React plugin for JSX, Fast Refresh, etc.
  server:{
    port:8000
  }
})
