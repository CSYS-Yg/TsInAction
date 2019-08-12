/*
 * @Author: Yx_Zou 
 * @Description: '24 | 理解声明合并' 
 * @Date: 2019-08-12 13:50:16 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-12 14:42:09
 */

// 接口声明合并
// 当定义好两个同名接口后，就会合并成一个接口
// 当前模块若是全局模块，即是不在同一个文件中，也会发生接口的合并
interface A1 {
	x: number;
	// 接口中的非函数成员，要求保证它的唯一性；如果不唯一，必须保证类型相同
	y: number; // 可以
	// z: string;  // 报错

	// 接口中的函数成员，每一个函数都会被声明为一个函数重载
	foo(bar: number): number;

	// 例外：如果函数的参数是一个字符串字面量，那么这个申明的排序就会提到整个申明的最顶端
	foo(bar: 'a'): number;
}
interface A1 {
	y: number;
	foo(bar: string): string;
	foo(bar: number[]): number[];
	foo(bar: 'b'): number;
}

// 当变量 a5 规定类型为 A1 时，那么这个变量就需要具备这个接口的所有成员
let a5: A1 = {
	x: 1,
	y: 1,
	// 接口中的定义视为重载列表，实现时，须指定一个更为宽泛的类型
	foo(bar: any) {
		return bar;
	}
};

// 命名空间与函数的声明合并
// 定义函数
function Lib() {}
// 定义命名空间
namespace Lib {
	// 导出变量，这样相当于给 Lib 函数增加了一个属性
	export let version = '1.0';
}

console.log(Lib.version); // 1.0

// 命名空间与类的声明合并
class C1 {}
namespace C1 {
	// 导出变量，这样相当于给 C1 类增加了一个静态属性
	export let state = '1.0';
}
console.log(C1.state); // 1

// 命名空间与枚举声明合并
enum Color1 {
	Red,
	Yellow,
	Bule
}
namespace Color1 {
	// 导出方法，这样相当于给枚举 Color1 新增了一个方法
	export function mix() {
	}
}
console.log(Color1); // 会多出 mix() 方法
