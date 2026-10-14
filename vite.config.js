import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],

  // GitHub Pages uses a repository subpath.
  // Vercel serves the site from the root path.
  base: command === 'serve' ? '/' : process.env.GITHUB_PAGES === 'true'
    ? '/niva_platform/'
    : '/',

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
}));