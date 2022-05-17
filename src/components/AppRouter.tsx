import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';

import { Header } from './reactogram/func/Header';
import { Home } from './reactogram/func/pages/Home';
import { Profile } from './reactogram/func/pages/Profile';
import { ChatList } from './reactogram/func/ChatList/ChatList';
import { AboutWithConnect } from './reactogram/func/pages/About';
import { Articles } from './reactogram/func/pages/Articles';
import { SigIn } from './reactogram/func/pages/SigIn';
import { SigUp } from './reactogram/func/pages/SigUp';
import { PrivateRoute } from './PrivateRoute';
import { PublickRoute } from './PublickRoute';

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
          <Route
            path="profile"
            element={<PrivateRoute component={<Profile />} />}
          />
          <Route path="chats" element={<PrivateRoute />}>
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>
          <Route path="about" element={<AboutWithConnect />} />
          <Route path="articles" element={<Articles />} />
          <Route
            path="sigin"
            element={
              <PublickRoute>
                <SigIn />
              </PublickRoute>
            }
          />
          <Route path="sigup" element={<SigUp />} />
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
