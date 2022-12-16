import { State } from '../../types/state';
import { NameSpace } from '../../consts';
import { Place, ReviewComment } from '../../types/data';

export const getPlace = (state: State): Place | null => state[NameSpace.PlaceData].place;
export const getNearbyPlaces = (state: State): Place[] => state[NameSpace.PlaceData].placesNearby;
export const getReviewComments = (state: State): ReviewComment[] => state[NameSpace.PlaceData].reviewComments;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.PlaceData].hasLoaded;
