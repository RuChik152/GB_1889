import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import { ThemeContext } from '../../modal/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/actions';

//import { ProfileState } from '../store/profile/reducer';
import style from './profiles.module.scss';
import { Button } from '@mui/material';
import { selectName, selectVisible } from '../store/profile/selectors';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);

  return (
    <div className={style.profile}>
      <div className="profile__img">
        <div className={style.profile__icon}></div>
      </div>
      <br />
      <div>
        <p>Оциональный пункт меню</p>
        <input type="checkbox" checked={visible} />
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
            onClick={() => dispatch(changeName(value))}
            variant="contained"
          >
            CLICK
          </Button>
        </div>
      </div>
    </div>
  );
};
