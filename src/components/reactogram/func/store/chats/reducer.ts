import { ADD_CHAT, DELETE_CHAT, ADD_MSG } from './action';
import { Reducer } from 'redux';
import { ChatsActions, Msg, MsgState} from './types';
import { nanoid } from 'nanoid';
import { AUTHOR, createCurrentTime } from '../../../modal/utility';

// interface Msg {
//   id: string;
//   author: string;
//   time: string;
//   msg: string;
// }

export interface ChatsState {
  [key: string]: MsgState[];
}

const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.user,
      time: createCurrentTime(),
      msg: 'Hello World',
    },
  ],
};

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];
      return chats;
    }
    case ADD_MSG: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            author: action.msg.author,
            time: createCurrentTime(),
            msg: action.msg.msg,
          },
        ],
      };
    }

    default:
      return state;
  }
};
