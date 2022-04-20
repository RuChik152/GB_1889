import React from "react";

export  const createCurrentTime = () => {
    const time = new Date();
    return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
};

interface AuthorType {
    user: string,
    bot: string
}

export const AUTHOR: AuthorType = {
    user: 'Пользователь',
    bot: 'BOT'
}