import { useAppSelector } from '../../hooks/store';
import { getCity } from '../../store/places-process/selectors';
import { getPlaces } from '../../store/places-data/selectors';

import CityPlaces from '../city-places/city-places';
import CitiesTabs from '../cities-tabs/cities-tabs';

function CityContent(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const places = useAppSelector(getPlaces);
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
