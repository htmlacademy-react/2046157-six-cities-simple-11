import PlaceReviewComment from '../place-review-comment/place-review-comment';
import PlaceReviewForm from '../place-review-form/place-review-form';

import { User } from '../../types/data';

type PlaceReviewsProps = {
  user: User;
}

function PlaceReviews({ user }: PlaceReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <PlaceReviewComment />
      </ul>
      {user.id && <PlaceReviewForm />}
    </section>
  );
}

export default PlaceReviews;
