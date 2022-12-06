import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlacesAction, setDataLoadingStatusAction, requireAuthorizationAction, getUserAction, getCurrentPlaceAction, getNearbyPlacesAction, getReviewCommentsAction } from './actions';
import { saveToken, dropToken } from '../services/token';

import { Place, AuthData, UserData, ReviewComment, NewReviewComment } from '../types/data';
import { APIRoute, AuthorizationStatus } from '../consts';

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
      dispatch(setDataLoadingStatusAction(false));

      const { data } = await api.get<Place>(`${APIRoute.Hotels}/${id}`);

      dispatch(getCurrentPlaceAction(data));
      dispatch(setDataLoadingStatusAction(true));
    } catch {
      dispatch(setDataLoadingStatusAction(true));
    }
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<void, Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlacesNearby',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Place[]>(`${APIRoute.Hotels}/${id}/nearby`);

    dispatch(getNearbyPlacesAction(data));
  },
);

export const fetchReviewCommentsAction = createAsyncThunk<void, Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewComment[]>(`${APIRoute.Comments}/${id}`);

    dispatch(getReviewCommentsAction(data));
  },
);

export const fetchAddReviewCommentAction = createAsyncThunk<void, {
  placeId: Place['id'];
  newComment: NewReviewComment;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchAddReviewComment',
  async ({ placeId: id, newComment: { comment, rating } }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewComment[]>(`${APIRoute.Comments}/${id}`, { comment, rating });

    dispatch(getReviewCommentsAction(data));
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
