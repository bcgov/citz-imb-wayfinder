import axios from 'axios';
import constants from '../constants/Constants';

/**
 * @summary Pings the API's health endpoint to determine if the app is online or not
 * @returns a boolean that indicates whether the App is online or not
 * @author Dallas Richmond
 */
const OnlineCheck = async () => {
  try {
    const check = await axios.get(`${constants.BACKEND_URL}/api/health`);
    if (check.data && check.data === 'Project Wayfinder API is healthy and ready') {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};

export default OnlineCheck;
