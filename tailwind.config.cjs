const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			display: ['Fondamento', 'cursive']
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#7f1d1d',

					secondary: '#0996c1',

					accent: '#f4e1b5',

					neutral: '#282a39',

					'base-100': '#f7f7f8',

					info: '#5b98cd',

					success: '#63d9cd',

					warning: '#fabd5c',

					error: '#ef3e64'
				}
			}
		]
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
