import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';
import { saveDataToLocalStorage, getDataFromLocalStorage, localStorageKeyExists } from '../../utils/AppLocalStorage';
import SettingsObject from '../../Type/SettingsObject';

const {
  SET_APP_DATA,
  SET_LOADING,
  SET_CURRENT_LOCATION,
  SET_EULA,
  SET_SETTINGS,
} = AppActionType;

/**
 * @summary Custom hook that provides app related functions
 * @author Dallas Richmond
 */
const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
    /**
     * @summary Gets location data from the API and sets it in both localStorage and state if online
     * and sets the app state to localStorage values if Offline
     * @author Dallas Richmond
     */
    const setAppData = async (isOnline: boolean) => {
      if (isOnline) {
        try {
          const data = await axios.get(`${constants.BACKEND_URL}/api/locations`);
          saveDataToLocalStorage(constants.APP_DATA_KEY, data);
          dispatch({ type: SET_APP_DATA, payload: data });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      } else {
        const data = getDataFromLocalStorage(constants.APP_DATA_KEY);
        dispatch({ type: SET_APP_DATA, payload: data });
      }
    };

    /**
     * @summary uses the naviator to get the users current location
     * @author Dallas Richmond
     */
    const setCurrentLocation = async (isOnline: boolean) => {
      let currentLocation = { lat: '', long: '' };
      try {
        if (navigator.geolocation && isOnline) {
          navigator.geolocation.getCurrentPosition((position) => {
            currentLocation.lat = (position.coords.latitude).toFixed(5);
            currentLocation.long = (position.coords.longitude).toFixed(5);
            saveDataToLocalStorage(constants.CURRENT_LOCATION_KEY, currentLocation);
            dispatch({ type: SET_CURRENT_LOCATION, payload: currentLocation });
          });
        } else {
          currentLocation = getDataFromLocalStorage(constants.CURRENT_LOCATION_KEY);
          dispatch({ type: SET_CURRENT_LOCATION, payload: currentLocation });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    /**
     * @summary Used to set loading to true or false within the app
     * @param value is a boolean value which determines if the app is loading or not
     * @type {( value: boolean )}
     * @author Dallas Richmond
     */
    const setLoading = (value: boolean) => {
      dispatch({ type: SET_LOADING, payload: value });
    };

    /**
     * @summary Used to set eula state to true
     * @author Dallas Richmond
     */
    const setEulaState = () => {
      saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, true);
      dispatch({ type: SET_EULA, payload: true });
    };

    /**
     * @summary Used to initialize eula state from localstorage, otherwise to false
     * @author Dallas Richmond
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
     * @author Dallas Richmond
     */
    const updateSettings = () => {
      if (localStorageKeyExists(constants.SETTINGS_KEY)) {
        dispatch(
          { type: SET_SETTINGS, payload: getDataFromLocalStorage(constants.SETTINGS_KEY) },
        );
      } else {
        const settings = {
          location_range: 50,
          offline_mode: false,
          analytics_opt_in: true,
        };
        saveDataToLocalStorage(constants.SETTINGS_KEY, settings);
        dispatch({ type: SET_SETTINGS, payload: settings });
      }
    };

    /**
     * @summary Sets the settings for the app
     * @param locationRange is a number representing the distance to be searche in KMs
     * @param offlineMode is a boolean value that determines if the app is in online or offline mode
     * @param analyticsOptIn is a boolean value that allows the users to opt in or out of analytics
     * @type {( locationRange: number, offlineMode: boolean, analyticsOptIn: boolean )}
     * @author Dallas Richmond
     */
    const setSettings = ({
      locationRange = getDataFromLocalStorage(constants.SETTINGS_KEY).location_range,
      offlineMode = getDataFromLocalStorage(constants.SETTINGS_KEY).offline_mode,
      analyticsOptIn = getDataFromLocalStorage(constants.SETTINGS_KEY).analytics_opt_in,
    }: SettingsObject) => {
      const settings = {
        location_range: locationRange,
        offline_mode: offlineMode,
        analytics_opt_in: analyticsOptIn,
      };
      saveDataToLocalStorage(constants.SETTINGS_KEY, settings);
      dispatch({ type: SET_SETTINGS, payload: settings });
    };

    return {
      setAppData,
      setCurrentLocation,
      setLoading,
      initializeEulaState,
      setEulaState,
      updateSettings,
      setSettings,
      state,
    };
  }, [state, dispatch]);
};

export default useAppService;
