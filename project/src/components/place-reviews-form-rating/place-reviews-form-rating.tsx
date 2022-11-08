type PlaceReviewsFormRatingProps = {
  ratingDescription: string;
  ratingIndex: string;
  handleRatingChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PlaceReviewsFormRating({ ratingIndex, ratingDescription, handleRatingChangeEvent }: PlaceReviewsFormRatingProps) {
  return (
    <>
      <input onChange={handleRatingChangeEvent} className="form__rating-input visually-hidden" name="rating" value={ratingIndex} id={`${ratingIndex}-stars`} type="radio" />
      <label htmlFor={`${ratingIndex}-stars`} className="reviews__rating-label form__rating-label" title={ratingDescription}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default PlaceReviewsFormRating;
