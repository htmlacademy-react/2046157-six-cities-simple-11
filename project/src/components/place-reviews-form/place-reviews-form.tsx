import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/store';
import { fetchAddReviewCommentAction } from '../../store/api-actions';

import PlaceReviewsFormRating from '../place-reviews-form-rating/place-reviews-form-rating';

import { RequireSymbolsCount, RatingGradation } from '../../consts';

type RatingGradationType = {
  [key: string]: string;
}

function PlaceReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
    selectedStarPosition: 0,
  });

  function handleFormSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(fetchAddReviewCommentAction({ placeId: id, newComment: { rating: formData.rating, comment: formData.review } }));

    setFormData({
      rating: 0,
      review: '',
      selectedStarPosition: 0,
    });
  }

  function handleFormChange(evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const { value, name } = evt.target;

    if (evt.target.name === 'rating') {
      setFormData({
        ...formData,
        [name]: Number(value),
        selectedStarPosition: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function getRatingStars(ratingObj: RatingGradationType) {
    return Object.entries(ratingObj).map(([ratingIndex, ratingDescription]): JSX.Element => (
      <PlaceReviewsFormRating
        handleRatingChangeEvent={handleFormChange}
        ratingIndex={Number(ratingIndex)}
        ratingDescription={ratingDescription}
        key={ratingIndex}
        selectedStar={formData.selectedStarPosition}
      />
    )).reverse();
  }

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars(RatingGradation)}
      </div>
      <textarea onChange={handleFormChange} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{RequireSymbolsCount.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formData.rating && (formData.review.length >= RequireSymbolsCount.Min && formData.review.length <= RequireSymbolsCount.Max))}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default PlaceReviewsForm;
