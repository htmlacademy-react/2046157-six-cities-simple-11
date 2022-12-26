import { State } from '../types/state';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { APIRoute } from '../consts';
import { checkAuthAction, fetchAddReviewCommentAction, fetchNearbyPlacesAction, fetchPlaceAction, fetchPlacesAction, fetchReviewCommentsAction, loginAction, logoutAction } from './api-actions';
import { AuthData } from '../types/data';
import { AUTH_TOKEN_KEY_NAME } from '../services/token';
import { makeMockId, makeMockPlace } from '../test-mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should execute checkAuthAction correctly, when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should execute loginAction correctly, when POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.com', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret' });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });

  it('should dispatch fetchPlacesAction when GET /hotels', async () => {
    const mockPlaces = [makeMockPlace(), makeMockPlace(), makeMockPlace(), makeMockPlace()];

    mockAPI
      .onGet(APIRoute.Hotels)
      .reply(200, mockPlaces);

    const store = mockStore();

    await store.dispatch(fetchPlacesAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPlacesAction.pending.type,
      fetchPlacesAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchPlaceAction when GET /hotels/:id', async () => {
    const mockPlace = makeMockPlace();
    const mockId = makeMockId();

    mockAPI
      .onGet(`${APIRoute.Hotels}/${mockId}`)
      .reply(200, mockPlace);

    const store = mockStore();

    await store.dispatch(fetchPlaceAction(mockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPlaceAction.pending.type,
      fetchPlaceAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchNearbyPlacesAction when GET /hotels/:id/nearby', async () => {
    const mockNearbyPlaces = [makeMockPlace(), makeMockPlace(), makeMockPlace(), makeMockPlace()];
    const mockId = makeMockId();

    mockAPI
      .onGet(`${APIRoute.Hotels}/${mockId}/nearby`)
      .reply(200, mockNearbyPlaces);

    const store = mockStore();

    await store.dispatch(fetchNearbyPlacesAction(mockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchNearbyPlacesAction.pending.type,
      fetchNearbyPlacesAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchReviewCommentsAction when GET /comments/:id', async () => {
    const mockId = makeMockId();

    mockAPI
      .onGet(`${APIRoute.Comments}/${mockId}`)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(fetchReviewCommentsAction(mockId));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchReviewCommentsAction.pending.type,
      fetchReviewCommentsAction.fulfilled.type,
    ]);
  });

  it('should dispatch fetchAddReviewCommentAction when POST /comments/:id', async () => {
    const mockId = makeMockId();
    const mockComment = {
      placeId: mockId, newComment: { rating: 1, comment: 'test' }
    };

    mockAPI
      .onPost(`${APIRoute.Comments}/${mockId}`)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(fetchAddReviewCommentAction(mockComment));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchAddReviewCommentAction.pending.type,
      fetchAddReviewCommentAction.fulfilled.type,
    ]);
  });
});

