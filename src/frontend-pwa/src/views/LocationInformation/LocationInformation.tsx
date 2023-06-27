/**
 * @summary View for additional details about a location
 *          Conditional renders set per item to account for variants in SingleLocation items
 *          Page loads passed on url params then filters the data set
 *          Page displays 404 if invalid query sent
 */
import { Link, useParams } from 'react-router-dom';
import useAppService from '../../services/app/useAppService';
import { SingleLocation } from '../../Type';
import {
  ContentContainer,
  Text,
  ViewContainer,
  Container,
  LocaleHeader,
  SubHeader,
  Address,
} from './locationInformation.style';
import { ListItems, ServiceListItem } from '../../components/lists';

export default function LocationInformation() {
  const { state } = useAppService();
  const { service, locale } = useParams();
  const FourOhFour = <Text>404 Not Found</Text>;
  const locations = state.appData?.data ? state.appData.data[`${service}Locations`] : [];
  if (!locations) {
    return FourOhFour;
  }
  const location: SingleLocation = locations.filter(
    (element: SingleLocation) => element.locale === locale,
  )[0];

  return (
    <ViewContainer>
      <ContentContainer>
        {location
          ? (
            <>
              <LocaleHeader>
                {location.locale}
              </LocaleHeader>
              <SubHeader>
                {`${location.serviceType[0].toUpperCase() + location.serviceType.substring(1, location.serviceType.length)}`}
              </SubHeader>
              {location.contact?.phone
                && (
                <Container>
                  <Text>Phone Number:&nbsp;</Text>
                  <Link to={`tel:+${location.contact?.phone.replaceAll('-', '').replaceAll(' ', '')}`}>
                    <Text>
                      {location.contact?.phone}
                    </Text>
                  </Link>
                </Container>
                )}
              {location.contact?.fax
                && (
                <Container>
                  <Text>Fax Number:&nbsp;</Text>
                  <Link to={`tel:+${location.contact?.fax.replaceAll('-', '').replaceAll(' ', '')}`}>
                    <Text>
                      {location.contact?.fax}
                    </Text>
                  </Link>
                </Container>
                )}
              {location.address
                && (
                <Container>
                  <Text>Address:&nbsp;</Text>
                  <Address>{`${location.address?.label || ''}`}</Address>
                </Container>
                )}
              {location.address?.postal_code
                && (
                <Container>
                  <Text>Postal Code:&nbsp;</Text>
                  <Text>{`${location.address?.postal_code}`}</Text>
                </Container>
                )}
              <Container>
                <Text>Website:&nbsp;</Text>
                <Text>
                  <Link to={location.website}>More Information</Link>
                </Text>
              </Container>
              {location.services
              && (
                <Container>
                  <ListItems headers={['Services Offered at this Location']}>
                    {location.services.map((text, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <ServiceListItem service={text} key={index} />
                    ))}
                  </ListItems>
                </Container>
              )}
            </>
          )
          : FourOhFour}
      </ContentContainer>
    </ViewContainer>
  );
}
