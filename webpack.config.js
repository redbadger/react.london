import { join } from 'path';
import { EnvironmentPlugin } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import MiniCSSExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

const baseConfig = {
  devtool: 'source-map',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: _loader,
          },
          'css-loader?minimize',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,

        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

const browserConfig = Object.assign({}, baseConfig, {
  target: 'web',
  entry: {
    'static/main': ['babel-polyfill', './client/index'],
    main: ['./client/styles/main.scss'],
  },
});

const serverConfig = Object.assign({}, baseConfig, {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: ['isomorphic-fetch', 'babel-polyfill', './server/start-server.js'],
  },
});

export default [browserConfig, serverConfig];
