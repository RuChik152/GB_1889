import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import { Header } from './reactogram/func/Header';
import { Home } from './reactogram/func/pages/Home';
import { Profile } from './reactogram/func/pages/Profile';
//import { Chats } from './reactogram/func/pages/Chats';
import { ChatList } from './reactogram/func/ChatList/ChatList';
import { AboutWithConnect } from './reactogram/func/pages/About';

const Chats = React.lazy(() =>
  import('./reactogram/func/pages/Chats').then((module) => ({
    default: module.Chats,
  }))
);

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="about" element={<AboutWithConnect />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
