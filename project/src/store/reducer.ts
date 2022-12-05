import { createReducer } from '@reduxjs/toolkit';
import { selectCityAction, getPlacesAction, setSortTypeAction, getCurrentPlaceAction, setDataLoadingStatusAction, requireAuthorizationAction, getUserAction, getNearbyPlacesAction } from '../store/actions';

import { CITIES, sortTypes, AuthorizationStatus } from '../consts';
import { Place, City, UserData } from '../types/data';

type InitalState = {
  city: City;
  places: Place[];
  placesSortType: string;
  currentPlace: null | Place;
  isDataLoaded: boolean;
  authorizationStatus: string;
  user: UserData | null;
  placesNearby: Place[];
}

const initialState: InitalState = {
  city: CITIES[0],
  places: [],
  placesSortType: sortTypes[0],
  currentPlace: null,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  placesNearby: [],
};

const reducer = createReducer(initialState, (builer) => {
  builer
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getPlacesAction, (state, action) => {
      state.places = action.payload;
    })
    .addCase(setSortTypeAction, (state, action) => {
      state.placesSortType = action.payload;
    })
    .addCase(getCurrentPlaceAction, (state, action) => {
      state.currentPlace = action.payload;
    })
    .addCase(setDataLoadingStatusAction, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(getNearbyPlacesAction, (state, action) => {
      state.placesNearby = action.payload;
    });
});

export { reducer };
