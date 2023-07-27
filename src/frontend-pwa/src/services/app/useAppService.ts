/* eslint-disable no-console */
import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';
import { saveDataToLocalStorage, getDataFromLocalStorage, localStorageKeyExists } from '../../utils/AppLocalStorage';
import SettingsObject from '../../Type/SettingsObject';
import Analytic from '../../Type/Analytic';
import Report from '../../Type/Report';
import { SendAnalytics } from '../../utils/AppAnalytics';
import LocalStorageSettingsCheck from '../../utils/LocalStorageSettingsCheck';

const {
  SET_APP_DATA,
  SET_LOADING,
  SET_CURRENT_LOCATION,
  SET_EULA,
  SET_SETTINGS,
  SET_REPORTS,
  SET_TOOL_TIP_TEXT,
  SET_ONLINE,
  SET_MAP_CACHED,
} = AppActionType;

/**
 * @summary Custom hook that provides app related functions
 * @author  Dallas Richmond
 */
const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
    /**
     * @summary Gets location data from the API and sets it in both localStorage and state if online
     *          and sets the app state to localStorage values if Offline
     * @author  Dallas Richmond
     */
    const setAppData = async (isOnline: boolean) => {
      if (isOnline) {
        try {
          const data = await axios.get(`${constants.BACKEND_URL}/api/locations`);
          saveDataToLocalStorage(constants.APP_DATA_KEY, data);
          dispatch({ type: SET_APP_DATA, payload: data });
        } catch (e) {
          console.error(e);
        }
      } else {
        const data = getDataFromLocalStorage(constants.APP_DATA_KEY);
        dispatch({ type: SET_APP_DATA, payload: data });
      }
    };

    /**
     * @summary uses the naviator to get the users current location
     *          Initially tries with high accuracy
     * @author  Dallas Richmond
     */
    const setCurrentLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorHighAccuracy,
          { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true },
        );
      } catch (error) {
        console.log(error);
      }
    };

    /**
     * @summary Error function that is called if high accuracy fails
     * @param   error is an error object
     * @author  Dallas Richmond
     */
    const errorHighAccuracy = (error: any) => {
      if (error.code === error.TIMEOUT) {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorLowAccuracy,
          { maximumAge: 600000, timeout: 10000, enableHighAccuracy: false },
        );
      }
    };

    /**
     * @summary Error function that is called if low accuracy fails
     * @param   error is an error object
     * @author  Dallas Richmond
     */
    const errorLowAccuracy = () => {
      const currentLocation = getDataFromLocalStorage(constants.CURRENT_LOCATION_KEY);
      dispatch({ type: SET_CURRENT_LOCATION, payload: currentLocation });
    };

    /**
     * @summary Success function that is called if either the high or low accuracy
     *          options are successful
     * @param   position is the geo position object provided by naviator.geolocation
     * @author  Dallas Richmond
     */
    const successCallback = (position: any) => {
      const currentLocation = { lat: '', long: '' };
      currentLocation.lat = (position.coords.latitude).toFixed(5);
      currentLocation.long = (position.coords.longitude).toFixed(5);
      saveDataToLocalStorage(constants.CURRENT_LOCATION_KEY, currentLocation);
      dispatch({ type: SET_CURRENT_LOCATION, payload: currentLocation });
    };

    /**
     * @summary Used to set loading to true or false within the app
     * @param   value is a boolean value which determines if the app is loading or not
     * @type    {( value: boolean )}
     * @author  Dallas Richmond
     */
    const setLoading = (value: boolean) => {
      dispatch({ type: SET_LOADING, payload: value });
    };

    /**
     * @summary Used to set eula state to true
     * @author  Dallas Richmond
     */
    const setEulaState = () => {
      saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, true);
      dispatch({ type: SET_EULA, payload: true });
    };

    /**
     * @summary Used to initialize eula state from localstorage, otherwise to false
     * @author  Dallas Richmond
     */
    const initializeEulaState = () => {
      if (localStorageKeyExists(constants.EULA_ACCEPTED_KEY)) {
        dispatch(
          { type: SET_EULA, payload: getDataFromLocalStorage(constants.EULA_ACCEPTED_KEY) },
        );
      } else {
        saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, false);
        dispatch({ type: SET_EULA, payload: false });
      }
    };

    /**
     * @summary Used to either initialize the settings or update them from localStorage
     * @author  Dallas Richmond
     */
    const updateSettings = () => {
      if (localStorageKeyExists(constants.SETTINGS_KEY)
      && LocalStorageSettingsCheck(getDataFromLocalStorage(constants.SETTINGS_KEY))) {
        dispatch(
          { type: SET_SETTINGS, payload: getDataFromLocalStorage(constants.SETTINGS_KEY) },
        );
      } else {
        const settings = {
          location_range: 500,
          offline_mode: false,
          analytics_opt_in: true,
          lang: 'eng',
        };
        saveDataToLocalStorage(constants.SETTINGS_KEY, settings);
        dispatch({ type: SET_SETTINGS, payload: settings });
      }
    };

    /**
     * @summary Sets the settings for the app
     * @param   locationRange is a number representing the distance to be searche in KMs
     * @param   offlineMode is a boolean value that determines if the app is in online
     *          or offline mode
     * @param   analyticsOptIn is a boolean value that allows the users to opt in or
     *          out of analytics
     * @type    {( SettingsObject )}
     * @author  Dallas Richmond
     */
    const setSettings = ({
      locationRange = getDataFromLocalStorage(constants.SETTINGS_KEY).location_range,
      offlineMode = getDataFromLocalStorage(constants.SETTINGS_KEY).offline_mode,
      analyticsOptIn = getDataFromLocalStorage(constants.SETTINGS_KEY).analytics_opt_in,
      language = getDataFromLocalStorage(constants.SETTINGS_KEY).lang,
    }: SettingsObject) => {
      const settings = {
        location_range: locationRange,
        offline_mode: offlineMode,
        analytics_opt_in: analyticsOptIn,
        lang: language,
      };
      saveDataToLocalStorage(constants.SETTINGS_KEY, settings);
      dispatch({ type: SET_SETTINGS, payload: settings });
    };

    /**
     * @summary Sends analytic data to database if online, else stores in localstorage
     * @param   analytics is an object containing location and usage data
     * @type    {( Analytic )}
     * @author  Dallas Richmond
     */
    const setAnalytics = (online: boolean, analytics: Analytic) => {
      if (online) {
        SendAnalytics(analytics);
      } else if (localStorageKeyExists(constants.OFFLINE_ANALYTIC_KEY)) {
        const data = getDataFromLocalStorage(constants.OFFLINE_ANALYTIC_KEY);
        data.push(analytics);
        saveDataToLocalStorage(constants.OFFLINE_ANALYTIC_KEY, data);
      } else {
        saveDataToLocalStorage(constants.OFFLINE_ANALYTIC_KEY, [analytics]);
      }
    };

    /**
     * @summary Saves successful reports to local storage and updates report state
     * @param   report is the response data from a successful post to the report endpoint
     * @type    {( report: Report )}
     * @author  Dallas Richmond
     */
    const setSuccessfulReports = (report: Report) => {
      if (localStorageKeyExists(constants.REPORTS_KEY)) {
        const data = getDataFromLocalStorage(constants.REPORTS_KEY);
        data.push(report);
        saveDataToLocalStorage(constants.REPORTS_KEY, data);
      } else {
        saveDataToLocalStorage(constants.REPORTS_KEY, [report]);
      }
      dispatch({ type: SET_REPORTS, payload: getDataFromLocalStorage(constants.REPORTS_KEY) });
    };

    /**
     * @summary Saves unsuccessful reports to local storage
     * @param   report is a user submitted Report object to be saved to local storage
     * @type    {( report: Report )}
     * @author  Dallas Richmond
     */
    const setOfflineReports = (report: Report) => {
      if (localStorageKeyExists(constants.UNSENT_REPORTS_KEY)) {
        const data = getDataFromLocalStorage(constants.UNSENT_REPORTS_KEY);
        data.push(report);
        saveDataToLocalStorage(constants.UNSENT_REPORTS_KEY, data);
      } else {
        saveDataToLocalStorage(constants.UNSENT_REPORTS_KEY, [report]);
      }
    };

    /**
     * @summary Sets text state to be used by BannerTip and MoreInfoButton components
     * @param text is a string to be displayed on the BannerTip component
     * @type {( text: string )}
     * @author Dallas Richmond
     */
    const setToolTipText = (text: string) => {
      dispatch({ type: SET_TOOL_TIP_TEXT, payload: text });
    };

    /**
     * @summary Sets the online state for the app
     * @param   online is a boolean that indicates whether the app is online or not
     * @type    {( online: boolean )}
     * @author  Dallas Richmond
     */
    const setOnline = (online: boolean) => {
      dispatch({ type: SET_ONLINE, payload: online });
    };

    /**
     * @summary The local storage is cleared automatically if the app is uninstalled
     * @author  Dallas Richmond
     */
    const setAppInstall = () => {
      window.addEventListener('appinstalled', () => {
        saveDataToLocalStorage(constants.APP_INSTALL_KEY, true);
      });
      window.addEventListener('beforeinstallprompt', () => {
        if (localStorageKeyExists(constants.APP_INSTALL_KEY)) {
          localStorage.clear();
        }
      });
    };

    const setMapsCache = (cached: boolean) => {
      saveDataToLocalStorage(constants.MAPS_CACHED_KEY, cached);
      dispatch({ type: SET_MAP_CACHED, payload: cached });
    };

    return {
      setAppData,
      setCurrentLocation,
      setLoading,
      initializeEulaState,
      setEulaState,
      updateSettings,
      setSettings,
      setAnalytics,
      setSuccessfulReports,
      setToolTipText,
      setOfflineReports,
      setOnline,
      setAppInstall,
      setMapsCache,
      state,
    };
  }, [state, dispatch]);
};

export default useAppService;
