/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond
 */
import logo from '/logo-banner.svg';
import BackNavButton from '../BackNavButton/BackNavButton';
import SettingsNavButton from '../SettingsNavButton/SettingsNavButton';
import RoutingLink from '../RoutingLink/RoutingLink';

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
        <RoutingLink
          content={<Image src={logo} alt="Go to the Home page" />}
          path="/"
        />
        <Heading>Wayfinder</Heading>
      </Banner>
      <div>
        <RoutingLink
          content={<SettingsNavButton />}
          path="/settings"
        />
        <BackNavButton />
      </div>
    </HeaderWrapper>
  );
}
