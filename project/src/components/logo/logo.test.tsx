import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    expect(screen.getByRole('img')).toHaveAccessibleName(/6 cities logo/i);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    render(
      <MemoryRouter initialEntries={['/not-main-page']}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<h1>This is main page</h1>}
          />
          <Route
            path='/not-main-page'
            element={<Logo />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
