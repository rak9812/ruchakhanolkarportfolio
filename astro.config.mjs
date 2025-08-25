import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rak9812.github.io',
  base: '/ruchakhanolkarportfolio',
  build: {
    assets: '_astro',
  },
  integrations: [tailwind()],
});

