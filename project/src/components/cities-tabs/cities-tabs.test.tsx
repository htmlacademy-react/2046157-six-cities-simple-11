import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CITIES, NameSpace } from '../../consts';
import CitiesTabs from './cities-tabs';
import userEvent from '@testing-library/user-event';

describe('Component: CitiesTabs', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  const store = mockStore({
    [NameSpace.PlacesProcess]: {
      city: CITIES[0]
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <CitiesTabs currentCity={CITIES[0]} />
      </Provider>
    );

    const cityElements = screen.getAllByTestId('cities-tabs-item');

    expect(cityElements.length).toBe(CITIES.length);
  });

  it('should have className "tabs__item--active", when item is currentCity', () => {
    render(
      <Provider store={store}>
        <CitiesTabs currentCity={CITIES[3]} />
      </Provider>
    );

    const cityButtonElements = screen.getAllByRole('button');

    expect(cityButtonElements[3]).toHaveClass('tabs__item--active');
  });

  it('should call selectCity action by click', async () => {
    render(
      <Provider store={store}>
        <CitiesTabs currentCity={CITIES[1]} />
      </Provider>
    );

    const cityElements = screen.getAllByTestId('cities-tabs-item');

    await userEvent.click(cityElements[3]);

    expect(store.getActions()[0].type).toBe('PLACES_PROCESS/selectCity');
  });
});
