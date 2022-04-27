import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Header } from './Header';
import { Chats } from './pages/Chats';
import { ChatList } from './ChatList/ChatList';
import { AUTHOR, createCurrentTime } from '../modal/utility';

export interface Chat {
  id: string;
  name: string;
}

const initialChat: Chat[] = [
  {
    id: 'default',
    name: 'chat',
  },
];

const initialMsgs: Msgs = {
  default: [
    {
      id: '1',
      author: AUTHOR.user,
      time: createCurrentTime(),
      msg: 'Hello World',
    },
  ],
};

interface Msg {
  id: string;
  author: string;
  time: string;
  msg: string;
}

interface Msgs {
  [key: string]: Msg[];
}

export const Reactogram: FC = () => {
  const [chatlist, setChatlist] = useState<Chat[]>(initialChat);
  const [msg, setMsg] = useState<Msgs>(initialMsgs);

  const addChatList = (chat: Chat) => {
    setChatlist([...chatlist, chat]);
    setMsg({ ...msg, [chat.id]: [] });
  };

  const removeChatList = (e: { target: { dataset: { id: string } } }) => {
    const idxList: number = chatlist.findIndex(
      (item) => item.id == e.target.dataset.id
    );
    setChatlist([...delList(chatlist, e.target.dataset.id)]);
    setMsg({ ...delMsg(msg, e.target.dataset.id) });
  };

  const delList = (arr: Chat[], idx: string) => {
    return arr.filter( (elem) => elem.id !== idx);
  };

  const delMsg = (obj: Msgs, idx: string) => {
    const arr = { ...obj };
    delete arr[idx];
    return arr;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chatlist={chatlist}
                  addChatList={addChatList}
                  removeChatList={removeChatList}
                />
              }
            />
            <Route
              path=":chaiId"
              element={
                <Chats
                  setMsg={setMsg}
                  msg={msg}
                  chatlist={chatlist}
                  addChatList={addChatList}
                  removeChatList={removeChatList}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
