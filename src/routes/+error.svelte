<script lang="ts">
	import { route } from "$lib/ROUTES";
</script>
<div class="container mx-auto max-w-3xl">
    <div class="flex flex-col justify-center gap-6 items-center h-[80vh]">
        <img src="logo.png" alt="Logo" class="max-w-lg max-h-56">
        <h1 class="text-center text-2xl">Page Not Found</h1>
        <a href={route('/')} class="btn bg-red-800">Go to Home Page</a>
    </div>
</div>