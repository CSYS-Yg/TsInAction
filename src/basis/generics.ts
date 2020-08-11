/*
 * @Author: Yx_Zou 
 * @Description: '13 | 泛型（1）：泛型函数与泛型接口' 
 * @Date: 2019-08-01 16:40:58 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-04 16:35:13
 */

// 实现一个打印字符串或字符数组的类型，且返回相同类型

// 重载实现
// 联合实现

// any 类型实现
function log(value: any): any {
	// 弊端：无法看出该方法类型的约束关系。
	// 即传入 string 类型，返回 number 类型也不会报错
	console.log(value);
	return value;
}

// 泛型实现
/**
 * T 表示传入什么类型，就返回什么类型，形成类型约束
 *
 * @template T
 * @param {T} value
 * @returns {T}
 */
// 泛型函数
function log1<T>(value: T): T {
	console.log(value);
	return value;
}
// 调用方式

// 直接规定类型
log1<string[]>(['a', 'b']);

// 利用 TS 类型推断
log1(['a', 'b']);

// 泛型定义函数类型
type log2 = <T>(value: T) => T;
/**
 * let mylog 定义变量
 * : log2 定义变量类型
 * log1 定义具体实现
 */
let mylog: log2 = log1;

// 泛型接口

// 约束内部成员
interface log3 {
	<T>(value: T): T;
}

// 约束接口所有成员
// 不设置默认类型
interface log4<T> {
	(value: T): T;
}

// 使用注意 ：当泛型变量约束整个接口后，实现时必须指定一个类型
// 指定为 number 类型
let mylog1: log4<number> = log;
// mylog1 必须传入 number 类型
mylog1(1);

// 约束接口所有成员
// 设置默认类型
interface log5<T = string> {
	(value: T): T;
}
// 若不指定类型，则默认为 string 类型
let mylog2: log5 = log;
// mylog1 必须传入 string 类型
mylog2('1');
