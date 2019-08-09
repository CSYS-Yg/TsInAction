/*
 * @Author: Yx_Zou 
 * @Description: '12 | 类与接口的关系' 
 * @Date: 2019-07-30 13:23:27 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-30 15:54:32
 */

// 类类型接口,约束类成员属性，以及类型
/**
 * 接口只能约束类的公有成员
 * 接口也无法约束类的构造函数
 */
interface Human {
	// //接口无法约束类的构造函数
	// new (name: string): void;
	name: string;
	eat(): void;
}

// Human 类实现接口
class Asian implements Human {
	constructor(name: string) {
		this.name = name;
	}
	// 类实现接口时，必须实现接口中所有声明成员
	name: string;
	// // 接口只能约束类的公共成员
	// private
	eat() {}
	// 类可以定义自己的属性
	sleep() {}
}

// 接口的继承

//接口继承接口
/**
 * 接口可以和类一样，实现相互继承，一个接口可以继承多个接口
 * 多个接口继承，使用 “，” 号分割
 */

// 定义接口 Man 继承 Human
interface Man extends Human {
	run(): void;
}

// 定义接口 Child
interface Child {
	cry(): void;
}
// 定义接口 Boy 继承 Man Child
interface Boy extends Man, Child {}

// 定义对象，实现 Boy 接口定义
/**
 *  这里要实现 4 个属性，分别继承自 Human，Man，Child
 */
let boy: Boy = {
	name: '',
	run() {},
	eat() {},
	cry() {}
};

// 接口继承类，
/** 
 * 相当于接口把类的成员都抽象了出来，即只有类的具体结构，但没有类的实现
 */

// 定义类 Auto
class Auto {
	state = 1;
	//定义私有成员
	// private state2 = 0
}

// 定义接口 AutoInterface 继承类 Auto
// 接口抽离类的成员时，不仅抽离了公共成员，还抽离的私有成员与受保护成员
interface AutoInterface extends Auto {
	// 内部继承了 state
}

// 定义类实现 AutoInterface 接口
// C 错误实现接口,因为 接口只能约束类的公有成员
class C implements AutoInterface {
	// 声明继承接口的成员
	state = 1;
}

//定义类 Bus 继承类 Auto 并实现接口
/**
 * @class Bus
 * @extends {Auto}
 * @implements {AutoInterface}
 */
class Bus extends Auto implements AutoInterface {}
