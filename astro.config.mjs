import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://senpawaii.github.io',
  compressHTML: true,
  integrations: [sitemap()],
});
