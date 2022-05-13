import { AddChat, AddMsg, DeleteChat, Msg } from './types';
import { AnyAction, Dispatch } from 'redux';
import { AUTHOR } from '../../../modal/utility';

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

let timeout: NodeJS.Timeout;

//TODO
export const addMessageWithReply: any =
  (chatId: string, msg: Msg) => (dispatch: any) => {
    dispatch(addMsg(chatId, msg));

    if (msg.author !== AUTHOR.bot) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMsg(chatId, {
            msg: 'I am BOT',
            author: AUTHOR.bot,
            time: 'time',
          })
        );
      }, 1000);
    }
  };
