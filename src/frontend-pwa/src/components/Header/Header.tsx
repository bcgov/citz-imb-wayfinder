import logo from '../../../public/logo-banner.svg';

import {
  HeaderWrapper,
  Heading,
  Banner,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <Banner>
        <a href="https://gov.bc.ca">
          <img src={logo} alt="Go to the Government of British Columbia website" />
        </a>
        <Heading>Wayfinder</Heading>
      </Banner>
    </HeaderWrapper>
  );
}
