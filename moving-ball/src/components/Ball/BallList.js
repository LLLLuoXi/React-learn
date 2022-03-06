/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-06 23:47:50
 * @LastEditors: your name
 * @Description: 
 */
import React, { Component } from 'react';
import Ball from './index';
import { getRandom } from '../../utils/getRandom';

export default class BallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfo: [],
    };
    const timer = setInterval(() => {
      let info = {
        left: getRandom(0, document.documentElement.clientWidth),
        top: getRandom(0, document.documentElement.clientHeight),
        xSpeed: getRandom(50, 320),
        ySpeed: getRandom(50, 320),
        bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
          0,
          255
        )})`,
      };
      this.setState({
        ballInfo: [...this.state.ballInfo, info],
      });
      if (this.state.ballInfo.length === 15) {
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    const balls = this.state.ballInfo.map((item, i) => (
      <Ball key={i} {...item} />
    ));
    return <div>{balls}</div>;
  }
}
