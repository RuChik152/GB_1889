import React from 'react';
import { Chat } from '../main';

interface Msgs {
    [key: string]: Msg[];
}

interface Msg {
    id: string;
    author: string;
    time: string;
    msg: string;
}

export interface ChatsProps {
    msg: Msgs;
    setMsg: React.Dispatch<React.SetStateAction<Msgs>>;
    chatlist: Chat[];
    addChatList: (chats: Chat) => void;
    removeChatList: (id: string) => void;
}