/*
 * @Author: Yx_Zou 
 * @Description: ' UMD 类库 umd-lib.js 的声明文件' 
 * @Date: 2019-08-13 16:16:37 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 16:21:02
 */

declare namespace umdLib {
	const version: string;
	function doSomething(): void;
}
// 编写 umd 库 这条语句是不可缺少的
export as namespace umdLib;

export = umdLib;
