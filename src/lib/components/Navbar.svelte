<nav class="navbar bg-base-100 justify-between sticky top-0 z-[1000]">
	<div class="navbar-start w-10">
		<div class="dropdown  tooltip tooltip-right tooltip-warning" data-tip="MENU">
			<label tabindex="0" class="btn btn-ghost btn-circle btn-sm" for="menu">
				<!-- <Logo /> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</label>
			<ul
				tabindex="0"
				name="menu"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border"
			>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About Us</a></li>
				<li><a href="/about#stupa">Our Stupa</a></li>
				<li><a href="/membership_support#hero">Membership & Support</a></li>
				<li><a href="/calendar">Calendar & Events</a></li>
				<li><a href="/registration">Registration</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center ">
		<a
			class="normal-case display-font text-center text-xl md:text-4xl font-light text-red-800"
			href="/">Karma Gyurmed Ling</a
		>
	</div>
	<div class="navbar-end w-10">
		<button
			class="btn btn-ghost btn-circle tooltip tooltip-left tooltip-warning"
			data-tip="Events Calendar"
		>
			<a class="indicator" href="/calendar">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</a>
		</button>
	</div>
</nav>
