/*
 * @Author: Yx_Zou 
 * @Description: '22 | ES6与CommonJS的模块系统 - node 模块导入' 
 * @Date: 2019-08-09 18:22:09 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-10 16:41:21
 */

// 模块导入
let c3 = require('./a.node');
let c4 = require('./b.node');

// 使用非 es6 导入

let c5 = require('../es6/a');

// es6 导入 c5 是一个函数
// c5(); // 非额 es6导入，运行时报错
// console.log(c5);
// 正确调用
c5.default(); // I'm default

// console.log(c3);
// console.log(c4);

// 兼容导入

// 语法 import c6 =
import c6 = require('../es6/d');

// es6 导入
import c7 from '../es6/d';

// 可以直接使用 c6
c6(); // I'm default
