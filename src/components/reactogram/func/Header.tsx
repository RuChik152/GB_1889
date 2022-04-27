import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { navigate } from '../modal/utility';
import style from './header.module.scss';

export const Header: FC = () => (
    <header>
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
        <main className={style.header}>
            <Outlet/>
        </main>
    </header>
)