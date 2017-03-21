/**
 * 开发版本的plugins配置
 */

const webpack = require('webpack');

const constConfig = require('./public-config/webpack.const.config.js');
const htmlsPlugin = require('./public-config/webpack.pages.config.js');

// 打包模板文件(html...)
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlPlugin = new HtmlWebpackPlugin({
// 	template: './app/index.html', //地址是根据被引用(require)到的地址
// 	title: '指南车实用平台',
// });

// 全局挂载第三方库或者插件
const JqueryProvidePlugin = new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery"
});

// 分离出公共的库
const commonsChunk = new webpack.optimize.CommonsChunkPlugin({
	name: 'vendors',
	filename: './MachineStudy/js/vendors.js'
});

const plugins = [JqueryProvidePlugin, commonsChunk, ...htmlsPlugin];

module.exports = plugins;