// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: 'https://kevynf.github.io',
	base: '/logflow-theme',
	integrations: [mdx(), sitemap(), react()],
});
