// 三级现制定，引用 a.ts
/// <reference path="./a.ts" />
/*
 * @Author: Yx_Zou 
 * @Description: '23 | 使用命名空间 - 拆分' 
 * @Date: 2019-08-10 17:12:38 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-12 14:31:30
 */
/**
 * 命名空间 Shape 分布在 a.ts 与 b.ts 两个文件中
 * 共享一个命名空间
 */
namespace Shape {
	export function square(x: number) {
		return x * x;
	}
}

// 命名空间的访问
console.log(Shape.cricle(1));
console.log(Shape.square(1));

// 命名空间的别名，使用 import
// 这里的 import 与模块中的 import 无任何关系
import cricle = Shape.cricle;
console.log(cricle(2));
