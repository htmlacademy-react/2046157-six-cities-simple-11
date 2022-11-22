import { useState } from 'react';

import PlacesListEmpty from '../places-list-empty/places-list-empty';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';

import { City, Place } from '../../types/data';

type CityPlacesProps = {
  places: Place[];
  currentCity: City;
}

function CityPlaces({ places, currentCity }: CityPlacesProps): JSX.Element {
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);

  return (
    <div className="cities">
      <div className={`cities__places-container ${places.length ? '' : 'cities__places-container--empty'} container`}>
        {places.length
          ? <PlacesList places={places} setCurrentPlace={setCurrentPlace} currentCity={currentCity} />
          : <PlacesListEmpty />}
        <div className="cities__right-section">
          {
            places.length &&
            <Map
              places={places}
              city={currentCity}
              currentPlace={currentPlace}
              parentClassName={'cities'}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default CityPlaces;
