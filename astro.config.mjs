// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL ?? SITE_URL,
	base: process.env.BASE_PATH ?? '/',
	integrations: [mdx(), sitemap(), react()],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			defaultColor: false,
		},
	},
});
