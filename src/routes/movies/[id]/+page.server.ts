import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/$types';
import 'dotenv/config';
import { error } from '@sveltejs/kit';
export const load: PageServerLoad = () => {
	const apiKey = process.env.MOVIE_DB_APIKEY;
	if (apiKey) return { apiKey };

	throw error(500, 'Missing MOVIE_DB_APIKEY');
};
