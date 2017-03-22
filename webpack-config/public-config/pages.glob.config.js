/**
 * 搜索.html的模板文件
 */

const glob = require('glob');
const pathExports = require('./webpack.const.config.js');

let globFound = {};
const options = {
	cwd: pathExports.MACHINE_STUDY_HTMLS_PATH,
	sync: true, //这里不能异步，只能同步
}
globFound.pagesFoundArr = glob('*.html', options);

module.exports = globFound;