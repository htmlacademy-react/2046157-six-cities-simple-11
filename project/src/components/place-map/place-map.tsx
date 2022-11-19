import Map from '../map/map';

import { City, Place } from '../../types/data';

type PlaceMapProps = {
  places: Place[];
  currentPlace: Place;
  city: City;
  parentClassName: string;
  scrollZoom?: boolean;
}

function PlaceMap(props: PlaceMapProps): JSX.Element {
  const { places, ...restProps } = props;
  const allPlaces = [props.currentPlace, ...places];

  return <Map places={allPlaces} {...restProps} />;
}

export default PlaceMap;
