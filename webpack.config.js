var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const webpack = require('webpack');
module.exports={
    mode: 'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        })
    ],
    module:{
        rules:[
         
            {test:/\.css$/,use: ['style-loader', 'css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader?modules']},
            {test:/\.(png||jpg||jpeg||gif||bmp)$/,use: 'url-loader?limit=2000&name=images/[hash:8]-[name].[ext]'},
            {test:/\.(ttf||eot||woff||woff2||svn)$/,use:'url-loader'},
            {test:/\.(js||jsx)$/,use:['babel-loader'],exclude:/node_modules/}
        ]
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 1
            }
          }
        }
      }


}