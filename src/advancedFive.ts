/*
 * @Author: Yx_Zou 
 * @Description: '19 | 高级类型（2）：索引类型' 
 * @Date: 2019-08-08 16:15:05 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-08 18:08:17
 */
// 未添加类型约束
// let obj2 = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// };

// function getValue(obj2: any, keys: string[]) {
// 	return keys.map((key) => obj2[key]);
// }

// console.log(getValue(obj2, [ 'a', 'b' ])); // [1 ,2]
// // TS 编译并未报错，因为没有进行类型约束。添加类型约束需要用到索引类型
// console.log(getValue(obj2, [ 'd', 'f' ])); // [undefined ,undefined],

// 使用索引,添加类型约束
let obj2 = {
	a: 1,
	b: 2,
	c: 3
};
// 添加约束 keys 内的属性，一定是 obj2 的类型
function getValue<T, K extends keyof T>(obj2: T, keys: K[]): T[K][] {
	return keys.map((key) => obj2[key]);
}
console.log(getValue(obj2, [ 'a', 'b' ])); // [1 ,2]
// TS 编译报错，有类型约束。
// console.log(getValue(obj2, [ 'd', 'f' ])); // [undefined ,undefined],

// 索引类型

// 第一个概念：索引类型的查询操作符 keyof T
// 含义：表示类型 T 的所有公共属性的自变量的联合类型
interface Obj {
	a: number;
	b: string;
}
// key 的类型就是 a|b 的联合类型
let key: keyof Obj;

// 第二个概念：索引访问操作符 T[K]
// 含义：表示对象 T 的属性 K 所有代表的类型
// interface Obj {
// 	a: number;
// 	b: string;
// }
// value 的类型就是  number
let value: Obj['a'];

// 第三个概念：泛型约束 T extrnds U
// 含义：表示泛型变量可以通过继承某个类型获得某个属性
