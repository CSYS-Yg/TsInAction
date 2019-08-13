/*
 * @Author: Yx_Zou 
 * @Description: '模块类库 module-lib.js' 
 * @Date: 2019-08-13 15:49:03 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 15:52:06
 */

const version = '1.0.0';

function doSomething() {
	console.log('moduleLib do something');
}
function moduleLib(options) {
	console.log(options);
}

moduleLib.version = version;
moduleLib.doSomething = doSomething;

module.exports = moduleLib;
