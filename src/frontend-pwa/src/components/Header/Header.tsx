/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond
 */
import logo from '/logo-banner.svg';
import BackNavButton from '../BackNavButton/BackNavButton';
import SettingsNavButton from '../SettingsNavButton/SettingsNavButton';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <Image src={logo} alt="Go to the Home page" />
        </Link>
        <Heading>Wayfinder</Heading>
      </Banner>
      <div>
        <Link to="/settings">
          <SettingsNavButton />
        </Link>
        <BackNavButton />
      </div>
    </HeaderWrapper>
  );
}
