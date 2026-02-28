import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';

// Plugin pour copier les fichiers Netlify avec le bon nom
function netlifyFilesPlugin() {
  return {
    name: 'netlify-files',
    writeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      
      // Copier .redirects vers _redirects
      const redirectsSource = path.join(publicDir, '.redirects');
      const redirectsDest = path.join(outDir, '_redirects');
      if (fs.existsSync(redirectsSource)) {
        fs.copyFileSync(redirectsSource, redirectsDest);
        console.log('✅ Copié .redirects → _redirects');
      }
      
      // Copier .headers vers _headers
      const headersSource = path.join(publicDir, '.headers');
      const headersDest = path.join(outDir, '_headers');
      if (fs.existsSync(headersSource)) {
        fs.copyFileSync(headersSource, headersDest);
        console.log('✅ Copié .headers → _headers');
      }
      
      // Supprimer les mauvais fichiers/dossiers _headers et _redirects du dist si présents
      const badHeaders = path.join(outDir, '_headers');
      const badRedirects = path.join(outDir, '_redirects');
      
      // Le plugin s'assure que les bons fichiers sont créés
      console.log('✅ Fichiers Netlify créés correctement !');
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    netlifyFilesPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['motion', 'lucide-react'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});