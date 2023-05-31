import logo from '/logo-banner.svg';
import gear from '/gear-icon.svg';
import {
  Link,
} from 'react-router-dom';

import {
  HeaderWrapper,
  Heading,
  Banner,
  Image,
  StyledSettingsButton,
  StyledIcon,
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
        <StyledSettingsButton
          type="button"
          aria-label="Settings button"
        >
          <StyledIcon src={gear} alt="Settings" />
        </StyledSettingsButton>
      </Link>
    </HeaderWrapper>
  );
}
