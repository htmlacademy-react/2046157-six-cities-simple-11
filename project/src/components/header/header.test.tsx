import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRoute, NameSpace } from '../../consts';
import Header from './header';

const mockStore = configureMockStore();
const store = mockStore({ [NameSpace.User]: {} });

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });

  it('should display header-nav, if current page isn`t login-screen', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${AppRoute.Root}`]}>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });

  it('should not display header-nav, if current page is login-screen', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`${AppRoute.Login}`]}>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryByTestId('header-nav')).not.toBeInTheDocument();
  });
});
