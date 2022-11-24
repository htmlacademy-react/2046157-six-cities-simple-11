import { useAppSelector } from '../../hooks/store';

import CityPlaces from '../city-places/city-places';
import CitiesTabs from '../cities-tabs/cities-tabs';

function CityContent(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const places = useAppSelector((state) => state.places);

  const cityPlaces = places.filter((place) => place.city.name === currentCity.name);

  return (
    <main className={`page__main page__main--index ${cityPlaces.length ? '' : 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesTabs currentCity={currentCity} />
      <CityPlaces places={cityPlaces} currentCity={currentCity} />
    </main>
  );
}

export default CityContent;
