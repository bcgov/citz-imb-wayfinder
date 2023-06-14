import axios from 'axios';
import constants from '../constants/Constants';

/**
 * @summary Calls the API's health endpoint to determine if the app is online or not
 * @returns a boolean that indicates whether the App is online or not
 * @author Dallas Richmond
 */
const OnlineCheck = async () => (
  axios.get(`${constants.BACKEND_URL}/api/health`)
    .then((data) => data.status === 200)
    .catch(() => false)
);

export default OnlineCheck;
