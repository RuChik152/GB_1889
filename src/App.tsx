import React, { useState, useCallback } from 'react';
import './App.module.scss';
import { Reactogram } from './components/reactogram/func/main';
import { store } from './components/reactogram/func/store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <>

        <Reactogram />

    </>
  );
};
