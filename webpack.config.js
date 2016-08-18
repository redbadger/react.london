const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const baseConfig = {
  devtool: 'source-map',
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
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
  sassLoader: {
    outputStyle: 'compressed',
  },
};

const browserConfig = Object.assign({},
  baseConfig,
  {
    target: 'web',
    entry: {
      'static/main': ['babel-polyfill', './client/index'],
      main: ['./client/styles/main.scss'],
    },
  }
);

const serverConfig = Object.assign({},
  baseConfig,
  {
    target: 'node',
    externals: [nodeExternals()],
    entry: {
      server: [
        'isomorphic-fetch',
        'babel-polyfill',
        './server/start-server.js',
      ],
    },
  }
);

module.exports = [
  browserConfig,
  serverConfig,
];
