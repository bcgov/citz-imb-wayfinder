/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/**
 * @summary         -This is the main location view for mapping.
 *                  -Sorts all available locations by distance
 *                  -Only displays locations in range of user settings
 *                  -Users can filter by location search
 * @param locations an array of single locations pulled from the /location endpoint
 * @type {(locations : Array<SingleLocation>)}
 * @author Dallas Richmond, LocalNewsTV
 */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListItems, LocationListItem } from '../../components/lists';
import SingleLocation from '../../Type/SingleLocation';
import useAppService from '../../services/app/useAppService';
import { SearchBar } from '../../components/common';
import { Mapping } from '../../components/utility';
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

interface LocationWithDistance extends SingleLocation {
 distance: string;
}

export default function Location() {
  const { state } = useAppService();
  const [searchQuery, setSearchQuery] = useState('');
  const { service } = useParams();
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const locations = state.appData?.data ? state.appData.data[`${service}Locations`] || [] : [];
  const locationRange = state.settings.location_range;

  const headers: Array<string> = [];
  if (service) {
    headers.push(`${(service[0].toUpperCase() + service.substring(1, service.length))} Locations`, 'Distance');
  } else {
    headers.push('Locations', 'Distance');
  }
  const filteredLocationSearch = locations.filter((location: SingleLocation) => {
    if (geolocationKnown) {
      const locationDistance = CalcDistance({ itemData: location, currentLocation: state.currentLocation });
      if (parseFloat(locationDistance) <= locationRange) {
        return (location.locale.toLowerCase().includes(searchQuery.toLowerCase().trim()));
      }
    }
    return false;
  });
  const distancedLocations: Array<LocationWithDistance> = [];

  filteredLocationSearch.forEach((location: SingleLocation) => {
    const distancedLocation: LocationWithDistance = location as LocationWithDistance;
    distancedLocation.distance = CalcDistance({ itemData: location, currentLocation: state.currentLocation });
    distancedLocations.push(distancedLocation);
  });

  distancedLocations.sort((a: LocationWithDistance, b: LocationWithDistance) => (
    parseFloat(a.distance) > parseFloat(b.distance) ? 1 : -1
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
          <ListItems headers={headers}>
            {distancedLocations.map((data: LocationWithDistance) => (
              <LocationListItem itemData={data} locationDistance={data.distance} key={data.locale} />))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
