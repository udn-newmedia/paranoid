const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const config = {
    entry: {
        star: './src/star.js',
        emirates: './src/emirates.js',
        wang: './src/wang.js',
        sun: './src/sun.js',
        hou: './src/hou.js',
        famous: './src/famous.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
    devtool: 'souce-map',
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_odules/
            },
            {
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: {importLoader: 1 }},
                        'postcss-loader'
                    ],
                    publicPath: '../'
                }),
                test: /\.css$/
            },
            {
                test:/\.(mp4|ogg|svg)$/,
                loader:'file-loader',
                options:{
                    name:'videos/[name].[ext]'
                }
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                loaders: [
                    'file-loader?limit=10000&hash=sha512&digest=hex&name=image/[hash].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 4,
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'src/assets')
        }
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function(module){
              return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/star.html',
            filename: 'star.html',
            chunks: ['vendor', 'star']
        }),
        new HtmlWebpackPlugin({
            template: 'src/emirates.html',
            filename: 'emirates.html',
            chunks: ['vendor', 'emirates']
        }),
        new HtmlWebpackPlugin({
            template: 'src/wang.html',
            filename: 'wang.html',
            chunks: ['vendor', 'wang']
        }),
        new HtmlWebpackPlugin({
            template: 'src/sun.html',
            filename: 'sun.html',
            chunks: ['vendor', 'sun']
        }),
        new HtmlWebpackPlugin({
            template: 'src/hou.html',
            filename: 'hou.html',
            chunks: ['vendor', 'hou']
        }),
        new HtmlWebpackPlugin({
            template: 'src/famous.html',
            filename: 'famous.html',
            chunks: ['vendor', 'famous']
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ]
}

module.exports = config