import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Msg } from './types';
import { AUTHOR, createCurrentTime } from '../../../modal/utility';
import { nanoid } from 'nanoid';

export interface ChatState {
  [key: string]: Msg[];
}

const initialState: ChatState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.user,
      time: createCurrentTime(),
      msg: 'Hello World',
    },
  ],
};

const ChatsState = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<{ name: string }>) => {
      state[action.payload.name] = [];
    },
    deleteChat: (state, action: PayloadAction<{ chatId: string }>) => {
      delete state[action.payload.chatId];
    },
    addMsg: (state, action: PayloadAction<{ chatId: string; msg: Msg }>) => {
      const { chatId } = action.payload;
      const { msg, author } = action.payload.msg;
      state[chatId].push({
        id: nanoid(),
        author,
        time: createCurrentTime(),
        msg,
      });
    },
  },
});

let timeout: NodeJS.Timeout;
export const addMsgFromBot = createAsyncThunk(
  'chats/addMsgFromBot',
  async ({ chatId, msg }: { chatId: string; msg: Msg }, { dispatch }) => {
    dispatch(addMsg({ chatId, msg }));
    if (msg.author !== AUTHOR.bot) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMsg({
            chatId,
            msg: {
              msg: 'I am BOT',
              author: AUTHOR.bot,
              time: createCurrentTime(),
            },
          })
        );
      }, 1000);
    }
  }
);

export const { addChat, deleteChat, addMsg } = ChatsState.actions;
export const chatReducer = ChatsState.reducer;
