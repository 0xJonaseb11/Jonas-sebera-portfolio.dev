// const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#081727',
        'secondary-dark': '#0B1E2C',
        'ternary-dark': '#162B3D',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          '3xsm': '0rem',
          '2xsm': '1rem',
          xsm: '2rem',
          sm: '2rem',
          md: '4rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      screens: {
        '3xsm': '245px',
        '2xsm': '275px',
        'xsm':'475px',
        '2sm': '576px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        "3xl": '1600px'
      },
    },
  },
  variants: {
    extend: { opacity: ['disabled'] },
  },
  plugins: ['@tailwindcss/forms'],
};
