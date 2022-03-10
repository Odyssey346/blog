import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex({
		extensions: ['.svx', '.md'],
		layout: "./src/lib/InfoCard.svelte"
	})],

	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/blog',
		}
	}
};

export default config;
