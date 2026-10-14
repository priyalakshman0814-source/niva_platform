import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],

  base:
    command === 'serve'
      ? '/'
      : process.env.GITHUB_PAGES === 'true'
        ? '/niva_platform/'
        : '/',

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
}));