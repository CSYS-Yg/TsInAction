/*
 * @Author: Yx_Zou 
 * @Description: '20 | 高级类型（3）：映射类型' 
 * @Date: 2019-08-08 18:09:09 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-08 18:55:54
 */

interface Obj2 {
	a: string;
	b: number;
	c: boolean;
}
//  映射类型
// 头态，只会作用于 Obj2 的属性，而不会引入新的属性

// Readonly 映射接口,接口所有属性为只读
type ReadonlyObj2 = Readonly<Obj2>;

// Partial 映射接口 ,接口所有属性为可选
type PartialObj2 = Partial<Obj2>;

// Pick 映射接口，抽取原接口的子集生成新的接口
// 'a','b' 是原接口的子集
type PickObj2 = Pick<Obj2, 'a' | 'b'>;

// 会创建性的属性
// Record 映射接口 ，会创建性的属性
// 'x','y' 是新增属性
type RecordObj2 = Record<'x' | 'y', Obj2>;
