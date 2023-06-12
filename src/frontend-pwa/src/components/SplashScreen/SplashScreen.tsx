/**
 * @summary A reusable that creates a splash screen for the app
 * @author Dallas Richmond
 */
import { useEffect } from 'react';
import logo from '/bc-logo-vertical.svg';
import Spinner from '../Spinner/Spinner';
import useAppService from '../../services/app/useAppService';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  const {
    state, setOnlineAppData, setOfflineAppData, setCurrentLocation, setLoading,
  } = useAppService();

  useEffect(() => {
    // Todo: Need to properly implement Online Offline. Navigator.onLine won't be enough
    if (navigator.onLine && Object.keys(state.appData).length === 0) {
      setOnlineAppData();
      setCurrentLocation();
    } else if (Object.keys(state.appData).length === 0) {
      setOfflineAppData();
    }
    setLoading(false);
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
