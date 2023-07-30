/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '700px',
      md: '1200px',
      lg: '1600px'
    },
    fontFamily: {
      arial: ['arial']
    },
    extend: {
      colors: {
        gray: '#EAEAEA',
        darkGray: '#232323',
        lightGray: '#626262',
        darkBlue: '#1289AE',
        darkYellow: '#D6D16E',
        darkRed: '#DD3939'
      }
    }
  },
  plugins: []
}
