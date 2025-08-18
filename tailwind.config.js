/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';
export default {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
	extend: {
	  fontFamily: {
		poppins: ['Poppins', 'sans-serif'],
    redHat: ['Red Hat Display', 'sans-serif'],
	  },
	},
  },
  plugins: [tailwindcssAnimated],
}
