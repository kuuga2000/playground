const path = require("path");

//generate html to dist folder
const HtmlWebpackPlugin = require("html-webpack-plugin");

//clean old file
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: { import: './src/index.js', dependOn: 'shared' },
        another: { import: './src/another-module.js', dependOn: 'shared' },
        shared: 'lodash',
    },
    devtool: 'inline-source-map', // If an error originates from b.js, the source map will tell you exactly that. (not for production)
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: "Output Management"
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}