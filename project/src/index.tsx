import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { placesData, placesCountData } from './mocks/places';
import { userData } from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App user={userData} placesCount={placesCountData} places={placesData} />
  </React.StrictMode>,
);
