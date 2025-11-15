import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), kitRoutes<KIT_ROUTES>({
		LINKS: {
			skryonline: 'https://www.skryonline.com',
			google_maps: 'https://maps.app.goo.gl/3guW3eCPXgr9BpEG6',
			stupa: '/about#stupa',
			medicine_buddha: 'https://www.wikiwand.com/en/Medicine_Buddha',
			registration: '/registration',
			success: '/success',
			cancel: '/cancel',
			google_calendar: 'https://calendar.google.com/calendar/embed?src=c_93adc9a8597047d74fb6f40aa8e8e5d89426d7cf938de8c1761595412a02702e%40group.calendar.google.com&ctz=America%2FDenver',
			membership_support: 'https://docs.google.com/document/d/12gpqDBcsTg9bxjSDPvDwA-wx6k20GPmQCkuuWF5PuEs'
		}
	})]
});
