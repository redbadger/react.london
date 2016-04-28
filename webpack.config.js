const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
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
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      }
    ]
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  watch: true,
  colors: true,
  progress: true,
};


// npm run start, give dev version
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
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
      new webpack.HotModuleReplacementPlugin()
    ],
  });
}

// npm run build, give prod version
if(TARGET === 'build') {
  module.exports = merge(common, {});
}
