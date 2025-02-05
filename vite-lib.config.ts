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
        {
          src: './src/lib/styles.css',
          dest: './',
        },
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    outDir: 'lib',
    lib: {
      name: '@daiki-ui/react',
      formats: ['es'],
      entry: {
        index: 'src/lib/index.ts',
        'components/index': 'src/lib/components',
        'components/button/button': 'src/lib/components/button',
        'components/card/card': 'src/lib/components/card',
        'plugin/index': 'src/lib/plugin',
      },
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss/plugin'],
      output: {
        preserveModules: true,
      },
    },
  },
});
