import { Link } from 'react-router-dom';

import StarRating from '../star-rating/star-rating';

import { AppRoute } from '../../consts';
import { Place } from '../../types/data';

type PlaceCardProps = {
  place: Place;
  parentClassName: string;
  setCurrentPlace?: (place: Place | null) => void;
}

function PlaceCard({ place, parentClassName, setCurrentPlace }: PlaceCardProps): JSX.Element {
  type EventHandlerType = {
    [key: string]: () => void;
  }

  const eventHandlers: EventHandlerType = {};

  if (setCurrentPlace) {
    eventHandlers.onMouseEnter = function () {
      setCurrentPlace(place);
    };

    eventHandlers.onMouseLeave = function () {
      setCurrentPlace(null);
    };
  }

  return (
    <article {...eventHandlers} className={`${parentClassName}__card place-card`}>
      {place.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${parentClassName}__image-wrapper place-card__image-wrapper`}>
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
