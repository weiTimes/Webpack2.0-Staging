/**
 * 发布版本的plugins配置
 */

const webpack = require('webpack');
const pathExports = require('./public-config/webpack.const.config.js');

const constConfig = require('./public-config/webpack.const.config.js');
const htmlsPlugin = require('./public-config/webpack.pages.config.js');

// 全局挂载第三方库或者插件
const JqueryProvidePlugin = new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery"
});

// 压缩代码
const ugliify = new webpack.optimize.UglifyJsPlugin({
	minimize: true
});

// 分离出公共的库
const commonsChunk = new webpack.optimize.CommonsChunkPlugin({
	name: 'vendors',
	filename: 'MachineStudy/js/vendors.js'
});

const plugins = [JqueryProvidePlugin, ugliify, commonsChunk, ...htmlsPlugin];

module.exports = plugins;