import 'dotenv/config';
import { error } from '@sveltejs/kit';
import type { MovieDetails } from '$lib/types/movie.interface';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';
export const load: PageServerLoad = async ({ params }) => {
	const apiKey = process.env.MOVIE_DB_APIKEY;
	if (!apiKey) {
		throw error(500, 'Missing MOVIE_DB_APIKEY');
	}
	const response = await fetch(`
    https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=fr-FR`);
	if (response.ok) {
		return (await response.json()) as MovieDetails;
	}
	throw error(404, 'Unable to find movie ' + params.id);
};
