const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { main: './index.jsx' },
  output: { path: `${__dirname}/`, filename: 'bundle.js' },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    stats: 'errors-only', // log only errors on console
    open: true, // open browser on running server
    port: process.env.PORT || 3000, // server on port
    compress: true, // enable gzip compression
  },
  devtool: 'inline-source-map',
};
