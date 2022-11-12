const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },

      colors: {
        s: {
          purple: '#8960FF',
          violet: '#7E61E7',
          pink: '#D899F8',
          blue: '#87C5FF',
          green: '#36CD7B',
          navy: '#000011',
          darkpurple: '#1D1A35',
        },
      },
      screens: {
        '3xl': '1800px',
      },

      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
