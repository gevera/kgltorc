<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { enhance } from '$app/forms';

	let member = false;

	$: price = member ? 28 : 35;
</script>

<svelte:head>
	<title>Registration | Tibetan Buddhist Temple in Truth or Consequences, NM</title>
</svelte:head>

<Hero name={'Buddhist Center'} mobileImage={'Niguma.jpg'} desktopImage={'Niguma.jpg'} />
<Section id="main">
	<h1 class="text-center text-3xl my-4">Niguma Longlife and Chenrezig Empowerments</h1>
	<p class="my-4 text-lg">
		<a href="/about#kalu" class="italic font-semibold hover:text-red-800"
			>His Eminence The 2nd Kaybjay Kalu Rinpoche</a
		> will be visiting Truth or Consequences on May 27th and 28th, giving Niguma Long Life and Chenrezig
		Empowerments
	</p>

	<h3 class="text-center text-xl my-2">Schedule Details</h3>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
		<div class="flex flex-col items-center">
			<h3 class="text-xl">Niguma Long Life Empowerment</h3>
			<p class="font-bold">May 27th 10am - 11:30am and 2pm-4pm</p>
		</div>
		<div class="flex flex-col items-center">
			<h3 class="text-xl">Chenrezig Empowerment</h3>
			<p class="font-bold">May 27th 10am - 11:30am and 2pm-4pm</p>
		</div>
	</div>

	<a
		class="italic my-4 hover:text-red-800 text-center block"
		href="https://goo.gl/maps/LiHqhqrX5BxTVDpH6"
		target="_blank"
	>
		All events are located at Karma Gyurmed Ling, 813 North Pershing St. Truth or Consequences, NM
		87901. Please arrive by 9:45am
	</a>

	<div class="w-full max-w-lg mx-auto mb-10 border-2 border-t-red-800 p-2 bg-slate-50 my-10">
		<label class="label cursor-pointer" for="member">
			<span class="label-text text-lg"
				>Are you a current member of Karma Gyurmed Ling in Truth or Consequences?</span
			>
			<input required type="checkbox" name="member" class="checkbox" bind:checked={member} />
		</label>

		<h3 class="text-center text-xl py-2 mt-4">Click the applicable options below</h3>

		<div class="flex flex-col gap-2 p-1">
			{#if member}
				<a href="https://www.paypal.com/donate/?hosted_button_id=3LNVYKQFU5BY2" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Niguma Long Life Empowerment</div>
						<div class="text-sm italic ml-2">May 27th - ${price} (member)</div>
					</div>
				</a>
				<a href="https://www.paypal.com/donate/?hosted_button_id=FCR9NZF2QUSJA" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Chenrezig Empowerment</div>
						<div class="text-sm italic ml-2">May 28th - ${price} (member)</div>
					</div>
				</a>
				<a href="https://www.paypal.com/donate/?hosted_button_id=GPY8EV2EPB6TG" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Niguma Long Life & Chenrezig Empowerment</div>
						<div class="text-sm italic ml-2">May 27th and 28th - ${price + price} (member)</div>
					</div>
				</a>
			{:else}
				<a href="https://www.paypal.com/donate/?hosted_button_id=9QLCNRSHDZXAA" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Niguma Long Life Empowerment</div>
						<div class="text-sm italic ml-2">May 27th - ${price} (non-member)</div>
					</div>
				</a>
				<a href="https://www.paypal.com/donate/?hosted_button_id=V8RSB8ECSG9R6" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Chenrezig Empowerment</div>
						<div class="text-sm italic ml-2">May 28th - ${price} (non-member)</div>
					</div>
				</a>
				<a href="https://www.paypal.com/donate/?hosted_button_id=YP85F3ZZB766C" target="_blank" class="block w-full">
					<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
						<div class="font-semibold uppercase">Niguma Long Life & Chenrezig Empowerment</div>
						<div class="text-sm italic ml-2">May 27th and 28th - ${price + price} (non-member)</div>
					</div>
				</a>
			{/if}
			<a href="https://www.paypal.com/donate/?hosted_button_id=3XTAPFEL5M7WA" target="_blank" class="block w-full">
				<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
					<div class="font-semibold uppercase">Teacher’s Gift</div>
					<div class="text-sm italic ml-2">(optional)</div>
				</div>
			</a>
			<a href="https://www.paypal.com/donate/?hosted_button_id=GPB2MK8DHZ78G" target="_blank" class="block w-full">
				<div class="w-full text-white p-2 bg-red-900 hover:bg-red-800 rounded-md text-center">
					<div class="font-semibold uppercase">Kata - White scarf</div>
					<div class="text-sm italic ml-2">(optional)</div>
				</div>
			</a>
		</div>
	</div>

	<!-- <p class="my-4 text-center">Please fill out the form below to register</p> -->

	<!-- <h2 class="mt-8 pb-2 text-center text-2xl borde-1 border-t-slate-300">Registration Form</h2> -->
	<!-- <p class="my-4">
		To register for the event, please fill in all applicable fields including the drop down boxes
		for your payment(s). You can register for just one day or both days and give an optional
		teacher’s gift. After you register you will receive an email with your receipt listing what you
		registered for. Please print or or keep the receipt in your phone so you can show the email at
		the door the day of the event.
	</p> -->
	<!-- <form
		method="POST"
		use:enhance
		class="form-control w-full max-w-md mx-auto mb-10 border-2 border-t-red-800 p-2 bg-slate-50"
	>
		<div class="flex flex-col md:flex-row md:gap-2 w-full">
			<div>
				<label class="label" for="first_name">
					<span class="label-text">First Name</span>
				</label>
				<input
					required
					type="text"
					placeholder="Joshua"
					name="first_name"
					class="input input-bordered w-full mb-2"
				/>
			</div>
			<div>
				<label class="label" for="last_name">
					<span class="label-text">Last Name</span>
				</label>
				<input
					required
					type="text"
					placeholder="Spett"
					name="last_name"
					class="input input-bordered w-full mb-2"
				/>
			</div>
		</div>
		<label class="label" for="email">
			<span class="label-text">Your Email</span>
		</label>
		<input
			required
			type="email"
			placeholder="info@mail.com"
			name="email"
			class="input input-bordered mb-2"
		/>
		<label class="label" for="telephone">
			<span class="label-text">Your telephone number</span>
		</label>
		<input
			required
			type="tel"
			inputmode="numeric"
			pattern="\d*"
			placeholder="(727) 490-9430"
			name="telephone"
			class="input input-bordered mb-2"
		/>
		<label class="label" for="mail1">
			<span class="label-text">Mailing address line 1</span>
		</label>
		<input
			required
			type="text"
			placeholder="813 North Pershing"
			name="mail1"
			class="input input-bordered mb-2"
		/>
		<label class="label" for="mail2">
			<span class="label-text">Mailing address line 2</span>
		</label>
		<input type="text" placeholder="Building 1" name="mail2" class="input input-bordered mb-2" />
		<label class="label" for="city">
			<span class="label-text">City</span>
		</label>
		<input
			required
			type="text"
			placeholder="Truth or Consequences"
			name="city"
			class="input input-bordered mb-2"
		/>
		<div class="flex gap-2 w-full">
			<div class="flex-grow">
				<label class="label" for="state">
					<span class="label-text">State</span>
				</label>
				<input
					required
					type="text"
					placeholder="NM"
					name="state"
					class="input input-bordered mb-2 w-full"
				/>
			</div>
			<div class="flex-grow">
				<label class="label" for="zip">
					<span class="label-text">ZIP Code</span>
				</label>
				<input
					required
					type="text"
					inputmode="numeric"
					pattern="\d*"
					placeholder="87901"
					name="zip"
					class="input input-bordered mb-2 w-full"
				/>
			</div>
		</div>
		<label class="label cursor-pointer" for="member">
			<span class="label-text text-base"
				>Are you a current member of Karma Gyurmed Ling in Truth or Consequences?</span
			>
			<input required type="checkbox" name="member" class="checkbox" bind:checked={member} />
		</label>
		<label class="label cursor-pointer" for="niguma">
			<div class="label-text text-base flex flex-col">
				Niguma Long Life Empowerment <span class="text-sm"> May 27th - ${price}</span>
			</div>
			<input type="checkbox" name="niguma" class="checkbox" />
		</label>
		<label class="label cursor-pointer" for="chenrezig">
			<div class="label-text text-base flex flex-col">
				Chenrezi Empowerment <span class="text-sm">May 28th - ${price}</span>
			</div>
			<input type="checkbox" name="chenrezig" class="checkbox" />
		</label>

		<label class="label" for="gift">
			<span class="label-text">Teachers gift (optional)</span>
		</label>
		<select class="select select-bordered" name="gift">
			<option disabled selected>Pick one</option>
			<option value={6}>$6</option>
			<option value={10}>$10</option>
			<option value={25}>$25</option>
			<option value={75}>$75</option>
			<option value={100}>$100</option>
			<option value={250}>$250</option>
			<option value={500}>$500</option>
		</select>

		<button type="submit" class="btn bg-red-800 hover:bg-red-900 my-4">Submit</button>
	</form> -->

	<p class="my-4">
		If you have any special needs or request please email us at <a
			href="mailto:registrationKaluR.torc@kgltorc.org"
			class="text-red-800">registrationKaluR.torc@kgltorc.org</a
		>
	</p>

	<h3 class="text-lg">Logistical Notes</h3>
	<ul class="my-4 list-disc list-inside flex flex-col gap-2 text-sm">
		<li>Please arrive at 9:45 AM and give yourself a little time for parking</li>
		<li>
			No one will be turned away for lack of funds. There is also in person registration at the
			dharma center at a registration table at the front entrance. Therefore if you want to register
			the day of the event in person you do not have to fill out this form, but if you want to
			register in person please try to arrive a bit earlier by 9:30am on the day of the event you
			are attending.
		</li>
		<li>
			At the end of each day there will be a procession to offer Katas (white scarfs) where each
			student can offer a Kata to Kalu Rinpoche. You can bring a kata, or if you do not have one
			they can be purchased for $5 below this registration page or in person at the event. When you
			arrive please ask the door person for your Kata, they will have a list of names of those who
			pre-paid for them at the door.
			<ul class="mx-4 list-inside list-disc">
				Reserve a Kata White scarf
				<li>$5 simple white Kata</li>
				<li>$10 more elaborate fancy Kata.</li>
			</ul>
		</li>

		<li>
			The weekend of the event is on Memorial weekend and there is going to be a large number of
			visitors to truth or consequences. Therefore keep in mind that at luch time the restaurants
			will be filled. It is recommended you bring a brown bag lunch or pre-reserve a table at an
			establishment that might accept such reservations made a day in advance.
		</li>
	</ul>
</Section>
