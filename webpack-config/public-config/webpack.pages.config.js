/**
 * 打包模板文件
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlsPlugin = [];

// 指南车机器人实用平台首页
const htmlPlugin = new HtmlWebpackPlugin({
	title: 'hello MachineStudy',
	template: './app/index.html', //地址是根据被引用(require)到的地址
	chunks: ['index', 'vendors']
});

// 机器人学院首页
const htmlPlugin2 = new HtmlWebpackPlugin({
	title: 'hello index',
	template: './app/MachineStudy/index.html', //地址是根据被引用(require)到的地址
	filename: 'MachineStudy/index.html',
	chunks: ['machine', 'vendors']
});

htmlsPlugin.push(htmlPlugin);
htmlsPlugin.push(htmlPlugin2);

module.exports = htmlsPlugin;