<script lang="ts">
	import Movies from '$lib/components/Movies.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import type { Movie, MovieResult } from '$lib/types/movie.interface';
	import { error } from '@sveltejs/kit';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	const getMovies = async (reset: boolean = false) => {
		if (reset) {
			page = 1;
		}
		let uri = `/movies?page=${page}`;

		if (searchTerm) {
			uri += `&q=${searchTerm}`;
		}

		const response = await fetch(uri);
		if (response.ok) {
			const results = ((await response.json()) as MovieResult).results;
			movies = reset ? [...results] : [...movies, ...results];
			return;
		}
		throw error(404);
	};

	let page = 0;
	let searchTerm = '';
	let movies: Movie[] = [];
	const onChange = (v: string) => {
		searchTerm = v;
		getMovies(true);
	};

	const getMore = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (detail.inView) {
			page++;
			getMovies();
		}
	};
</script>

<section in:fly={{ y: 50, duration: 200 }} out:fly={{ duration: 200 }} class="flex flex-col gap-10">
	<SearchBar {onChange} />
	<Movies {movies} />
	<div use:inview={{}} on:enter={getMore} />
</section>
