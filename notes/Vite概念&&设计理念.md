<!--
 * @Author: luoxi
 * @LastEditTime: 2022-02-01 20:53:50
 * @LastEditors: your name
 * @Description: 
-->
[开始 getting-started | Vite中文网](https://vitejs.cn/guide/)
- [:rocket: 概念&&设计思想](#rocket-概念设计思想)
  - [:sunrise: 组成](#sunrise-组成)
  - [:raised_hands: 打包过程对比](#raised_hands-打包过程对比)
  - [:question: 传统的打包器存在的问题：](#question-传统的打包器存在的问题)
  - [:nut_and_bolt: 针对以上两个问题，Vite做了相应的优化：](#nut_and_bolt-针对以上两个问题vite做了相应的优化)

# :rocket: 概念&&设计思想

> Vite（法语意为 "快速的"，发音 `/vit/`，发音同 "veet"）是一种新型前端构建工具，能够显著提升前端开发体验
> 

## :sunrise: 组成

Vite由两部分组成：

- 一个开发服务，服务于开发环境，ESM + HMR
- 一套构建指令，服务于生产环境，用Rollup打包

打包：使用工具抓取，处理并将我们的源代码模块串联成可以在浏览器运行的文件。

常见的打包工具：

- webpack
- rollup
- parcel
- gulp

## :raised_hands: 打包过程对比

传统的打包器打包流程：

![传统打包器打包过程1](/assets/传统打包器打包过程1.png)

entry入口js文件，在每个页面有很多的component，通过入口文件把页面所有的依赖打包成一个bundle.js。(这里先考虑最基础的打包，不考虑用`splitChunks` 来拆分文件），把所有的依赖打包成单一的入口文件，然后我们的开发服务器才是一个ready的状态，才能在页面上看到效果

ESM 打包器

![ESM打包器打包过程](/assets/ESM打包器打包过程.png)

ESM打包器：一开始就是一个 Server ready状态，我们通过HTTP request 请求的时候，会请求响应的entry文件，entry文件只用到当前页面的话，不会去加载别的文件，只会找当前页面所需要的的module，这样就避免了所有涉及到的代码都打包起来，就是一个按需加载的理念，启动速度和更新速度会变得很快。

## :question: 传统的打包器存在的问题：

1. 缓慢的服务启动，当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。
2. 缓慢的更新，基于打包器启动时，重建整个包的效率很低。应用体积越大更新速度越慢。

## :nut_and_bolt: 针对以上两个问题，Vite做了相应的优化：

1. Vite将模块区分为依赖和源码两类，提升开发服务启动时间

依赖：是指在开发期间不变的纯JavaScript，比如说有很多个依赖的组件库，这些依赖的处理代价较高，可能存在多个模块化中，比如commonJs 和ESM。Vite会使用esbuild来预构建依赖，esbuild是用go来编写的，比用JavaScript写的打包器预构建速度快很多

源码：通常为JSX，CSS 或者Vue SFC，通常需要转换，基于路由拆分。Vite以原生ESM的方式提供源码，实际上让浏览器接管了部分的打包程序工作，Vite只需要在浏览器请求源码的时候进行转换并按需提供源码，根据情景（路由）动态导入代码，就在当前屏幕上实际使用的时候才会被处理。

2. Vite中 重建整个包的处理：HMR是在原生ES模块上执行的，在编辑一个文件时，只需要精确的边界的模块以及最近的HMR边界之间的链失活，无论应用有多大，HMR都能保持快速的更新，同时vite会使用http头来加速整个页面的重新加载，源码模块的请求会根据304这样的请求来进行协商缓存，而依赖模块的请求会通过`Cache-Control`来进行强缓存，一旦被缓存就不需要经常再次请求。

<aside>
💡 为什么Vite在生产环境还需要利用Rollup来打包呢？

</aside>  

<aside>
💡 这是由于嵌套导入会导致额外的网络往返，在生产环境的发布未打包ESM仍然是效率比较低的，而且浏览器支持目前并不是很好。

</aside>