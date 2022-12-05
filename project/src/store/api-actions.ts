import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlacesAction, setDataLoadingStatusAction, requireAuthorizationAction, getUserAction, setCurrentPlaceAction, redirectToRoute } from './actions';
import { saveToken, dropToken } from '../services/token';

import { Place, AuthData, UserData, } from '../types/data';
import { APIRoute, AppRoute, AuthorizationStatus } from '../consts';

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

export const fetchPlaceAction = createAsyncThunk<void, Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlace',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Place>(`${APIRoute.Hotels}/${id}`);
      dispatch(setCurrentPlaceAction(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      dispatch(getUserAction(data));
    } catch {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
      dispatch(getUserAction(null));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });

    saveToken(data.token);
    dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
    dispatch(getUserAction(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);

    dropToken();
    dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    dispatch(getUserAction(null));
  },
);
