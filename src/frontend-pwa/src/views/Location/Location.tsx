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
  const locations = state.appData?.data ? state.appData.data.serviceBCLocations : [];
  const filteredLocationSearch = locations.filter((location : SingleLocation) => (
    location.locale.toLowerCase().match(`${searchQuery.toLowerCase().trim()}`)
  ));

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
              <LocationListItem itemData={data} key={index} />
            ))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
