/**
 * @summary Function to calculate the distance in KM from the
 * device's current location to a service location
 * @param itemData - is the data passed in to be displayed in each list item
 * @returns {string} - is the calculated distance in KM as a string
 * @type {(itemData : SingleLocation) => string}
 * @author Dallas Richmond
 */

/* eslint-disable max-len */
import SingleLocation from '../Type/SingleLocation';
import useAppService from '../services/app/useAppService';

export type CalcDistanceProps = {
  itemData: SingleLocation;
}

export default function CalcDistance({
  itemData,
}: CalcDistanceProps): string {
  const { state } = useAppService();

  if (state.currentLocation.lat && state.currentLocation.long) {
    const earthRadius = 6371;

    const currentLatRad = Math.PI / 180 * (parseFloat(state.currentLocation.lat));
    const currentLongRad = Math.PI / 180 * (parseFloat(state.currentLocation.long));
    const destinationLatRad = Math.PI / 180 * itemData.latitude;
    const destinationLongRad = Math.PI / 180 * itemData.longitude;

    const dLat = destinationLatRad - currentLatRad;
    const dLon = destinationLongRad - currentLongRad;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(currentLatRad) * Math.cos(destinationLatRad) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return `${distance.toFixed(2)} KM`;
  }
  return 'N/A';
}
