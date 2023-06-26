/**
 * @summary A reusable component that creates a splash screen for the app.
 *          It loads the inital app data
 * @author  Dallas Richmond
 */
import { useEffect } from 'react';
import logo from '/bc-logo-vertical.svg';
import { Spinner } from '../../common';
import useAppService from '../../../services/app/useAppService';
import OnlineCheck from '../../../utils/OnlineCheck';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  const {
    setCurrentLocation,
    setLoading,
    setAppData,
    initializeEulaState,
    updateSettings,
    state,
  } = useAppService();

  useEffect(() => {
    setCurrentLocation();
    initializeEulaState();
    updateSettings();

    if (state.settings.offline_mode) {
      setAppData(false);
      setLoading(false);
    } else {
      OnlineCheck()
        .then((Online) => {
          setAppData(Online);
          setLoading(false);
        }).catch(() => {});
    }
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
