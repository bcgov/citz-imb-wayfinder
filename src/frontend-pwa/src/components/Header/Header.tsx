/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond
 */
import logo from '/logo-banner.svg';
import BackNavButton from '../BackNavButton/BackNavButton';
import SettingsNavButton from '../SettingsNavButton/SettingsNavButton';
import {
  Link,
} from 'react-router-dom';

import {
  HeaderWrapper,
  Heading,
  Banner,
  Image,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Banner>
        <Image href="/">
          <img src={logo} alt="Go to the Government of British Columbia website" />
        </Image>
        <Heading>Wayfinder</Heading>
      </Banner>
      <Link to="/settings">
        <SettingsNavButton />
        <BackNavButton />
      </Link>
    </HeaderWrapper>
  );
}
