const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    fontFamily: {
      'Martel': ['Martel', 'serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Great Vibes': ['Great Vibes', 'cursive'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        clrPaleTerquoise: '#62929E',
        clrNiceGray: '#B2A893',
        clrMedBrown: '#A78C51',
        clrLightApricot: '#FFFBEB',
        clrLightGray: '#f5f5f5',
        clrForestGreen: '#284229',
        clrWaveGray: '#EDEDE8',

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
},
}

