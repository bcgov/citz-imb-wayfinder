/**
 * @summary A reusable that creates a splash screen for the app.
 * It loads the inital app data
 * @author Dallas Richmond
 */
import { useEffect } from 'react';
import logo from '/bc-logo-vertical.svg';
import Spinner from '../Spinner/Spinner';
import useAppService from '../../services/app/useAppService';
import OnlineCheck from '../../utils/OnlineCheck';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  const {
    setOnlineAppData, setOfflineAppData, setCurrentLocation, setLoading,
  } = useAppService();

  useEffect(() => {
    // Todo: Need to properly implement Online Offline. Navigator.onLine won't be enough
    // Change setOnlineAppData and setOfflineAppData to setAppData and pass in a isOnline prop
    OnlineCheck()
      .then((online) => {
        if (online) {
          setOnlineAppData();
          setCurrentLocation();
        } else if (!online) {
          setOfflineAppData();
        }
        console.log(online);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    setLoading(false);
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
