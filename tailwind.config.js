/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
      'Primary':'#FD1B53',
      'Secondary':'#FF7045'
    },
    fontFamily: {
      'leuleAfa': ['Afacad', 'sans-serif'], // Ensure fonts with spaces have " " surrounding it.
      'leuleScri': ['Satisfy', 'handwriting'], // Ensure fonts with spaces have " " surrounding it.

    },  
  },
},
  plugins: [],
}


