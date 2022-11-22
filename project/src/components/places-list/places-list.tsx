import PlacesSortTab from '../places-sort-tab/places-sort-tab';
import PlaceCard from '../place-card/place-card';

import { City, Place } from '../../types/data';

type PlacesListProps = {
  places: Place[];
  setCurrentPlace: (place: Place | null) => void;
  currentCity: City;
}

function PlacesList({ currentCity, places, setCurrentPlace }: PlacesListProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places.length} places to stay in {currentCity.name}</b>
      <PlacesSortTab />
      <div className="cities__places-list places__list tabs__content">
        {places.map((place): JSX.Element => <PlaceCard place={place} key={place.id} setCurrentPlace={setCurrentPlace} parentClassName={'cities'} />)}
      </div>
    </section>
  );
}

export default PlacesList;
