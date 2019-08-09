/*
 * @Author: Yx_Zou 
 * @Description: '21 | 高级类型（4）：条件类型' 
 * @Date: 2019-08-09 16:51:11 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-09 17:17:10
 */

 // 条件类型表达式 T extends U ？X ： Y

 // 嵌套条件类型
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" : "object";
//  类型为 string 
type T1 = TypeName<string>
//  类型为 object 
type T2= TypeName<string[]>
 
// 分布式条件类型
// （A | B）extends U ？X ：Y
// 拆分为（A extends U ？X ：Y）|（B extends U ？X ：Y）
// 为类型 string | object 的联合类型
type T3 = TypeName<string | string[]>

// 实现类型的过滤
type Diff<T, U> = T extends U ? never : T  // T类型是否能赋值给 U类型

type T4 = Diff<"a" | "b" | "c", "a" | "e"> 
// diff 被拆解为  diff<"a","a" | "e"> | diff<"b","a" | "e"> | diff<"c","a" | "e">
// 输出 never | "b" | "c"
// 所以 T4 类型为 "b" | "c"

// 过滤 undefined | null 类型
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>
// T5 的类型就是 string | number

// 官方内置类型
// Exclude < T, U > // 从类型 T 中过滤掉可以赋值给 U 的类型
// NonNullable < T > // 过滤掉类型 T 中的 undefined | null 类型
// Extract < T, U > // 从类型 T 中抽取出可以赋值给 U 的类型

type T6 = Extract<"a" | "b" | "c", "a"> // T6类型为 a

// ReturnType< T > //获取函数返回值的类型
type T7 = ReturnType<()=>string>