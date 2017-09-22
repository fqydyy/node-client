const ExtractTextPlugin = require('extract-text-webpack-plugin');//CSS 单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const root = __dirname;
const webpack = require('webpack');


const rules = [{
  test: /\.js?$/,
  exclude: /node_modules/,
  use: ['babel-loader']
  }, {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
    })
  }
];

module.exports = {

  devtool: 'source-map',

  entry: [
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      path.resolve(root, 'app/main.js')
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(root, 'dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.less', '.scss', '.css']
  },
  module: {
    rules
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Client-Demo',
      template: path.resolve(root, 'index.html')
    }),
    new ExtractTextPlugin('styles.css'),
    // new ExtractTextPlugin("styles.css"),
    new webpack.HotModuleReplacementPlugin(), // 热替换插件
    new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ]

}