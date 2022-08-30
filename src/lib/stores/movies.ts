import { writable } from 'svelte/store';

const movies = writable([]);
export const pageLoaded = writable<number>(0);
export { movies as default };
