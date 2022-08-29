/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['nunito', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
