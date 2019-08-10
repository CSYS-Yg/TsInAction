/*
 * @Author: Yx_Zou
 * @Description: '23 | 使用命名空间 - 定义'
 * @Date: 2019-08-10 17:12:41
 * @Last Modified by: Yx_Zou
 * @Last Modified time: 2019-08-10 17:17:34
 */
/**
  *  使用 namespace 关键字
  */
var Shape;
(function (Shape) {
    // 在这个空间类，可以定义任意多的变量
    // 这些变量 只在 Shape 命名空间下可见
    var pi = Math.PI;
    // 使用 export 导出至全局可见
    function cricle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.cricle = cricle;
})(Shape || (Shape = {}));
