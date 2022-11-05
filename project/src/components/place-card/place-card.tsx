import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/paths';

import StarRating from '../star-rating/star-rating';

import { Place } from '../../types/data';

type PlaceCardProps = {
  place: Place;
  setCurrentPlace: (place: Place | object) => void;
}

function PlaceCard({ place, setCurrentPlace }: PlaceCardProps): JSX.Element {

  function handleMouseEvent(e: React.MouseEvent) {
    if (e.type === 'mouseenter') {
      setCurrentPlace(place);
    }

    if (e.type === 'mouseleave') {
      setCurrentPlace({});
    }
  }

  return (
    <article onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent} className="cities__card place-card">
      {place.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Place}/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <StarRating rating={place.rating} blockName={'place-card'} showRatingValue={false} />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Place}/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
