import { store } from '../store';
import { setDataLoadingStatusAction, setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
  store.dispatch(setDataLoadingStatusAction(true));
};
