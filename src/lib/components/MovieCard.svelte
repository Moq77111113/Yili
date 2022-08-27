<script lang="ts">
	import type { Movie } from '$lib/types/movie.interface';
	import { format } from 'date-fns';
	export let movie: Movie;
</script>

<div
	class="card w-42 bg-base-100 shadow-xl flex-col rounded-3xl 
	hover:rounded-xl hover:shadow-gray-600 cursor-pointer
	transition-all duration-300 ease-linear"
>
	<a sveltekit:prefetch href={`/movies/${movie.id}`}>
		<figure>
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
				class="text-xs"
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title text-m text-nowrap">{movie.title}</h2>
			{#if movie.release_date}<p class="text-xs">
					{format(new Date(movie.release_date), 'dd/MM/yyyy')}
				</p>{/if}
		</div>
	</a>
</div>
