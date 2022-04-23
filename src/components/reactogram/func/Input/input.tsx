import React, { FC, SetStateAction } from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';

interface Props {
    click: () => void;
    text: string;
    change: (e: { target: { id: string; value: SetStateAction<string>; }; }) => void;
}

export const Input: FC<Props> = ({ text, change, click }) => {
  return (
    <div className={style.text}>
      <InputUI
        id="text__input__id"
        value={text}
        onChange={ (e) => change(e)}
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
