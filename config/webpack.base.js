var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var rupture = require('rupture');
var babelSettings = { extends: path.join(__dirname, './.babelrc') };

module.exports = {
    entry: {
        'app': './src/index.js'
    },

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true,
        configFile: path.resolve(__dirname, '.eslintrc')
    },

    stylus: {
      use: [rupture()]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ExtractTextPlugin(
          'styles.css',
          {
            allChunks: true
          }
        ),
    ]
};
