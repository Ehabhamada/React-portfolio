/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-texture.png')",
        'Custom-gredient': 'linear-gradient(45deg,transparent,#4db5ff,transparent)',
      },
      backgroundPosition:{
        'customposition':' -10rem 0'
      },
      width:{
        'contanier-width-lg':'75%',
        'contanier-width-md':'86%',
        'contanier-width-sm':'90%'
      },
    },
    colors: {
      "color-bg": '#1f1f38',
      transparent: 'transparent',
      'color-bg-variant': '#2c2c6c',
      'color-primary': '#4db5ff',
      'color-primary-variant': 'rgba(77, 181, 255, 0.4)',
      'color-white': ' #fff',
      'color-light': '#ffffff99',
    },
  },
  plugins: [],
}