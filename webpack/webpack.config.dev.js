const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const vueConfig = require('./vue-loader.config');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    'vue-clock': './dev.js'
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].min.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../build')
  }
};
