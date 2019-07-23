const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',  // 配置入口文件
    output: {
        filename: 'app.js'    // 配置输出
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']  // 指定扩展名
    },
    // 选择 Ts ，需要安装相对应的 loader 。
    // npm i ts-loader typescript -D ，这里需要注意再次本地安装 typescript
    module: {
        rules: [
            {
                test: /\.tsx?$/i,  // 尾缀正则
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/ // 排除文件夹
            }
        ]
    },
    // 插件安装
    plugins: [
        // 安装 HtmlWebpackPlugin 插件，通过一个模板帮助我们生成网站首页，将输入文件自动嵌套到首页当中
        // npm i html-webpack-plugin -D
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ]
}
