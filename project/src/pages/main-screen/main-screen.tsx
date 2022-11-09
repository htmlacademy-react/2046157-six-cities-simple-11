import { Helmet } from 'react-helmet-async';

import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesList from '../../components/places-list/places-list';
import PlacesListEmpty from '../../components/places-list-empty/places-list-empty';
import Header from '../../components/header/header';

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
        <div className="cities">
          <div className={`cities__places-container ${props.places.length ? '' : 'cities__places-container--empty'} container`}>
            {props.places.length ?
              <PlacesList placesCount={props.placesCount} places={props.places} city={props.city} /> :
              <PlacesListEmpty />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
