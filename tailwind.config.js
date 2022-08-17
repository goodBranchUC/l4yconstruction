const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        burgundy: '#2d2d2d',
        darkBrown: '#634321',
        lightBrown: '#A78C51',
        lightTan: '#f5f5f5',
        veryLightTan: '#f5f5f5',
        darkGreen: '#264027',
        apricot: '#f5f5f5',

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
},
}

