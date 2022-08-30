<script lang="ts">
	import type { Movie } from '$lib/types/movie.interface';
	import MovieCard from '$lib/components/MovieCard.svelte';
	export let movies: Movie[] = [];
</script>

<div class="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-5">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>
