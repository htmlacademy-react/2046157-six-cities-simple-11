import { useAppDispatch } from '../../hooks/store';

import { selectCityAction } from '../../store/actions';
import { CITIES } from '../../consts';
import { City } from '../../types/data';

import './cities-tabs.css';

type CitiesTabsProps = {
  currentCity: City;
}

function CitiesTabs({ currentCity }: CitiesTabsProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleClick(city: City) {
    dispatch(selectCityAction(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city.name} onClick={() => handleClick(city)}>
              <button className={`locations__item-link tabs__item ${currentCity.name === city.name ? 'tabs__item--active' : ''}`}>
                <span>{city.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
