const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
const projectRoot = path.resolve(__dirname, "..");
const distPath = path.resolve(projectRoot, "dist");

module.exports = {
  context: path.resolve(projectRoot, "src"),
  entry: "./index.jsx",
  output: {
    filename: "./js/[name].bundle.[chunkhash].js",
    path: distPath,
    chunkFilename: "./js/[name].[chunkhash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        // setup for creating a new index file on each build
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        include: /src/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // setup for auto compiling and injecting styles in index.html
        test: /\.(sass|scss|css)$/,
        include: path.resolve(projectRoot, "src"),
        exclude: /node_modules/,
        use: [
          devMode
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      // file-loader(for images)
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              publicPath: "/assets/",
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "app.[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "app.[contenthash].css",
    }),
  ],
};
