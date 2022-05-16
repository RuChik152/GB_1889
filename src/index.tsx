import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { persistor, store} from './components/reactogram/func/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
