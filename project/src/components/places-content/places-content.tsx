import { Place, City } from '../../types/data';
import PlacesList from '../places-list/places-list';
import PlacesSortTab from '../places-sort-tab/places-sort-tab';

type TestPlacesProps = {
  places: Place[];
  currentCity: City;
  setCurrentPlace: (place: Place | null) => void;
};

function PlacesContent({ places, currentCity, setCurrentPlace }: TestPlacesProps): JSX.Element {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{places.length} places to stay in {currentCity.name}</b>
      <PlacesSortTab />
      <PlacesList places={places} setCurrentPlace={setCurrentPlace} />
    </section>
  );
}

export default PlacesContent;
