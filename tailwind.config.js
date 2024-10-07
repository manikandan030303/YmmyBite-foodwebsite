/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      brightColor :"#F4511F",
      backgroundColor:  "#b7bca9",
      lightColor:"#955995",
      },
      
    },
  },
  plugins: [],
}

