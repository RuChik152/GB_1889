import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { Provider } from "react-redux";
import {store} from "./components/reactogram/func/store";


const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);
