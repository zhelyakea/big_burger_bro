var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client',
    'babel-polyfill',
    './src/index', './css/style.css'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin()
  ],
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.svg/,
        loader: 'svg-url'
      }
    ]
  }
}
