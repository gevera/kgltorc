<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>

<style global>
	html {
		scroll-behavior: smooth;
	}
	.display-font {
		font-family: 'Fondamento', cursive;
	}
</style>
