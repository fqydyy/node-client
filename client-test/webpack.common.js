const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//CSS 单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.less', '.scss', '.css'],
    alias: {
      actions: path.resolve(__dirname, './app/actions'),
      utils: path.resolve(__dirname, './app/utils'),
      constant: path.resolve(__dirname, './app/constant'),
      middlewares: path.resolve(__dirname, './app/middlewares')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Client-Demo',
      template: path.resolve(__dirname, 'index.html')
    }),
    new ExtractTextPlugin('styles.css'),
    new Clean(path.resolve(__dirname, 'dist'))
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  }
};



