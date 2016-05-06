const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const common = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/,
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        ),
        include: PATHS.app,
      },
    ],
  },
  entry: [
    'react-hot-loader/patch',
    './app/client',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  watch: true,
  colors: true,
  progress: true,
};

// npm run start, give dev version
if (TARGET === 'start' || TARGET === 'serve' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'error-only',
      host: process.env.HOST,
      port: process.env.PORT,
    },
    plugins: [
     new webpack.optimize.OccurenceOrderPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new ExtractTextPlugin('styles.css'),
     new webpack.NoErrorsPlugin(),
    ],
  });
}

// npm run build, give prod version
if (TARGET === 'build') {
  module.exports = merge(common, {});
}
