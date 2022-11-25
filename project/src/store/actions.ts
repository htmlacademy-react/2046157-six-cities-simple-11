import { createAction } from '@reduxjs/toolkit';

import { City, Place } from '../types/data';

export const selectCityAction = createAction<City>('places/selectCity');

export const getPlacesAction = createAction<Place[]>('places/getPlaces');

export const setSortType = createAction<string>('places/setSortType');

export const setCurrentPlace = createAction<Place | null>('places/setCurrentPlace');
