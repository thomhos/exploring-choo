var webpackMerge = require('webpack-merge');
var baseConfig = require('./webpack.base.js');
var path = require('path');

module.exports = webpackMerge(baseConfig, {

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }

});
