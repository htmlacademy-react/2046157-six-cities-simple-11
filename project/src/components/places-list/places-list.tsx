import { useState } from 'react';

import PlaceCard from '../place-card/place-card';
import PlacesSortTab from '../places-sort-tab/places-sort-tab';
import Map from '../map/map';

import { Place, City } from '../../types/data';

type PlacesListProps = {
  placesCount: number;
  places: Place[];
  city: City;
}

function PlacesList(props: PlacesListProps): JSX.Element {
  const [currentPlace, setCurrentPlace] = useState<Place | null>(null);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{props.placesCount} places to stay in Amsterdam</b>
        <PlacesSortTab />
        <div className="cities__places-list places__list tabs__content">
          {props.places.map((place): JSX.Element => <PlaceCard place={place} key={place.id} setCurrentPlace={setCurrentPlace} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <Map places={props.places} currentPlace={currentPlace} city={props.city} />
      </div>
    </>
  );
}

export default PlacesList;
