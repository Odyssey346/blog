import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex({
		extensions: ['.svx', '.md'],
		layout: "./src/lib/DescCard.svelte"
	})],

	kit: {
		adapter: adapter(),
		//paths: {
		//	base: '/blog',
		//},
	}
};

export default config;
