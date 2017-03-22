/**
 * 入口的配置
 */

const jsFoundArr = require('../sub-config/globjs.config.js');

let entries = {
	index: './app/index.js', // ./ ->相对于当前目录 实用平台入口
	machine: './app/MachineStudy/index.js', // 机器人学院入口
	vendors: ['jquery']
};

// 机器人学院的模板相关的js
jsFoundArr.forEach((js) => {
	console.log(js.split('.')[0]);
	let jsKey = js.split('.')[0];
	entries[jsKey] = './app/MachineStudy/js/' + js;
});

console.log(entries);

module.exports = entries;