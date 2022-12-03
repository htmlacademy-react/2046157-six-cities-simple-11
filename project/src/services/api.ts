import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { store } from '../store';
import { setDataLoadingStatusAction } from '../store/actions';
import { getToken } from './token';

import { StatusCodeMapping } from '../consts';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple/';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
        store.dispatch(setDataLoadingStatusAction(true));
      } else if (error && error.code === 'ECONNABORTED') {
        toast.warn(error.message);
        store.dispatch(setDataLoadingStatusAction(true));
      }

      throw error;
    }
  );

  return api;
};
