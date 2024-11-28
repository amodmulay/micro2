import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'micro2',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.tsx',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});