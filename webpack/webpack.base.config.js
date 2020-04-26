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
        use: [{
          loader: 'babel-loader',
        }, {
          loader: path.resolve('./loaders/inlinePx2ViewportLoader'),
          options: {
            viewportUnit: 'vh'
          }
        }]
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
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            } },
          'postcss-loader',
          { 
            loader: 'sass-loader',
            options: {
              sassOptions: {
                fiber: false,
                outputStyle: 'expanded'
              },
            }
          }
        ]
      }]
    }
  }
}





