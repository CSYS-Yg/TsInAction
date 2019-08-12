/*
 * @Author: Yx_Zou 
 * @Description: '23 | 使用命名空间 - 定义' 
 * @Date: 2019-08-10 17:12:41 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-12 14:32:43
 */

/**
  *  使用 namespace 关键字
  */
namespace Shape {
	// 在这个空间类，可以定义任意多的变量
	// 这些变量 只在 Shape 命名空间下可见
	const pi = Math.PI;
	// 使用 export 导出至全局可见
	export function cricle(r: number) {
		return pi * r ** 2;
	}
}
