import { useAppSelector } from '../../hooks/store';
import { getCity } from '../../store/places-process/selectors';
import { getFilteredPlaces } from '../../store/places-data/selectors';

import CityPlaces from '../city-places/city-places';
import CitiesTabs from '../cities-tabs/cities-tabs';

function CityContent(): JSX.Element {
  const currentCity = useAppSelector(getCity);
  const cityPlaces = useAppSelector(getFilteredPlaces);

  return (
    <main className={`page__main page__main--index ${cityPlaces.length ? '' : 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <CitiesTabs currentCity={currentCity} />
      <CityPlaces places={cityPlaces} currentCity={currentCity} />
    </main>
  );
}

export default CityContent;
