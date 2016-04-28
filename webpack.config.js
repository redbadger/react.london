var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  entry: [
    './src/index.js'
  ],
  watch: true,
  colors: true,
  progress: true,
};
