import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './chatList.module.scss';
import { Button, Input } from '@mui/material';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../store/chats/action';
import { selectChatList } from '../store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatlist = useSelector(selectChatList, shallowEqual);

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };

  return (
    <div className={style.chat}>
      <ul className={style.chat__list}>
        {chatlist.map((chat) => (
          <li key={chat.id}>
            <NavLink
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                color: isActive ? '#cbcbcb' : '#000000',
              })}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
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
