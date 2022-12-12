import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CITIES, NameSpace, placesSortTypes } from '../../consts';
import { City, Place } from '../../types/data';
import { PlacesProcess } from '../../types/state';

const initialState: PlacesProcess = {
  placesSortType: placesSortTypes[0],
  city: CITIES[0],
  currentPlace: null,
};

export const placesProcess = createSlice({
  name: NameSpace.PlacesProcess,
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },

    setSortType: (state, action: PayloadAction<string>) => {
      state.placesSortType = action.payload;
    },

    setCurrentPlace: (state, action: PayloadAction<Place | null>) => {
      state.currentPlace = action.payload;
    },
  },
});

export const { selectCity, setSortType, setCurrentPlace } = placesProcess.actions;
