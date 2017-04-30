const autoprefixer = require('autoprefixer');

module.exports = {
  preserveWhitespace: false,
  loaders: [
    { loader: 'stylus-loader' },
    { loader: 'pug-loader' }
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ]
};
