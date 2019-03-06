const path = require('path'); //node内置模板用来设置路劲
const HtmlWebpackPlugin = require('html-webpack-plugin');  //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件
module.exports = {
    entry: './src/entry.js', //入口文件配置
    output: {  //输出的配置
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'  //输出的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //css-loader负责加载css模块  style-loader把样式添加到标签中
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
//        contentBase: 'dist/js', //     webpack-dev-server 默认服务于根路径下index.html  现修改为指向dist/js/下的index.html
        port:"8888"
    },
    plugins: [
            new HtmlWebpackPlugin({template:"./index.html"}),
            new CleanWebpackPlugin(),  //删除指定目录下的所有资源，    之后再根绝上面的打包重新生成dist
    ]
};