/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx,html,astro}',
	  ],	
	  theme: {
		fontFamily: {
			heading: ['Montserrat', 'sans'],
			body: ['Hind Madurai', 'sans'],
			serif: ['Merriweather', 'serif'],
		  },
		extend: {
			colors: {
				brandLight: '#FFEAC2',
				brandLightHover: '#FFE2AD',
				brandDark: '#E09200',
				brand: '#FFA500',
				brandHover: '#FFB01F',
				bgDark: '#343A3F',
				'warm-gray': colors.stone,
				teal: colors.teal,
			},
			fontFamily: {
				sans: ['Hind Madurai', ...defaultTheme.fontFamily.sans],
			},
			brightness: {
				25: '0.25'
			}
		},	
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
}
