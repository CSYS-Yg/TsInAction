/*
 * @Author: Yx_Zou 
 * @Description: ' UMD 类库 umd-lib.js ' 
 * @Date: 2019-08-13 16:05:23 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 16:17:24
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory();
	} else {
		root.umdLib = factory();
	}
})(this, function() {
	return {
		version: '1.0.0',
		doSomething() {
			console.log('umdLib do something');
		}
	};
});
