import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { navigate } from '../modal/utility';

export const Header: FC = () => (
    <header>
        <ul>
            {
                navigate.map( (elem) => (
                    <li key={elem.id}>
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
        <main>
            <Outlet/>
        </main>
    </header>
)