import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './reactogram/func/Header';
import { Home } from './reactogram/func/pages/Home';
import { Profile } from './reactogram/func/pages/Profile';
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
            <Route path=":chaiId" element={<Chats />} />
          </Route>
          <Route path="about" element={<AboutWithConnect />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
