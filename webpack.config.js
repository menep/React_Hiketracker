const path = require("path");
const webpack = require("webpack");
const HTMLWPP = require("html-webpack-plugin");

module.exports = {
  mode: "development",
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
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/",
    hotOnly: true,
    historyApiFallback: true
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWPP({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
