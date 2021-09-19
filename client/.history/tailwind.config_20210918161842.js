module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'elf-image': "url('./images.png/elf.png')",
        'map': "url('./images.png/dnd-bg.jpeg')",
        'raceBG': "url('./images.png/dovekin.png')",
        'forest': "url('./images.png/forest.jpg')",
        'raceBG': "url('./images.png/dovekin.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
