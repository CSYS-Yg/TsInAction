/*
 * @Author: Yx_Zou 
 * @Description: '全局库 global-lib 的声明文件编写' 
 * @Date: 2019-08-13 15:23:55 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 15:47:11
 */

/**
 * 关键字 declare 可以为外部变量提供类型声明
 *
 * @param {globalLib.Options} options
 */
declare function globalLib(options: globalLib.Options): void

// 函数与命名空间的声明合并，这样就为 globalLib 添加了一些属性
declare namespace globalLib {
	const version: string;
	function doSomething(): void;
	// 接口约束 options  对象的结构
	// 可索引类型的接口，可以接受任意字符串属性
	// 范湖值 any
	interface Options {
		[key: string]: any;
	}
}

// // 接口可以放在外部，接口会全局暴露
// interface Options {
// 	[key: string]: any;
// }
