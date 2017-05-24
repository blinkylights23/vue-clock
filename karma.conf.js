const webpackConfig = require('./webpack/webpack.config.dev.js');

delete webpackConfig.entry;

// karma.conf.js
module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    client: {
      mocha: {
        reporter: 'spec'
      }
    },
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: false
  });
};
