import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/paths';

function CitiesTabs(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>Paris</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>Cologne</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>Brussels</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>Hamburg</span>
            </Link>
          </li>
          <li className="locations__item">
            <Link to={AppRoute.Root} className="locations__item-link tabs__item">
              <span>Dusseldorf</span>
            </Link>
          </li>
        </ul>
      </section>
    </div >
  );
}

export default CitiesTabs;