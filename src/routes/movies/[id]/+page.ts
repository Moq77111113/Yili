import type { MovieDetails } from '$lib/types/movie.interface';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../../../../.svelte-kit/types/src/routes/$types';
export const load: PageLoad = async ({ fetch, data, params }) => {
	const response = await fetch(`
    https://api.themoviedb.org/3/movie/${params.id}?api_key=${data.apiKey}&language=fr-FR`);
	if (response.ok) {
		return (await response.json()) as MovieDetails;
	}
	throw error(404, 'Unable to find movie ' + params.id);
};
