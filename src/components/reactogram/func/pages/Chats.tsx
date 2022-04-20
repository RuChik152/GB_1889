import React, {FC, useCallback, useEffect, useState} from 'react';
import {AUTHOR, createCurrentTime} from "../../modal/utility";
import {nanoid} from "nanoid";
import style from "../main.module.scss";
import {ChatArea} from "../Chat/chatArea";
import {Input} from "../Input/input";
import {ChatList} from "../ChatList/ChatList";
import {Chat} from "../main";

interface Msg {
    id: string;
    author: string;
    time: string;
    msg: string;
};

interface ChatsProps {
    msg: Msg[];
    setMsg:  React.Dispatch<React.SetStateAction<Msg[]>>;
    chatlist: Chat[];
    addChat: (chats: Chat[]) => void;
}

export const Chats: FC<ChatsProps> = ({ chatlist, addChat, msg, setMsg}) => {


    useEffect(() => {
        if( msg.length > 0 && msg[msg.length - 1].author !== AUTHOR.bot ) {
            const timer = setTimeout(() => {
                setMsg([
                    ...msg,
                    {
                        id: nanoid(),
                        author: AUTHOR.bot,
                        time: createCurrentTime(),
                        msg: `I am ${AUTHOR.bot}`,
                    },
                ]);
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [msg]);

    const addMessage = useCallback((value: string) => {
        setMsg((item) => [
            ...item,
            {
                id: nanoid(),
                author: AUTHOR.user,
                time: createCurrentTime(),
                msg: value,
            },
        ]);
    }, []);

    return (<>
            {/*<NavChat />*/}
            <ChatList chatlist={chatlist} addChat={addChat}/>
            <div className={style.home} data-testid="home-test-id">
                <div className={style.action__block}>
                    <ChatArea msg={msg} />
                    <Input change={addMessage} />
                </div>
            </div>
        </>
    );
}