/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
      './index.html',

    
   
  ],
  theme: {
    extend: {
      fontFamily: {
       poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#ff6347',
        secondary: '#4f46e5',
      },
    },
  },

}
 