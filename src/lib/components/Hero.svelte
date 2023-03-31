<script lang="ts">
	export let name: string = 'Buddhist Center';
	export let mobileImage: string = 'center-mobile.png';
	export let desktopImage: string = 'center-desktop.png';
</script>

<div class="">
	<img src={desktopImage} class="hidden lg:block h-full object-contain mx-auto" alt={name} />
	<img src={mobileImage} class="lg:hidden h-full object-cover mx-auto" alt={name} />
</div>
