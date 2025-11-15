<script lang="ts">
	import Portal from '$lib/components/Portal.svelte';
	import Section from '$lib/components/Section.svelte';
	import { route } from '$lib/ROUTES';
</script>

<svelte:head>
	<title>Events Calendar | Karma Gyurmed Ling</title>
</svelte:head>

<Portal />
<Section id="calendar">
	<h1 class="text-center my-4 text-3xl">Events Calendar</h1>
	<div class="my-4 w-full">
		<figure>
			<img
				src="/mandala_unsplash.jpg"
				alt="KGL Truth or Consequences"
				class="w-full object-cover"
			/>
			<!-- <figcaption class="text-center italic">Lama Nima Sherpa</figcaption> -->
		</figure>
	</div>
	<div class="flex justify-center items-center mx-auto p-4">
		<iframe
			title="Calendar"
			src={route('google_calendar')}
			style="border: 0"
			width="800"
			height="600"
			frameborder="0"
			scrolling="no"
		/>
	</div>
	<div class="text-center my-4 max-w-lg p-4 mx-auto">
		<p>
			In case the calendar is not displayed <a
				href={route('google_calendar')}
				target="_blank"
				class="underline text-primary hover:text-warning">click here</a
			> to open it in another window
		</p>
		<!-- ><p>In case the calendar is not displayed <a href="https://calendar.google.com/calendar/u/4?cid=Y185M2FkYzlhODU5NzA0N2Q3NGZiNmY0MGFhOGU4ZTVkODk0MjZkN2NmOTM4ZGU4YzE3NjE1OTU0MTJhMDI3MDJlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" class="underline">click here</a> to open it in another window</p> -->
	</div>
</Section>
