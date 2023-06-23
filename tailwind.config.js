/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      },
      screens: {
        monsterbig: '769px',
        monstersmall: '1118px',
        // md: '900px',
        middle: '1200px',
        small: '650px'
      }
    },
  },
  plugins: [],
}

