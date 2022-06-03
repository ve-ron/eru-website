const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        c_nav:{
          pink:{
            light:'#FD6F96',
            dark:'#FD6F96'
          },
        },c_focus:{
            light:colors.pink['600']
        },c_normal:{
            light:colors.rose['100']
        }
      },
    },
  },
  plugins: [],
}
