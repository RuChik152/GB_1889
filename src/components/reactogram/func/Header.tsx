import React, {FC, useContext} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { navigate } from '../modal/utility';
import style from './header.module.scss';
import {ThemeContext} from "../modal/ThemeContext";

export const Header: FC = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    return (    <header>
            <div className={style.header__container}>
                <ul className={style.list__page}>
                    {
                        navigate.map( (elem) => (
                            <li className={style.item} key={elem.id}>
                                <NavLink
                                    to={elem.to}
                                    style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                                >
                                    {elem.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <p>{theme === 'light' ? 'солнце' : 'месяц'}</p>
                    <button onClick={toggleTheme}>CLICK</button>
                </div>
            </div>
            <main className={style.header}>
                <Outlet/>
            </main>
        </header>
    )
}
