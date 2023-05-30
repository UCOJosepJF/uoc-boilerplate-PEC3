/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'white': '#ffffff',
      'main': '#242424',
      'navmain': '#212529',
      'navgray': '#ffffff8c',
      'blockquote': '#666',
    },
    extend: {
      fontFamily: {
        'sans': ['Avenir Book', 'Franklin Gothic Medium', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
