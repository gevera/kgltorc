// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build'
			// precompress: true
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			
		}
	}
};

export default config;
