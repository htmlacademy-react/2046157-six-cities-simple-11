import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/store';
import { fetchPlacesAction } from '../../store/api-actions';

import Header from '../../components/header/header';
import CityContent from '../../components/city-content/city-content';

import { User } from '../../types/data';

type MainScreenProps = {
  user: User;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(fetchPlacesAction());

  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>six cities simple</title>
        <meta name="description" content="Find and rent property in European cities" />
      </Helmet>
      <Header user={props.user} />
      <CityContent />
    </div>
  );
}

export default MainScreen;
