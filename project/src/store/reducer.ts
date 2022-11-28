import { createReducer } from '@reduxjs/toolkit';
import { selectCityAction, getPlacesAction, setSortType, setCurrentPlace } from '../store/actions';

import { CITIES, sortTypes } from '../consts';
import { Place } from '../types/data';

const initialState = {
  city: CITIES[0],
  places: [] as Place[],
  placesSortType: sortTypes[0],
  currentPlace: null as Place | null
};

const reducer = createReducer(initialState, (builer) => {
  builer
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getPlacesAction, (state, action) => {
      state.places = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.placesSortType = action.payload;
    })
    .addCase(setCurrentPlace, (state, action) => {
      state.currentPlace = action.payload;
    });
});

export { reducer };
