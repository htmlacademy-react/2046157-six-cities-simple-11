import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { placesData } from './mocks/places';
import { placeData } from './mocks/place';
import { userData } from './mocks/user';

const PlacesCountData = {
  PlacesCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App user={userData} placesCount={PlacesCountData.PlacesCount} places={placesData} place={placeData} />
  </React.StrictMode>,
);
