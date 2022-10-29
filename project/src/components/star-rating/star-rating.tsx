import { Place } from '../../types/data';

type StarRatingProps = {
  rating: Place['rating'];
  blockName: string;
  showRatingValue: boolean;
}

function StarRating({ rating, blockName, showRatingValue }: StarRatingProps): JSX.Element {
  return (
    <div className={`${blockName}__rating rating`}>
      <div className={`${blockName}__stars rating__stars`}>
        <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showRatingValue && <span className={`${blockName}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default StarRating;
