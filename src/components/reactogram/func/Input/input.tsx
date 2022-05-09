import React, { FC, SetStateAction, useState } from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMsg } from '../store/chats/action';
import { useParams } from 'react-router-dom';

export const Input: FC = () => {
  const [value, setValue] = useState('');
  const { chaiId } = useParams();
  const dispatch = useDispatch();

  const actionForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (chaiId) {
      dispatch(addMsg(chaiId, value));
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
        <ButtonUI
          onClick={actionForm}
          disabled={!value}
          data-testid="test-id"
          variant="contained"
        >
          Отправить
        </ButtonUI>
      </form>
    </div>
  );
};
