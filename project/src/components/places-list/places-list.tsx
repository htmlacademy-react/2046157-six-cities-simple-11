import { useAppSelector } from '../../hooks/store';

import PlaceCard from '../place-card/place-card';

import { Place } from '../../types/data';

type PlacesListProps = {
  places: Place[];
}

function PlacesList({ places }: PlacesListProps): JSX.Element {
  const sortType = useAppSelector((state) => state.placesSortType);

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

  return (
    <div className="cities__places-list places__list tabs__content">
      {getSortedPlaces(sortType, places).map((place): JSX.Element => <PlaceCard place={place} key={place.id} parentClassName={'cities'} haveListeners />)}
    </div>
  );
}

export default PlacesList;
