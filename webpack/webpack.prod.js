const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const projectRoot = path.resolve(__dirname, '..');

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
        sourceMap: false,
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            inline: false,
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: false,
    splitChunks: {
      // chunks: 'all',
      minSize: 0,
      cacheGroups: {
        default: false,
        // styles: {
        //   name: 'styles',
        //   test: /\.(s|)css$/,
        //   chunks: 'all',
        //   enforce: true,
        // },
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            let bundleName = packageName.replace('@', '');
            // if (['react-dom', 'prop-types', 'react'].includes(bundleName)) {
            //   bundleName = 'react';
            // } else {
            bundleName = 'vendors';
            // }
            return `npm.${bundleName}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['assets/js/*.*', 'assets/main*.js', 'assets/main*.js.gz', 'assets/main*.js.br'], {
      root: projectRoot,
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html|\.svg$/,
      threshold: (10240 / 4),
      minRatio: 1,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html|\.svg$/,
      threshold: (10240 / 4),
      minRatio: 1,
    }),
    new UglifyJSPlugin({
      sourceMap: false,
      parallel: true,
      uglifyOptions: {
        warnings: false,
        mangle: true, // Note `mangle.properties` is `false` by default.
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
