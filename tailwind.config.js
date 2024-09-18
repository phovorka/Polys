/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/**/*.{html,js,jsx}',
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
  plugins: [
    require('@tailwindcss/forms'), // Plugin pro lepší stylování formulářů
    require('@tailwindcss/typography'), // Plugin pro lepší typografii
  ],
}