import axios from 'axios';
import constants from '../constants/Constants';
import Analytic from '../Type/Analytic';
import { localStorageKeyExists, getDataFromLocalStorage, deleteLocalStorageKey } from './AppLocalStorage';

/**
 * @summary Function that posts the request to the analytics endpoint
 * @param request is the request to be posted
 * @type {(request: object)}
 * @author Dallas Richmond
 */
export const SendAnalytics = (request: Analytic) => {
  axios.post(`${constants.BACKEND_URL}/api/analytic`, request);
};

/**
 * @summary Checks to see if there are cached analytics in local storage.
 *          If so, they are sent and the key is deleted
 * @param   online is a boolean value that indicates that the device is online
 * @type    {( online: boolean )}
 * @author  Dallas Richmond
 */
export const SendCachedAnalytics = (online: boolean) => {
  if (online && localStorageKeyExists(constants.OFFLINE_ANALYTIC_KEY)) {
    const data = getDataFromLocalStorage(constants.OFFLINE_ANALYTIC_KEY);
    data.forEach((analyticData: Analytic) => {
      SendAnalytics(analyticData);
    });
    deleteLocalStorageKey(constants.OFFLINE_ANALYTIC_KEY);
  }
};
