/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      colors: {
        "yellow-orange": "#f8a62a",
        "portland-orange": "#ed6335",
        "battleship-gray": "#878787",
        "silver-chalice": "#b3b3b3",
        "spanish-gray": "#999999",
        "sonic-silver": "#6d767e",
        "raisin-black": "#292a2e",
        "eerie-black": "#202122",
        "bittersweet": "#fc7b64",
        "light-gray": "#cccccc",
        "platinum": "#e8e8e8",
        "amber": "#ffc105",
        "onyx": "#3c3d3e",
        "white": "#ffffff",
        "black": "#000000"
      },
      backgroundImage: {
        'hero': "url('assets/images/hero-banner.jpg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}