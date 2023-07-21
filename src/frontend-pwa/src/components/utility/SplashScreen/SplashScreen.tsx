/**
 * @summary A reusable component that creates a splash screen for the app.
 *          It loads the inital app data
 * @author  Dallas Richmond
 */
import { useEffect } from 'react';
import logo from '/bc-logo-vertical.svg';
import { Spinner } from '../../common';
import useAppService from '../../../services/app/useAppService';
import UpdateOnLoad from '../../../utils/UpdateOnLoad';
import { getDataFromLocalStorage, localStorageKeyExists } from '../../../utils/AppLocalStorage';
import constants from '../../../constants/Constants';
import OnlineCheck from '../../../utils/OnlineCheck';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  const {
    setCurrentLocation,
    setLoading,
    setAppData,
    initializeEulaState,
    updateSettings,
    setSuccessfulReports,
    setOnline,
    setAnalytics,
    state,
  } = useAppService();

  useEffect(() => {
    UpdateOnLoad({
      setCurrentLocation,
      setAppData,
      initializeEulaState,
      updateSettings,
      setSuccessfulReports,
      setOnline,
      state,
    });

    /** Have to check local storage instead of using state.
     *  This is because the splashscreen sets the state each time the app opens.
     *  Due to it being asynchronous the state is not available to be used in the splashscreen.
     */
    if (localStorageKeyExists(constants.SETTINGS_KEY)
      && localStorageKeyExists(constants.CURRENT_LOCATION_KEY)) {
      const settings = getDataFromLocalStorage(constants.SETTINGS_KEY);
      if (settings.analytics_opt_in) {
        const location = getDataFromLocalStorage(constants.CURRENT_LOCATION_KEY);
        const analytics = {
          latitude: location.lat,
          longitude: location.long,
          usage: {
            appLaunch: true,
          },
        };

        if (settings.offline_mode) {
          setAnalytics(false, analytics);
        } else {
          OnlineCheck()
            .then((Online) => {
              setAnalytics(Online, analytics);
            });
        }
      }
    }

    setLoading(false);
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
