const path = require('path');
// 目录路径配置
const constConfig = require('./webpack-config/public-config/webpack.const.config.js');

// loader配置
const rules = require('./webpack-config/public-config/webpack.rules.config.js');
// 插件配置
const plugins = require('./webpack-config/webpack.plugins.dev.js');
// 入口配置
const entries = require('./webpack-config/public-config/webpack.entry.config.js');
// 出口配置
const output = require('./webpack-config/public-config/webpack.output.config.js');

module.exports = {
	entry: entries,
	output: output,
	plugins: plugins,
	module: rules
};