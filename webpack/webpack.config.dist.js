const webpack = require('webpack');

const path = require('path');
const vueConfig = require('./vue-loader.config');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    'vue-clock': './dist.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].min.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
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
  }
};
