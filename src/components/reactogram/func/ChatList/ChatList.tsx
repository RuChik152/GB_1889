import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './chatList.module.scss';
import { Button, Input } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../store/chats/slice';
import { selectChatList } from '../store/chats/selectors';
import { onValue, remove, set, push } from 'firebase/database';
import {
  chatsRef,
  destroyChats,
  getByChatsId,
} from '../../../../services/firebase';
import { nanoid } from 'nanoid';

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


export const ChatList: FC = () => {
  const [name, setName] = useState('');
  const [chats, setChats] = useState<Chats[]>([]);

  useEffect(() => {
    onValue(chatsRef, (chatsSnap) => {
      const newChats: Chats[] = [];
      chatsSnap.forEach((snapshot) => {
        newChats.push(snapshot.val());
      });
      setChats(newChats);
    });
  }, []);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      const id = nanoid();
      set(getByChatsId(id), {
        id,
        name,
      });
      setName('');
    }
  };

  const handelDeleteChat = (id: string) => {

    remove(getByChatsId(id));

  };
  //TODO test
  const destroyChatLIst = () => {
    remove(destroyChats());
  };

  return (
    <div className={style.chat}>
      <ul className={style.chat__list}>
        {chats.map((chat) => (
          <li key={chat.id}>
            <NavLink
              to={`/chats/${chat.id}`}
              style={({ isActive }) => ({
                color: isActive ? '#cbcbcb' : '#000000',
              })}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => handelDeleteChat(chat.id)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={destroyChatLIst}>DESTROY CHATS</button>
      <form className={style.form} onSubmit={handelSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button disabled={!name} variant="contained" type="submit">
          ADD
        </Button>
      </form>
    </div>
  );
};
