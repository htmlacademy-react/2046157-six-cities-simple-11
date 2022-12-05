import { createAction } from '@reduxjs/toolkit';

import { City, Place, UserData } from '../types/data';
import { AuthorizationStatus } from '../consts';

export const selectCityAction = createAction<City>('places/selectCity');

export const getPlacesAction = createAction<Place[]>('places/getPlaces');

export const setSortTypeAction = createAction<string>('places/setSortType');

export const setCurrentPlaceAction = createAction<Place | null>('places/setCurrentPlace');

export const setDataLoadingStatusAction = createAction<boolean>('places/setDataLoadingStatus');

export const requireAuthorizationAction = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getUserAction = createAction<UserData | null>('user/getUser');

