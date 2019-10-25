const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    './block/index' : './src/index.js',
    './block/block' : './src/block.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: require.resolve('responsive-loader'),
              quality: 85,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};