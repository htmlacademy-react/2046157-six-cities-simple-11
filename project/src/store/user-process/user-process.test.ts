import { AuthorizationStatus } from '../../consts';
import { makeMockAppUser } from '../../test-mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';

const initialState = userProcess.getInitialState();
const user = makeMockAppUser();

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  describe('Action: checkAuthAction', () => {
    it('should update authorizationStatus to "AUTH" and set user, when checkAuthAction is fullfilled', () => {
      const state = initialState;

      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: user }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, user: user });
    });

    it('should update authorizationStatus to "NO_AUTH" and set user, when checkAuthAction is rejected', () => {
      const state = initialState;

      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({ user: null, authorizationStatus: AuthorizationStatus.NoAuth });
    });
  });

  describe('Action: loginAction', () => {
    it('should update authorizationStatus to "AUTH" and set user, when loginAction is fullfilled', () => {
      const state = initialState;

      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: user }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, user: user });
    });

    it('should update authorizationStatus to "NO_AUTH" and set user, when loginAction is rejected', () => {
      const state = initialState;

      expect(userProcess.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({ user: null, authorizationStatus: AuthorizationStatus.NoAuth });
    });
  });

  describe('Action: logoutAction', () => {
    it('should update authorizationStatus to "NO_AUTH" and reset user, when logoutAction is fullfilled', () => {
      const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };

      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.NoAuth, user: null });
    });

    it('should do not change authorizationStatus and do not reset user if logoutAction is rejected', () => {
      const state = { authorizationStatus: AuthorizationStatus.Auth, user: user };

      expect(userProcess.reducer(state, { type: logoutAction.rejected.type }))
        .toEqual({ authorizationStatus: AuthorizationStatus.Auth, user: user });
    });
  });
});
