import { useAppSelector } from '../../hooks/store';

import PlaceReviewsForm from '../place-reviews-form/place-reviews-form';
import PlaceReviewsList from '../place-reviews-list/place-reviews-list';

import { ReviewComment } from '../../types/data';

type PlaceReviewsProps = {
  reviewComments: ReviewComment[];
}

function PlaceReviews({ reviewComments }: PlaceReviewsProps): JSX.Element {
  const user = useAppSelector((state) => state.user);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewComments.length}</span></h2>
      <PlaceReviewsList reviewComments={reviewComments} />
      {user && <PlaceReviewsForm />}
    </section>
  );
}

export default PlaceReviews;
