// This file is not used in production.
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = webpackMerge(baseConfig, {
    entry: [
        'react-hot-loader/patch',
        './doc/index.js'
    ],

    output: {
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../doc')
                ],
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    /**
                     * Report every eslint error as a warning.
                     *
                     * This prevents Webpack dev-server from blocking HMR updates only because
                     * eslint fails. `create-react-app` also chooses to use only warnings,
                     * since `eslint-loader` has already make warnings “very visible”.
                     *
                     * Ref: https://git.io/vyu8d
                     */
                    emitWarning: true
                }
            },
        ]
    },

    devtool: 'inline-source-map',

    devServer: {
        compress: true,
        contentBase: false,
        hotOnly: true,
        port: 3100,
        publicPath: '/',
        stats: {
            assets: false,
            children: false,
            chunkModules: false,
            hash: false,
            version: false
        },
        watchOptions: {
            ignored: /node_modules/
        },
        setup: (app) => {
            app.get('/', (request, response) => {
                const indexFile = path.resolve(__dirname, '../doc/index.html');
                response.sendFile(indexFile);
            });
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});