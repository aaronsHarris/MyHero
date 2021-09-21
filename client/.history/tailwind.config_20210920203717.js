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
        'bev': "url('./images.png/bev_0.png')",
        'moonshine': "url('./images.png/moonshine.png')",
        'riz': "url('./images.png/riz-gukgak.png')",
        'elfLady': "url('./images.png/elfLady.png')",
        'adaine': "url('./images.png/Adaine_Abernant.png')",
        'fabian': "url('./images.png/fabian_seacaster.png')",
        'ficus': "url('./images.png/ficus.jpeg')",
        'fig': "url('./images.png/fig_faeth.png')",
        'gorgug': "url('./images.png/gorgug-thistlespring.jpeg')",
        'jens': "url('./images.png/jens.png')",
        'kristen': "url('./images.png/kristen_applebees.png')",
        'mac': "url('./images.png/mac.png')",
        'mavrus': "url('src/images.png/MoM_Mavrus.jpeg')",
        'mavrus': "url('src/images.png/MoM_Mavrus.jpeg')",
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
