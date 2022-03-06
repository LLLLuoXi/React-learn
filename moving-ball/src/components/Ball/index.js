import React, { Component } from 'react';
import './index.css';

export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    };
    const duration = 16;
    setInterval(() => {
      const xDis = this.state.xSpeed * (duration / 1000);
      const yDis = this.state.ySpeed * (duration / 1000);
      // 根据速度改变 left top
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      // x轴边界
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      // y轴边界
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed, //纵坐标反向
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed, //纵坐标反向
        });
      }

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          backgroundColor: this.props.bg || '#f40',
        }}></div>
    );
  }
}
