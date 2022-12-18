type PlaceReviewsFormRatingProps = {
  ratingDescription: string;
  ratingIndex: number;
  handleRatingChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled: boolean;
}

function PlaceReviewsFormRating({ ratingIndex, ratingDescription, handleRatingChangeEvent, checked, disabled }: PlaceReviewsFormRatingProps) {
  return (
    <>
      <input
        checked={checked}
        onChange={handleRatingChangeEvent}
        className="form__rating-input visually-hidden"
        name="rating" value={ratingIndex}
        id={`${ratingIndex}-stars`}
        type="radio"
        disabled={disabled}
      />
      <label htmlFor={`${ratingIndex}-stars`} className="reviews__rating-label form__rating-label" title={ratingDescription}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default PlaceReviewsFormRating;
