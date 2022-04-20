import React, { FC, useState } from 'react';
import { Chat } from '../main';
import { Link } from 'react-router-dom';
import {nanoid} from "nanoid";


interface ChatListProps {
    chatlist: Chat[];
    addChat: (chats: Chat[]) => void;
}
export const  ChatList: FC<ChatListProps> = ({ chatlist, addChat } ) => {
    const [name, setName] = useState('')


    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name) {
            addChat([...chatlist, {id: nanoid(), name, }]);
            setName('');
        }
    }
    return(
        <>
        <ul>
            {chatlist.map( chat =>
                <li key={chat.id}>
                    <Link to={`/chats/${chat.id}`} >{chat.name}</Link>
                </li>
                )}
        </ul>
            <form onSubmit={handelSubmit}>
                <input type = "text" value={name}  onChange={(e) => setName(e.target.value)}/>
                <button type="submit" >ADD</button>
            </form>
        </>)
}