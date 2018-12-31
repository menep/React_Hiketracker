const path = require("path");
const HTMLWPP = require("html-webpack-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 8192
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HTMLWPP({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MomentLocalesPlugin()
  ]
};
