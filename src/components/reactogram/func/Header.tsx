import React, { FC, useContext, useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { navigate } from '../modal/utility';
import style from './header.module.scss';
import { ThemeContext } from '../modal/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from './store/profile/selectors';
import { Button } from '@mui/material';
import { changeAuth } from './store/profile/slice';
import { logOut } from '../../../services/firebase';

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const auth = useSelector(selectAuth);

  const [error, setError] = useState('');

  const hendelSignOut = async () => {
    setError('');

    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <header>
      <div className={style.header__container}>
        <ul className={style.list__page}>
          {navigate.map((elem) => (
            <li className={style.item} key={elem.id}>
              <NavLink
                to={elem.to}
                style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue',
                })}
              >
                {elem.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {auth ? (
          <Button onClick={hendelSignOut} variant="contained">
            logout
          </Button>
        ) : (
          <>
            <Link to="/sigin">SIGIN</Link>
            <Link to="/sigup">SIGUP</Link>
          </>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <p>{theme === 'light' ? 'солнце' : 'месяц'}</p>
          <button onClick={toggleTheme}>CLICK</button>
        </div>
      </div>
      <main className={style.header}>
        <Outlet />
      </main>
    </header>
  );
};
