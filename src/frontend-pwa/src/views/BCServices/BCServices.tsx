/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  ContentContainer,
  MapContainer,
  ViewContainer,
  ServiceListContainer,
  StyledP,
} from './bcservices.styles';

type Props = {
  serviceBCServices: Array<string>;
  serviceBCLocations: Array<SingleLocation>;
};

export default function BCServices({
  serviceBCServices,
  serviceBCLocations,
}: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredServiceSearch = serviceBCServices.filter((item) => item.toLowerCase().match(`${searchQuery.toLowerCase()}`));
  const filteredLocationSearch = serviceBCLocations.filter((location) => (
    filteredServiceSearch.some((service) => location.services.indexOf(service) !== -1)
  ));

  return (
    <ViewContainer>
      <ContentContainer>
        <MapContainer>
          {navigator.onLine
            ? (
              <Mapping />
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
            {filteredServiceSearch.map((data, index) => (
              <ServiceListItem key={index} service={data} />
            ))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
