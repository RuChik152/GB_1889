import React, {FC, useCallback, useEffect, useState} from 'react';
import {AUTHOR, createCurrentTime} from "../../modal/utility";
import {nanoid} from "nanoid";
import style from "../main.module.scss";
import {Chat} from "../Chat/chat";
import {Input} from "../Input/input";

interface Msg {
    id: string;
    author: string;
    time: string;
    msg: string;
};

export const Chats = () => {
    const [msg, setMsg] = useState<Msg[]>([]);

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
            <div className={style.home} data-testid="home-test-id">
                <div className={style.action__block}>
                    <Chat msg={msg} />
                    <Input change={addMessage} />
                </div>
            </div>
        </>
    );
}