import { useAppSelector } from '../../hooks/store';
import { getPlacesSortType } from '../../store/places-process/selectors';
import { getDataLoadedSatus, getErrorStatus } from '../../store/places-data/selectors';

import PlaceCard from '../place-card/place-card';
import Preloader from '../preloader/preloader';

import { Place } from '../../types/data';

type PlacesListProps = {
  places: Place[];
}

function getSortedPlaces(type: string, arr: Place[]): Place[] {
  const newArr = [...arr];

  newArr.sort((a: Place, b: Place) => {
    switch (type) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return newArr;
}

function PlacesList({ places }: PlacesListProps): JSX.Element {
  const sortType = useAppSelector(getPlacesSortType);
  const isDataLoaded = useAppSelector(getDataLoadedSatus);
  const hasError = useAppSelector(getErrorStatus);

  function getPlacesList() {
    if (!isDataLoaded && hasError) {
      return <div style={{ color: 'red' }}>Something went wrong!</div>;
    }

    if (!isDataLoaded && !hasError) {
      return <Preloader />;
    }

    return getSortedPlaces(sortType, places).map((place): JSX.Element => <PlaceCard place={place} key={place.id} parentClassName={'cities'} haveListeners />);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {getPlacesList()}
    </div>
  );
}

export default PlacesList;
