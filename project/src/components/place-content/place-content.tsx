import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store';
import { getNearbyPlaces } from '../../store/place-data/selectors';
import { Place } from '../../types/data';

import PlaceEquipment from '../place-equipment/place-equipment';
import PlaceFeatures from '../place-features/place-features';
import PlaceGallery from '../place-gallery/place-gallery';
import PlaceHost from '../place-host/place-host';
import PlaceMap from '../place-map/place-map';
import PlaceReviews from '../place-reviews/place-reviews';
import PlacesNearby from '../places-nearby/places-nearby';
import StarRating from '../star-rating/star-rating';

type PlaceContentProps = {
  place: Place | null;
}

function PlaceContent({ place }: PlaceContentProps): JSX.Element | null {
  const placesNearby = useAppSelector(getNearbyPlaces);

  return (
    place &&
    <main className="page__main page__main--property">
      <Helmet>
        <title>{place.title}</title>
        <meta name="descripton" content={place.description}></meta>
      </Helmet>
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
            <PlaceReviews />
          </div>
        </div>
        <div className="container">
          <PlaceMap
            places={placesNearby}
            city={place.city}
            currentPlace={place}
            parentClassName={'property'}
            scrollZoom={false}
          />
        </div>
      </section>
      <PlacesNearby placesNearby={placesNearby} />
    </main>
  );
}

export default PlaceContent;
