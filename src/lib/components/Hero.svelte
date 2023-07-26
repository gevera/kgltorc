<script lang="ts">
	export let name: string = 'Buddhist Center';
	export let mobileImage: string = 'center-mobile.png';
	export let desktopImage: string = 'center-desktop.png';
</script>

<div class="">
	<img src={desktopImage} class="hidden lg:block h-full w-full max-h-[60vh] max-w-screen-xl object-cover mx-auto object-top lg:rounded-lg" alt={name} />
	<img src={mobileImage} class="lg:hidden h-full w-full max-h-[70vh] object-cover mx-auto object-top" alt={name} />
</div>
