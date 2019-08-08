/*
 * @Author: Yx_Zou 
 * @Description: '' 
 * @Date: 2019-08-08 15:05:26 
 * @Last Modified by: Yx_Zou 
 * @Last Modified time: 2019-08-08 15:05:26 
 */

// 交叉类型
interface DogInterface {
	run(): void;
}

interface CatInterface {
	jump(): void;
}
// 交叉类型
/**
 *  使用 ‘ & ’ 链接
 *  注意：交叉类型取的是类型之间的并集
 */
let pet: DogInterface & CatInterface = {
	run() {},
	jump() {}
};

// 联合类型

// 基础联合类型
let a2: string | number = 1; // 可以是 string 类型 也可以是 number 类型

// 自变量类型 / 自变量联合类型

// 字符串
let b2: 'a' | 'b' = 'a'; // 只能赋值 a 或者 b
// b2 = 'c'; // 报错

// 数字
let c2: 1 | 2 | 3 = 3; // 只能赋值 1 2 3

// 对象联合类型
class Dog2 implements DogInterface {
	run() {}
	eat() {}
}

class Cat2 implements CatInterface {
	jump() {}
	eat() {}
}

enum Master {
	Boy,
	Girl
}

function getPet(master: Master) {
	console.log(Master.Boy);
	// pet 被推断为 Dog2 与  Cat2 的联合类型
	let pet = master === Master.Boy ? new Dog2() : new Cat2();
	// 对象中需要注意：当联合类型中的类型不确认时，联合类型取的是其共有成员，也就是交集
	pet.eat();
	return pet;
}

// 一种模式：可区分的联合类型

/**
 * 本质：是结合联合类型和自变量类型的类型保护方法
 * 核心思想：一个类型如果是多个类型的联合类型，
 * 并且每个类型之间有一个公共属性，那么就可以凭借这个公共属性创建内容保护区块
 */

interface Square {
	kind: 'square';
	size: number;
}

interface Rectangle {
	kind: 'rectangle';
	width: number;
	height: number;
}
// 如果扩展新增接口
interface Circle {
	kind: 'circle';
	r: number;
}

// 类型别名，联合新接口 Circle
type Shape = Square | Rectangle | Circle;

// // 规定返回类型 : number ，Ts 就会检测 是否遗漏未判断的接口
// function area(s: Shape): number {
// 	switch (s.kind) {
// 		case 'square':
// 			// 区块保护
// 			return s.size * s.size;
// 		case 'rectangle':
// 			// 区块保护
// 			return s.width * s.height;
// 	}
// }

function area(s: Shape) {
	switch (s.kind) {
		case 'square':
			// 区块保护
			return s.size * s.size;
		case 'rectangle':
			// 区块保护
			return s.width * s.height;
		case 'circle':
			// 区块保护
			return s.r;
		// 默认执行方法
		default:
			// 该方法判断 s 是否是 never 类型，如果是，则代表所有判断均已覆盖，该分支则不会执行。
			// 如果不是，则代表有判断遗忘
			return ((e: never) => {
				throw new Error(e);
			})(s);
	}
}

// 此时 函数 area 并未做 circle 判断，但是不会报错，但是会存在问题
console.log(area({ kind: 'circle', r: 1 })); // undefined
