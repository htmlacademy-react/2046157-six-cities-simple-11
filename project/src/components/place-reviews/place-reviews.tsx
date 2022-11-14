import PlaceReviewComment from '../place-review-comment/place-review-comment';
import PlaceReviewsForm from '../place-reviews-form/place-reviews-form';
import PlaceReviewsList from '../place-reviews-list/place-reviews-list';

import { User, Place } from '../../types/data';

type PlaceReviewsProps = {
  user: User;
  rating: Place['rating'];
}

function PlaceReviews({ user, rating }: PlaceReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <PlaceReviewsList>
        <PlaceReviewComment rating={rating} />
        <PlaceReviewComment rating={rating} />
      </PlaceReviewsList>
      {user.id && <PlaceReviewsForm />}
    </section>
  );
}

export default PlaceReviews;
