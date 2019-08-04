/*
 * @Author: Yx_Zou 
 * @Description: '14 | 泛型（2）：泛型类与泛型约束' 
 * @Date: 2019-08-01 17:21:06 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-04 16:35:12
 */

// 泛型约束类的成员
class LogTwo<T> {
	// // 泛型不能应用于类的静态成员 static
	// static run1(value: T) {
	// 	console.log(value);
	// 	return value;
	// }
	run(value: T) {
		console.log(value);
		return value;
	}
}
// 约束类型使用
// 实例化类,
let logX = new LogTwo<number>();
// 约束传入类型为 number
logX.run(1);

// 不约束类型使用，即设置默认
let logY = new LogTwo();
// 约束传入类型为 任意类型
logY.run(1);

// 泛型约束的概念

// 2.预定一个接口,设置 length 属性
interface Length {
	length: number;
}
// 3.T 属性继承 Length 接口，约束了类型 T，length 属性。
// 即设置了参数不管什么类型，都需具有 length 属性
function logLength<T extends Length>(value: T): T {
	// 1.类型 T 不存在 length 属性，这里需要用到类型约束的概念
	console.log(value, value.length);
	return value;
}
// 比如数组
logLength([ 1 ]);
// 字符串
logLength('11211');
// Json 对象
logLength({ length: 1 });
