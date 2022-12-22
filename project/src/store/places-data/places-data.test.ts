import { makeMockPlace } from '../../test-mocks';
import { fetchPlacesAction } from '../api-actions';
import { placesData } from './places-data';

const initialState = placesData.getInitialState();
const places = [makeMockPlace(), makeMockPlace(), makeMockPlace(), makeMockPlace(),];

describe('Reducer: placesData', () => {
  it('without additional parameters should return initial state', () => {
    expect(placesData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should update state with new places value and isDataloaded value, when fetchPlacesAction is fullfilled', () => {
    const state = initialState;

    expect(placesData.reducer(state, { type: fetchPlacesAction.fulfilled.type, payload: places }))
      .toEqual({ ...initialState, places: places, isDataLoaded: true });
  });

  it('should set hasError flag, when fetchPlacesAction is rejected', () => {
    const state = initialState;

    expect(placesData.reducer(state, { type: fetchPlacesAction.rejected.type }))
      .toEqual({ ...initialState, hasError: true });
  });

  it('should set hasError flag and isDataloaded value, when fetchPlacesAction is pending', () => {
    const state = initialState;

    expect(placesData.reducer(state, { type: fetchPlacesAction.pending.type }))
      .toEqual({ ...initialState, hasError: false, isDataLoaded: false });
  });
});
