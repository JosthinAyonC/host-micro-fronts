import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`El modo actual es: ${mode}`);
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: 'host',
        remotes: {
          // Aqui se configuran tantos los remotes que vayamos a contener
          microfront1: env.VITE_MICRO_1_URL ? `${env.VITE_MICRO_1_URL}/assets/remoteEntry.js` : "http://localhost:4173/assets/remoteEntry.js",
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
      port: Number(env.VITE_APP_PORT) || 3000,
    },
  };
});
