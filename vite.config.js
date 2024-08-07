import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    minify: false,
    outDir: resolve(__dirname, 'dist/gas/ui'),
  },
});
