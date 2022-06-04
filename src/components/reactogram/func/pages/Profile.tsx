import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, toggleProfile } from '../store/profile/slice';
import style from './profiles.module.scss';
import { Button } from '@mui/material';
import { selectName, selectVisible } from '../store/profile/selectors';
import { onValue, set, update } from 'firebase/database';
import { useRef } from '../../../../services/firebase';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);
    onValue(useRef, (snapshot) => {
      const user = snapshot.val();
      dispatch(changeName(user.name || ''))
    });
  useEffect(() => {

  }, []);

  const handelChangeName = async () => {
    update(useRef, {
      name: value,
    })
    setValue('');
  };

  return (
    <div className={style.profile}>
      <div className="profile__img">
        <div className={style.profile__icon}></div>
      </div>
      <br />
      <div>
        <p>Оциональный пункт меню</p>
        <input type="checkbox" readOnly checked={visible} />
        <Button onClick={() => dispatch(toggleProfile())} variant="contained">
          VISIBLE
        </Button>
        <br />
        <div className={style.profile__block}>
          <p className={style.profile__name}>NAME: {name}</p>
          <input
            className={style.input}
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={'Ваше имя'}
          />
          <Button
            onClick={handelChangeName}
            variant="contained"
          >
            CLICK
          </Button>
        </div>
      </div>
    </div>
  );
};
