import PlaceReviewsForm from '../place-reviews-form/place-reviews-form';
import PlaceReviewsList from '../place-reviews-list/place-reviews-list';

import { User, ReviewComment } from '../../types/data';

type PlaceReviewsProps = {
  user: User;
  reviewComments: ReviewComment[];
}

function PlaceReviews({ user, reviewComments }: PlaceReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewComments.length}</span></h2>
      <PlaceReviewsList reviewComments={reviewComments} />
      {user.id && <PlaceReviewsForm />}
    </section>
  );
}

export default PlaceReviews;
