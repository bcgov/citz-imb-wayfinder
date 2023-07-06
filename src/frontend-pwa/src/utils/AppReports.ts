/* eslint-disable no-console */
import axios from 'axios';
import Report from '../Type/Report';
import constants from '../constants/Constants';
import { localStorageKeyExists, getDataFromLocalStorage, deleteLocalStorageKey } from './AppLocalStorage';

/**
 * @summary Function that posts the request to the report endpoint
 * @param   request is a report to be sent to the report endpoint
 * @param   setSuccessfulReports is a function from the useAppService hook
 *          that saves successful reports to local storage
 * @type    {( request: Report )}
 * @author  Dallas Richmond
 */
export const SendReport = async (request: Report, setSuccessfulReports: Function) => {
  await axios.post(`${constants.BACKEND_URL}/api/report`, request)
    .then((res) => {
      setSuccessfulReports(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * @summary Checks to see if there are cached reports in local storage.
 *          If so, they are sent and the key is deleted
 * @param   online is a boolean value that indicates that the device is online
 * @param   setSuccessfulReports is a function from the useAppService hook
 *          that saves successful reports to local storage
 * @type    {( online: boolean, setSuccessfulReports: Function )}
 * @author  Dallas Richmond
 */
export const SendCachedReports = (online: boolean, setSuccessfulReports: Function) => {
  if (online && localStorageKeyExists(constants.UNSENT_REPORTS_KEY)) {
    const data = getDataFromLocalStorage(constants.UNSENT_REPORTS_KEY);
    data.forEach((report: Report) => {
      SendReport(report, setSuccessfulReports);
    });
    deleteLocalStorageKey(constants.UNSENT_REPORTS_KEY);
  }
};
