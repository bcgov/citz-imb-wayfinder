import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';
import { saveDataToLocalStorage, getDataFromLocalStorage, localStorageKeyExists } from '../../utils/AppLocalStorage';

const {
  SET_APP_DATA, SET_LOADING, SET_CURRENT_LOCATION, SET_EULA,
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
     * @summary Used to set eula state to true or false within the app
     * @param value is a boolean value which determines if the eula is accepted or not
     * @type {( value: boolean )}
     * @author Dallas Richmond
     */
    const setEulaState = (check: string) => {
      if (check === 'checkEula') {
        if (localStorageKeyExists(constants.EULA_ACCEPTED_KEY)) {
          // eslint-disable-next-line max-len
          dispatch({ type: SET_EULA, payload: getDataFromLocalStorage(constants.EULA_ACCEPTED_KEY) });
        } else {
          saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, false);
          dispatch({ type: SET_EULA, payload: false });
        }
      } else if (check === 'setEula') {
        saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, true);
        dispatch({ type: SET_EULA, payload: true });
      }
    };

    return {
      setAppData,
      setCurrentLocation,
      setLoading,
      setEulaState,
      state,
    };
  }, [state, dispatch]);
};

export default useAppService;
