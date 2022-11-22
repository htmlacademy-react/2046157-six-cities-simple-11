import { createReducer } from '@reduxjs/toolkit';
import { selectCityAction, getPlacesAction } from '../store/actions';

import { CITIES } from '../consts';
import { Place } from '../types/data';

const initialState = {
  city: CITIES[0],
  places: [] as Place[],
};

const reducer = createReducer(initialState, (builer) => {
  builer
    .addCase(selectCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getPlacesAction, (state, action) => {
      state.places = action.payload;
    });
});

export { reducer };
