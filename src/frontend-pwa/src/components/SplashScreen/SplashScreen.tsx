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
    setOnlineAppData, setOfflineAppData, setLoading,
  } = useAppService();

  useEffect(() => {
    if (navigator.onLine) {
      console.log('Online');
      setOfflineAppData();
    } else {
      console.log('Offline');
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
