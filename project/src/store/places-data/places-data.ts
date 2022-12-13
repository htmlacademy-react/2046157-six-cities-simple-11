import { createSlice } from '@reduxjs/toolkit';
import { fetchPlacesAction } from '../api-actions';

import { NameSpace } from '../../consts';
import { PlacesData } from '../../types/state';

const initialState: PlacesData = {
  currentPlace: null,
  places: [],
  isDataLoaded: false,
  hasError: false,
};

export const placesData = createSlice({
  name: NameSpace.PlacesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlacesAction.pending, (state) => {
        state.isDataLoaded = false;
        state.hasError = false;
      })
      .addCase(fetchPlacesAction.fulfilled, (state, action) => {
        state.places = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchPlacesAction.rejected, (state) => {
        state.isDataLoaded = false;
        state.hasError = true;
      });
  }
});
