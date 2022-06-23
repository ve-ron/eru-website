const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },  
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
