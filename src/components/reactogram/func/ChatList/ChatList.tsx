import React, { FC, useState } from 'react';
import { Chat } from '../main';
import {Link, NavLink} from 'react-router-dom';
import { nanoid } from "nanoid";
import style from './chatList.module.scss'
import { Button, Input, TextField} from "@mui/material";

interface ChatListProps {
    chatlist: Chat[];
    addChatList: (chats: Chat) => void;
}
export const  ChatList: FC<ChatListProps> = ({ chatlist, addChatList } ) => {
    const [name, setName] = useState('')


    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name) {
            addChatList({ id: nanoid(), name, });
            setName('');
        }
    }


    return(
        <div className={style.chat}>
        <ul className={style.chat__list}>
            {chatlist.map( chat =>
                <li key={chat.id}>
                    <NavLink to={`/chats/${chat.id}`} style={({ isActive }) => ({ color: isActive ? '#cbcbcb' : '#000000' })}>{chat.name}</NavLink>
                </li>
                )}
        </ul>
            <form className={style.form} onSubmit={handelSubmit}>
                <Input type = "text" value={name}  onChange={(e) => setName(e.target.value)}/>
                <Button disabled={!name} variant="contained" type="submit" >ADD</Button>
            </form>
        </div>)
}