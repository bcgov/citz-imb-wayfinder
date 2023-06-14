/**
 * TODO:    - Remove Border CSS from MapContainer when mapping implemented
 *          - Implement Mapping Props
 *          - Have table items link to another view to display results
 *
 * @summary - Search by BC Services View container. Displays map data for users to see locations,
 *          - Users can filter by services that will filter the maps markers.
 *          - Map does not render offline
 * @author  LocalNewsTV
 */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import SearchBar from '../../components/SearchBar/SearchBar';
import { ServiceListItem, headers } from '../../components/ServicesListItem/ServicesListItem';
import Mapping from '../../components/Mapping/Mapping';
import SingleLocation from '../../Type/SingleLocation';
import useAppService from '../../services/app/useAppService';
import {
  ContentContainer,
  MapContainer,
  ViewContainer,
  ServiceListContainer,
  StyledP,
} from './bcservices.styles';

export default function BCServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useAppService();
  const services = state.appData?.data ? state.appData.data.serviceBCServices : [];
  const locations = state.appData?.data ? state.appData.data.serviceBCLocations : [];
  const filteredServiceSearch = services.filter((item : string) => item.toLowerCase().match(`${searchQuery.toLowerCase()}`));
  const filteredLocationSearch = locations.filter((location : SingleLocation) => (
    filteredServiceSearch.some((service : string) => location.services.includes(service))
  ));

  return (
    <ViewContainer>
      <ContentContainer>
        <MapContainer>
          {navigator.onLine
            ? (
              <Mapping locations={filteredLocationSearch} />
            )
            : (
              <StyledP>
                Sorry this feature is currently unavailable offline.
              </StyledP>
            )}
        </MapContainer>
        <ServiceListContainer>
          <SearchBar
            query={searchQuery}
            setUseState={setSearchQuery}
            handleClear={() => setSearchQuery('')}
            border={false}
            borderRadius={false}
          />
          <ListItems headers={headers}>
            {filteredServiceSearch.map((data: string, index: number) => (
              <ServiceListItem key={index} service={data} />
            ))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
