const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

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
        loader: ExtractText.extract('style', [
          'css?minimize', 'postcss', 'sass',
        ]),
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new ExtractText('[name].css', {
      allChunks: true,
    }),
  ],
  postcss: () => [
    autoprefixer,
  ],
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
