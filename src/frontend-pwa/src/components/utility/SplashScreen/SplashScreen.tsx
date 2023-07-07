/* eslint-disable no-console */
/**
 * @summary A reusable component that creates a splash screen for the app.
 *          It loads the inital app data
 * @author  Dallas Richmond
 */
import { useEffect } from 'react';
import logo from '/bc-logo-vertical.svg';
import { Spinner } from '../../common';
import useAppService from '../../../services/app/useAppService';
import OnlineCheck from '../../../utils/OnlineCheck';
import { SendCachedAnalytics } from '../../../utils/AppAnalytics';
import { SendCachedReports } from '../../../utils/AppReports';
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
    state,
  } = useAppService();

  /**
   * @summary Loads necessary app settings and data depending on online state
   *          -setCurrentLocation attempts to use high accuracy Geolocation to get
   *           the coordinates. If it can't it tries low accuracy. If not again it pulls
   *           from local storage
   *          -initializeEulaState takes the state from local storage if it exists, else
   *           it sets the acceoted Eula to false
   *          -updateSettings updates the settings from local storage or initializes them
   *           to default values
   *          -setAppData takes in a boolean that dictates whether the app is online or not
   *           and either gets the data from the API locations endpoint or pulls from local
   *           storage
   */
  useEffect(() => {
    setCurrentLocation();
    initializeEulaState();
    updateSettings();

    if (state.settings.offline_mode) {
      setAppData(false);
    } else {
      OnlineCheck()
        .then((Online) => {
          setOnline(Online);
          setAppData(Online);
          SendCachedAnalytics(Online);
          SendCachedReports(Online, setSuccessfulReports);
        }).catch((error) => {
          console.error('Error: ', error);
        });
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
