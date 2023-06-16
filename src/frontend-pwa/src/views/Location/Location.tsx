/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/**
 * @summary This is the main location view for mapping
 * @param locations - is an array of single locations pulled from the /location endpoint
 * @type {(locations : Array<SingleLocation>)}
 * @author Dallas Richmond
 */
import { useState } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import SingleLocation from '../../Type/SingleLocation';
import useAppService from '../../services/app/useAppService';
import LocationListItem from '../../components/LocationListItem/LocationListItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import Mapping from '../../components/Mapping/Mapping';
import CalcDistance from '../../utils/CalcDistance';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';

import {
  ContentContainer,
  MapContainer,
  ViewContainer,
  ServiceListContainer,
  StyledP,
} from './location.styles';

export default function Location() {
  const { state } = useAppService();
  const [searchQuery, setSearchQuery] = useState('');

  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const locations = state.appData?.data ? state.appData.data.serviceBCLocations : [];
  const locationRange = state.settings.location_range;

  const filteredLocationSearch = locations.filter((location: SingleLocation) => {
    if (geolocationKnown) {
      const locationDistance = CalcDistance({ itemData: location });
      if (parseFloat(locationDistance) <= locationRange) {
        return (location.locale.toLowerCase().includes(searchQuery.toLowerCase().trim()));
      }
    }
    return false;
  });

  return (
    <ViewContainer>
      <ContentContainer>
        {navigator.onLine
          ? (
            <Mapping
              locations={filteredLocationSearch}
              currentLocation={state.currentLocation}
            />
          )
          : (
            <MapContainer>
              <StyledP>
                Sorry this feature is currently unavailable offline.
              </StyledP>
            </MapContainer>
          )}
        <ServiceListContainer>
          <SearchBar
            query={searchQuery}
            setUseState={setSearchQuery}
            handleClear={() => setSearchQuery('')}
            border={false}
            borderRadius={false}
          />
          <ListItems headers={['Locations', 'Distance']}>
            {filteredLocationSearch.map((data: SingleLocation, index: number) => (
              <LocationListItem itemData={data} locationDistance={CalcDistance({ itemData: data })} key={index} />))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
