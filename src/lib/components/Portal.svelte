<script lang="ts">
	import DonateButton from "./DonateButton.svelte";
</script>
<ul class="grid grid-cols-6 md:grid-cols-5 items-center text-yellow-500">
		<li class="col-span-3 md:col-span-1">
			<a
				class="font-semibold block w-full p-4 bg-red-8 hover:bg-red-900 ease-in duration-300 bg-red-800 text-center"
				href="/">Home Page</a
			>
		</li>
		<li class="col-span-3 md:col-span-1">
			<a
				class="font-semibold block w-full p-4 bg-red-8 hover:bg-red-900 ease-in duration-300 bg-red-800 text-center"
				href="/about">About Us</a
			>
		</li>
		<li class="bg-red-800 p-4 h-full col-span-2 md:col-span-1"><DonateButton /></li>
		<li class="col-span-2 md:col-span-1">
			<a
				class="font-semibold block w-full p-4 bg-red-8 hover:bg-red-900 ease-in duration-300 bg-red-800 text-center"
				href="/membership_support">Membership</a
			>
		</li>
		<li class="col-span-2 md:col-span-1">
			<a
				class="font-semibold block w-full p-4 bg-red-8 hover:bg-red-900 ease-in duration-300 bg-red-800 text-center"
				href="/calendar">Calendar</a
			>
		</li>
	</ul>