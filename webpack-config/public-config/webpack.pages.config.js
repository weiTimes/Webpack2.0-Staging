/**
 * 打包模板文件配置
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// 找到的模板路径 app/**/htmls
const globFound = require('./pages.glob.config.js');
const pathExports = require('./webpack.const.config.js');

let htmlsPlugin = [];

// 指南车机器人实用平台首页
const htmlPlugin = new HtmlWebpackPlugin({
	title: 'hello MachineStudy',
	template: pathExports.APP_PATH + '/index.html', //地址是根据被引用(require)到的地址
	chunks: ['index', 'vendors']
});

// 机器人学院首页
const htmlPlugin2 = new HtmlWebpackPlugin({
	title: 'hello index',
	template: pathExports.APP_PATH + '/MachineStudy/index.html', //地址是根据被引用(require)到的地址
	filename: 'MachineStudy/index.html',
	chunks: ['machine', 'vendors']
});

console.log(globFound.pagesFoundArr);
// 机器人学院的模板文件
globFound.pagesFoundArr.forEach((page) => {
	let newHtmlplugin = new HtmlWebpackPlugin({
		title: 'abount us',
		template: pathExports.MACHINE_STUDY_HTMLS_PATH + '/' + page,
		filename: 'MachineStudy/htmls/' + page,
		chunks: [page.split('.')[0], 'vendors']
	});
	htmlsPlugin.push(newHtmlplugin);
});
htmlsPlugin.push(htmlPlugin);
htmlsPlugin.push(htmlPlugin2);

module.exports = htmlsPlugin;