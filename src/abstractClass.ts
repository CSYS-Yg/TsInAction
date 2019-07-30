/*
 * @Author: Yx_Zou 
 * @Description: '11 | 类（2）：抽象类与多态' 
 * @Date: 2019-07-29 16:04:31 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-29 16:13:01
 */

// 抽象类
/**
 * 关键字 abstract
 * 只能被继承，无法被实例化的类
 */

// 创建抽象类
abstract class Animal {
	eat() {
		console.log('eat');
	}

	// 抽象方法
	/**
	 * 好处：明确知道，此类可以有其他的实现。如:在子类中定义此方法作用，方便扩展
	 */
	abstract sleep(): void;
}

// // 抽象类实例化对象
// let animal = new Animal(); // 报错，无法被实例化

// 继承抽象类
class Dog1 extends Animal {
	constructor(name: string) {
		super();

		this.name = name;
	}
	name: string;
	run() {}
	// 子类定义抽象方法
	sleep() {
		console.log('sleepDog1');
	}
}

let dog1 = new Dog1('wangwang');
dog1.eat(); // eat
// 使用抽象方法
dog1.sleep(); // sleep

// 多态
/**
 * 定义：在父类中定义抽象方法，该方法被多个子类继承并定义了不同的实现，
 * 在运行时根据不同的对象，执行不同的操作，这样就实现了运行时的绑定
 */
// 多态的实现
class Cat extends Animal {
	sleep() {
		console.log('sleepCat');
	}
}
let cat = new Cat();
// 两种子类实例的数组
let animals: Animal[] = [ dog1, cat ];
animals.forEach((i) => {
	// 此处 i 代表类的实例名
	i.sleep(); // sleepDog1 ， sleepCat
});

// Ts 特殊类型，this 类型
/** 
 * 作用：可以实现链式调用
 * 可以多态，这里的 this 可以是子类，也可以是父类
 */

class WorkFlow {
	step1() {
		return this;
	}
	step2() {
		return this;
	}
}
new WorkFlow().step1().step2();

class Myflow extends WorkFlow {
	next() {
		return this;
	}
}
// 保持了父类与子类之间，接口调用的连贯性
new Myflow().next().step1().next().step2();
