/**
 * @summary This is the main location view for mapping
 * @param locations - is an array of single locations pulled from the /location endpoint
 * @type {(locations : Array<SingleLocation>)}
 * @author Dallas Richmond
 */
import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';
import useAppService from '../../services/app/useAppService';
import LocationListItem from '../../components/LocationListItem/LocationListItem';

import {
  LocationViewWrapper,
  TextHeader,
} from './location.styles';

export default function Location() {
  const { state } = useAppService();
  const locations = state.appData.data ? state.appData.data.serviceBCLocations : [];
  const currentLocation = state.currentLocation ? state.currentLocation : null;

  return (
    <LocationViewWrapper>
      <TextHeader>
        Locate a Service
      </TextHeader>
      <ListItems
        headers={['Locations', 'Distance']}
      >
        {locations.map((data: SingleLocation, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <LocationListItem itemData={data} key={index} currentLocation={currentLocation} />
        ))}
      </ListItems>
    </LocationViewWrapper>
  );
}
