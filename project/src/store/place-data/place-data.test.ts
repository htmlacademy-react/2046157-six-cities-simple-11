import { makeMockPlace, makeMockReviewComment } from '../../test-mocks';
import { fetchAddReviewCommentAction, fetchNearbyPlacesAction, fetchPlaceAction, fetchReviewCommentsAction } from '../api-actions';
import { placeData } from './place-data';

import { ReviewCommentStatus } from '../../consts';

const initialState = placeData.getInitialState();
const place = makeMockPlace();
const placesNearby = [makeMockPlace(), makeMockPlace()];
const reviewComments = [makeMockReviewComment(), makeMockReviewComment()];
const newComment = makeMockReviewComment();

describe('Reducer: placeData', () => {
  it('without additional parameters should return initial state', () => {
    expect(placeData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  describe('Action: fetchPlaceAction', () => {
    it('should update state with new place value and hasLoaded value, when fetchPlaceAction is fullfilled', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchPlaceAction.fulfilled.type, payload: place }))
        .toEqual({ ...initialState, place: place, hasLoaded: true });
    });

    it('should update state with new hasLoaded value, when fetchPlacesAction is rejected', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchPlaceAction.rejected.type }))
        .toEqual({ ...initialState, hasLoaded: true });
    });

    it('should update state with new hasLoaded value, when fetchPlacesAction is pending', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchPlaceAction.pending.type }))
        .toEqual({ ...initialState, hasLoaded: false });
    });
  });

  describe('Action: fetchNearbyPlacesAction', () => {
    it('should update state with new placesNearby value, when fetchNearbyPlacesAction is fullfilled', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchNearbyPlacesAction.fulfilled.type, payload: placesNearby }))
        .toEqual({ ...initialState, placesNearby: placesNearby });
    });
  });

  describe('Action: fetchReviewCommentsAction', () => {
    it('should update state with new reviewComments value, when fetchReviewCommentsAction is fullfilled', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchReviewCommentsAction.fulfilled.type, payload: reviewComments }))
        .toEqual({ ...initialState, reviewComments: reviewComments });
    });
  });

  describe('Action: fetchAddReviewCommentAction', () => {
    it('should update state with new reviewCommentStatus and reviewComments value, when fetchAddReviewCommentAction is fullfilled', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchAddReviewCommentAction.fulfilled.type, payload: newComment }))
        .toEqual({ ...initialState, reviewComments: newComment, reviewCommentStatus: ReviewCommentStatus.Sucess });
    });

    it('should update state with new reviewCommentStatus, when fetchAddReviewCommentAction is rejected', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchAddReviewCommentAction.rejected.type }))
        .toEqual({ ...initialState, reviewCommentStatus: ReviewCommentStatus.Fail });
    });

    it('should update state with new reviewCommentStatus, when fetchAddReviewCommentAction is pending', () => {
      const state = initialState;

      expect(placeData.reducer(state, { type: fetchAddReviewCommentAction.pending.type }))
        .toEqual({ ...initialState, reviewCommentStatus: ReviewCommentStatus.Unknown });
    });
  });

});
