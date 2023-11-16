/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["LINESeed", "sans-serif"],
      },
      colors: {
        'duo-blue': {
          light: '#50d3ff',
          DEFAULT: '#49c0f8',
          dark: '#1899d6',
        },
        'duo-grey': {
          lighter: '#37464f',
          light: '#202f36',
          DEFAULT: '#131f24',
          dark: '#0e161a',
        },
        'duo-green': {
          light: '#a2e838',
          DEFAULT: '#85cb38',
          dark: '#5f8428',
        },
        'duo-red': {
          light: '#ff5d5d',
          DEFAULT: '#ee5555',
          dark: '#d84848',
        },
      },
    },
  },
  plugins: [],
}

