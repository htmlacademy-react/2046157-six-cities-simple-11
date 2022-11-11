import PlaceCard from '../place-card/place-card';

import { placesNearby } from '../../mocks/places-nearby';

function PlacesNearby(): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {placesNearby.map((place) => <PlaceCard place={place} classNameWrapper={'near-places'} key={place.id} />)}
      </div>
    </section>
  );
}

export default PlacesNearby;
