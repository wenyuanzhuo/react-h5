const path = require('path')

module.exports = (config) => {
  return {
    entry: {
      index: path.resolve('./src/index.js')
    },
    output: {
      path: config.buildPath,
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@': path.resolve('./src'),
      }
    },
    module: {
      rules: [{
        test: /\.js|jsx$/,
        exclude: [
          path.resolve('./node_modules'),
          path.resolve('./server.js'),
        ],
        loader: 'babel-loader',
      }, {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }]
    }
  }
}





