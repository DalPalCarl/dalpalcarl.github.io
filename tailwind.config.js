/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FEFAE0',
        'secondary': '#F2EED7',
        'ternary': '#626F47',
        'highlight': '#798645'
      }
    },
    fontFamily: {
      'headerTitle': ['Righteous'],
    }
  },
  plugins: [],
}

