/*
 * @Author: Yx_Zou 
 * @Description: '10 | 类（1）：继承和成员修饰符' 
 * @Date: 2019-07-26 16:08:32 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-26 17:30:56
 */

// Ts 类的基本实现
class Dog {
	// 与 ES 不同的是，构造函数参数添加类型注解
	constructor(name: string) {
		// 初始化
		this.name = name;
	}
	// // 添加 private 表示：这个构造函数无法被实例化，也无法继承
	// private constructor(name: string) {
	// 	// 初始化
	// 	this.name = name;
	// }

	// // 添加 protected 表示：这个构造函数无法被实例化，但是可以继承
	// protected constructor(name: string) {
	// 	// 初始化
	// 	this.name = name;
	// }

	// 与 ES 不同的是，成员属性添加类型注解
	name: string;
	// // 初始值
	// name: string = 'dog';
	// // 或者声明为可选属性
	// name?: string;

	// 默认方法，返回类型 viod
	run() {}

	// 声明私有成员
	private pri() {}

	// 声明受保护成员
	protected pro() {}

	// 声明只读属性,只读属性一定要初始化
	readonly legs: number = 4;

	// 声明静态属性
	static food: string = 'bones';
}

// 注意两个问题.第一个,无论在 ES 还是 TS 中，类成员属性都是实例属性，而不是原型属性。类成员的方法都是实例方法。
// 第二个，与 Es 不同的是，实例的属性必须具有初始值，或者在构造函数中初始化
// 内部属性只在实例上，不在原型上
console.log(Dog.prototype); // 打印原型，输出 {run: ƒ, constructor: ƒ}
// 打印实例
let dog = new Dog('wangwang');
console.log(dog); // Dog {name: "wangwang"}

// dog.pri() // 私有成员，实例无法调用
// dog.pro() // 受保护成员，实例无法调用
console.log(Dog.food); // bones
// console.log(dog.food); // 静态属性，无法通过实例名调用

// 类的继承
class Husky extends Dog {
	// 在参数 color 添加修饰符 ，这样 color 就是实例属性，下面的初始化，就可以简写了
	constructor(name: string, public color: string) {
		// es6 中规定，继承函数必须使用 super() 调用，super 代表父类的实例
		// 父类中的参数 name，子类中也一定要有
		super(name);
		this.pro(); // 受保护成员，子类可以访问
		// 注意 this 要在 super 调用后在调用
		this.color = color;
	}
	// color 类 Husky 自己的属性，也需要在构造函数中初始化
	// 简写 color
	// color: string;
}
console.log(Husky.food); //bones，静态属性可以被继承

// 类的修饰符
// public：类的公有成员（默认值）
// private：设置私有属性。只能在类内部使用，无法被类的实例与子类调用
// protected：设置成员保护属性。只能在类与类的子类中访问，无法在实例中访问
// 构造函数的参数也可以添加修饰符，作用：向参数自动添加实例的属性，能简写对参数定义
// static,设置类的静态成员，只能通过类名来调用
