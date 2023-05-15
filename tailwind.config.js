/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Simple 16 column grid
				auto: 'repeat(auto-fit, minmax(200px, 1fr))',
			},
		},
	},
	plugins: [],
}
