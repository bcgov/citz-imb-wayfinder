import logo from '/logo-banner.svg';
import Spinner from '../Spinner/Spinner';
import {
  SplashScreenWrapper,
  Text,
} from './splashscreen.styles';

export default function SplashScreen() {
  return (
    <SplashScreenWrapper>
      <img src={logo} alt="BC Gov logo" />
      <Spinner />
      <Text>
        Loading
      </Text>
    </SplashScreenWrapper>
  );
}
