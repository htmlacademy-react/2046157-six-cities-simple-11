type PlaceReviewsListProps = {
  children: JSX.Element[];
}

function PlaceReviewsList({ children }: PlaceReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{children.length}</span></h2>
      <ul className="reviews__list">
        {children}
      </ul>
    </>
  );
}

export default PlaceReviewsList;
