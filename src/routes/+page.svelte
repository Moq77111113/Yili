<script lang="ts">
	import type { MovieResult } from '$lib/types/movie.interface';
	import Movies from '$lib/components/Movies.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	export let data: MovieResult;
	const onChange = (v: string) => goto(v ? `?q=${v}` : '/', { keepfocus: true });
</script>

<section in:fly={{ y: 50, duration: 200 }} out:fly={{ duration: 200 }} class="flex flex-col gap-10">
	<SearchBar {onChange} />

	<Movies movies={data.results} />
</section>
