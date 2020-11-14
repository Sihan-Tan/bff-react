const { resolve } = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    compress: true,
    quiet: true,
    contentBase: resolve(__dirname, "..", "dist"),
    port: 8080,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "..", "src/web/public/index-dev.html"),
      filename: "index.html",
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);
