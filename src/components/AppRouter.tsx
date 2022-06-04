import React, {FC, Suspense, useEffect, useState} from 'react';
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
import {auth, chatsRef} from '../services/firebase';
import { useDispatch } from 'react-redux';
import { changeAuth } from './reactogram/func/store/profile/slice';
import {onValue} from "firebase/database";

const Chats = React.lazy(() =>
  import('./reactogram/func/pages/Chats').then((module) => ({
    default: module.Chats,
  }))
);

export const AppRouter: FC = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (msgSnapshot) => {
      const newMsgs: any = {};

      msgSnapshot.forEach((snapshot) => {
        if (snapshot.key) {
          newMsgs[snapshot.key] = Object.values(
            snapshot.val().messageList || {}
          );
        }
      });


      setMessages(newMsgs);
    });
    return unsubscribe;
  }, []);


  return (
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
              <Route path=":chatId" element={<Chats messages={messages} />} />
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
};
