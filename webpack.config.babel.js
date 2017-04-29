require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    'vue-clock': './index.js'
  },
  output: {
    path: path.join(__dirname, '/build'),
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
        options: {
          loaders: [
              { loader: 'stylus-loader' },
              { loader: 'pug-loader' }
          ]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/build')
  }
};
