const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api/*'],
        debug:true,
        target: 'http://127.0.0.1:7001',
        secure: true
      }
    ]
  }
});