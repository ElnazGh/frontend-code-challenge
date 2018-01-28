const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    //entry: './index.js',
    entry: ['./index.js', './src/app/home/*.js'],
        output: {
        filename: './bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
};

module.exports = config;
