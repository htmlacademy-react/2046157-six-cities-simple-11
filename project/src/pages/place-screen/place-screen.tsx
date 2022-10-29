import PlaceGalery from '../../components/place-galery/place-galery';
import PlaceHost from '../../components/place-host/place-host';
import PlaceEquipment from '../../components/place-equipment/place-equipment';
import PlaceReviews from '../../components/place-reviews/place-reviews';
import PlacesNearby from '../../components/places-nearby/places-nearby';
import StarRating from '../../components/star-rating/star-rating';

import { User, Place } from '../../types/data';

type PlaceScreenProps = {
  user: User;
  place: Place;
}

function PlaceScreen({ place, user }: PlaceScreenProps): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <PlaceGalery images={place.images} />
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {place.isPremium && <div className="property__mark"><span>Premium</span></div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">{place.title}</h1>
            </div>
            <StarRating rating={place.rating} blockName={'property'} showRatingValue />
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{place.type[0].toLocaleUpperCase() + place.type.slice(1)}</li>
              <li className="property__feature property__feature--bedrooms">{place.bedrooms} Bedrooms</li>
              <li className="property__feature property__feature--adults">{place.maxAdults} Max adults</li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{place.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <PlaceEquipment goods={place.goods} />
            <PlaceHost host={place.host} description={place.description} />
            <PlaceReviews user={user} rating={place.rating} />
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <PlacesNearby />
      </div>
    </main>
  );
}

export default PlaceScreen;
