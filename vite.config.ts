import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    copyPublicDir: false,
    lib: {
      name: 'DaikiUI',
      formats: ['es'],
      /* entry: ['src/lib/main.ts'], */
      entry: {
        index: 'src/lib/main.ts',
        'components/button/button': 'src/lib/components/button/',
        'components/card/card': 'src/lib/components/card/',
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        // Put chunk files at <output>/chunks
        chunkFileNames: 'chunks/[name].[hash].js',
        // Put chunk styles at <output>/assets
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
  },
});
