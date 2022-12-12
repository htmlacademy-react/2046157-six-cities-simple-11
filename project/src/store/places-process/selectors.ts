import { State } from '../../types/state';
import { NameSpace } from '../../consts';
import { City, Place } from '../../types/data';

export const getCity = (state: State): City => state[NameSpace.PlacesProcess].city;
export const getPlacesSortType = (state: State): string => state[NameSpace.PlacesProcess].placesSortType;
export const getCurrentPlace = (state: State): Place | null => state[NameSpace.PlacesProcess].currentPlace;
