const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: [
            './src/index.js',
            './src/_css/app.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    devServer: {
        publicPath: '/',
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8080
      },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react',
                            '@babel/preset-typescript'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            '@babel/plugin-syntax-dynamic-import',
                            ['@babel/plugin-proposal-class-properties', { "loose": true }]
                        ]
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /.(png|jpg|woff(2)?|eot|ttf|otf|svg|gif)(\?[a-z0-9=\.]+)?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            path: path.resolve(__dirname, 'public'),
                            name: 'media/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    externals: {
        myApp: 'myApp',
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: './src/index.html'
        }),
        new ExtractTextPlugin(path.join('app[hash].css')),
        new webpack.DefinePlugin({
            '__DEV__': JSON.stringify(true),
            '__API_HOST__': JSON.stringify('http://localhost/my-app/'),
        }),

    ],
}
module.exports = config;