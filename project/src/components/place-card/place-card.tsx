import { Place } from '../../types/data';

type PlaceCardProps = {
  place: Place;
}

function PlaceCard({ place }: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      {place.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getPercentRating(place.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{place.title}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

function getPercentRating(rating: number): number {
  return Math.floor(rating) * 100 / 5;
}

export default PlaceCard;
