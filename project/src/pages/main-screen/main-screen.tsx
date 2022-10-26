import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesContent from '../../components/places-content/places-content';
import PlacesContentEmpty from '../../components/places-content-empty/places-content-empty';

import { User, Place } from '../../types/data';

type MainScreenProps = {
  user: User;
  places: Place[];
  placesCount: number;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
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
