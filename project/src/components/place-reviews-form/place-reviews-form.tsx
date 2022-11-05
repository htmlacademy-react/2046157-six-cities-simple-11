import { useState } from 'react';

import PlaceReviewsFormRating from '../place-reviews-form-rating/place-reviews-form-rating';

function PlaceReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    date: new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })
  });

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

  function handleSubmitEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFormData({
      ...formData,
    });

    return formData;
  }

  function handleChangeEvent(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function getRatingStars() {
    const stars = [];

    for (const ratingIndex in RatingGradation) {
      stars.push(
        <PlaceReviewsFormRating
          handleRatingChangeEvent={handleChangeEvent}
          ratingIndex={ratingIndex}
          ratingValue={RatingGradation[ratingIndex]}
          key={ratingIndex}
        />
      );
    }

    return stars.reverse();
  }

  return (
    <form onSubmit={handleSubmitEvent} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars()}
      </div>
      <textarea onChange={handleChangeEvent} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.rating && formData.review.length >= 50)}>Submit</button>
      </div>
    </form>
  );
}

export default PlaceReviewsForm;
