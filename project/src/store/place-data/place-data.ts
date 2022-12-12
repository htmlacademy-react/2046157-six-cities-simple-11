import { createSlice } from '@reduxjs/toolkit';
import { fetchAddReviewCommentAction, fetchNearbyPlacesAction, fetchPlaceAction, fetchReviewCommentsAction } from '../api-actions';

import { NameSpace } from '../../consts';
import { PlaceData } from '../../types/state';

const initialState: PlaceData = {
  place: null,
  placesNearby: [],
  reviewComments: [],
  hasError: false,
};

export const placeData = createSlice({
  name: NameSpace.PlaceData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlaceAction.pending, (state) => {
        state.hasError = false;
      })
      .addCase(fetchPlaceAction.fulfilled, (state, action) => {
        state.place = action.payload;
      })
      .addCase(fetchPlaceAction.rejected, (state, action) => {
        state.hasError = action.error.message;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.placesNearby = action.payload;
      })
      .addCase(fetchReviewCommentsAction.fulfilled, (state, action) => {
        state.reviewComments = action.payload;
      })
      .addCase(fetchAddReviewCommentAction.fulfilled, (state, action) => {
        state.reviewComments = action.payload;
      });
  }
});
