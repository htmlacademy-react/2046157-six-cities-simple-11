import { useAppSelector } from '../../hooks/store';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getReviewComments } from '../../store/place-data/selectors';

import PlaceReviewsForm from '../place-reviews-form/place-reviews-form';
import PlaceReviewsList from '../place-reviews-list/place-reviews-list';

import { AuthorizationStatus } from '../../consts';

function PlaceReviews(): JSX.Element {
  const userStatus = useAppSelector(getAuthorizationStatus);
  const reviewComments = useAppSelector(getReviewComments);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewComments.length}</span></h2>
      <PlaceReviewsList reviewComments={reviewComments} />
      {userStatus === AuthorizationStatus.Auth && <PlaceReviewsForm />}
    </section>
  );
}

export default PlaceReviews;
