import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlaceGallery from '../../components/place-gallery/place-gallery';
import PlaceHost from '../../components/place-host/place-host';
import PlaceEquipment from '../../components/place-equipment/place-equipment';
import PlaceReviews from '../../components/place-reviews/place-reviews';
import PlacesNearby from '../../components/places-nearby/places-nearby';
import StarRating from '../../components/star-rating/star-rating';
import PlaceFeatures from '../../components/place-features/place-features';
import PlaceMap from '../../components/place-map/place-map';

import { placesNearby } from '../../mocks/places-nearby';
import { city } from '../../mocks/city';
import { reviewComment } from '../../mocks/review-comments';

import { User, Place } from '../../types/data';

type PlaceScreenProps = {
  user: User;
  places: Place[];
}

function PlaceScreen({ places, user }: PlaceScreenProps): JSX.Element {
  const id = Number(useParams().id);
  const place = places.find((element) => element.id === id);

  if (!place) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>{place.title}</title>
        <meta name="descripton" content={place.description}></meta>
      </Helmet>
      <Header user={user} />
      <main className="page__main page__main--property">
        <section className="property">
          <PlaceGallery images={place.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {place.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{place.title}</h1>
              </div>
              <StarRating rating={place.rating} blockName={'property'} showRatingValue />
              <PlaceFeatures place={place} />
              <div className="property__price">
                <b className="property__price-value">&euro;{place.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PlaceEquipment goods={place.goods} />
              <PlaceHost host={place.host} description={place.description} />
              <PlaceReviews user={user} reviewComments={reviewComment} />
            </div>
          </div>
          <div className="container">
            <PlaceMap
              places={placesNearby}
              city={city}
              currentPlace={place}
              parentClassName={'property'}
              scrollZoom={false}
            />
          </div>
        </section>
        <PlacesNearby placesNearby={placesNearby} />
      </main>
    </div>
  );
}

export default PlaceScreen;
