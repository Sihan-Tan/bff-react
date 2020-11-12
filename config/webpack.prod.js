const { resolve } = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const prodConfig = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "..", "src/web/public/index-prod.html"),
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
      filename: "js/[base].gz",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
  },
  optimization: {
    minimize: true,
    splitChunks: {
      //分割代码块
      cacheGroups: {
        vendor: {
          //第三方依赖
          priority: 1, //设置优先级，首先抽离第三方模块
          name: "vendor",
          test: /node_modules/,
          chunks: "initial",
          minSize: 2000,
          minChunks: 1, //最少引入了1次
        },
        //缓存组
        common: {
          //公共模块
          chunks: "initial",
          name: "common",
          minSize: 100, //大小超过100个字节
          minChunks: 3, //最少引入了3次
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
