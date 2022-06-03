import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDytVRTwBKuKa00Z-RvA7_5MR9trfRhXN8',
  authDomain: 'gb-1889-189e2.firebaseapp.com',
  projectId: 'gb-1889-189e2',
  storageBucket: 'gb-1889-189e2.appspot.com',
  messagingSenderId: '731111004074',
  appId: '1:731111004074:web:6d31f9d228ed98e1af3dd3',
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

const database = getDatabase(firebase);


export const useRef = ref(database, 'user');
export const chatsRef = ref(database, 'chats');

export const getByChatsId = (id: string) => ref(database, `chats/${id}`);
export const getMsgListId = (id: string, msgId: string) => ref(database, `chats/${id}/messageList/${msgId}`);

export const destroyChats = () => ref(database, `chats`);