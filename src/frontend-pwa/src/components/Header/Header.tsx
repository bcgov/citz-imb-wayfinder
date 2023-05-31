import logo from '/logo-banner.svg';
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
        <Image href="https://gov.bc.ca">
          <img src={logo} alt="Go to the Government of British Columbia website" />
        </Image>
        <Heading>Wayfinder</Heading>
      </Banner>
      <Link to="/settings">
        <button type="button">Settings</button>
      </Link>
    </HeaderWrapper>
  );
}
