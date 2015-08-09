var gulp = require('gulp');
var webpack = require('webpack');

var compiler = webpack({
  require('./webpack.config');
});
