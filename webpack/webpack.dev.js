const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.js');
require('dotenv').config();

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    stats: 'normal', // log only errors on console
    open: true, // open browser on running server
    port: process.env.PORT || 3000, // server on port
    compress: true, // enable gzip compression
  },
  devtool: 'inline-source-map',
});
