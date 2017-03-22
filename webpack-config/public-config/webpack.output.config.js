/**
 * 出口的配置
 */

const path = require('path');
const pathExports = require('./webpack.const.config.js');

const output = {
	path: pathExports.BUILD_PATH,
	filename: 'MachineStudy/js/[name].bundle.js'
};

module.exports = output;