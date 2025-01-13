import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ tsconfigPath: './tsconfig.lib.json' }),
    viteStaticCopy({
      targets: [
        {
          src: './src/lib/package.json',
          dest: './',
        },
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      name: 'DaikiUI',
      formats: ['es'],
      entry: {
        index: 'src/lib/index.ts',
        'components/button/button': 'src/lib/components/button',
        'components/card/card': 'src/lib/components/card',
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        preserveModules: true,
      },
    },
  },
});
