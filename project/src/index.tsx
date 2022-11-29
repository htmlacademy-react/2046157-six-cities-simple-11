import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';

import { userData } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ErrorMessage />
    <App user={userData} />
  </Provider>
);
