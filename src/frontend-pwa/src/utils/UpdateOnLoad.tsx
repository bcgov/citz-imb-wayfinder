/* eslint-disable no-console */
/**
 * @summary Update app data and state between route changes
 * @author  Dallas Richmond
 */

import useAppService from '../services/app/useAppService';
import OnlineCheck from './OnlineCheck';
import { SendCachedAnalytics } from './AppAnalytics';
import { SendCachedReports } from './AppReports';

export default function UpdateOnLoad() {
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
}
