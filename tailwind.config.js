/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
import { stone, teal as _teal } from 'tailwindcss/colors';

export const content = [
  './src/**/*.{js,jsx,ts,tsx,html,astro}',
];
export const theme = {
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
      'warm-gray': stone,
      teal: _teal,
    },
    fontFamily: {
      sans: ['Hind Madurai', ..._fontFamily.sans],
    },
    brightness: {
      25: '0.25'
    }
  },
};
export const plugins = [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
];
