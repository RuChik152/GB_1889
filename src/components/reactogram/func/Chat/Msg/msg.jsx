import React from 'react';
import style from './msg.module.scss';

export const Msg = (props) => {
  return (
    <div className={style.msg__item}>
      <span className={style.item__author} data-testid="test-author">
        {props.item.author}
      </span>
      <p className={style.item__text} data-testid="test-text">
        {props.item.msg}
      </p>
      <p className={style.item__time} data-testid="test-time">
        Время: {props.item.time}
      </p>
    </div>
  );
};
