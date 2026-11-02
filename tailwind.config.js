/** @type {import('tailwindcss').Config} */
export default {
  // Emits hover: / group-hover: inside @media (hover: hover) and (pointer: fine),
  // so a tap on a touch screen can't latch a hover state on.
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Montserrat" : ['Montserrat' ] ,
        "Oswald" : ['Oswald'],
        "Notable": ['Notable'],
        "Manrope": ['Manrope'],

      }
      
    },
  },
  plugins: [],
}
