// webpack 配置文件
// 当你运行webpack，webpack读取配置文件的配置，根据配置来工作
// 需要向外暴露一个配置对象：属性名固定，属性值较灵活



module.exports ={
    // webpack 配置对象
    // entry：入口，指示webpack从哪个文件开始打包构建
    entry: './src/index.js',
    // output：输出，指示webpack打包后的文件输出到哪里去
    output: {
        // 所有输出的目录
        path: './build',
        // 输出的文件名
        filename: './js/main.js',
    },
    // loader：加载器，帮助webpack识别其他文件类型(非js、JSON文件类型)
    // plugins：插件，帮助webpack干活，功能更加强大
    // mode：模式(development, production)
    mode: 'development',
};