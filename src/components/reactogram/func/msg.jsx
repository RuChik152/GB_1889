import React from 'react';

export const Msg = (props) => {
  return (
    <div className="msg__item">
      <span className="item__author">{props.item.author}</span>
      <p className="item__text">{props.item.msg}</p>
      <p className="item__time">Время: {props.item.time}</p>
    </div>
  );
};
