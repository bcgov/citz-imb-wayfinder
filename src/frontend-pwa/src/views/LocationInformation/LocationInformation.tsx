/**
 * @summary View for additional details about a location
 *          Conditional renders set per item to account for variants in SingleLocation items
 *          Page loads passed on url params then filters the data set
 *          Page displays 404 if invalid query sent
 *          Analytics sent or cached if offline
 * @author LocalNewsTV, Dallas Richmond
 */
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAppService from '../../services/app/useAppService';
import { SingleLocation } from '../../Type';
import NotFound from '../NotFound/NotFound';
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
import OnlineCheck from '../../utils/OnlineCheck';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import { locationInfoContent } from '../../content/content';

export default function LocationInformation() {
  const { state, setAnalytics } = useAppService();
  const { lang } = state.settings;
  const { service, locale } = useParams();
  const locations = state.appData?.data ? state.appData.data[`${service}Locations`] : [];
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);

  useEffect(() => {
    if (state.settings.analytics_opt_in && geolocationKnown && location) {
      const latitude = state.currentLocation.lat;
      const longitude = state.currentLocation.long;
      const analytics = {
        latitude,
        longitude,
        usage: {
          search: location.locale,
          function: 'find location',
        },
      };

      if (state.settings.offline_mode) {
        setAnalytics(false, analytics);
      } else {
        OnlineCheck()
          .then((Online) => {
            setAnalytics(Online, analytics);
          });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!locations) {
    return <NotFound />;
  }
  const location: SingleLocation = locations.filter(
    (element: SingleLocation) => element.locale.toLowerCase() === locale?.toLowerCase(),
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
                  <Text>{locationInfoContent.phoneLabel[lang]}</Text>
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
                  <Text>{locationInfoContent.faxLabel[lang]}</Text>
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
                  <Text>{locationInfoContent.addressLabel[lang]}</Text>
                  <Address>{`${location.address?.label || ''}`}</Address>
                </Container>
                )}
              {location.address?.postal_code
                && (
                <Container>
                  <Text>{locationInfoContent.postalLabel[lang]}</Text>
                  <Text>{`${location.address?.postal_code}`}</Text>
                </Container>
                )}
              <Container>
                <Text>{locationInfoContent.websiteLabel[lang]}</Text>
                <Text>
                  <Link to={location.website}>{locationInfoContent.website[lang]}</Link>
                </Text>
              </Container>
              {location.services
              && (
                <Container>
                  <ListItems headers={[...locationInfoContent.listHeader[lang]]}>
                    {location.services.map((text, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <ServiceListItem service={text} key={index} />
                    ))}
                  </ListItems>
                </Container>
              )}
            </>
          )
          : <NotFound />}
      </ContentContainer>
    </ViewContainer>
  );
}
