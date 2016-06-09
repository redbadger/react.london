var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint-loader'],
        exclude: /node_modules/,
        include: __dirname,
      }
    ]
  }
}
