import axios from 'axios';
import constants from '../constants/Constants';

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
