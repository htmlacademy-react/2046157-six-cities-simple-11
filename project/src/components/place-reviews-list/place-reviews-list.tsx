import PlaceReviewComment from '../place-review-comment/place-review-comment';

import { ReviewComment } from '../../types/data';

type PlaceReviewsListProps = {
  reviewComments: ReviewComment[];
}

function PlaceReviewsList({ reviewComments }: PlaceReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewComments.map((comment) => <PlaceReviewComment reviewComment={comment} key={comment.id} />)}
    </ul>
  );
}

export default PlaceReviewsList;
