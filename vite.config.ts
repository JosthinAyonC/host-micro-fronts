import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        // Aqui se configuran tantos los remotes que vayamos a contener
        microfront1: 'http://localhost:3001/assets/microfront1.js',
      },
      shared: ['react', 'react-dom', 'tailwindcss', 'postcss', 'autoprefixer'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
});
