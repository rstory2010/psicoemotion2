module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'spartan':['Spartan', "sans-serif"],
        'spartanB':['Spartan-Bold', 'sans-serif']
      },
      colors: {
        'ciruela': '#6a214c',
        'verde': '#7B9C5F',
        'fondoBtn': '#c4c3c1',
        'iconoBtn': '#7b7b7b',
        'borde': '#d0d0c8',
        'fondoAtras': '#e8e8e8',
        'fondoHerba':'#cfcec9',
        'teal':'#075E54'
      },
      backgroundImage: {
        'fondo': "url('./assets/diagonal-stripes.svg')",
        'header':"url('./assets/header.svg')",
      }

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
