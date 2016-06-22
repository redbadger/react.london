/* eslint-disable no-var */

var path = require('path');

module.exports = {
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'babel-polyfill',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/editor.js',
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
    ],
  },
};
