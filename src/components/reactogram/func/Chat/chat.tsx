import React, { FC } from 'react';
import { Msg } from './Msg/msg';
import style from './chat.module.scss';

interface Msg {
    author: string,
    time: string,
    msg: string
}

interface ChatProps {
    message: Msg[];
}

export const Chat: FC<ChatProps> = ({ message }) => {
  const reversArr = () => {
    const arr = [...message];
    return arr.reverse();
  };

  return (
    <div className={style.chat} data-testid="chat-test">
      <div className="chat__area">
        {reversArr().map((item, index) => (
          <Msg author={item.author} msg={item.msg} time={item.time} key={index} />
        ))}
      </div>
    </div>
  );
};
