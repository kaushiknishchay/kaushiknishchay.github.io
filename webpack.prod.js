const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  stats: {
    colors: true,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true,
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            inline: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    // new UglifyJSPlugin({
    // sourceMap: false,
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
