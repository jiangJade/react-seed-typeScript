// 生产环境
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const PurifyCssPlugin = require('purifycss-webpack');
const webpackCommonConfig = require('./webpack.common.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const STATIC_PATH = 'static';

const webpackConfig = {
    devtool: '',
    mode: 'production',
    module: {
        rules: [
            {
                // /**
                //  * eslint代码规范校验
                //  */
                // test: /\.(js|ts|tsx)$/,
                // enforce: 'pre',
                // include: path.join(__dirname, '../src'),
                // // exclude: path.join(__dirname, 'src/components/companyInfo/companyInfo/relateInfo/map'), // 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
                // use: [
                //     {
                //         loader: 'tslint-loader',
                //         options: {
                //             configFile: '.tsconfig.prod.json'
                //         }
                //     }
                // ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 清除编译目录
        new PurifyCssPlugin({
            paths: glob.sync(path.join(__dirname, '../src/*.html'))
        }),
        new webpack.DefinePlugin({
            // 配置全局变量
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new MiniCssExtractPlugin({
            filename: `${STATIC_PATH}/css/[name].[chunkhash:8].css` // 放到dist/css/下
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
};
module.exports = merge(webpackConfig, webpackCommonConfig);