import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './components/app/app';

import { userData } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App user={userData} />
    </Provider>
  </React.StrictMode>,
);
