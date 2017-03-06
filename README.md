# FE
Learning Front end  and Angular2




webpack-demo:
    https://webpack.js.org/guides/get-started/

    https://webpack.js.org/concepts/:
        Entry, Output, Loader( test, use property),Plugins

        const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
        const webpack = require('webpack'); //to access built-in plugins
        const path = require('path');

        const config = {
        entry: './path/to/my/entry/file.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
        module: {
            rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]
        };

        module.exports = config;