/*
 * @Author: Yx_Zou 
 * @Description: '类型检查机制（3）：类型保护' 
 * @Date: 2019-08-05 17:01:55 
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-05 17:45:55
 */

// // instanceof类型保护. instanceof：判断某个实例是否属于某个类
// enum Type {
// 	Strong,
// 	Week
// }

// class Java {
// 	helloJava() {
// 		console.log('hello Java');
// 	}
// }

// class JavaScript {
// 	helloJavaScript() {
// 		console.log('hello JavaScript');
// 	}
// }

// function getLanguage(type: Type) {
// 	let lang = type === Type.Strong ? new Java() : new JavaScript();
// 	if (lang instanceof Java) {
// 		// 如果 lang 是 java 类，在这个区域内，Ts 保证该区域内方法是 Java 实例
// 		lang.helloJava();
// 	} else {
// 		// 在这个区域内，Ts 保证该区域内方法是 JavaScript 实例
// 		lang.helloJavaScript();
// 	}
// 	return lang;
// }

// // in 类型保护. in:判断某个属性是否属于某个对象
// enum Type {
// 	Strong,
// 	Week
// }

// class Java {
// 	helloJava() {
// 		console.log('hello Java');
// 	}
// 	java: any;
// }

// class JavaScript {
// 	helloJavaScript() {
// 		console.log('hello JavaScript');
// 	}
// 	javaScript: any;
// }

// function getLanguage(type: Type) {
// 	let lang = type === Type.Strong ? new Java() : new JavaScript();
// 	// in
// 	if ('java' in lang) {
// 		// 类型保护区块
// 		lang.helloJava();
// 	} else {
// 		// 类型保护区块
// 		lang.helloJavaScript();
// 	}
// 	return lang;
// }

// // typeof 类型保护. typeof:判断一种基本类型
// function getLanguage(x: string | number) {
// 	// typeof
// 	if (typeof x === 'string') {
// 		// 如果 x 是 string ，则这个区块一定是 string 保护区块
// 		x.length; // 拥有 string 类型属性
// 	} else {
// 		// 如果 x 不是 string ，则这个区块一定是 number 保护区块
// 		x.toFixed(2); // 拥有 number 类型属性
// 	}
// }

// 创建函数判断函数保护类型
enum Type {
	Strong,
	Week
}

class Java {
	helloJava() {
		console.log('hello Java');
	}
}

class JavaScript {
	helloJavaScript() {
		console.log('hello JavaScript');
	}
}

// 自定义判断函数
// 特殊函数返回值  : lang is Java 叫做 类型尾词
function isJava(lang: Java | JavaScript): lang is Java {
	return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type) {
	let lang = type === Type.Strong ? new Java() : new JavaScript();
	if (isJava(lang)) {
		lang.helloJava();
	} else {
		lang.helloJavaScript();
	}
	return lang;
}
