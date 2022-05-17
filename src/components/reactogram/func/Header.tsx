import React, { FC, useContext } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { navigate } from '../modal/utility';
import style from './header.module.scss';
import { ThemeContext } from '../modal/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from './store/profile/selectors';
import { Button } from '@mui/material';
import { changeAuth } from './store/profile/slice';

export const Header: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
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
          <Button onClick={() => dispatch(changeAuth(false))} variant="contained">logout</Button>
        ) : (
          <Link to="/sigin">SIGIN</Link>
        )}

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
