<script>
	import { route } from "$lib/ROUTES";

</script>
<div class="text-center mx-auto flex justify-center delay-100">
	<ul
		class="flex gap-4 px-4 text-xl flex-nowrap overflow-x-auto items-bottom max-w-md md:max-w-5xl"
	>
		<li class="p-2 ">
			<a
				href={route('/')}
				class=" text-warning hover:text-base-100 whitespace-nowrap hover:bg-warning rounded-md p-2 "
				>Home</a
			>
		</li>
		<li class="p-2 ">
			<a
				href={route('/about')}
				class=" text-warning hover:text-base-100 whitespace-nowrap hover:bg-warning rounded-md p-2 "
				>About Us</a
			>
		</li>
		<li class="p-2 ">
			<a
				href={route('stupa')}
				class=" text-warning hover:text-base-100 whitespace-nowrap hover:bg-warning rounded-md p-2 "
				>Our Stupa</a
			>
		</li>
		<li class="p-2 ">
			<a
				href={route('membership_support')}
				class=" text-warning hover:text-base-100 whitespace-nowrap hover:bg-warning rounded-md p-2 "
				>Membership & Support</a
			>
		</li>
		<li class="p-2 ">
			<a
				href={route('/calendar')}
				class=" text-warning hover:text-base-100 whitespace-nowrap hover:bg-warning rounded-md p-2 "
				>Calendar & Events</a
			>
		</li>
	</ul>
</div>
