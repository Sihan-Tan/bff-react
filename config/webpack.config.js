const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const notifier = require("node-notifier");

module.exports = {
  mode: "development",
  entry: {
    app: resolve(__dirname, "..", "src/web/index.tsx"),
  },
  output: {
    path: resolve(__dirname, "..", "dist/assets"),
    filename: "scripts/[name]_[contenthash:5].js",
    // chunkFilename: "scripts/[name]_[id]_[contenthash:5].js",
    assetModuleFilename: "scripts/[name].[contenthash:5].bundule.[ext]",
  },
  experiments: {
    asset: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "..", "src/web/"),
      "@api": resolve(__dirname, "..", "src/web/api"),
      "@assets": resolve(__dirname, "..", "src/web/assets"),
      "@config": resolve(__dirname, "..", "src/web/config"),
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
        enforce: "pre",
        use: [
          "thread-loader",
          "cache-loader",
          {
            loader: "eslint-loader",
            options: {
              //自动修复eslint的错误
              fix: true,
            },
          },
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
          {
            loader: "css-loader",
            options: {
              // importLoaders: 1,
            },
          },
          { loader: "postcss-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#AC9455",
                  "border-color-base": "#AC9455",
                },
                javascriptEnabled: true,
              },
            },
          },
          {
            loader: "style-resources-loader",
            options: {
              patterns: [
                resolve(__dirname, "../", "src/web/assets/styles/var.less"),
              ],
              // injector: (source, resources) => {
              //   const combineAll = (type) =>
              //     resources
              //       .filter(({ file }) => file.includes(type))
              //       .map(({ file, content }) => {
              //         return content;
              //       })
              //       .join("");

              //   const str = `@import './mixin';`;
              //   return (
              //     combineAll("var") +
              //     source.replace(str, str + "\n" + combineAll("var"))
              //   );
              // },
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
      // {
      //   test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
      //   type: "asset",
      // },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        notes: [
          "Some additionnal notes to be displayed unpon successful compilation",
        ],
        messages: ["You application is running here http://localhost:8080"],
      },
      onErrors: function (severity, errors) {
        if (severity !== "error") {
          return;
        }
        notifier.notify({
          title: "Webpack React",
          message: "Webpack Compile Error",
          icon: "", // Absolute path (doesn't work on balloons)
          sound: true, // Only Notification Center or Windows Toasters
          wait: true, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
        });
      },
      clearConsole: true,
    }),
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      // 配置样式文件抽离插件
      filename: "styles/[name].[contenthash:5].css",
      chunkFilename: "styles/[name]_[id].[contenthash:5].css",
      ignoreOrder: true,
    }),
  ],
};
