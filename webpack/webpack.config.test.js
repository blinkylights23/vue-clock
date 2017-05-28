const webpack = require('webpack');

const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const vueConfig = require('./vue-loader.config');

module.exports = {
  context: path.join(__dirname, '../tests'),
  entry: {
    'vue-clock-test': './all.js'
  },
  output: {
    path: path.join(__dirname, '../tests'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new WebpackShellPlugin({
      onBuildStart:['echo "Webpack Start"'],
      onBuildEnd:['mocha --require babel-register --compilers js:babel-register tests/vue-clock-test.bundle.js']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
