/*
 * @Author: Yx_Zou 
 * @Description: '引入 JQuery 库（UMD 类库）' 
 * @Date: 2019-08-13 14:54:38 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-13 16:43:29
 */
// 安装 JQuery，npm i jquery
// 安装 JQuery 类型声明包，npm i @types/jquery -D （ -D 表示开发依赖）

// 模块化引用 Jqurey
import $ from 'jquery';

// 使用
$('.app').css('color', 'red');
// global-lib.js，全局类库
globalLib({ x: 1 });

// module-lib.js，模块类库
import moduleLib from './module-lib';
moduleLib({ x: 2 });

// umd-lib.js，模块引入
import umdLib from './umd-lib';
umdLib.doSomething();
// // 全局引用
// umdLib.doSomething();

// 模块插件
// 安装 moment，npm i moment
// 导入 moment
import m from 'moment';
// 给 moment 自定义一些方法
// 使用 declare 处理

declare module 'moment' {
	export function myFunction(): void;
}
// 添加成功
m.myFunction = () => {};

// 全局插件
// 使用 declare global {}
declare global {
	namespace globalLib { function doAnything(): void; }
}
// 这种会对全局文件产生依赖，不建议使用
globalLib.doAnything = () => {};
