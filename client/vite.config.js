import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    // __URL_BASE__: JSON.stringify('https://dev-book-server-vl45.onrender.com/'),
    __URL_BASE__: JSON.stringify('http://localhost:5555/'),
  },
  server: {
    host: 'localhost',
    port: 8080,
  },
})
