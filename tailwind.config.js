/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      arial: ['arial']
    },
    extend: {
      colors: {
        gray: '#EAEAEA',
        darkGray: '#232323',
        lightGray: '#626262'
      }
    }
  },
  plugins: []
}
