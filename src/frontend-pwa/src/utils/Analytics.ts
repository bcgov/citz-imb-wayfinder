/* eslint-disable no-console */
import axios from 'axios';
import constants from '../constants/Constants';

const Analytics = (request: object) => {
  axios.post(`${constants.BACKEND_URL}/api/analytic`, request)
    .then((data) => {
      console.log('Data: ', data);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
};

export default Analytics;
