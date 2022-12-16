import PlaceReviewComment from '../place-review-comment/place-review-comment';

import { ReviewComment } from '../../types/data';

type PlaceReviewsListProps = {
  reviewComments: ReviewComment[];
}

function getComments(comments: ReviewComment[]) {
  const newArr = [...comments];
  const MAX_COMMENTS_COUNT = 10;

  return newArr.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, MAX_COMMENTS_COUNT)
    .map((comment) => <PlaceReviewComment reviewComment={comment} key={comment.id} />);
}

function PlaceReviewsList({ reviewComments }: PlaceReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {getComments(reviewComments)}
    </ul>
  );
}

export default PlaceReviewsList;
