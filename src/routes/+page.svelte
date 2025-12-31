<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DonateButton from '$lib/components/DonateButton.svelte';
	import Portal from '$lib/components/Portal.svelte';
	import { route } from '$lib/ROUTES';
</script>

<svelte:head>
	<title>Karma Gyurmed Ling | Tibetan Buddhist Center in Truth or Consequences, NM</title>
</svelte:head>

<Hero
	name={'Buddhist Center'}
	mobileImage={'center-mobile.png'}
	desktopImage={'center-desktop.png'}
/>
<div class="">
	<Portal />
</div>
<Section id="main">
	<h2 class="text-center text-3xl my-4">Welcome</h2>
	<p class="text-lg mb-4">
		Karma Gyurmed Ling, which translates as <span class="italic"
			>“Garden Island of Unchangeable Buddha Activity”</span
		>
		is a center of Buddhist study and practice under the direction of His Eminence The 2nd Kyabje Kalu
		Rinpoche, Meditation Master of the Kagyupa and Shangpa lineages of Tibetan Buddhism. Please go to
		<a href={route('/calendar')} class="text-red-800">our calendar</a> for the schedule of our weekly
		and monthly practices, classes and upcoming events.
	</p>
	<div class="my-5 mx-auto space-y-2">
		<h5 class="font-semibold text-xl text-center">
			{new Date().toLocaleString('default', { month: 'long' })}
			{new Date().getFullYear()} - PRACTICE SCHEDULE
		</h5>
		<p class="display-font text-red-900 text-center text-lg font-semibold underline pt-10">
			SUNDAYS
		</p>
		<p class="text-center text-lg font-bold">
			9:00AM <span class="display-font">GREEN TARA PRACTICE</span>
		</p>
		<p class="italic text-center">Led by Lama Nima Sherpa</p>
		<p class="text-center text-lg font-bold">
			10:00AM <span class="display-font">Tsoke - Brunch Potluck</span>
		</p>
		<p class="italic text-center text-sm">(No meat, no eggs, vegetarian meal)</p>
		<!-- <p class="text-center text-lg font-bold">
			05:00PM <span class="display-font">CHENREZIG PRACTICE</span>
		</p> -->

		<p class="display-font text-red-900 text-center text-lg font-semibold underline pt-10">
			WEDNESDAYS
		</p>

		<p class="text-center text-lg font-bold">
			05:00PM
			<span class="display-font">MEDICINE BUDDHA </span>
		</p>
		<p class="italic text-center">Led by Lama Nima Sherpa</p>

		<p class="display-font text-red-900 text-center text-lg font-semibold underline pt-10">
			THURSDAYS
		</p>
		<p class="text-center text-lg font-bold">
			6:00PM <span class="display-font">WALKING - SILENT MEDITATION</span>
		</p>
		<p class="italic text-center">Led by Bryan Becker</p>

		<p class="display-font text-red-900 text-center text-lg font-semibold underline pt-10">
			SPECIAL PRACTICE
		</p>
		<p class="text-center text-lg font-bold">
			<span class="display-font">Full Moon Puja- Saturday, January 3th</span>
		</p>
		<p class="text-center text-lg font-bold">
			11:00AM
			<span class="display-font">THE FOUR THOUGHTS PRACTICE and FIRE PUJA</span>
		</p>

		<div class="divider" />
		<!-- <p class="text-center text-lg font-bold">
			11:00AM
			<span class="display-font">FIRE PUJA (no Green Tara this day)</span>
		</p>
		<p class="italic text-center">Led by Lama Nima Sherpa</p> -->

		<!-- <img src="/flyer.jpg" alt="Event and KGL T&C" class="h-full object-contain" /> -->
	</div>
	<p class="text-lg mb-4">
		Karma Gyurmed Ling is supported by membership and donations. We are a 501 (c) 3 non-profit
		organization. All donations you make are tax deductible.
	</p>
	<p class="text-lg mb-4">
		Generosity is a benefit to all beings and creates merit for those who give. There are many ways
		you can contribute and be a part of Karma Gurmed Ling. One way is to become a member of Karma
		Gyurmed Ling. Your monthly or annual membership contributions support our center.
	</p>
	<p class="text-lg mb-4">
		You can also support us by participating in our regularly scheduled activities. See our calendar
		for upcoming scheduled activities, events and teachings.
	</p>
	<p class="text-lg mb-4">
		We also have a wonderful gift shop at our center that is open during scheduled activities. You
		can donate dharma items for fundraising, or purchase items from our gift shop.
	</p>
	<p class="text-lg mb-4">
		Also, we always appreciate when you share in our dharma centers projects, donating your time,
		in-kind goods, services and your valuable skills. Please come by and visit the stupa and join us
		in the practice and study of the dharma.
	</p>

	<p class="text-2xl text-center my-2 display-font text-red-900">May All Beings Be Happy!!!</p>
</Section>
