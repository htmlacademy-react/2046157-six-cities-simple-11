import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../services/token';

import { Place, AuthData, UserData, ReviewComment, NewReviewComment } from '../types/data';
import { APIRoute } from '../consts';

export const fetchPlacesAction = createAsyncThunk<Place[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlaces',
  async (_, { extra: api }) => {
    const { data } = await api.get<Place[]>(APIRoute.Hotels);

    return data;
  },
);

export const fetchPlaceAction = createAsyncThunk<Place, Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlace',
  async (id, { extra: api }) => {
    const { data } = await api.get<Place>(`${APIRoute.Hotels}/${id}`);

    return data;
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<Place[], Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPlacesNearby',
  async (id, { extra: api }) => {
    const { data } = await api.get<Place[]>(`${APIRoute.Hotels}/${id}/nearby`);

    return data;
  },
);

export const fetchReviewCommentsAction = createAsyncThunk<ReviewComment[], Place['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<ReviewComment[]>(`${APIRoute.Comments}/${id}`);

    return data;
  },
);

export const fetchAddReviewCommentAction = createAsyncThunk<ReviewComment[], {
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

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
