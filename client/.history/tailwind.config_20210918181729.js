module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'elf-image': "url('./images.png/elf.png')",
        'map': "url('./images.png/dnd-bg.jpeg')",
        'dovekin': "url('./images.png/dovekin.png')",
        'forest': "url('./images.png/forest.jpeg')",
        'fire': "url('./images.png/fire.jpeg')",
        'splash': "url('./images.png/fire.jpeg')",
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
