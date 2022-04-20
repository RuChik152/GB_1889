import React, {FC, SetStateAction, useState} from 'react';
import style from './input.module.scss';
import { Button as ButtonUI, Input as InputUI } from '@mui/material';

interface Props {
    change: ( e: string) => void;
}

export const Input: FC<Props> = ({ change }) => {

   const [value, setValue] = useState('');

   const actionForm = (e: { preventDefault: () => void; }) => {
       e.preventDefault();
       change(value);
       setValue('')
   }
  return (
    <div className={style.text}>
      <form onSubmit={actionForm}>
          <InputUI
              id="text__input__id"
              value={value}
              onChange={ (e) => setValue(e.target.value)}
              type="text"
              placeholder="Ваше сообщение"
          />
          <br />
          <ButtonUI onClick={ actionForm } disabled={!value} data-testid="test-id" variant="contained">
              Отправить
          </ButtonUI>
      </form>
    </div>
  );
};
