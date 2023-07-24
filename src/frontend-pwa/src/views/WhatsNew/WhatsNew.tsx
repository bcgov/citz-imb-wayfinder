/**
 * @desc   View section for displaying all changelog information in the Wayfinder application
 *         Iterates over the ChangeLog object file, displaying information as an unordered list
 * @author LocalNewsTV, Dallas Richmond
 */
import { useEffect } from 'react';
import {
  ContentContainer,
  List,
  ListItem,
  SectionHeader,
  UpdateContainer,
  UpdateHeader,
  ViewContainer,
} from './whatsNew.styles';
import useAppService from '../../services/app/useAppService';
import ChangeLog from '../../content/changelogContent';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import OnlineCheck from '../../utils/OnlineCheck';

function WhatsNew() {
  const { state, setAnalytics } = useAppService();
  const entries = Object.entries(ChangeLog);
  const { lang } = state.settings;
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;

  useEffect(() => {
    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'change log',
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
  return (
    <ViewContainer>
      <ContentContainer>
        <SectionHeader>What&apos;s New?</SectionHeader>
        <List>
          {entries.map(([key, value], entryNum) => (
            <UpdateContainer>
              <UpdateHeader>
                v
                {key}
              </UpdateHeader>
              <List>
                {value[lang].map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ListItem key={`${entryNum}${index}`}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </UpdateContainer>
          ))}
        </List>
      </ContentContainer>
    </ViewContainer>
  );
}

export default WhatsNew;
