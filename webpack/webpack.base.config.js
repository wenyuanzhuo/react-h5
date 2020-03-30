const path = require('path')

module.exports = (config) => {
  return {
    entry: {
      index: path.resolve('./src/index.js')
    },
    output: {
      path: config.buildPath,
      filename: '[name].js',
      publicPath: config.publicUrl || '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
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





