/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-turquoise',
    'hover:text-turquoise'
  ],
  theme: {
    extend: {
      colors: {
        turquoise: 'rgb(52, 185, 194)',
      },
    },
  },
  plugins: [],
}
