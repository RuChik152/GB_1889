import React, { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import style from '../main.module.scss';
import { ChatArea } from '../Chat/chatArea';
import { Input } from '../Input/input';
import { ChatList } from '../ChatList/ChatList';

import { shallowEqual, useSelector } from 'react-redux';
import { selectChats } from '../store/chats/selectors';
import { onValue } from 'firebase/database';
import { chatsRef } from '../../../../services/firebase';

type Chats = {
  name: string;
  msg: Msg[];
}

type Msg = {
  msg: string;
  author: string;
  time?: string;
  id?: string;
};

export const Chats: FC = () => {
  const { chatId } = useParams();
  const msg = useSelector(selectChats, shallowEqual);
  
  // console.log('chats', chats);
  // useEffect(()=> {
  //   onValue(chatsRef, (chatsSnap) => {
  //     setChats(chatsSnap.val());
  //   })
  // }, [])

  if (chatId && !msg[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList  />
      <div className={style.home} data-testid="home-test-id">
        <div className={style.action__block}>
          <ChatArea msg={chatId ? msg[chatId] : []} />
          <Input />
        </div>
      </div>
    </>
  );
};
