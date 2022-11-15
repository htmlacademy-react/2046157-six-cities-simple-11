import PlacesSortTab from '../places-sort-tab/places-sort-tab';
import PlaceCard from '../place-card/place-card';

import { Place } from '../../types/data';

type PlacesListProps = {
  placesCount: number;
  places: Place[];
  setCurrentPlace: (place: Place | null) => void;
}

function PlacesList(props: PlacesListProps): JSX.Element {

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{props.placesCount} places to stay in Amsterdam</b>
      <PlacesSortTab />
      <div className="cities__places-list places__list tabs__content">
        {props.places.map((place): JSX.Element => <PlaceCard place={place} key={place.id} setCurrentPlace={props.setCurrentPlace} parentClassName={'cities'} />)}
      </div>
    </section>
  );
}

export default PlacesList;
