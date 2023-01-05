import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { makeMockAppUser } from '../../test-mocks';
import UserAuthInfo from './user-auth-info';

const mockStore = configureMockStore();

describe('Component: UserAuthInfo', () => {
  it('should render correctly', () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Unknown } });

    render(
      <Provider store={store}>
        <UserAuthInfo userStatus={AuthorizationStatus.Unknown} />
      </Provider>
    );

    expect(screen.getByTestId('header-nav-profile')).toBeInTheDocument();
  });

  it('should render username and user-avatar, when AuthorizationStatus is Auth and have user', () => {
    const userData = makeMockAppUser();
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth, user: userData } });

    render(
      <Provider store={store}>
        <UserAuthInfo userStatus={AuthorizationStatus.Auth} />
      </Provider>
    );

    expect(screen.getByAltText('avatar')).toBeInTheDocument();
    expect(screen.getByAltText('avatar')).toHaveAttribute('src', userData.avatarUrl);

    expect(screen.getByTestId(/header-nav-profile-user/i)).toBeInTheDocument();
    expect(screen.getByTestId(/header-nav-profile-user/i)).toHaveTextContent(userData.email);
  });

  it('should not render username and user-avatar, when AuthorizationStatus is Unknown or NoAuth and no user', () => {
    const store = mockStore({ [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Unknown, user: null } });

    render(
      <Provider store={store}>
        <UserAuthInfo userStatus={AuthorizationStatus.Unknown} />
      </Provider>
    );

    expect(screen.queryByAltText('avatar')).not.toBeInTheDocument();
    expect(screen.queryByTestId(/header-nav-profile-user/i)).not.toBeInTheDocument();
  });
});
