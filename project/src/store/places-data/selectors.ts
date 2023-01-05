import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { getCity } from '../places-process/selectors';

import { NameSpace } from '../../consts';
import { Place, } from '../../types/data';

export const getPlaces = (state: State): Place[] => state[NameSpace.PlacesData].places;
export const getFilteredPlaces = createSelector(getPlaces, getCity, (places, currentCity) => places.filter((place) => place.city.name === currentCity.name));
export const getDataLoadedSatus = (state: State): boolean => state[NameSpace.PlacesData].isDataLoaded;
export const getErrorStatus = (state: State): boolean => state[NameSpace.PlacesData].hasError;
