/*
 * @Author: Yx_Zou 
 * @Description: '05 | 基本类型 和 06 | 枚举类型' 
 * @Date: 2019-07-23 23:18:38 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-25 16:43:11
 */

// 原始类
/**
 * TS 变量的数据类型不可以被改变
 */
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';
// str=123 报错

// 数组
let arr1: number[] = [ 1, 2, 3 ];
// 只能赋值定义好的赋值类型 比如定义类型为 number
let arr2: Array<number> = [ 1, 2, 3 ];
// let arr2: Array<number> = [ 1, 2, 3,'4']; 报错
// 不同的数据类型定义，联合类型(中间用 “ | ” 链接)
let arr3: Array<number | string> = [ 1, 2, 3, '4' ];

// 元组，一种特殊的类型，限定了数组的类型与个数
let tuple: [number, string] = [ 0, '1' ];
// 可以使用数组方法 push()，强烈不建议使用
/* tuple.push(2); //未报错
console.log(tuple); // [0,"1",2]
tuple[2]; //报错。实际存在，但是无法越界访问。 */

// 函数
// let add1 = (x, y) => x + y; // 报错
/**
 * 需要制定函数参数注解
 * :number 规定函数返回值类型，一般不设置，可以省略，ts 存在类型推断
 *  */
let add = (x: number, y: number): number => x + y; // 正确定义
// 函数定义
let comput: (x: number, y: number) => number;
comput = (a, b) => a + b;

// 对象
// 错误定义，只是定义 obj 为 object类型，但内部属性并未定义
let obj: object = { x: 1, y: 2 };
// 错误定义，修改对象属性
//obj.x = 3; //报错，在 Ts 中不允许这样修改。因为只是定义 obj 为 object类型，但内部属性并未定义
// 正确定义
let obj1: { x: number; y: number } = { x: 1, y: 2 };
// 正确定义，修改对象属性
obj1.x = 3; // 修改成功

// symbol，symbol的含义就是具有唯一的值
let s1: symbol = Symbol();
let s2 = Symbol();
// 不同定义方式是不相等的
console.log(s1 === s2); // false

// undefined，null
/**
 * 可以将变量类型定义 undefined ，但是一旦定义就无法赋值其他类型，只能是它本身
 * Ts中 undefined 与 null 是其它类型的子值，可赋值给其他变量
 * 但需配置 tsconfig.json 内 "strictNullChecks":false,才能开启允许赋值
 */

let un: undefined = undefined;
// let un1: undefined = 1; //报错
let nu: null = null;
// 严格上，允许赋值还需定义联合类型
let numx: number | undefined | null = 123;
numx = undefined;
console.log(numx); // undefined
numx = null;
console.log(numx); // null

// void ,表示一个没有任何返回值的函数
let noReturn = () => {};

// any
/** 
 * 在 Ts 中如果不指定函数的任何类型，则默认为是 any 类型
 * 可以任意赋值
 * 和 js 无区别
 * */
let x;

// never
/**
 * 表示永远不会又返回值的类型
 * 一种是抛出异常
 * 一种是死循环
 */
let error = () => {
	throw new Error('error');
};
let endless = () => {
	while (true) {}
};

// 枚举类型
/** 
 * 定义：一组有名字的常量集合，类似手机通讯录
 * 两种：数字枚举和字符串枚举
*/
// 数字枚举
/**
 * 可以用名字与值来索引
 * 原理：反向映射。key 与 value 互相成为对方的值与名称
 */
enum Role {
	Reporter = 1,
	Developer,
	Maintainer,
	Owner,
	Guest
}
// 默认初始值是 0，如果规定初始值为 1，则后面对应成员会相对应的递增
console.log(Role.Reporter); // 1
console.log(Role.Guest); // 5
console.log(Role[2]); // Developer

// 字符串枚举
// 不构成反向映射，只能用其名字获取
enum Message {
	Success = '恭喜你，成功了',
	Fail = '抱歉，失败了'
}

// 异构枚举,即数字枚举与字符串枚举的混用
// 一般不建议使用
enum Answer {
	N,
	Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2 // 报错，枚举的只读类型
enum Char {
	// const ,在编译时就会计算玩结果，3种赋值情况
	a, // 无初始值
	b = Char.a, // 对已有枚举成员的引用
	c = 1 + 3, // 常量表达式
	// computed，需要被计算的成员。不会编译时计算，保留到程序的执行阶段计算
	d = Math.random(),
	e = '123'.length
	// 在 computed 后的成员，一定要有一个初始值
	//f //报错
}

// 常量枚举
/**
 * 编译完成后会被移除
 * 使用场景：当我们不需要对象，而需要一个对象的值的时候使用，减少编译环境中的代码
 */
const enum Month {
	Jan,
	Feb,
	Mar
}
let month = [ Month.Jan, Month.Feb, Month.Mar ];
console.log(month); // [0,1,2]

// 枚举类型
enum E {
	a,
	b
}
enum F {
	a = 0,
	b = 1
}
enum G {
	a = 'apple',
	b = 'banana'
}

let e: E = 3;
let f: F = 3;
//e === f; // 不同的枚举类型无法比较

let e1: E.a = 1;
let e2: F.b;
let e3: E.a = 1;
//e1 === e2 // 不同的枚举类型无法比较
e1 === e3; // 相同的可以比较

let g1: G = G.b;
let g2: G.a = G.a; // 只能赋值给他自身
