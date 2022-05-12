import { ADD_CHAT, ADD_MSG, DELETE_CHAT } from './action';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMsg>;

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT;
  chatName: string;
};

export type DeleteChat = (chatId: string) => {
  type: typeof DELETE_CHAT;
  chatId: string;
};

export type AddMsg = (
  chatId: string,
  msg: string
) => {
  type: typeof ADD_MSG;
  chatId: string;
  msg: string;
};
