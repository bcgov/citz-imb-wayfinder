/**
 * @summary Function that posts the request to the analytics endpoint
 * @param request is the request to be posted
 * @type {(request: object)}
 * @author Dallas Richmond
 */
/* eslint-disable no-console */
import axios from 'axios';
import constants from '../constants/Constants';
import Analytic from '../Type/Analytic';

const Analytics = (request: Analytic) => {
  axios.post(`${constants.BACKEND_URL}/api/analytic`, request)
    .then((data) => {
      console.log('Data: ', data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export default Analytics;
