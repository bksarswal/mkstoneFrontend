/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.js",
    "./public/**/*.html"
  ],
  theme: {
    extend: {

      colors:{
        'finegap-blue':"#0874e4",
      }
    },
  },
  plugins: [],
}
