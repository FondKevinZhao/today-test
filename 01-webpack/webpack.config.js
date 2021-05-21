// webpack 配置文件
// 当你运行webpack，webpack读取配置文件的配置，根据配置来工作
// 需要向外暴露一个配置对象：属性名固定，属性值较灵活

// path是node.js专门用来处理路径的一个模块
const {
    resolve
} = require('path');

module.exports = {
    // webpack 配置对象
    // entry：入口，指示webpack从哪个文件开始打包构建
    entry: './src/index.js',
    // output：输出，指示webpack打包后的文件输出到哪里去
    output: {
        // 所有输出的目录
        path: resolve(__dirname, 'build'),
        // 输出的文件名
        filename: './js/main.js',
    },
    // loader：加载器，帮助webpack识别其他文件类型(非js、JSON文件类型)
    module: {
        rules: [
            // loader的配置
            {
                test: /\.js$/, // 值检测js文件
                exclude: /node_modules/, // 排毒node_modules文件夹
                enforce: "pre", // 提前加载使用
                use: {
                    // 使用exlint-loader解析
                    loader: "eslint-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },

            {
                test: /\.css$/,
                // 多个loader得使用use
                use: [
                    // 执行顺序从下到上
                    "style-loader", // 动态创建style标签，将js中的css代码添加style中
                    "css-loader", // 将css以module方式整合到js中
                ],
            },

            // 处理图片资源
            {
                test: [/\.jpe?g$/, /\.png$/, /\.gif$/],
                // 会在输入原文件和base64处理的文件自由选择
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 限制大小
                        maxSize: 8 * 1024, // 8kb
                    },
                },
            },

            {
                test: [/\.woff2?$/, /\.ttf$/, /\.map3$/, /\.map4$/],
                // 会在输出原文件
                type: "asset/resource",
                // 权重更高
                generator: {
                    filename: "fonts/[hash][ext][query]",
                },
            },
        ],
    },

    // plugins：插件，帮助webpack干活，功能更加强大
    // mode：模式(development, production)
    mode: 'development',
};