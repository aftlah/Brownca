module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-discard-comments': {
        removeAll: true
      },
      'postcss-css-variables': {
        preserve: false,
      },
      'postcss-sort-media-queries': {
        sort: 'mobile-first' // default
      },
      'postcss-color-converter': {
        outputColorFormat: 'hex',
      }
    }
  }
