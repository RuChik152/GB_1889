import React from 'react';

export const createCurrentTime = () => {
  const time = new Date();
  return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
};

interface AuthorType {
  user: string;
  bot: string;
}

export const AUTHOR: AuthorType = {
  user: 'Пользователь',
  bot: 'BOT',
};

export const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    to: '/articles',
    name: 'Articles',
  },
];

export const api = 'https://api.spaceflightnewsapi.net/v3/articles';
