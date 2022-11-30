<script>
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Events Calendar | Karma Gyurmed Ling</title>
</svelte:head>

<Section id="calendar">
	<h1 class="text-center my-4 text-3xl">Events Calendar</h1>
	<div class="flex justify-center items-center mx-auto p-4">
		<iframe
			title="Calendar"
			src="https://calendar.google.com/calendar/embed?src=c_93adc9a8597047d74fb6f40aa8e8e5d89426d7cf938de8c1761595412a02702e%40group.calendar.google.com&ctz=America%2FDenver"
			style="border: 0"
			width="800"
			height="600"
			frameborder="0"
			scrolling="no"
		/>
	</div>
	<div class="text-center my-4 max-w-lg p-4 mx-auto">
		<p>In case the calendar is not displayed <a href="https://calendar.google.com/calendar/embed?src=c_93adc9a8597047d74fb6f40aa8e8e5d89426d7cf938de8c1761595412a02702e%40group.calendar.google.com&ctz=America%2FDenver" target="_blank" class="underline text-blue-500 hover:text-blue-800">click here</a> to open it in another window</p>
		<!-- ><p>In case the calendar is not displayed <a href="https://calendar.google.com/calendar/u/4?cid=Y185M2FkYzlhODU5NzA0N2Q3NGZiNmY0MGFhOGU4ZTVkODk0MjZkN2NmOTM4ZGU4YzE3NjE1OTU0MTJhMDI3MDJlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" class="underline">click here</a> to open it in another window</p> -->
</Section>
