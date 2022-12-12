import { useRef, useEffect } from 'react';
import { Icon, Layer, Marker } from 'leaflet';
import { useAppSelector } from '../../hooks/store';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { getCurrentPlace } from '../../store/places-process/selectors';

import { City, Place } from '../../types/data';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';


type MapProps = {
  places: Place[];
  city: City;
  parentClassName: string;
  scrollZoom?: boolean;
  currentPlace?: Place;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ places, city, parentClassName, currentPlace, scrollZoom }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers = useRef<Layer[]>([]);
  const currentPlaceFromState = useAppSelector(getCurrentPlace);
  const targetPlace = currentPlace ? currentPlace : currentPlaceFromState;

  useEffect(() => {
    if (map) {
      places.forEach((place: Place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            targetPlace !== null && place.id === targetPlace.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        markers.current.push(marker);
      });

      if (scrollZoom !== undefined && !scrollZoom) {
        map.scrollWheelZoom.disable();
      }

      return () => {
        if (markers.current.length) {
          for (const marker of markers.current) {
            map.removeLayer(marker);
            markers.current = [];
          }
        }
      };
    }
  }, [map, places, scrollZoom, targetPlace]);

  return (
    <section className={`${parentClassName}__map map`} ref={mapRef}></section>
  );
}

export default Map;
