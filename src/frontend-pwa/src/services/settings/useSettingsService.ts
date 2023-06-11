/* eslint-disable no-shadow */
import { useContext, useMemo } from 'react';
import axios from 'axios';
import { SettingsContext } from '../../providers/SettingsProvider';
import constants from '../../constants/Constants';

enum SettingsActionType {
  GET_SETTINGS = 'GET_SETTINGS',
}

const { GET_SETTINGS } = SettingsActionType;

export default function useSettingsService() {
  const { state, dispatch } = useContext<any>(SettingsContext);

  return useMemo(() => {
    const getSettings = async () => {
      try {
        const data = await axios.get(`${constants.BACKEND_URL}/api/locations`);
        dispatch({ type: GET_SETTINGS, payload: data });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };

    return {
      getSettings,
      state,
    };
  }, [state, dispatch]);
}
