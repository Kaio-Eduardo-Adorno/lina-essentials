import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    react(),
    svgr({
      // svgrOptions: {
      // replaceAttrValues: { black: '{props.color}' },
      // },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: 'terser',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'LinaEssentials',
      formats: ['es', 'umd'],
      fileName: (format) => `lina-essentials.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
