import PlaceCard from '../place-card/place-card';

import { Place } from '../../types/data';

type PlaceCardCityProps = {
  place: Place;
  setCurrentPlace: (place: Place | null) => void;
}

function PlaceCardCity({ place, setCurrentPlace }: PlaceCardCityProps): JSX.Element {
  const eventHandlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  function handleMouseEnter() {
    setCurrentPlace(place);
  }

  function handleMouseLeave() {
    setCurrentPlace(null);
  }

  return (
    <PlaceCard parentClassName={'cities'} place={place} eventHandlers={eventHandlers} />
  );
}

export default PlaceCardCity;
