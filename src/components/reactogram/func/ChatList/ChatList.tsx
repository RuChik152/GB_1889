import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './chatList.module.scss';
import { Button, Input } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../store/chats/slice';
import { selectChatList } from '../store/chats/selectors';
import { onValue, remove, set, push } from 'firebase/database';
import { chatsRef, getByChatsId } from '../../../../services/firebase';
import { nanoid } from 'nanoid';

type Chats = {
  id: string;
  name: string;
  msg: Msg[];
}

type Msg = {
  msg: string;
  author: string;
  time?: string;
  id?: string;
};

interface ChatListProps {
  chats: Chats[]
}

export const ChatList: FC = () => {
  const [name, setName] = useState('');
  const [chats, setChats] = useState<Chats[]>([]);
  // useEffect(() => {
  //   console.log('chats',chats);
  // }, [])
  
  // const dispatch = useDispatch();

  // const chatlist = useSelector(selectChatList, shallowEqual);

  useEffect(()=> {
    const newChats: Chats[] = [];
    onValue(chatsRef, (chatsSnap) => {
      chatsSnap.forEach((snapshot) => {
        console.log('snapshot',snapshot.val());
        newChats.push(snapshot.val());
      })
      setChats(newChats);
      setName('');
    })
  }, [])

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      //dispatch(addChat({ name }));
      const id = nanoid();
      push(chatsRef, {
        name,
        id,
        msg: {
          empty: true,
        },
      });
      setName('');
    }
  };

  const handelDeleteChat = (name: string) => {
    //() => dispatch(deleteChat({ chatId: chat.name}))
    remove(getByChatsId(name))
    //console.log(getByChatsId(name));
  }
  

  return (
    <div className={style.chat}>
      <ul className={style.chat__list}>
        {chats.map((chat) => (
          <li key={chat.id}>
            <NavLink
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                color: isActive ? '#cbcbcb' : '#000000',
              })}
            >
              {chat.name}
            </NavLink>
            <button onClick={() =>handelDeleteChat(chat.name)}>X</button>
          </li>
        ))}
      </ul>
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
