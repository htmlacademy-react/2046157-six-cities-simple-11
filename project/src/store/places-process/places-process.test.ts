import { placesProcess } from './places-process';
import { selectCity, setSortType, setCurrentPlace } from './places-process';

import { makeMockCity, makeMockPlace, makeMockSortType } from '../../test-mocks';

const initialState = placesProcess.getInitialState();
const city = makeMockCity();
const sortType = makeMockSortType();
const currentPlace = makeMockPlace();

describe('Reducer: placesProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(placesProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  describe('Action: selectCity', () => {
    it('should update state with new city value', () => {
      const state = initialState;

      expect(placesProcess.reducer(state, selectCity(city)))
        .toEqual({ ...state, city: city });
    });
  });

  describe('Action: setSortType', () => {
    it('should update state with new placesSortType value', () => {
      const state = initialState;

      expect(placesProcess.reducer(state, setSortType(sortType)))
        .toEqual({ ...state, placesSortType: sortType });
    });
  });

  describe('Action: setCurrentPlace', () => {
    it('should update state with new currentPlace value', () => {
      const state = initialState;

      expect(placesProcess.reducer(state, setCurrentPlace(currentPlace)))
        .toEqual({ ...state, currentPlace: currentPlace });
    });

    it('should update state with null value, when argument is null', () => {
      const state = initialState;

      expect(placesProcess.reducer(state, setCurrentPlace(null)))
        .toEqual({ ...state, currentPlace: null });
    });
  });
});
