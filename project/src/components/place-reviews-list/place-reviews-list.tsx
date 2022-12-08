import PlaceReviewComment from '../place-review-comment/place-review-comment';

import { ReviewComment } from '../../types/data';

type PlaceReviewsListProps = {
  reviewComments: ReviewComment[];
}

function PlaceReviewsList({ reviewComments }: PlaceReviewsListProps): JSX.Element {

  function getComments(comments: ReviewComment[]) {
    const MAX_COMMENTS_COUNT = 10;
    const commentsCount = comments.length;

    const startingIndex = commentsCount > MAX_COMMENTS_COUNT ? commentsCount - (MAX_COMMENTS_COUNT) : 0;

    return comments.filter((comment: ReviewComment, index) => index >= startingIndex)
      .map((comment: ReviewComment) => <PlaceReviewComment reviewComment={comment} key={comment.id} />);
  }

  return (
    <ul className="reviews__list">
      {getComments(reviewComments)}
    </ul>
  );
}

export default PlaceReviewsList;
