const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public/assets/rainy-bg.jpg'),
          to: path.resolve('./dist/public/assets'),
        },
        {
          from: path.resolve(__dirname, './public/assets/summer-bg.jpg'),
          to: path.resolve('./dist/public/assets'),
        },
        {
          from: path.resolve(__dirname, './public/assets/winter-bg.jpg'),
          to: path.resolve('./dist/public/assets'),
        },
        {
          from: path.resolve(__dirname, './public/assets/icons/cloud-rain.svg'),
          to: path.resolve('./dist/public/assets/icons'),
        },
        {
          from: path.resolve(__dirname, './public/assets/icons/cloud-snow.svg'),
          to: path.resolve('./dist/public/assets/icons'),
        },
        {
          from: path.resolve(__dirname, './public/assets/icons/sun.svg'),
          to: path.resolve('./dist/public/assets/icons'),
        },
        {
          from: path.resolve(__dirname, './public/assets/icons/pause.svg'),
          to: path.resolve('./dist/public/assets/icons'),
        },
        {
          from: path.resolve(__dirname, './public/assets/sounds/rain.mp3'),
          to: path.resolve('./dist/public/assets/sounds'),
        },
        {
          from: path.resolve(__dirname, './public/assets/sounds/summer.mp3'),
          to: path.resolve('./dist/public/assets/sounds'),
        },
        {
          from: path.resolve(__dirname, './public/assets/sounds/winter.mp3'),
          to: path.resolve('./dist/public/assets/sounds'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',
      },
    ],
  },
}
