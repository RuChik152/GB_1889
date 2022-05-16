import React, { FC, FormEvent, SetStateAction, useState } from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMsg, addMsgFromBot } from '../store/chats/slice';
import { useParams } from 'react-router-dom';
import { AUTHOR } from '../../modal/utility';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from '../store/chats/reducer';
import { AddMsg } from '../store/chats/types';

export const Input: FC = () => {
  const [value, setValue] = useState('');
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMsg>>>();

  const actionForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      dispatch(
        addMsgFromBot({ chatId, msg: { msg: value, author: AUTHOR.user } })
      );
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
