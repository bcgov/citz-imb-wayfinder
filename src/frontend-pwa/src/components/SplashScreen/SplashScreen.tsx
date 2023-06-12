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
  const { state, getAppData, setLoading } = useAppService();
  getAppData();

  const saveDataToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  console.log('appData: ', state);

  saveDataToLocalStorage('appData', state);

  const getDataFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const savedData = getDataFromLocalStorage('appData');

  console.log('in local storage: ', savedData);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
