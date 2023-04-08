<script>
	import DonateButton from '$lib/components/DonateButton.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Membership & Support | Karma Gyurmed Ling</title>
</svelte:head>

<div class="my-4" id="hero">
	<img
		src="Group_w_Kalu.jpg"
		alt="Sangha with Kalu Rinpoche"
		class="w-full  h-[70vh] object-cover"
	/>
</div>

<Section id="members">
	<h1 class="text-center my-4 text-3xl">Becoming a member of Karma Gyurmed Ling</h1>

	<p class="mb-4 text-lg">
		Member support of Karma Gyurmed Ling does so much. Through the generosity of members of Karma
		Gyurmed Ling, the Dharma Center becomes a place of refuge, teaching, and sangha cooperation.
	</p>

	<p class="mb-4 text-lg">
		Membership dues help to pay for the maintenance of the Dharma Center, including utilities and
		insurance, plus daily offerings for the altar of candles, flowers, incense, altar lights, and
		other offerings.
	</p>

	<p class="mb-4 text-lg">
		In addition, Karma Gurmed Ling supports our visiting teachers when they make the journey to
		teach us the dharma.
	</p>

	<p class="mb-4 text-lg">
		Most important of all, membership support enables our Lamas to continue to spread the precious
		Dharma to all beings who wish to receive its blessings.
	</p>

	<div class="mb-4 text-lg">
		Other membership benefits include:
		<ul class="my-4 list-disc list-inside">
			<li>20% discounts on Special Teachings</li>
			<li>Opportunities to join in special dinner with visiting teachers</li>
		</ul>
		<p>
			Membership fees and donations are tax-deductible. Individual membership is $60 annually or $5
			per month. Membership as Benefactor is $108 annually.
		</p>
	</div>

	<div class="my-2 text-lg flex items-center flex-wrap">
		<p>To become a member you can click here to do it online</p>
		<div class="p-2 place-self-center w-full"><DonateButton /></div>
	</div>

	<div class="my-2 text-lg">
		Or
		<a
			href="https://docs.google.com/document/d/12gpqDBcsTg9bxjSDPvDwA-wx6k20GPmQCkuuWF5PuEs"
			target="_blank"
			class="text-red-900 italic font-bold hover:text-red-800 hover:underline"
		>
			Click here
		</a>
		to download the printable membership form and mail along with your check
	</div>

	<p class="mb-4 text-lg">
		Also, you may drop off your membership form with your cash or check payment in the donation box
		at the Dharma Center.
	</p>
	<p class="mb-4 text-lg">
		Alternatively, always feel free to speak to our Treasurer, <span class="italic">Jan Born</span>,
		in person to make any special arrangements.
	</p>

	<div class="text-lg mt-4 mb-16">
		Our mailing address: <span class="text-red-800 font-bold"
			>KGL Buddhist Center, 813 N. Pershing St., Truth or Consequences, New Mexico 87901</span
		>
	</div>
</Section>
