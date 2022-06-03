import React, { FC, FormEvent, SetStateAction, useState } from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMsg, addMsgFromBot } from '../store/chats/slice';
import { useParams } from 'react-router-dom';
import {AUTHOR, createCurrentTime} from '../../modal/utility';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from '../store/chats/reducer';
import { AddMsg } from '../store/chats/types';
import {set} from "firebase/database";
import {getMsgListId} from "../../../../services/firebase";
import {nanoid} from "nanoid";

export const Input: FC = () => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMsg>>>();

  const actionForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      // dispatch(
      //   addMsgFromBot({ chatId, msg: { msg: value, author: AUTHOR.user } })
      // );
      const id = nanoid();
      set(getMsgListId(chatId, id), {
        chatId,
        author: AUTHOR.user,
        msg: value,
        time: createCurrentTime()
      })
    }
    setValue('');
  };
  return (
    <div className={style.text}>
      <form onSubmit={actionForm}>
        <InputUI
          id="text__input__id"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Ваше сообщение"
        />
        <br />
        <ButtonUI disabled={!value} data-testid="test-id" variant="contained">
          Нажмите Enter
        </ButtonUI>
      </form>
    </div>
  );
};
