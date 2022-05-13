import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { ProfileState } from './profile/reducer';
import { chatReducer, ChatsState } from './chats/reducer';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from './profile/slice';

export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
};

const rootReducer = combineReducers<StoreState>({
  profile: profileReducer,
  chats: chatReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
