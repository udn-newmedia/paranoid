const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
    entry: {
        star: './src/star.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js'
    },
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
        new HtmlWebpackPlugin({
            template: 'src/star.html',
            filename: 'star.html',
        }),
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ]
}

module.exports = config