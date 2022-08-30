<script>
	import '$lib/global.css';
</script>

<nav class="navbar bg-black">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl text-white cursor-pointer">Yili</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg viewBox="0 0 24 24" fill="none" class="inline-block w-5 h-5 stroke-white text-white"
				><path d="M2 6h20v3H2V6z" fill="currentColor" />,<path
					d="M2 15h20v3H2v-3z"
					fill="currentColor"
				/></svg
			>
		</button>
	</div>
</nav>
<main class="p-2">
	<slot />
</main>
