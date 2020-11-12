const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: resolve(__dirname, "..", "src/web/index.tsx"),
  },
  output: {
    path: resolve(__dirname, "..", "dist"),
    filename: "js/[name]_[contenthash:5].js",
    chunkFilename: "js/[name]_[id]_[contenthash:5].js",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "..", "src/web/"),
      "@api": resolve(__dirname, "..", "src/web/api"),
      "@assets": resolve(__dirname, "..", "src/web/assets"),
      "@components": resolve(__dirname, "..", "src/web/components"),
      "@hooks": resolve(__dirname, "..", "src/web/hooks"),
      "@models": resolve(__dirname, "..", "src/web/models"),
      "@recoil": resolve(__dirname, "..", "src/web/recoil"),
      "@pages": resolve(__dirname, "..", "src/web/pages"),
      "@routes": resolve(__dirname, "..", "src/web/routes"),
      "@tools": resolve(__dirname, "..", "src/web/tools"),
      "@utils": resolve(__dirname, "..", "src/web/utils"),
    },
    extensions: [".ts", ".tsx", ".js", ".mjs", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "thread-loader",
          "cache-loader",
          {
            loader: "babel-loader",
          },
        ],
        include: [resolve(__dirname, "../", "src/web")],
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "@primary-color": "red",
                },
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(pdf|csv|json|txt|avi)$/i,
        loader: "file-loader",
        options: {
          name: "file/[name]_[contenthash:5].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|bmp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name]_[contenthash:5].[ext]",
              limit: 8192,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8080"],
        notes: [
          "Some additionnal notes to be displayed unpon successful compilation",
        ],
      },
      onErrors: function (severity, errors) {},
      clearConsole: true,
    }),
    new MiniCssExtractPlugin({
      // 配置样式文件抽离插件
      filename: "css/[name].[contenthash:5].css",
      chunkFilename: "css/[name]_[id].[contenthash:5].css",
    }),
  ],
};
