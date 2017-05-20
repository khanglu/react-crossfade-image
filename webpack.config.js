const { resolve } = require("path");
const webpack = require("webpack");

module.exports = {
  context: resolve(__dirname, "example"),
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    "./App.js"
    // the entry point of our app
  ],
  output: {
    filename: "bundle.js",
    // the output bundle

    path: resolve(__dirname, "example/dist"),

    publicPath: "/"
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: resolve(__dirname, "example/dist"),
    // match the output path
    publicPath: "/"
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
};
