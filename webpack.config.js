const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = {
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader?minimize",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.js$/,

        use: [
          {
            loader: "eslint-loader"
          }
        ],
        exclude: /node_modules/,
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
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
