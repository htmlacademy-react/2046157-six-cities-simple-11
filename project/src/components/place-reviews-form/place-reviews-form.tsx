import { useState } from 'react';

import PlaceReviewsFormRating from '../place-reviews-form-rating/place-reviews-form-rating';

function PlaceReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })
  });

  const minSymbolsCount = 50;

  type RatingGradationType = {
    [key: string]: string;
  }

  const RatingGradation: RatingGradationType = {
    1: 'terribly',
    2: 'badly',
    3: 'not bad',
    4: 'good',
    5: 'perfect'
  } as const;

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    return formData;
  }

  function handleFormChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function getRatingStars(ratingObj: RatingGradationType) {
    return Object.entries(ratingObj).map(([ratingIndex, ratingDescription]): JSX.Element => (
      <PlaceReviewsFormRating
        handleRatingChangeEvent={handleFormChange}
        ratingIndex={ratingIndex}
        ratingDescription={ratingDescription}
        key={ratingIndex}
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
          stay with at least <b className="reviews__text-amount">{minSymbolsCount} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.rating && formData.review.length >= minSymbolsCount)}>Submit</button>
      </div>
    </form>
  );
}

export default PlaceReviewsForm;
