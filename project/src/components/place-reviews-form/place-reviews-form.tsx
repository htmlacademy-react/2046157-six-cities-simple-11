import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchAddReviewCommentAction } from '../../store/api-actions';
import { getReviewCommentStatus } from '../../store/place-data/selectors';

import PlaceReviewsFormRating from '../place-reviews-form-rating/place-reviews-form-rating';

import { RequireSymbolsCount, RatingGradation, ReviewCommentStatus } from '../../consts';

type RatingGradationType = {
  [key: string]: string;
}

function isFormValid(comment: string, rating: number) {
  const commentLength = comment.trim().length;

  return rating && (commentLength >= RequireSymbolsCount.Min && commentLength <= RequireSymbolsCount.Max);
}

function PlaceReviewsForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);
  const reviewCommentStatus = useAppSelector(getReviewCommentStatus);

  const [isBlocked, setIsBlocked] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  useEffect(() => {
    if (reviewCommentStatus !== ReviewCommentStatus.Unknown) {
      setIsBlocked(false);
    }

    if (reviewCommentStatus === ReviewCommentStatus.Sucess) {
      setFormData({ rating: 0, review: '' });
    }

  }, [reviewCommentStatus]);

  function handleFormSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    setIsBlocked(true);

    dispatch(fetchAddReviewCommentAction({ placeId: id, newComment: { rating: formData.rating, comment: formData.review } }));
  }

  function handleFormChange(evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const { value, name } = evt.target;

    setFormData({
      ...formData,
      [name]: evt.target.name === 'rating' ? Number(value) : value,
    });
  }

  function getRatingStars(ratingObj: RatingGradationType) {
    return Object.entries(ratingObj).map(([ratingIndex, ratingDescription]): JSX.Element => (
      <PlaceReviewsFormRating
        handleRatingChangeEvent={handleFormChange}
        ratingIndex={Number(ratingIndex)}
        ratingDescription={ratingDescription}
        key={ratingIndex}
        checked={formData.rating === Number(ratingIndex)}
        disabled={isBlocked}
      />
    )).reverse();
  }

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars(RatingGradation)}
      </div>
      <textarea disabled={isBlocked} onChange={handleFormChange} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">{RequireSymbolsCount.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isBlocked || !isFormValid(formData.review, formData.rating)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default PlaceReviewsForm;
