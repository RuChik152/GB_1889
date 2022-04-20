import React, { FC, useCallback, useEffect, useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AUTHOR, createCurrentTime } from "../../modal/utility";
import { nanoid } from "nanoid";
import style from "../main.module.scss";
import { ChatArea } from "../Chat/chatArea";
import { Input } from "../Input/input";
import { ChatList } from "../ChatList/ChatList";
import { Chat } from "../main";

interface Msgs {
    [key: string]: Msg[];
}

interface Msg {
    id: string;
    author: string;
    time: string;
    msg: string;
};

interface ChatsProps {
    msg: Msgs;
    setMsg:  React.Dispatch<React.SetStateAction<Msgs>>;
    chatlist: Chat[];
    addChatList: (chats: Chat) => void;
}

export const Chats: FC<ChatsProps> = ({ chatlist, addChatList, msg, setMsg}) => {

    const { chaiId } = useParams();

    useEffect(() => {
        if( chaiId &&
            msg[chaiId]?.length > 0 &&
            msg[chaiId][msg[chaiId].length - 1].author !== AUTHOR.bot ) {
            const timer = setTimeout(() => {
                setMsg({ ...msg,
                    [chaiId]:[ ...msg[chaiId],
                    { id: nanoid(), author: AUTHOR.bot, time: createCurrentTime(), msg: `I am ${AUTHOR.bot}`,}],});
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [msg]);

    const addMessage = (value: string) => {
        if (chaiId) {
            setMsg((prevMessage) => ({...prevMessage, [chaiId]: [...prevMessage[chaiId],{id: nanoid(),author: AUTHOR.user,msg: value,time: createCurrentTime()},],}));
        }
    }

    if(chaiId && !msg[chaiId]){
        return <Navigate replace to="/chats"/>
    }

    return (<>
            <ChatList chatlist={ chatlist } addChatList={ addChatList }/>
            <div className={ style.home } data-testid="home-test-id">
                <div className={ style.action__block }>
                    <ChatArea msg={ chaiId ? msg[chaiId] : []} />
                    <Input change={ addMessage } />
                </div>
            </div>
        </>
    );
}