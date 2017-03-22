/**
 * 搜索MachineStudy下的所有和模板相关的.js文件
 */

const glob = require('glob');
const pathExports = require('../public-config/webpack.const.config.js');

let jsFoundArr = [];

const options = {
	cwd: pathExports.MACHINE_STUDY_JS_PATH,
	sync: true, //这里不能异步，只能同步
}

jsFoundArr = glob('*.js', options);

module.exports = jsFoundArr;