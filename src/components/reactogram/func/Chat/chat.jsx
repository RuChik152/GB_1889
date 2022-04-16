import React from 'react';
import { Msg } from './Msg/msg';
import style from './chat.module.scss';

export const Chat = ({ message }) => {
  const reversArr = () => {
    let arr = [...message];
    return arr.reverse();
  };

  return (
    <div className={style.chat} data-testid="chat-test">
      <div className="chat__area">
        {reversArr().map((item, index) => (
          <Msg item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
