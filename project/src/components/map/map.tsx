import { useRef, useEffect } from 'react';
import { Icon, Layer, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

import { City, Place } from '../../types/data';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts';

type MapProps = {
  places: Place[];
  currentPlace: Place | null;
  city: City;
  parentClassName: string;
  scrollZoom?: boolean;
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

function Map({ places, currentPlace, city, parentClassName, scrollZoom }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markers = useRef<Layer[]>([]);

  useEffect(() => {
    if (map) {
      if (markers.current.length) {
        for (const marker of markers.current) {
          map.removeLayer(marker);
          markers.current = [];
        }
      }

      places.forEach((place: Place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            currentPlace !== null && place.title === currentPlace.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        markers.current.push(marker);
      });

      if (scrollZoom !== undefined && !scrollZoom) {
        map.scrollWheelZoom.disable();
      }
    }
  }, [map, places, currentPlace, scrollZoom]);

  return (
    <section className={`${parentClassName}__map map`} ref={mapRef}></section>
  );
}

export default Map;
