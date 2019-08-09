/*
 * @Author: Yx_Zou 
 * @Description: '07 | 接口（1）：对象类型接口' 
 * @Date: 2019-07-24 14:29:39 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-07-25 16:41:15
 */

// 对象类型接口定义
// interface 定义 list 接口
interface List {
	// 接口成员
	id: number;
	// readonly 只读属性，无法修改
	readonly name: string;
	// ? 可选属性，即该成员可存在可不存在
	age?: Number;
	// 含义：用任意的字符串，去索引 List 可以得到任意的结果。List就可以支持多属性了
	// [x: string]: any;
}

// interface 定义 Result 接口
interface Result {
	data: List[];
}
// 定义渲染函数
function render(result: Result) {
	result.data.forEach((value) => {
		console.log(value.id, value.name);
		if (value.age) {
			console.log(value.age);
		}
	});
}
// 默认情况
let result = {
	data: [ { id: 1, name: 'A' }, { id: 2, name: 'B', age: 2 } ]
};
render(result);

//传过来的数据有其他字段
/**
 * 不会报错，传入的对象满足接口的必要条件，就是被允许的
 */
// let result = {
// 	data: [ { id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' } ]
// };
// render(result);

// 但是直接传递值就会进行类型检查
// render({
// 	data: [ { id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' } ]
// }); // 报错
/**
 * 饶过类型检查的三个方法
 * 1.如上,直接赋值 result
 * 2.类型断言
 * 3.字符串索引签名
 */
// 类型断言
// 明确的告诉编译器这个类型就是 Result
// 方式一 加上 as Result
// render({
// 	data: [ { id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' } ]
// } as Result);
// 方式二 加上 <Restlt>。容易产生歧义。
// 两种是等价的，但是建议使用方式一
// render(<Result>{
// 	data: [ { id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' } ]
// });
// 方式三
// render({
// 	data: [ { id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' } ]
// });

// 以上对成员固定的接口定义，以下是对成员不固定的接口定义

// 可索引类型接口
// 数字索引接口
interface StringArray {
	// 含义：用任意的 数字 或 字符串 索引 StringArray 都会得到一个 string 值，类似字符串数组
	[index: number]: string;
}
let chars: StringArray = [ '1', '2', '3' ];

// 字符串索引接口
interface Names {
	// 含义：用任意的 字符串 索引 Names 都会得到一个 string 值
	[x: string]: string;
	//但是 两种索引 能进行混用
	[z: number]: string;
	// 无法再声明 number 成员
	// y: number; //不允许
	// // 如果 返回属性是 number，则必须兼容 number 类型
	// [z: string]: any;
	// [r: number]: number;
}
