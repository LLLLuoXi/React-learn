<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-01 13:15:02
 * @LastEditors: your name
 * @Description: 
-->
# React.createElement
创建一个React元素，称作虚拟DOM，本质上是一个对象
参数1：元素类型，如果是字符串，一个普通的HTML元素
参数2：元素的属性，一个对象
后续参数：元素的子节点

# JSX
JS的扩展语法，需要使用babel进行转义,为了方便书写。详情请看[JSX](./JSX.md)  

> React.createElement生成React元素，ReactDOM 再把 React元素变成真实的Dom对象