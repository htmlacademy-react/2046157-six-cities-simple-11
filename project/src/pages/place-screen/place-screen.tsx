import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { fetchNearbyPlacesAction, fetchPlaceAction, fetchReviewCommentsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getErrorStatus } from '../../store/place-data/selectors';

import Header from '../../components/header/header';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PlaceContent from '../../components/place-content/place-content';

function PlaceScreen(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const hasError = useAppSelector(getErrorStatus);
  const id = Number(useParams().id);

  useEffect(() => {
    if (id) {
      dispatch(fetchPlaceAction(id));
      dispatch(fetchReviewCommentsAction(id));
      dispatch(fetchNearbyPlacesAction(id));
    }
  }, [dispatch, id]);

  return (hasError === 'Request failed with status code 404')
    ? (<NotFoundScreen />)
    : (
      <div className="page">
        <Header />
        <PlaceContent />
      </div>
    );
}

export default PlaceScreen;
