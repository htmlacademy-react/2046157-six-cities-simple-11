import { useAppSelector } from '../../hooks/store';
import { getDataLoadedSatus } from '../../store/places-data/selectors';

import PlacesContentEmpty from '../places-content-empty/places-content-empty';
import PlacesContent from '../places-content/places-content';
import Map from '../map/map';

import { City, Place } from '../../types/data';

type CityPlacesProps = {
  places: Place[];
  currentCity: City;
}

function CityPlaces({ places, currentCity }: CityPlacesProps): JSX.Element {
  const isDataLoaded = useAppSelector(getDataLoadedSatus);

  return (
    <div className="cities">
      <div className={`cities__places-container ${isDataLoaded && !places.length ? 'cities__places-container--empty' : ''} container`}>
        {isDataLoaded && !places.length
          ? <PlacesContentEmpty city={currentCity} />
          : <PlacesContent places={places} currentCity={currentCity} />}
        <div className="cities__right-section">
          {
            (places.length !== 0) &&
            <Map
              places={places}
              city={currentCity}
              parentClassName={'cities'}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default CityPlaces;
