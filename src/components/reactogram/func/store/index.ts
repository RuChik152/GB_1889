import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import { ProfileState } from './profile/reducer';
//import { chatReducer, ChatsState } from './chats/reducer';
import { chatReducer, ChatState } from './chats/slice';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/slice';

export interface StoreState {
  profile: ProfileState;
  chats: ChatState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const rootReducer = combineReducers<StoreState>({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
