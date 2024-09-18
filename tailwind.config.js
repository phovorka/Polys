/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './src/styles/**/*.{html,js,jsx,css}',
    
   
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#ff6347',
        secondary: '#4f46e5',
      },
    },
  },

}