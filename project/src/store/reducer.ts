import { createReducer } from '@reduxjs/toolkit';
import { selectCityAction, getPlacesAction, setSortTypeAction, setCurrentPlaceAction, setDataLoadingStatusAction, setError } from '../store/actions';

import { CITIES, sortTypes } from '../consts';
import { Place, City } from '../types/data';

type InitalState = {
  city: City;
  places: Place[];
  placesSortType: string;
  currentPlace: null | Place;
  isDataLoaded: boolean;
  error: string | null;
}

const initialState: InitalState = {
  city: CITIES[0],
  places: [],
  placesSortType: sortTypes[0],
  currentPlace: null,
  isDataLoaded: false,
  error: null,
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
    .addCase(setCurrentPlaceAction, (state, action) => {
      state.currentPlace = action.payload;
    })
    .addCase(setDataLoadingStatusAction, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
