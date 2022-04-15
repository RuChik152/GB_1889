import React from 'react';
import './msg.scss'

export const Msg = (props) => {
  return (
    <div className="msg__item">
      <span className="item__author" data-testid="test-author">
        {props.item.author}
      </span>
      <p className="item__text" data-testid="test-text">
        {props.item.msg}
      </p>
      <p className="item__time" data-testid="test-time">
        Время: {props.item.time}
      </p>
    </div>
  );
};
