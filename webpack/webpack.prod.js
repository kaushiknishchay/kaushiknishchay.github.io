const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const commonConfig = require("./webpack.common.js");

const projectRoot = path.resolve(__dirname, "..");

module.exports = merge(commonConfig, {
  output: {},
  mode: "production",
  devtool: "source-map",
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
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            let bundleName = packageName.replace("@", "");
            // if (['react-dom', 'prop-types', 'react'].includes(bundleName)) {
            //   bundleName = 'react';
            // } else {
            // bundleName = "vendors";
            // }
            return `npm.${bundleName}`;
          },
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*"], {
      root: projectRoot,
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.svg$/,
      threshold: 10240 / 4,
      minRatio: 1,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.js$|\.css$|\.svg$/,
      threshold: 10240 / 4,
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
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new GenerateSW({
      include: [/\.html$/, /\.js$/, /\.css$/, /\.svg$/, /\.png$/],
      clientsClaim: true,
      skipWaiting: true,
      // Define runtime caching rules.
      runtimeCaching: [
        {
          // Match any request that ends with .png, .jpg, .jpeg or .svg.
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "images",

            // Only cache 10 images.
            expiration: {
              maxEntries: 20,
            },
          },
        },
        {
          urlPattern: /\.(?:css|js)$/,

          // Apply a cache-first strategy.
          handler: "CacheFirst",

          options: {
            // Use a custom cache name.
            cacheName: "js-css",

            // Only cache 10 js-css.
            expiration: {
              maxEntries: 10,
            },
          },
        },
      ],
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(projectRoot, "src", "assets", "icons"),
          to: path.resolve(projectRoot, "dist", "assets", "icons"),
        },
        {
          from: "resume/*.pdf",
          to: path.resolve(projectRoot, "dist"),
        },
        {
          from: "../manifest.json",
          to: path.resolve(projectRoot, "dist"),
        },
      ],
    }),
  ],
});
