import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../consts';
import HeaderNav from './header-nav';

describe('Component: HeaderNav', () => {
  const mockStore = configureMockStore();
  it('should render correctly', () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Unknown } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav-profile')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render Link with text "Sign in", if AuthorizationStatus is not Auth', () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render Link with text "Sign out", if AuthorizationStatus is Auth', () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should redirect to login url when user clicked to link "Sign in"', async () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={<h1>This is login page</h1>}
            />
            <Route
              path='/'
              element={<HeaderNav />}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/This is login page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });
});
