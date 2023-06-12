import { useContext, useMemo } from 'react';
import axios from 'axios';
import { AppContext } from '../../providers/AppProvider';
import constants from '../../constants/Constants';
import AppActionType from './AppActions';

const { GET_APP_DATA } = AppActionType;

const useAppService = () => {
  const { state, dispatch } = useContext<any>(AppContext);

  return useMemo(() => {
    const getAppData = async () => {
      try {
        const data = await axios.get(`${constants.BACKEND_URL}/api/locations`);
        dispatch({ type: GET_APP_DATA, payload: data });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };

    return {
      getAppData,
      state,
    };
  }, [state, dispatch]);
};

export default useAppService;
