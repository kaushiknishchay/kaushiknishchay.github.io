const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const projectRoot = path.resolve(__dirname, '..');

module.exports = {
  context: path.resolve(projectRoot, 'src'),
  entry: './index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(projectRoot),
    chunkFilename: './assets/js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        // setup babel compile for es6 & jsx
        test: /\.(js|jsx)$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['syntax-dynamic-import', 'transform-class-properties'],
          },
        },
      },
      {
        // setup for creating a new index file on each build
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        // setup for auto compiling and injecting styles in index.html
        test: /\.(sass|scss|css)$/,
        include: path.resolve(projectRoot, 'src'),
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './assets/css/',
              outputPath: './assets/css/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      // file-loader(for images)
      {
        test: /\.(jpg|png|gif|svg)$/,
        include: /src/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/',
            },
          },
        ],
      },
      // // file-loader(for fonts)
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: (10240 / 4),
      minRatio: 1,
    }),
    new CleanWebpackPlugin(['assets/js/*.*', 'main*.js'], {
      root: projectRoot,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      // filename: devMode ? '[name].css' : '[name].css',
      chunkFilename: devMode ? '[id].css' : './assets/css/app.css',
    }),
  ],
};
