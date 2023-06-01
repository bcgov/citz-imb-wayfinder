import { useState } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';

import {
  LocationViewWrapper,
  TextHeader,
} from './location.styles';

export type LocationProps = {
  locations: Array<SingleLocation>;
}

export default function Location({
  locations,
}: LocationProps) {
  const [currentLocation, setCurrentLocation] = useState({});

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = (position: object) => {
    setCurrentLocation(position);
  };

  getLocation();
  return (
    <LocationViewWrapper>
      <TextHeader>
        Locate a Service
      </TextHeader>
      <ListItems items={locations} currentLocation={currentLocation} />
    </LocationViewWrapper>
  );
}
