import logo from '/logo-banner.svg';
import Spinner from '../Spinner/Spinner';
import {
  SplashScreenWrapper,
  Image,
} from './splashscreen.styles';

export default function SplashScreen() {
  return (
    <SplashScreenWrapper>
      <Image src={logo} alt="BC Gov logo" />
      <Spinner />
    </SplashScreenWrapper>
  );
}
