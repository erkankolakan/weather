/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      "nunito":'./assets/fonts/Nunito-Regular.ttf',
      "nunitoExtraBold":'./assets/fonts/Nunito-ExtraBold.ttf',
      "nunitoBold":'./assets/fonts/Nunito-Bold.ttf',
      "nunitoBlack":'./assets/fonts/Nunito-Black.ttf',
      "nunitoSemiBold":'./assets/fontsNunito-SemiBold.ttf',
      
      extend: {
        colors:{
          "white":"#DB4221",
          "black":"#000000",
        },
      },


    fontFamily: {
      "nunito": ['nunito'],
      "nunitoExtraBold": ['nunitoExtraBold'],
      "nunitoBold": ['nunitoBold'],
      "nunitoBlack": ['nunitoBlack'],
      "nunitoSemiBold": ['nunitoSemiBold'],
    },


    
  },
  plugins: [],
}

