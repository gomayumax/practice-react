/**
 * Created by t_ueno on 2016/06/29.
 */
'use strict';

var path = require('path')
var webpack = require('webpack');

var env = process.env.NODE_ENV;

var config = {
  //devtool: 'cheap-module-eval-source-map',
  entry: [
//    'webpack-hot-middleware/client',
    './app'
  ],
    output: {
        filename: 'bundle.js'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        // "jquery": "jQuery"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/, include: __dirname }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        //new webpack.HotModuleReplacementPlugin()
    ],
    watchOptions: {
        poll: 500
    }
};

if (env !== 'production') {
    config.devtool = 'inline-source-map'
}

if (env === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
//                pure_getters: true,
//                unsafe: true,
//                unsafe_comps: true,
                warnings: false
            }
        })
    )
}
module.exports = config;