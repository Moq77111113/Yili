import type { Pagination } from './pagination.interface';

interface MovieDefault {
	adult: boolean;
	poster_path: string | null;
	id: number;
	backdrop_path: string | null;
	overview: string;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
	release_date?: string;
	original_title: string;
	original_language: string;
	title: string;
}
export interface Movie extends MovieDefault {
	genres: number[];
}

export interface MovieResult extends Pagination {
	results: Movie[];
}

export interface MovieDetails extends MovieDefault {
	backdrop_path: string;
	genres: { id: number; name: string };
	belongs_to_collection: null | any;
	budget: number;
	homepage: string | null;
	imdb_id: string | null;
	revenue: number;
	status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
	tagline: string | null;
}
