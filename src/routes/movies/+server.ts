import 'dotenv/config';
import { error, type RequestHandler, json } from '@sveltejs/kit';
import type { MovieResult } from '$lib/types/movie.interface';

/** @type {import('./$types').RequestHandler} */
export const GET: RequestHandler = async ({ url }) => {
	const apiKey = process.env.MOVIE_DB_APIKEY;

	if (!apiKey) {
		throw error(500, 'Missing MOVIE_DB_APIKEY');
	}

	const page = url.searchParams.get('page') ?? 1;
	const uri = url.searchParams.get('q')
		? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${page}&query=${url.searchParams.get(
				'q'
		  )}`
		: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=${page}`;

	const response = await fetch(uri);
	if (response.ok) {
		return json((await response.json()) as MovieResult);
	}
	throw error(404, 'Unable to find movies' + uri);
};
