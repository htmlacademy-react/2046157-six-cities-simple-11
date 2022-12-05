import StarRating from '../star-rating/star-rating';

import { ReviewComment } from '../../types/data';

type PlaceReviewCommentProps = {
  reviewComment: ReviewComment;
}

function PlaceReviewComment({ reviewComment }: PlaceReviewCommentProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewComment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{reviewComment.user.name}</span>
      </div>
      <div className="reviews__info">
        <StarRating rating={reviewComment.rating} blockName={'reviews'} showRatingValue={false} />
        <p className="reviews__text">{reviewComment.comment}</p>
        <time className="reviews__time" dateTime={reviewComment.date.replace(/T(\S)*/, '')}>
          {new Date(reviewComment.date).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </time>
      </div>
    </li>
  );
}

export default PlaceReviewComment;
