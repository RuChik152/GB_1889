import React, { FC } from 'react';
import style from './navChatItem.module.scss';

interface ChatItemProps {
    link: string;
    title: string;
    key: number;
}

export const NavChatItem: FC<ChatItemProps> = ({ link, title} ) => {

    return (<li className={style.list__item} data- >
                <a className={style.item__link} href = {link} >{title}</a>
            </li>);

}