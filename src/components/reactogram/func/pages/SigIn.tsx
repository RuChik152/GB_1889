import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeAuth} from "../store/profile/slice";
import {Button, Input} from "@mui/material";
import style from './auth.module.scss'

export const SigIn: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setError(false)
        if(login === 'gb' && password === 'gb') {
            dispatch(changeAuth(true));
        } else {
            setError(true)
        }
    }

  return (
    <>
        <form className={style.form} onSubmit={handelSubmit} >
            <Input placeholder="LOGIN" type = "text" onChange={(e) => setLogin(e.target.value)} value={login}/>
            <Input placeholder="PASSWORD" type = "password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <Button type="submit" variant="contained">SUBMIT</Button>
            {error && <p style={{ color: 'red' }}>Логин или пароль не верны</p>}
        </form>
    </>
  );
};
