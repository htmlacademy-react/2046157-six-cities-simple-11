import { createAction } from '@reduxjs/toolkit';

import { City, Place } from '../types/data';

export const selectCityAction = createAction<City>('city/select');

export const getPlacesAction = createAction<Place[]>('city/getPlaces');
