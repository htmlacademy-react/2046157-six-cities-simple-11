import PlaceReviewComment from '../place-review-comment/place-review-comment';
import PlaceReviewsForm from '../place-reviews-form/place-reviews-form';

import { User, Place } from '../../types/data';

type PlaceReviewsProps = {
  user: User;
  rating: Place['rating'];
}

function PlaceReviews({ user, rating }: PlaceReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <PlaceReviewComment rating={rating} />
      </ul>
      {user.id && <PlaceReviewsForm />}
    </section>
  );
}

export default PlaceReviews;
