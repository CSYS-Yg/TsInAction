/*
 * @Author: Yx_Zou 
 * @Description: '全局库 global-lib.js' 
 * @Date: 2019-08-13 15:15:34 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 15:24:08
 */

// 定义全局方法
function globalLib(options) {
	console.log(options);
}

// 添加属性
globalLib.version = '1.0.0';
// 添加属性
globalLib.doSomething = function() {
	console.log('globalLib do something');
};
