import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlacesAction, setDataLoadingStatusAction, setError } from './actions';
import { store } from './';

import { Place } from '../types/data';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../consts';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchPlacesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlaces',
  async (_, { dispatch, extra: api }) => {
    dispatch(setDataLoadingStatusAction(false));
    const { data } = await api.get<Place[]>(APIRoute.Hotels);
    dispatch(getPlacesAction(data));
    dispatch(setDataLoadingStatusAction(true));
  },
);
