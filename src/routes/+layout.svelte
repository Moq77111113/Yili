<script lang="ts">
	import '$lib/global.css';

	let specialCombinaison: string = '';
	let timer: NodeJS.Timer;
	const onKeyDown = (e: KeyboardEvent) => {
		clearTimeout(timer);
		if (/^[a-zA-Z]$/g.test(e.key)) {
			specialCombinaison += e.key;
			timer = setTimeout(() => {
				specialCombinaison = '';
			}, 5000);
		}
	};
	const secretKeyword = 'fromage';

	$: (() => {
		if (specialCombinaison.toLowerCase() === secretKeyword) {
			toggleSecretModal();
		}
	})();

	let modal = false;
	const toggleSecretModal = () => {
		specialCombinaison = '';
		modal = !modal;
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<nav class="navbar bg-black">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl text-white cursor-pointer">Yili</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-left dropdown-hover">
			<button class="btn btn-square btn-ghost">
				<svg viewBox="0 0 24 24" fill="none" class="inline-block w-5 h-5 stroke-white text-white"
					><path d="M2 6h20v3H2V6z" fill="currentColor" />,<path
						d="M2 15h20v3H2v-3z"
						fill="currentColor"
					/></svg
				>
			</button>
			<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				<li on:click={() => console.log('Random')} class="cursor-pointer">Film aléatoire</li>
			</ul>
		</div>
	</div>
</nav>
<div class="modal" class:modal-open={modal === true}>
	<div class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<button on:click={toggleSecretModal} class="btn">Yay!</button>
		</div>
	</div>
</div>

<main class="p-2">
	<slot />
</main>
