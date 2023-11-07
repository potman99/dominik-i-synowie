/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headers': ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'wood-pattern': "url('/src/assets/wood_bg_mid.png')",
        'map-pattern': "url('/src/assets/contact/map-bg.png')",
        'about-vector': "url('/src/assets/about_us/vector.svg')"
      },
      backgroundColor: {
        'lightBrown': 'rgba(255, 209, 125, 1)',
        'darkBrown': 'rgb(225,163,90)',
        'mainOrange': 'rgb(255,183,43)',
        'orangeHover': "rgb(255, 153, 43)",
        'mainOrangeDropdown': 'rgba(255,183,43,0.85)',
        'bathroomBlue':'rgb(187,208,207)'
      },
      textColor: {
        'lightBrown': 'rgba(255, 209, 125, 1)',
        'mainOrange': 'rgb(255,183,43)',

      }
    },
  },
  plugins: [],
}

