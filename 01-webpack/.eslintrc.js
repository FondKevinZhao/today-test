// eslint配置文件，向外暴露一个配置对象
module.exports = {
    parserOptions: {
        ecmaVersion: 8, // 能识别es8一下语法
        sourceType: 'module', // 使用了es6模块化语法
    },
    rules: {
            // 报错(红色，终止打包) error 2
            // 警告(黄色，不终止打包) warn 1
            // 关闭                 off 0

            // 必须使用分号结尾，不使用就报错，不要分号是：semi: 'off'
            semi: 0,
            eqeqeq: 'error', // 全等
            // 'no-var': 2, // 不使用var
            // 'no-console': 'warn', // 不使用console语句
        },
    
}