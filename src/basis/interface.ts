import { version } from 'webpack';

/*
 * @Author: Yx_Zou 
 * @Description: '08 | 接口（2）：函数类型接口' 
 * @Date: 2019-07-25 15:34:46 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-25 16:42:51
 */
// 函数类型接口

//直接定义函数
function addx(x: number, y: number) {
	return x + y;
}

// 用变量定义函数
// let addx: (x: number, y: number) => number;

// 用接口定义函数
/**
 *  addx 接口名称 
 *  :number 返回值
 *  等价于 用变量定义函数类型
 */
// interface addx {
// 	(x: number, y: number): number;
// }

// 更简洁的函数定义
// 类型别名，使用 type 关键字
type addx = (x: number, y: number) => number;

// 混合类型接口
/**
 * 一个接口既可以定义一个函数，
 * 也可以像对象一样，拥有属性和方法
 */

// 混合类型接口定义
interface Lib {
	(): void;
	version: string;
	doSomething(): void;
}

// 使用函数定义
function getLib() {
	// 实现这个接口
	let lib: Lib = (() => {}) as Lib; // 函数断言
	lib.version = '1.0';
	lib.doSomething = () => {};
	return lib;
}

// 使用函数实例
// 实例一
let lib1 = getLib();
lib1();
lib1.doSomething();
// 实例二
let lib2 = getLib();
