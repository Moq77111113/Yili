<script lang="ts">
	import type { MovieResult } from '$lib/types/movie.interface';
	import Movies from '$lib/components/Movies.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
import { goto } from '$app/navigation';
	export let data: MovieResult;
	export let onSearch = (v: string) => {
		goto(`?q=${v}`)
	};
</script>

<section class="flex flex-col gap-10">
	<SearchBar onChange={onSearch} />
	<Movies movies={data.results} />
</section>
