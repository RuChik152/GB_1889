import React from 'react';
import { Msg } from './Msg/msg';

export const Chat = ({ message }) => {
  const reversArr = () => {
    let arr = [...message];
    return arr.reverse();
  };

  return (
    <div className="chat" data-testid="chat-test">
      <div className="chat__area">
        {reversArr().map((item, index) => (
          <Msg item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
