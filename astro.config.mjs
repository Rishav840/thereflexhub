// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://thereflexhub.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare()
});