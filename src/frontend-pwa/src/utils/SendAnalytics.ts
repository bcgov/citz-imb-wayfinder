/**
 * @summary Function that posts the request to the analytics endpoint
 * @param request is the request to be posted
 * @type {(request: object)}
 * @author Dallas Richmond
 */
import axios from 'axios';
import constants from '../constants/Constants';
import Analytic from '../Type/Analytic';

const SendAnalytics = (request: Analytic) => {
  axios.post(`${constants.BACKEND_URL}/api/analytic`, request);
};

export default SendAnalytics;
