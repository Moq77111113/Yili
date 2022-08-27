<script lang="ts">
	import type { MovieDetails } from '$lib/types/movie.interface';
	export let data: MovieDetails;
	export const prerender = true;
</script>

<div class="bg-base-100 flex flex-col items-center m-auto">
	<figure>
		<img
			class="text-xs rounded-xl max-h-[50vh]"
			src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
			alt={data.title}
		/>
	</figure>

	<h2 class="pt-3 pb-2 font-bold text-lg font-quicksand">{data.title}</h2>
	<p class="text-sm py-1 px-[15%] leading-6 font-poppins">{data.overview}</p>
</div>
