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
    setCurrentLocation,
    setLoading,
    setAppData,
    setEulaState,
  } = useAppService();

  useEffect(() => {
    OnlineCheck()
      .then((Online) => {
        setAppData(Online);
        setCurrentLocation(Online);
        setEulaState('checkEula');
        setLoading(false);
      }).catch(() => {});
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
