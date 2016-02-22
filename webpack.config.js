'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var cdnUrl = "https://dvgihtyrg31i0.cloudfront.net/";

var webpackConfig = {
  context: __dirname + '/src',
  entry: "./app.ts",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ng-annotate!ts',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.styl$/,
        loader: "style!css!postcss!stylus",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    }),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new CopyWebpackPlugin([
      { from: 'favicon.ico' },
      { from: 'robots.txt' }
    ])
  ],
  postcss: function () {
    return [autoprefixer];
  }
}

if (process.env.NODE_ENV === 'production') {
  var c = webpackConfig;
  c.output.path = __dirname + '/dist';
  c.output.filename = "assets/js/[hash].bundle.js";
  c.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }));
  c.plugins.push(new webpack.optimize.UglifyJsPlugin());
  c.devtool = 'source-map';
}

if (process.env.CDN) {
  webpackConfig.output.publicPath = cdnUrl;
}

module.exports = webpackConfig;
