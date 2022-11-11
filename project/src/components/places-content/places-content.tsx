import { useState } from 'react';

import PlacesListEmpty from '../places-list-empty/places-list-empty';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';

import { City, Place } from '../../types/data';

type PlacesContentProps = {
  places: Place[];
  city: City;
  placesCount: number;
}

function PlacesContent(props: PlacesContentProps): JSX.Element {
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);

  return (
    <div className="cities">
      <div className={`cities__places-container ${props.places.length ? '' : 'cities__places-container--empty'} container`}>
        {props.places.length
          ? <PlacesList placesCount={props.placesCount} places={props.places} setCurrentPlace={setCurrentPlace} />
          : <PlacesListEmpty />}
        <div className="cities__right-section">
          {props.places.length && <Map places={props.places} city={props.city} currentPlace={currentPlace} />}
        </div>
      </div>
    </div>
  );
}

export default PlacesContent;
