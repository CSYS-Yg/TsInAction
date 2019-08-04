/*
 * @Author: Yx_Zou 
 * @Description: '15 | 类型检查机制（1）：类型推断' 
 * @Date: 2019-08-04 16:40:45 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-04 18:09:04
 */
// 类型推断

// 基础类型推断（从右到左）

// 发生在初始化变量时的类型推断

// 推断 a 为 any 类型
let a;

// 推断 b 为 number 类型
let b = 1;

// 推断 c 为以 any 类型为元素的数组类型
let c = [];

// 推断 d 为 number 类型的数组
let d = [ 1 ];

// 发生在设置函数参数时的类型推断

// 指定 x 默认参数为 1,推断 x 为 number 类型
let h = (x = 1) => {};

// 发生在确定函数返回值的类型推断

// 推断 i 为 number 类型
let i = (x = 1) => x + 1;

// 最佳通用类型推断（从右到左）

// 推断 j 为 number|null 的联合类型
// 配置 tsconfig.json 中 "strictNullChecks": false,可开启 number 兼容 null 类型，即推断 j 为 number 类型。
let j = [ 1, null ];

// 基础类型推断和最佳通用类型推断都是从右向左的推断，即根据左侧表达式的值，来推断出表达式的类型

// 上下文类型推断（从左到右）
// 通常发生在一个事件处理中

// 根据左边的绑定推断 event 的类型为 KeyboardEvent(键盘事件)
window.onkeydown = (event) => {
	// 同时也会知道 event 中的属性是什么，即 event 中不存在鼠标事件属性 button
	// console.log(event.button); // 报错
};

// 类型断言

// 当 Ts 推断类型不符合你的预期，且你更加了解你的代码时使用

interface Foo {
	bar: number;
}

// foo 中不存在 bar 属性，使用类型断言指定为 Foo 接口内属性
// 但不建议滥用
let foo = {} as Foo;
// 当 foo.bar = 1 注释时，foo 就不包含 bar 属性，不会错误提示，但会引起问题
// foo.bar = 1;

// 一般正确使用接口是,这样不会出现属性遗漏
let foo1: Foo = {
	bar: 1
};
