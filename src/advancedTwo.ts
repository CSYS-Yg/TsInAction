/*
 * @Author: Yx_Zou 
 * @Description: '16 | 类型检查机制（2）：类型兼容性' 
 * @Date: 2019-08-05 13:44:04 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-05 16:14:57
 */

// X 兼容 Y ：X（目标类型）= Y （源类型）
/**
 * tsconfig.json 配置 "strictNullChecks": false 后
 * 字符型是兼容 null 类型的
 * null 类型是字符型的子类型
 */
let s: string = 'x';
s = null;

// 接口兼容性
interface X {
	// 定义接口 X
	a: any;
	b: any;
}
interface Y {
	// 定义接口 Y
	a: any;
	b: any;
	c: any;
}
// 赋值 x1 y1
let x1: X = { a: 1, b: 2 };
let y1: Y = { a: 1, b: 2, c: 3 };

// x1 y1 是否能够互相赋值
x1 = y1; // 可以
// y1 = x1; // 不行

// 结论
// x1 类型可以兼容 y1 类型
// Ts 类型检查原则，鸭式变形法

// 总结
// 源类型必须具备目标类型的必要属性，就可以进行赋值

// 口诀
// 接口之间相互兼容时，成员少的会兼容成员多的

// 函数兼容性
// 判断函数是否兼容，通常发生在两个函数互相赋值的情况下
// 举例：函数作为参数的情况下

// 定义函数类型（ Handler：目标类型）
type Handler = (a: number, b: number) => void;
// 定义高阶函数（ 传入的参数 handler：源类型）
function hof(handler: Handler) {
	return handler;
}

// 目标函数兼容源函数，需要同时满足 3 个条件

// 1) 参数个数（目标函数参数的个数一定要多于源函数的参数个数）
// 一个参数
let handler1 = (a: number) => {};
hof(handler1); // 可以传递
// 三个参数
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2); // 不可以传递

// 固定参数、可选参数和剩余参数

// 固定参数
let a1 = (p1: number, p2: number) => {};
// 可选参数
let b1 = (p1?: number, p2?: number) => {};
// 剩余参数
let c1 = (...args: number[]) => {};

// 固定参数兼容可选参数与剩余参数
a1 = b1;
a1 = c1;

// 可选参数不兼容固定参数和剩余参数
// 可配置 tsconfig.json 中 "strictFunctionTypes": false 开启其兼容
b1 = a1; // 报错
b1 = c1; // 报错

// 剩余参数兼容固定参数与可选参数
c1 = a1;
c1 = b1;

// 2） 参数类型（参数类型必须要匹配）

// 基础类型参数
let handler3 = (a: string) => {};
// hof(handler3); // 不可以传递

// 对象类型参数
interface Point3D {
	x: number;
	y: number;
	z: number;
}

interface Point2D {
	x: number;
	y: number;
}
// 此时函数参数个与函数类型都是相同的
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};

// 查看兼容情况
p3d = p2d; // 兼容
p2d = p3d; // 不兼容

// 3） 返回值类型（Ts 要求目标函数的返回值类型必须与源函数的返回值类型相同或者为其子类型）
let f1 = () => ({ name: 'Alice' });
let j1 = () => ({ name: 'Alice', location: 'Beijing' });
f1 = j1; // 兼容,f1 返回值类型是 j1 类型的子类型
// j1 = f1; // 不兼容
// 成员少的兼容成员多的

// 函数重载兼容
// 重载列表（目标函数）
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
// 重载函数的具体实现（源函数）
function overload(a: any, b: any): any {}
// // 返回值不同（不兼容）
// function overload(a: any, b: any): string { }
// // 新增参数（不兼容）
// function overload(a: any, b: any, c: any): any { }

// 枚举类型的兼容
enum Fruit {
	Apple,
	Banana
}
enum Color {
	Red,
	Yellow
}
// 枚举类型与 number 类型是完全兼容的
let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;

// 枚举类型之间是完全不兼容的
// let color: Color.Red = Fruit.Apple;

// 类兼容性
class A {
	// 构造函数
	constructor(p: number, q: number) {}
	id: number = 1;
	// // 私有成员
	// private name: string = '';
}
class B {
	// 静态成员
	static s = 1;
	// 构造函数
	constructor(p: number) {}
	id: number = 2;
	// // 私有成员
	// private name: string = '';
}
// 创建实例
let aa = new A(1, 2);
let bb = new B(1);
// 注意，类中的构造函数与静态成员时不做比较的
// 当类中存在私有成员时，它们是互相不兼容的，只有父类与子类可以兼容
aa = bb;
bb = aa;

// 父子类,父类与子类可以兼容
class D extends A {}
let dd = new D(1, 2);
aa == aa;
dd == aa;

// 泛型兼容性
// 当类型参数被接口成员使用时，才会影响其兼容性
interface Empty<T> {
	// 类型参数被接口成员使用
	value: T;
}
// 当类型参数被接口成员使用时，才会影响其兼容性
// let obj3: Empty<number> = {};
// let obj5: Empty<string> = {};
// // 互相不兼容
// obj3 = obj5;
// obj5 = obj3;

// 泛型函数兼容性
let log2 = <T>(x: T): T => {
	console.log('x');
	return x;
};
let log3 = <U>(y: U): U => {
	console.log('y');
	return y;
};
// 如果两个函数的定义相同，但是没有指定类型参数，那么他们之间也是相互兼容的
log2 = log3;
log3 = log2;
