/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FEFAE0',
        'secondary': '#F2EED7',
        'ternary': '#626F47',
        'highlight': '#798645',
        'breakDark': '#c9c5b3',
        'breakGreen': '#839461',
        'breakLight': '#e6e1cd'
      }
    },
    fontFamily: {
      'headerTitle': ['Righteous'],
    }
  },
  plugins: [],
}

