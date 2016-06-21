/* eslint-disable no-var */

var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'babel-polyfill',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'static/bundle.js',
  },
  plugins: [
    new ExtractText('[name].css', { allChunks: true }),
  ],
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
        include: __dirname,
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass'),
      },
    ],
  },
};
