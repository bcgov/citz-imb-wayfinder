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
    setCurrentLocation, setLoading, setAppData,
  } = useAppService();

  useEffect(() => {
    OnlineCheck()
      .then((isOnline) => {
        if (isOnline === true) {
          setAppData(isOnline);
          setCurrentLocation(isOnline);
        } else if (isOnline === false) {
          setAppData(isOnline);
          setCurrentLocation(isOnline);
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
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
