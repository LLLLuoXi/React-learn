<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-01 13:13:48
 * @LastEditors: your name
 * @Description: JSX notes
-->
- [JSX](#jsx)
  - [什么是JSX](#什么是jsx)
  - [在JSX中嵌入表达式](#在jsx中嵌入表达式)
  - [元素的不可变性](#元素的不可变性)
# JSX

## 什么是JSX

- Facebook起草的JS扩展语法  
- 本质是一个JS对象，会被babel编译，最终会被转换为React.createElement,所以 JSX 的本质就是 React.createElement 这个 Javascript 调用的语法糖。这种类 HTML 标签的语法糖能够帮助我们快速创建虚拟 DOM，最后通过 ReactDOM.render 我们可以将虚拟 DOM 渲染为真实 DOM。  
- 每个JSX表达式，有且仅有一个根节点  
  - React.Fragment(`<></>`)  
- 每个JSX元素必须结束（XML规范）  

## 在JSX中嵌入表达式  

- 在JSX中使用注释(js注释 `{/* */}`)  
- 将表达式作为内容的一部分  
  - null、undefined、false不会显示  
  - 普通对象，不可以作为子元素  
  - 可以放置React元素对象  
- 将表达式作为元素属性  
- 属性使用小驼峰命名法(className)  
- 防止注入攻击  
  - 自动编码  
  - dangerouslySetInnerHTML  
```jsx
const content = "<h1>llluoxi</h1>";
const div = (
    <div>
       {content}
    </div>
)
React.render(div,document.getElementById("root"))
//输出 字符串'<h1>llluoxi</h1>',相当于用dom.innerText
```
如果你没被下面的写法恶心到的话，说明你是真的想要这么做
```jsx
const content = "<h1>llluoxi</h1>";
const div = (
    <div dangerouslySetInnerHTML={{
        __html:content
    }}>
    </div>
)
React.render(div,document.getElementById("root"))
//输出 llluoxi
```

## 元素的不可变性  

- 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改  
- 如果确实需要更改元素的属性，需要重新创建JSX元素  
- >💡 重新生成的是React元素对象，js中创建一个普通对象的开销可以忽略不记
