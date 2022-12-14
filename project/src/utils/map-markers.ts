import { MarkerParams } from '../consts';
import { BaseIconOptions } from 'leaflet';

type MarkerParamsEnum = typeof MarkerParams;

export function setMarkerParams(markerSize: MarkerParamsEnum['Size'], url: string): BaseIconOptions {
  return {
    iconUrl: url,
    iconSize: [markerSize.Width, markerSize.Height],
    iconAnchor: [markerSize.Width / 2, markerSize.Height],
  };
}
