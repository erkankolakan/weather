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
          "black":"#000000",
          "whitee":"#FFFFFF",
          "blueText" :"#8AACED",
          "bgBlack" : "#13131A",
          "fontColor" : "#1D1D32",
          "cardBg" : "#1A1A28", 
          "searchBg" : "#3B3B54",

          // #16161F
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

