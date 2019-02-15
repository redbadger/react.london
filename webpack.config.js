const path = require("path");
const webpack = require("webpack");
const ExtractText = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const autoprefixer = require("autoprefixer");

const baseConfig = {
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ["babel"]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.scss$/,
        loaders: ExtractText.extract({
          fallback: "style",
          use: ["css?minimize", "postcss", "sass"]
        }),
        options: {
          plugins: function() {
            return [autoprefixer];
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new ExtractText({ filename: "[name].css", allChunks: true })
  ]
};

const browserConfig = Object.assign({}, baseConfig, {
  target: "web",
  entry: {
    "static/main": ["babel-polyfill", "./client/index"],
    main: ["./client/styles/main.scss"]
  }
});

const serverConfig = Object.assign({}, baseConfig, {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    server: ["isomorphic-fetch", "babel-polyfill", "./server/start-server.js"]
  }
});

module.exports = [browserConfig, serverConfig];
