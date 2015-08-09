var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname,'..','app','main.js');

module.exports = function() {
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  compiler.plugin('compile', function() {
    console.log('Bundling..');
    bundleStart = new Date();
  });

  compiler.plugin('done', function() {
    console.log('Bundled in ' + (new Date() - bundleStart) + 'ms');
  });

  var bundler = new WebpackDevServer(compiler, {
    publicPath: '/build/',
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', function() {
    console.log('Bundling project...');
  });
}
