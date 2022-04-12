import React, { useState, useCallback } from 'react';
import './scss/style.scss';
import { Reactogram } from './components/reactogram/func/main';
//import { Reactogram } from "./components/reactogram/class/main";
import { Question } from './components/reactogram/class/question';

export const App = () => {
  const [author, setAuthor] = useState('');
  const [active, setActive] = useState(true);

  const changeAuthor = useCallback((e) => {
    setAuthor(e.target.value);
  }, []);

  const quest = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      {active && (
        <Question author={author} quest={quest} change={changeAuthor} />
      )}
      {!active && <Reactogram data={author} />}
    </>
  );
};
