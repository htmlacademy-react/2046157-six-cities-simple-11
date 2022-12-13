import { State } from '../../types/state';
import { NameSpace } from '../../consts';
import { Place, } from '../../types/data';

export const getPlaces = (state: State): Place[] => state[NameSpace.PlacesData].places;
export const getDataLoadedSatus = (state: State): boolean => state[NameSpace.PlacesData].isDataLoaded;
export const getErrorStatus = (state: State): boolean => state[NameSpace.PlacesData].hasError;
