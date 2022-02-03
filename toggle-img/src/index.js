/*
 * @Author: luoxi
 * @LastEditTime: 2022-02-03 23:45:15
 * @LastEditors: your name
 * @Description: 切换图片
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from './assets/banner1-mid.png'
import src2 from './assets/banner2-mid.png'
import src3 from './assets/banner3-mid.png'

const srcs = [src1, src2, src3]
let index = 0 //显示的图片索引
const container = document.getElementById('root');
let timer; //计时器
function render() {
  ReactDOM.render(
    <img src={srcs[index]} alt="" />,
    container
  );
}

/**
 * 启动计时器，每隔一段时间，切换图片
 */
function start() {
  stop();
  timer = setInterval(() => {
    index = (index + 1) % 3
    render()
  }, 2000)
}
/**
 * 停止计时器
 */
 function stop(){
  clearInterval(timer);
}

render()
start()

container.onmouseenter = function(){
  stop();
}

container.onmouseleave = function(){
  start();
}



