import { createReducer } from '@reduxjs/toolkit';

import { selectCityAction, getCurrentPlacesListAction } from '../store/actions';
import { placesData } from '../mocks/places';
import { CITIES } from '../consts';
import { Place } from '../types/data';

const initialState = {
  city: CITIES[0],
  places: placesData,
  currentPlaces: [] as Place[],
};

const reducer = createReducer(initialState, (builer) => {
  builer
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getCurrentPlacesListAction, (state, action) => {
      state.currentPlaces = action.payload;
    });
});

export { reducer };
