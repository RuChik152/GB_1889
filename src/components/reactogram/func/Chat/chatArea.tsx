import React, { FC } from 'react';
import { Msg } from './Msg/msg';
import style from './chat.module.scss';

interface Msg {
    id: string;
    author: string;
    time: string;
    msg: string;
};

interface ChatProps {
    msg: Msg[];
}

export const ChatArea: FC<ChatProps> = ({ msg }) => {
  const reversArr = () => {
    const arr = [...msg];
    return arr.reverse();
  };

  return (
    <div className={style.chat} data-testid="chat-test">
      <div className="chat__area">
        {reversArr().map((item) => (
          <Msg author={item.author} msg={item.msg} time={item.time} key={item.id} />
        ))}
      </div>
    </div>
  );
};
