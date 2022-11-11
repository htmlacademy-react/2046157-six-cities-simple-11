import { Helmet } from 'react-helmet-async';

import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import Header from '../../components/header/header';
import PlacesContent from '../../components/places-content/places-content';

import { Place, User, City } from '../../types/data';


type MainScreenProps = {
  places: Place[];
  placesCount: number;
  user: User;
  city: City;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Helmet>
        <title>six cities simple</title>
        <meta name="description" content="Find and rent property in European cities" />
      </Helmet>
      <Header user={props.user} />
      <main className={`page__main page__main--index ${props.places.length ? '' : 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <PlacesContent places={props.places} city={props.city} placesCount={props.placesCount} />
      </main>
    </div>
  );
}

export default MainScreen;
