import React, { FC, useEffect, useState } from 'react';
import style from './navChat.module.scss';
import {NavChatItem} from "./NavChatItem/navChatItem";

interface ChatItem {
    link: string;
    title: string;
}

interface NavChatProps {
    list: ChatItem[];
}

export const NavChat: FC<NavChatProps> = ({ list }) => {

    return  <ul className={style.list} data-testid="chat_test-id">
        {
            list.map((item, index) => <NavChatItem link={item.link} title={item.title} key={index} />)
        }
        </ul>

}
