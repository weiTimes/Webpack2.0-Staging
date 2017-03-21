/**
 * 定义了文件夹的路径
 */

const path = require('path');
const pathExports = {};
//定义了一些文件夹的路径
pathExports.ROOT_PATH = path.resolve(__dirname, '../../');
pathExports.APP_PATH = path.resolve(pathExports.ROOT_PATH, 'app');
pathExports.MACHINE_STUDY_PATH = path.resolve(pathExports.APP_PATH, 'MachineStudy');
pathExports.BUILD_PATH = path.resolve(pathExports.ROOT_PATH, 'build');

module.exports = pathExports;