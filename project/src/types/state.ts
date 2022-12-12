import { store } from '../store';

import { AuthorizationStatus } from '../consts';
import { City, Place, ReviewComment, UserData } from './data';

export type PlacesData = {
  places: Place[];
  currentPlace: null | Place;
  isDataLoaded: boolean;
  placesNearby: Place[];
  reviewComments: ReviewComment[];
  hasError: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
}

export type PlacesProcess = {
  placesSortType: string;
  city: City;
  currentPlace: Place | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


