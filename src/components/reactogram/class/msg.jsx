import React, { Component } from 'react';

export class Msg extends Component {
  render() {
    return (
      <div className="msg__item">
        <span className="item__author">--{this.props.item.author}--</span>
        <p className="item__text">--{this.props.item.msg}--</p>
        <p className="item__time">--{this.props.item.time}--</p>
      </div>
    );
  }
}
