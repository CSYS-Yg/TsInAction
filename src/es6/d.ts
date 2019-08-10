// es6 语法，混用 commonJs 时设置其顶级导出
export = function() {
	console.log("I'm default");
	// 如果导出其他变量，合并成一个对象
};

// // 设置顶级导出后，无法在配置其他导出
// export let a = 1
