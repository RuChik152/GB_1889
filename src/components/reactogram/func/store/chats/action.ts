import { AddChat, AddMsg, DeleteChat } from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MSG = 'CHATS::ADD_MSG';

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const deleteChat: DeleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMsg: AddMsg = (chatId, msg) => ({
  type: ADD_MSG,
  chatId,
  msg,
});
