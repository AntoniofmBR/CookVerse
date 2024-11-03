/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blues: {
          blue_900: '#03045E',
          blue_700: '#001D3D',
          blue_500: '#4361EE',
          blue_400: '#5a75f0',
          blue_200: '#3A86FF',
        },
        whites: {
          white_200: '#F0EFEB',
        },
        grays: {
          gray_100: '#E9ECEF',
          gray_300: '#CED4DA',
        },
        yellows: {
          yellow_100: '#FFC300',
        },
        greens: {
          green_100: '#16DB65',
        },
        purples: {
          purple_100: '#5A189A',
        },
        reds: {
          red_100: '#C1121F',
        },
        oranges: {
          orange_100: '#F3722C',
        },
        blacks: {
          black_100: '#0B090A',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '320px',
      }
    },
  },
  plugins: [],
}