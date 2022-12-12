import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store';
import { fetchPlacesAction } from '../../store/api-actions';
import { useEffect } from 'react';

import Header from '../../components/header/header';
import CityContent from '../../components/city-content/city-content';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlacesAction());
  }, [dispatch]);

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>six cities simple</title>
        <meta name="description" content="Find and rent property in European cities" />
      </Helmet>
      <Header />
      <CityContent />
    </div>
  );
}

export default MainScreen;
