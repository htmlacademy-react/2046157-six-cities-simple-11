import PlaceCard from '../place-card/place-card';
import { Place } from '../../types/data';

type PlacesNearbyProps = {
  placesNearby: Place[];
}

function PlacesNearby({ placesNearby }: PlacesNearbyProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {placesNearby.map((place) => <PlaceCard place={place} parentClassName={'near-places'} key={place.id} haveListeners={false} />)}
        </div>
      </section>
    </div>
  );
}

export default PlacesNearby;
