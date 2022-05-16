import React, { FC } from 'react';
import style from './msg.module.scss';

interface MsgProps {
  key?: string;
  author: string;
  msg: string;
  time?: string;
}

export const Msg: FC<MsgProps> = ({ author, msg, time }) => {
  return (
    <div className={style.msg__item}>
      <span className={style.item__author} data-testid="test-author">
        {author}
      </span>
      <p className={style.item__text} data-testid="test-text">
        {msg}
      </p>
      <p className={style.item__time} data-testid="test-time">
        Время: {time}
      </p>
    </div>
  );
};
