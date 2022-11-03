import { Helmet } from 'react-helmet-async';

import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesContent from '../../components/places-content/places-content';
import PlacesContentEmpty from '../../components/places-content-empty/places-content-empty';
import Header from '../../components/header/header';

import { Place, User } from '../../types/data';

type MainScreenProps = {
  places: Place[];
  placesCount: number;
  user: User;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <meta name="description" content="Find and rent property in European cities" />
      </Helmet>
      <Header user={props.user} />
      <main className={`page__main page__main--index ${props.places.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities">
          {props.places.length ?
            <PlacesContent placesCount={props.placesCount} places={props.places} /> :
            <PlacesContentEmpty />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
