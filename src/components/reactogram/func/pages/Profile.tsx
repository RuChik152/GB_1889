import React, { FC, useContext, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';


import { ThemeContext } from '../../modal/ThemeContext';
import { changeName, toggleProfile} from '../store/profile/actions';

import { ProfileState } from '../store/profile/reducer';


export const Profile: FC = () => {
    const {theme, toggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const visible = useSelector((state: ProfileState) => state.visible);
    const name = useSelector((state: ProfileState) => state.name);

    return (
        <>
        <h2>Profile</h2>
        <br/>
        <div>
            <p>{theme === 'light' ? 'солнце' : 'месяц'}</p>
            <button onClick={toggleTheme} >CLICK</button>
        </div>
        <hr/>
        <div>
            <p>{name}</p>
            <input type = "checkbox" checked={visible}/>
            <button onClick={ () => dispatch( toggleProfile() ) }>VISIBLE</button>
            <br/>
            <input type="text" onChange={ (e) => setValue(e.target.value)} value={value}/>
            <button onClick={ () => dispatch( changeName(value)) } >CLICK</button>
        </div>
    </>);
    };