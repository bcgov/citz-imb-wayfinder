import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';
import { saveDataToLocalStorage, getDataFromLocalStorage } from '../../utils/AppLocalStorage';

const { SET_APP_DATA, SET_LOADING, SET_CURRENT_LOCATION } = AppActionType;

/**
 * @summary Custom hook that provides app related functions
 * @author Dallas Richmond
 */
const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
    /**
     * @summary Get location data from the API and sets it in both localStorage and state if online
     * @author Dallas Richmond
     */
    const setOnlineAppData = async () => {
      try {
        const data = await axios.get(`${constants.BACKEND_URL}/api/locations`);
        saveDataToLocalStorage('appData', data);
        dispatch({ type: SET_APP_DATA, payload: data });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };

    /**
     * @summary Sets the app state to localStorage values if Offline
     * @author Dallas Richmond
     */
    const setOfflineAppData = () => {
      const data = getDataFromLocalStorage('appData');
      dispatch({ type: SET_APP_DATA, payload: data });
    };

    /**
     * @summary uses the naviator to get the users current location
     * @author Dallas Richmond
     */
    const setCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    };

    /**
     * @summary Sets the state to the position
     * @param position is the coordinates retrieved from navigator.geolocation
     * @type {( position: object )}
     * @author Dallas Richmond
     */
    const showPosition = (position: object) => {
      dispatch({ type: SET_CURRENT_LOCATION, payload: position });
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

    return {
      setOnlineAppData,
      setOfflineAppData,
      setCurrentLocation,
      setLoading,
      state,
    };
  }, [state, dispatch]);
};

export default useAppService;
