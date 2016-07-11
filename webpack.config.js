const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  target: 'web',
  devtool: 'source-map',
  noInfo: true,
  entry: {
    'static/main': ['babel-polyfill', './client/index'],
    main: ['./client/styles/main.scss'],
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

const serverConfig = {
  devtool: 'source-map',
  noInfo: true,
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: ['babel-polyfill', './server/start-server.js'],
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
      },
    ],
  },
};

module.exports = [
  browserConfig,
  serverConfig,
];
