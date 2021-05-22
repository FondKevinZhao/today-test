const { resolve } = require("path"); // node内置核心模块，用来设置路径。

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./src/index.js", // 入口文件
  output: {
    // 输出配置
    filename: "./js/main.js", // 输出文件名
    path: resolve(__dirname, "build"), // 输出文件路径配置
    clean: true, // 清除打包目录的文件
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
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: [/\.ttf$/, /\.woff$/, /\.woff2$/],
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    contentBase: './build',  // 打包根路径
    port: 8080, // 端口号
    open: true,  // 自动打开浏览器
    progress: true, // 进度条
  },
  target: 'web',
  mode: "development", // 开发环境(二选一)
  // mode: 'production'   // 生产环境(二选一)
};