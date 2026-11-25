import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.fallcar.com.br',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  compressHTML: true
});
