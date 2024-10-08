/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      primary: '#35374B',
      secondary: '#344955',
      ternary: '#50727B',
      quarternary: '#78A083'
    },
    fontFamily: {
      'headerTitle': ['Righteous'],
    }
  },
  plugins: [],
}

