var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/index.jsx",

  output: {
    filename: "app.js",
    path: path.join(__dirname, "build")
  },

  resolve: {
    modules: ["node_modules", path.join(__dirname, "src")]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ["ie >= 9", "last 2 version"]
                })
              ]
            }
          },
          "less-loader"
        ]
      },

      {
        test: /\.css$/,
        loader: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ["ie >= 9", "last 2 version"]
                })
              ]
            }
          }
        ]
      },

      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  }
};
