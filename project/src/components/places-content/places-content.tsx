import PlaceCard from '../place-card/place-card';
import PlacesSortTab from '../places-sort-tab/places-sort-tab';

import { Place } from '../../types/data';

type PlacesListProps = {
  placesCount: number;
  places: Place[];
}

function PlacesContent(props: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{props.placesCount} places to stay in Amsterdam</b>
        <PlacesSortTab />
        <div className="cities__places-list places__list tabs__content">
          {props.places.map((place): JSX.Element => <PlaceCard place={place} key={place.id} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}

export default PlacesContent;
