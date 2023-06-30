/**
 * @summary Checks to see if there are cached analytics in local storage.
 *          If so, they are sent and the key is deleted
 * @author  Dallas Richmond
 */
import SendAnalytics from './SendAnalytics';
import { localStorageKeyExists, getDataFromLocalStorage, deleteStorageKey } from './AppLocalStorage';
import constants from '../constants/Constants';
import Analytic from '../Type/Analytic';

const SendCachedAnalytics = (online: boolean) => {
  if (online && localStorageKeyExists(constants.OFFLINE_ANALYTIC_KEY)) {
    const data = getDataFromLocalStorage(constants.OFFLINE_ANALYTIC_KEY);
    data.forEach((element: Analytic) => {
      SendAnalytics(element);
    });
    deleteStorageKey(constants.OFFLINE_ANALYTIC_KEY);
  }
};

export default SendCachedAnalytics;
