var path = require("path");
var webpack = require("webpack");
var NpmInstallPlugin = require("npm-install-webpack-plugin");

const config = {
  devtool: "cheap-module-source-map",
  resolve: {
    alias: {
      styles: path.resolve(__dirname + "/src/styles")
    }
  },
  entry: ["./src/index"],
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new NpmInstallPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  module: {
    loaders: [
      {
        loaders: ["babel-loader"],
        include: [path.resolve(__dirname, "src")],
        test: /\.js$/,
        plugins: ["transform-runtime"]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader?importLoaders=1",
          "postcss-loader"
        ]
      },
      {
        test: /\.scss/,
        loaders: ["style-loader", "css-loader?importLoaders=1", "sass-loader"]
      },
      {
        test: /\.svg/,
        loader: "svg-url"
      }
    ]
  },
  postcss: () => {
    return [require("precss"), require("postcss-cssnext")];
  }
};
if (process.env.NODE_ENV === "production") {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
module.exports = config;
