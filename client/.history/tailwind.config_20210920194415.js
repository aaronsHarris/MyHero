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
        'forest': "url('./images.png/forest.jpeg')",
        'fire': "url('./images.png/fire.jpeg')",
        'dragon': "url('./images.png/dragonBG.jpeg')",
        'armor': "url('./images.png/MyArmor.jpeg')",
        'weapon': "url('./images.png/MyWeapon.jpeg')",
        'tavern': "url('./images.png/tavern2.jpeg')",
        'avatar': "url('./images.png/avatar_bg.jpeg')",
        'parchment': "url('./images.png/p6.jpeg')",
        'dovekin': "url('./images.png/dovekin.png')",
        'hardwon': "url('./images.png/hadwon.png')",
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
