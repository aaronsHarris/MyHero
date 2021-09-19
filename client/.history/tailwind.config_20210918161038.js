module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'elf-image': "url('./images.png/elf.png')",
        'map': "url('./images.png/dnd-bg.jpeg')",
        'race': "url('./images.png/dnd-bg.jpeg')",
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
