import React, { FC, FormEvent, SetStateAction, useState } from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessageWithReply, addMsg} from '../store/chats/action';
import { useParams } from 'react-router-dom';
import { AUTHOR } from '../../modal/utility';

export const Input: FC = () => {
  const [value, setValue] = useState('');
  const { chaiId } = useParams();
  const dispatch = useDispatch();

  const actionForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chaiId && value) {
      //TODO
      dispatch(
        addMessageWithReply(chaiId, { msg: value, author: AUTHOR.user })
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
