import { useContext, useMemo } from 'react';
import { SettingsContext } from '../../providers/SettingsProvider';
import constants from '../../constants/Constants';
import SettingsActionType from './SettingsActions';
import { saveDataToLocalStorage, getDataFromLocalStorage, localStorageKeyExists } from '../../utils/AppLocalStorage';

const { SET_EULA } = SettingsActionType;

/**
 * @summary Custom hook that provides app related functions
 * @author Dallas Richmond
 */
const useSettingsService = () => {
  const { state, dispatch } = useContext<any>(SettingsContext);
  return useMemo(() => {
    /**
     * @summary Used to set eula state to true or false within the app
     * @param value is a boolean value which determines if the eula is accepted or not
     * @type {( value: boolean )}
     * @author Dallas Richmond
     */
    const setEula = () => {
      if (localStorageKeyExists(constants.EULA_ACCEPTED_KEY)) {
        dispatch({ type: SET_EULA, payload: getDataFromLocalStorage(constants.EULA_ACCEPTED_KEY) });
      } else {
        saveDataToLocalStorage(constants.EULA_ACCEPTED_KEY, true);
        dispatch({ type: SET_EULA, payload: true });
      }
    };

    return {
      setEula,
      state,
    };
  }, [state, dispatch]);
};

export default useSettingsService;
