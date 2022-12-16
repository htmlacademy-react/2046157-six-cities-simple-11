import { createSlice } from '@reduxjs/toolkit';
import { fetchAddReviewCommentAction, fetchNearbyPlacesAction, fetchPlaceAction, fetchReviewCommentsAction } from '../api-actions';

import { NameSpace } from '../../consts';
import { PlaceData } from '../../types/state';

const initialState: PlaceData = {
  place: null,
  placesNearby: [],
  reviewComments: [],
  hasLoaded: false,
};

export const placeData = createSlice({
  name: NameSpace.PlaceData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPlaceAction.pending, (state) => {
        state.hasLoaded = false;
      })
      .addCase(fetchPlaceAction.fulfilled, (state, action) => {
        state.hasLoaded = true;
        state.place = action.payload;
      })
      .addCase(fetchPlaceAction.rejected, (state, action) => {
        state.hasLoaded = true;
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
