const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, './build'),
    },

    resolve: {
        extensions: ['.jsx', '.js', '.scss']
    },

    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/i,
                use: [miniCss.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html'
        }),
        new miniCss({
            filename: 'style.css',
        })
    ]
}