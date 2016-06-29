/* eslint-disable no-var */

var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  noInfo: true,
  entry: {
    'static/editor': ['babel-polyfill', './app/index'],
    main: ['./app/styles/main.scss'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass'),
      },
    ],
  },
  plugins: [
    new ExtractText('[name].css', {
      allChunks: true,
    }),
  ],
};
