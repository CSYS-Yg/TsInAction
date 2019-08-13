/*
 * @Author: Yx_Zou 
 * @Description: '模块类库 module-lib.js 的 Ts 声明文件' 
 * @Date: 2019-08-13 15:53:41 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 16:20:45
 */

/**
 * 关键字 declare 可以为外部变量提供类型声明
 * @param {globalLib.Options} options
 */
declare function moduleLib(options: Options): void

// 因为该文件本身为一个模块，所以不会向外暴露接口
interface Options {
	[key: string]: any;
}

declare namespace moduleLib {
	// 官网中多出 export 关键字
	// export const version: string;
	// 实际中是没有区别的
	const version: string;
	function doSomething(): void;
}
// 导出，兼容性更好
export = moduleLib;
