import { Place } from '../../types/data';

type PlaceFeaturesProps = {
  place: Place;
}

function PlaceFeatures({ place }: PlaceFeaturesProps): JSX.Element {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">{place.type[0].toLocaleUpperCase() + place.type.slice(1)}</li>
      <li className="property__feature property__feature--bedrooms">{place.bedrooms} Bedrooms</li>
      <li className="property__feature property__feature--adults">{place.maxAdults} Max adults</li>
    </ul>
  );
}

export default PlaceFeatures;
