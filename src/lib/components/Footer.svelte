<script lang="ts">
	import { route } from '$lib/ROUTES';
	import DonateButton from './DonateButton.svelte';
</script>

<footer
	class="flex flex-col gap-4 items-center justify-between px-6 py-4 sm:flex-row border-t border-warning bg-red-800"
>
	<a href={route('/')} class="text-xl font-bold text-warning hover:text-yellow-200 display-font text-center"
		>Karma Gyurmed Ling</a
	>

	<div class="py-2 text-white sm:py-0 text-center mx-auto flex flex-col gap-5">
		<p>
			© {new Date().getFullYear()} - Karma Gyurmed Ling,
			<a href={route('google_maps')} target="_blank" class="hover:text-warning"
				>813 North Pershing Street, Truth or Consequences, NM 87901</a
			>
		</p>
		<a href={route('skryonline')} target="_blank" class="text-sm opacity-50"
			>Website designed by SKRY Online</a
		>
	</div>

	<div>
		<DonateButton />
	</div>
</footer>
