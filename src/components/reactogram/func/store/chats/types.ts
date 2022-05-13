import { ADD_CHAT, ADD_MSG, DELETE_CHAT } from './action';
import { Dispatch } from 'redux';

export type ChatsActions =
  | ReturnType<AddChat>
  | ReturnType<DeleteChat>
  | ReturnType<AddMsg>;

export type Msg = {
  msg: string;
  author: string;
  time: string;
};

export type MsgUser = Msg & {
  chatId: string;
};

export type MsgState = Msg & {
  id: string;
};

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
  msg: Msg
) => {
  type: typeof ADD_MSG;
  chatId: string;
  msg: Msg;
};

// export type addMessageWithReply = (
//     chatId: string,
//     msg: Msg
// ) => (dispatch: Dispatch)
