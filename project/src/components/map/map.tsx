import { useRef, useEffect } from 'react';
import { Icon, Layer, Marker } from 'leaflet';
import { useAppSelector } from '../../hooks/store';
import useMap from '../../hooks/use-map';
import { getCurrentPlace } from '../../store/places-process/selectors';
import 'leaflet/dist/leaflet.css';

import { City, Place } from '../../types/data';
import { MarkerParams } from '../../consts';
import setMarkerParams from '../../utils/map-markers';

type MapProps = {
  places: Place[];
  city: City;
  parentClassName: string;
  scrollZoom?: boolean;
  currentPlace?: Place;
}

const defaultCustomIcon = new Icon(setMarkerParams(MarkerParams.Size, MarkerParams.Url.Default));
const currentCustomIcon = new Icon(setMarkerParams(MarkerParams.Size, MarkerParams.Url.Active));

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
