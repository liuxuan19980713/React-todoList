var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode:'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify:{// 压缩HTML代码
                collapseWhitespace:true, // 合并空白字符
                removeComments:true, // 移除注释
                removeAttributeQuotes:true // 移除属性上的引号
            }
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({ // 设置为产品上线环境，进一步压缩JS代码
            'process.env.NODE_ENV': '"production"'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader',MiniCssExtractPlugin.loader] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(png||jpg||jpeg||gif||bmp)$/, use: 'url-loader' },
            { test: /\.(ttf||eot||woff||woff2||svn)$/, use: 'url-loader' },
            { test: /\.js/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            },
            filename: 'wgy-bundle.js', // 用来指定打包后的名称
            automaticNameDelimiter: '~'
        },
        minimizer: [
            // js mini
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
              sourceMap: true // set to true if you want JS source maps
            })
            // css mini
            // new OptimizeCSSPlugin({})
        ]
    }
}