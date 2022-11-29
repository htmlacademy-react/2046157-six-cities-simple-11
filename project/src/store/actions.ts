import { createAction } from '@reduxjs/toolkit';

import { City, Place } from '../types/data';

export const selectCityAction = createAction<City>('places/selectCity');

export const getPlacesAction = createAction<Place[]>('places/getPlaces');

export const setSortTypeAction = createAction<string>('places/setSortType');

export const setCurrentPlaceAction = createAction<Place | null>('places/setCurrentPlace');

export const setDataLoadingStatusAction = createAction<boolean>('places/setDataLoadingStatus');

export const setError = createAction<string | null>('app/setError');
