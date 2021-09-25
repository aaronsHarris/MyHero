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
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      fontFamily: {
        'olde': ['UnifrakturMaguntia'],
        'hand': ['Patrick Hand']
      },
      backgroundImage: {

        'dragon': "url('./images.png/dragonBG.jpeg')",
        'tavern': "url('./images.png/tavern2.jpeg')",
        'hardwon': "url('./images.png/hadwon.png')",
        'bev': "url('./images.png/bev_0.png')",
        'moonshine': "url('./images.png/moonshine.png')",
        'riz': "url('./images.png/riz-gukgak.png')",
        'adaine': "url('./images.png/Adaine_Abernant.png')",
        'fabian': "url('./images.png/fabian_seacaster.png')",
        'ficus': "url('./images.png/ficus.jpeg')",
        'fig': "url('./images.png/fig_faeth.png')",
        'gorgug': "url('./images.png/gorgug-thistlespring.jpeg')",
        'jens': "url('./images.png/jens.png')",
        'kristen': "url('./images.png/kristen_applebees.png')",
        'mac': "url('./images.png/mac.png')",
        'mavris': "url('./images.png/mavris.png')",
        'nayak': "url('./images.png/nayak.jpeg')",
        'tread': "url('./images.png/tread.png')",
        'dave': "url('./images.png/dave.png')",
        'deadeye': "url('./images.png/deadEye.png')",
        'gilear': "url('./images.png/Gilear2.png')",
        'aguefort': "url('./images.png/Aguefort.png')",
        'esther': "url('./images.png/Esther_Sinclair.jpeg')",
        'jawbone': "url('./images.png/Jawbone_Reformed.png')",
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
