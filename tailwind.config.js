module.exports = {
  theme: {
    extend: {
      margin: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
    variants: {
      margin: [
        'children',
        'default',
        'first-child',
        'last-child',
        'responsive',
      ],
      float: ['children', 'default', 'first-child', 'last-child', 'responsive'],
      width: ['children', 'default', 'first-child', 'last-child', 'responsive'],
    },
    plugins: [
      require('tailwindcss-children')(),
      require('tailwindcss-typography')(),
    ],
  },
};
