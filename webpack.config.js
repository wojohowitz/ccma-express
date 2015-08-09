var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var semanticUIPath = path.resolve(__dirname,'semantic');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000', 
    'webpack/hot/dev-server', 
    path.resolve(appPath, 'main.js')],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: [nodeModulesPath,semanticUIPath]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },{
      test: /\.jade$/,
      loader: 'jade',
    },{
      test: /\.(png|woff|svg|woff2|ttf|eot)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
