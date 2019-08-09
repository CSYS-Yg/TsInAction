/*
 * @Author: Yx_Zou 
 * @Description: '09 | 函数相关知识点梳理' 
 * @Date: 2019-07-25 16:39:46 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-25 17:51:11
 */

// Ts 函数的四种定义方法

//直接定义
function add1(x: number, y: number) {
	return x + y;
}
//变量定义
let add2: (x: number, y: number) => number;

//类型别名
type add3 = (x: number, y: number) => number;
// 接口定义
interface add4 {
	(x: number, y: number): number;
}

// 知识点 1，Ts 中形参和实参必须一一对应
// add1(1) // 报错
// add1(1,2,3) // 报错

// 知识点 2，可选参数
function add5(x: number, y?: number) {
	console.log(y ? x + y : x);
}
add5(1); // 1;
add5(1, 2); // 3;

// // 必选参数不能位于可选参数之后
// function add6(x: number, y?: number,z: number) {
// 	console.log(y ? x + y : x);
// }

// 知识点 3，函数参数赋值默认值
function add6(x: number, y = 1, z: number, q = 2) {
	console.log(x + y + z + q);
}
// 注意，在必选参数前，默认值是不能省略的。必选参数后可以省略
// 含默认值参数可以传递 ‘undefined’

// add6(1); // 参数传递不够
add6(1, undefined, 2); // 6，必选参数后省略

// 知识点 4，函数参数传递个数不确定
/**
 * @param {number} x  // 参数
 * @param {...number[]} rest //多参数集合
 * @returns
 */
function add7(x: number, ...rest: number[]) {
	// 使用数组 reduce 求和
	return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add7(1, 2, 3, 4, 5)); // 15

// 函数重载
/**
 * 在静态语言中，重载含义是：如果两个函数名称相同，参数个数或者参数类型不同，就实现了一个函数重载
 * 好处：不需要为相似功能的函数，取不同的函数名称，提高了可读性
 */

// Ts 中的函数重载
// Ts 在重载查询 会查询定义的列表，如果出现率高的 类型 定义在前，会提高匹配效率
// 先定义函数声明列表
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
	let first = rest[0];
	if (typeof first === 'string') {
		return rest.join('');
	}
	if (typeof first === 'number') {
		return rest.reduce((pre, cur) => pre + cur);
	}
}

console.log(add8(1, 2, 3, 4, 5)); // 15
console.log(add8('a', 'b', 'c', 'd', 'e')); // 'abcde'
