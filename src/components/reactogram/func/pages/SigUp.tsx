import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAuth } from '../store/profile/slice';
import style from './auth.module.scss';
import { Button, Input } from '@mui/material';
import { signUp } from '../../../../services/firebase';
import { useNavigate } from 'react-router-dom';

export const SigUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    try {
      await signUp(email, password);
      navigate('/sigin');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handelSubmit}>
        <Input
          placeholder="LOGIN"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="PASSWORD"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button type="submit" variant="contained">
          SignUp
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
};
