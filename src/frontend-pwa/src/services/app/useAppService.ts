import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';
import { saveDataToLocalStorage, getDataFromLocalStorage } from '../../utils/AppLocalStorage';

const { SET_APP_DATA, SET_LOADING, SET_CURRENT_LOCATION } = AppActionType;

const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
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

    const setOfflineAppData = () => {
      const data = getDataFromLocalStorage('appData');
      dispatch({ type: SET_APP_DATA, payload: data });
    };

    const setCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    };

    const showPosition = (position: object) => {
      dispatch({ type: SET_CURRENT_LOCATION, payload: position });
    };

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
