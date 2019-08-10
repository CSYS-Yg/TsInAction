/*
 * @Author: Yx_Zou 
 * @Description: '22 | ES6与CommonJS的模块系统 - Es6 导入' 
 * @Date: 2019-08-09 18:00:55 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-09 18:13:28
 */
import { a, b, c } from './a'; // 批量导入
import { P } from './a'; // 导入接口
import { f as F } from './a'; // 导入时起别名
import * as All from './a'; // 导入模块中的所有成员，绑定在 All 上
import myFunction from './a'; // 不加 {} ，导入默认

console.log(a, b, c); // 1,2,3

let p: P = {
	x: 1,
	y: 1
};
// 打引导入 a 中所有变量，这里 TS 加上一个 default 属性
console.log(All);

// 可以直接执行
myFunction(); // I'm default
