import type { PageServerLoad } from './$types';
import 'dotenv/config';
import { error } from '@sveltejs/kit';
import type { MovieResult } from '$lib/types/movie.interface';
export const load: PageServerLoad = async ({ url }) => {
	const apiKey = process.env.MOVIE_DB_APIKEY;

	if (!apiKey) {
		throw error(500, 'Missing MOVIE_DB_APIKEY');
	}

	const uri = url.searchParams.get('q')
		? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${url.searchParams.get(
				'q'
		  )}`
		: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`;

	const response = await fetch(uri);
	if (response.ok) {
		return response.json() as Promise<MovieResult>;
	}
	throw error(404, 'Unable to find movies' + uri);
};
