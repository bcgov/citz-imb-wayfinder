/**
 * @summary This is the main location view for mapping
 * @param locations - is an array of single locations pulled from the /location endpoint
 * @type {(locations : Array<SingleLocation>)}
 * @author Dallas Richmond
 */
import { useState } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';

import {
  LocationViewWrapper,
  TextHeader,
} from './location.styles';
import ListItem from '../../components/ListItem/ListItem';

export type LocationProps = {
  locations: Array<SingleLocation>;
}

export default function Location({
  locations,
}: LocationProps) {
  const [currentLocation, setCurrentLocation] = useState({});

  /**
   * @summary Gets the current location of the device from the browser
   * @author Dallas Richmond
   */
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  /**
   * @summary Sets the state of currentLocation to be the position
   * @param position - The current position/location of the user's device
   * @type {(position : object)}
   * @author Dallas Richmond
   */
  const showPosition = (position: object) => {
    setCurrentLocation(position);
  };

  getLocation();
  return (
    <LocationViewWrapper>
      <TextHeader>
        Locate a Service
      </TextHeader>
      <ListItems
        headerOne="Locations"
        headerTwo="Distance"
      >
        {locations.map((data, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem itemData={data} key={index} currentLocation={currentLocation} />
        ))}
      </ListItems>
    </LocationViewWrapper>
  );
}
