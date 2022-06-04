import React, { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import style from '../main.module.scss';
import { ChatArea } from '../Chat/chatArea';
import { Input } from '../Input/input';
import { ChatList } from '../ChatList/ChatList';

type Chats = {
  id: string;
  name: string;
  msg: Msg[];
};

type Msg = {
  msg: string;
  author: string;
  time?: string;
  id?: string;
};

interface ChatsProps {
  messages: any;
}

export const Chats: FC<ChatsProps> = ({ messages }) => {
  const { chatId } = useParams();

  if (chatId && !messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <div className={style.home} data-testid="home-test-id">
        <div className={style.action__block}>
          <ChatArea msg={chatId ? messages[chatId] : []} />
          <Input />
        </div>
      </div>
    </>
  );
};
