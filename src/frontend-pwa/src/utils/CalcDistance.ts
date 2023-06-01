/* eslint-disable max-len */
import SingleLocation from '../Type/SingleLocation';
import CurrentLocation from '../Type/CurrentLocation';

export type CalcDistanceProps = {
  itemData: SingleLocation;
  currentLocation: CurrentLocation;
}

export default function CalcDistance({
  itemData,
  currentLocation,
}: CalcDistanceProps): string {
  const earthRadius = 6371;

  const currentLatRad = Math.PI / 180 * (currentLocation.coords?.latitude || 0);
  const currentLongRad = Math.PI / 180 * (currentLocation.coords?.longitude || 0);
  const destinationLatRad = Math.PI / 180 * itemData.latitude;
  const destinationLongRad = Math.PI / 180 * itemData.longitude;

  const dLat = destinationLatRad - currentLatRad;
  const dLon = destinationLongRad - currentLongRad;

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(currentLatRad) * Math.cos(destinationLatRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return (distance.toFixed(2));
}
