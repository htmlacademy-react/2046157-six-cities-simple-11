import Header from '../../components/header/header';
import PlaceGalery from '../../components/place-galery/place-galery';
import PlaceHost from '../../components/place-host/place-host';
import PlaceEquipment from '../../components/place-equipment/place-equipment';
import PlaceReviews from '../../components/place-reviews/place-reviews';
import PlacesNearby from '../../components/places-nearby/places-nearby';

import { User, Place } from '../../types/data';

type PlaceScreenProps = {
  user: User;
  place: Place;
}

function PlaceScreen({ place, user }: PlaceScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header user={user} />
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
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${Math.floor(place.rating) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{place.rating}</span>
              </div>
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
              <PlaceReviews user={user} />
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <PlacesNearby />
        </div>
      </main>
    </div>
  );
}

export default PlaceScreen;
