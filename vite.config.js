import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Dossier de sortie standard pour Vite, Netlify pointera ici
    outDir: 'dist',
    emptyOutDir: true,
  }
});

