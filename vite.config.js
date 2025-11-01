import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add base here — MUST match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/react-project/', // <-- replace with '/react-p-/' if that’s your repo
})
