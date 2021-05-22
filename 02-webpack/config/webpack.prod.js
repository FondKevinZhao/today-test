const { resolve } = require("path"); // node内置核心模块，用来设置路径。

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    // 输出配置
    filename: "js/[name].[hash: 8].js", // 输出文件名
    path: resolve(__dirname, "build"), // 输出文件路径配置
    clean: true, // 清除打包目录的文件
    publicPath: "/", // 所有输出资源公共路径
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: "eslint-loader",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader",'postcss-loader', "less-loader"]
      },
      {
        test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new OptimizeCssAssetsPlugin({}),
  ],

  
  target: 'browserslist',
  mode: "production", // 开发环境(二选一)
  // mode: 'production'   // 生产环境(二选一)
};