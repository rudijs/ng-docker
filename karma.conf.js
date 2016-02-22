'use strict';

var path = require('path');

var webpackConfig = require('./webpack.config');

/* Karma Instanbul code coverage reports */
webpackConfig.module.preLoaders = [
  // instrument only testing sources with Istanbul
  {
    test: /\.ts$/,
    include: path.resolve('src/'),
    loader: 'istanbul-instrumenter!ts'
  }
];

// set noImplicitAny to false for tests.
// noImplicitAny is true when writing code and is enforced there.
// the preloader above for coverage reporting strips out the types
// which causes noImplicitAny errros in the module.loader ts compile.
webpackConfig.ts = {
  compilerOptions: {
    noImplicitAny: false
  }
};

var entry = path.resolve(webpackConfig.context, webpackConfig.entry);

var preprocessors = {};
preprocessors[entry] = ['webpack'];

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],

    // list of files / patterns to load in the browser
    files: [
    // https://github.com/webpack/style-loader/issues/31
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
    // application files
      entry
    ],

    webpack: webpackConfig,

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      require('karma-webpack'),
      'karma-chai',
      'karma-mocha',
      'karma-sinon',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ]
  })
}
