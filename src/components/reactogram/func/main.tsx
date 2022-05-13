import React, { FC, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import { defaultContext, ThemeContext } from '../modal/ThemeContext';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Header } from './Header';
import { ChatList } from './ChatList/ChatList';
import { AboutWithConnect } from './pages/About';
import {AppRouter} from "../../AppRouter";

// const Chats = React.lazy(() =>
//   import('./pages/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );

export interface Chat {
  id: string;
  name: string;
}

const initialChat: Chat[] = [
  {
    id: 'default',
    name: 'chat',
  },
];

const initialMsgs: Msgs = {
  default: [],
};

interface Msg {
  id: string;
  author: string;
  time: string;
  msg: string;
}

interface Msgs {
  [key: string]: Msg[];
}

export const Reactogram: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <AppRouter />
    </ThemeContext.Provider>
  );
};
