import React from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';

export const Input = ({ text, change, click }) => {
  return (
    <div className={style.text}>
      <InputUI
        id="text__input__id"
        value={text}
        onChange={change}
        type="text"
        placeholder="Ваше сообщение"
        name="msg"
      />
      <br />
      <ButtonUI onClick={click} data-testid="test-id" variant="contained">
        Отправить
      </ButtonUI>
    </div>
  );
};
