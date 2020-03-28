module.exports = {
  plugins: {
    'postcss-import': {
      path: ['node_modules', 'src/styles']
    },
    'postcss-url': {},
    'autoprefixer': {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    },
    'postcss-aspect-ratio-mini': {},
    'postcss-px-to-viewport': {
      viewportWidth: 750, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    },
    'postcss-flexbugs-fixes': {},
    // 'postcss-cssnext': {},
    'postcss-viewport-units': {},
    'postcss-write-svg': {
      utf8: false,
    },
    'cssnano': {
      preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false 
    },
  }
}