import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import PlacesContent from '../../components/places-content/places-content';
import EmptyPlacesList from '../../components/emty-places-list/empty-places-list';

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
            <EmptyPlacesList />}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
