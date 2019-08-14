/*
 * @Author: Yx_Zou 
 * @Description: '28 | 配置tsconfig.json（3）：工程引用 - common 下存放前后端一些公用的代码' 
 * @Date: 2019-08-15 00:50:44 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-15 00:51:54
 */

export function getTime() {
	let time = new Date();
	return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
}
