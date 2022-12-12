import { combineReducers } from '@reduxjs/toolkit';
import { userProcess } from './user-process/user-process';
import { placesData } from './places-data/places-data';
import { placesProcess } from './places-process/places-process';
import { placeData } from './place-data/place-data';

import { NameSpace } from '../consts';

export const rootReducer = combineReducers({
  [NameSpace.PlacesData]: placesData.reducer,
  [NameSpace.PlaceData]: placeData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.PlacesProcess]: placesProcess.reducer,
});
