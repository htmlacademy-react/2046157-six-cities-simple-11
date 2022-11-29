import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { processErrorHandle } from './process-error-handle';

import { StatusCodeMapping } from '../consts';

const BACKEND_URL = 'https://11.react.pages.academy/six-cities-simple/';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      } else if (error && error.code === 'ECONNABORTED') {
        processErrorHandle(error.message);
      }
      throw error;
    }
  );

  return api;
};
