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
		<h5 class="font-semibold text-xl text-center">
			{new Date().toLocaleString('default', { month: 'long' })}
			{new Date().getFullYear()} - PRACTICE SCHEDULE
		</h5>
		<p class="font-display text-red-900 text-center text-lg font-semibold underline pt-10">
			SUNDAYS
		</p>
		<p class="text-center text-lg font-bold">
			11:00AM <span class="font-display">GREEN TARA PRACTICE</span>
		</p>
		<p class="text-center text-lg font-bold">
			5:00PM <span class="font-display">CHENREZIG PRACTICE</span>
		</p>
		<p class="italic text-center">Led by Lama Nima Sherpa</p>

		<p class="font-display text-red-900 text-center text-lg font-semibold underline pt-10">
			WEDNESDAYS
		</p>

		<p class="text-center text-lg font-bold">
			11:00AM
			<span class="font-display">MEDICINE BUDDHA </span>
		</p>
		<p class="italic text-center">Led by Lama Nima Sherpa</p>

		<p class="font-display text-red-900 text-center text-lg font-semibold underline pt-10">
			THURSDAYS
		</p>
		<p class="text-center text-lg font-bold">
			6:00PM <span class="font-display">WALKING - SILENT MEDITATION</span>
		</p>
		<p class="italic text-center">Led by Bryan Becker</p>

		<p class="font-display text-red-900 text-center text-lg font-semibold underline pt-10">
			SPECIAL PRACTICE
		</p>
		<p class="text-center text-lg font-bold">
			<span class="font-display">Full Moon - Monday, October 6th</span>
		</p>
		<p class="text-center text-lg font-bold">
			6:00PM
			<span class="font-display">THE FOUR THOUGHTS PRACTICE</span>
		</p>

		<div class="divider" />
		<div class="my-10 flex flex-col items-center justify-center gap-3">
			<p class="text-center text-lg font-bold">
				<span class="font-display text-xl">Alchemy Bowl Sound Experience</span>
			</p>
			<p class="text-lg">Monday, October 25th, 2:00PM</p>
			<img src="singing_bowl.png" alt="Alchemy Bowl Sound Experience" />
			<div class="mx-auto">
				<p class="font-semibold text-center text-xl">Presented by 11:11 with Katherine & Greg</p>
				<p class="text-lg">
					Katherine has spent over 13 years immersed in the transformative art of alchemy crystal
					bowls, using sound as a pathway for healing, balance, and expanded awareness. With a
					background in educational therapy, acupressure and a lifelong connection to the wisdom of
					horses, she brings insight, compassion, and intuitive guidance into her sound creations.
					Greg, a veteran,carries forward the resilience and awareness shaped by his service into
					the realm of sound healing. Together, Katherine and Greg weave their unique journeys into
					an extraordinary sound experience, inviting you to rest, receive, and reconnect
				</p>
			</div>
		</div>
		<div class="divider" />
		<!-- <p class="text-center text-lg font-bold">
			11:00AM
			<span class="font-display">FIRE PUJA (no Green Tara this day)</span>
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

	<p class="text-2xl text-center my-2 font-display text-red-900">May All Beings Be Happy!!!</p>
</Section>
