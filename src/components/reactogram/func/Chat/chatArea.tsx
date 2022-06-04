import React, { FC } from 'react';
import style from './chat.module.scss';
import { Msg } from './Msg/msg';

type Msge = {
  msg: string;
  author: string;
  time?: string;
  id?: string;
};

interface ChatProps {
  msg: Msge[];
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
          <Msg
            author={item.author}
            msg={item.msg}
            time={item.time}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
