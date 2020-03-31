const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpackMerge = require('webpack-merge')
const DashboardPlugin = require('webpack-dashboard/plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = require('./env.config')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')(config)

module.exports = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    publicPath: '/',
    port: 8002,
    noInfo: false,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.config': JSON.stringify(config),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./src/index.ejs'),
      title: 'react h5',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin()
    ]
  }
})