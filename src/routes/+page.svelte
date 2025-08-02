<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import DonateButton from '$lib/components/DonateButton.svelte';
	import Portal from '$lib/components/Portal.svelte';
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
<!-- <a
	class="block bg-red-800 hover:bg-red-8 hover:bg-red-900 ease-in duration-300 bg-red-800 hover:shadow-md font-bold p-4 my-4 text-center text-xl text-white"
	href="/registration"
	>Attend "Refuge, Devotion and the Guru/Disciple Relationship in Tibetan Buddhism" teachings on
	15th of August by Lama Lodu Rinpoche
</a> -->
<Section id="main">
	<h2 class="text-center text-3xl my-4">Welcome</h2>
	<p class="text-lg mb-4">
		Karma Gyurmed Ling, which translates as <span class="italic"
			>“Garden Island of Unchangeable Buddha Activity”</span
		>
		is a center of Buddhist study and practice under the direction of His Eminence The 2nd Kyabje Kalu
		Rinpoche, Meditation Master of the Kagyupa and Shangpa lineages of Tibetan Buddhism. Please go to
		<a href="/calendar" class="text-red-800">our calendar</a> for the schedule of our weekly and monthly
		practices, classes and upcoming events.
	</p>
	<div class="my-5 mx-auto space-y-2">
		<h5 class="font-semibold text-lg text-center">AUGUST 2025</h5>
		<p class="font-display text-red-900 text-center text-lg font-semibold">SUNDAYS</p>
		<p class="text-center text-lg"><span class="font-display">CHENREZIG PRACTICE</span> 5:00 PM</p>

		<p class="font-display text-red-900 text-center text-lg font-semibold">WEDNESDAYS</p>

		<p class="text-center text-lg">
			<span class="font-display">GREEN TARA PRACTICE </span>11:00 AM Led by Lama Nima Sherpa
		</p>
		<p class="text-center text-lg">Followed by Tsoke (Potluck)</p>

		<p class="text-center text-lg">
			<span class="font-display">MEDICINE BUDDHA PRACTICE</span> 5:00 PM Led by Lama Nima Sherpa
		</p>

		<p class="font-display text-red-900 text-center text-lg font-semibold">THURSDAYS</p>
		<p class="text-center text-lg">Walking-Silent-Meditation 6:00 PM Led by Bryan Becker</p>
		<p class="text-center text-lg">
			<span class="font-display">CHÖD SPECIAL PRACTICE</span> <span class="font-bold">August 26th</span> at
			5:00 PM
		</p>

		<!-- <img src="/event.jpg" alt="Event and KGL T&C" class="h-full object-contain" /> -->
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

	<p class="text-2xl text-center my-2 font-display text-red-900">May All Beings Be Happy!!!</p>
</Section>
