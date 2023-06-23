/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond, LocalNewsTV
 */
import logo from '/logo-banner.svg';
import { BackNavButton, SettingsNavButton } from '../../appNav';
import { Link } from 'react-router-dom';

import {
  HeaderWrapper,
  Heading,
  Banner,
  Image,
  StyledLink,
  BannerLeft,
  BannerRight,
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <BannerLeft>
        <BackNavButton />
      </BannerLeft>
      <Banner>
        <Link to="/">
          <Image src={logo} alt="Go to the Home page" />
        </Link>
        <StyledLink href="/">
          <Heading>Wayfinder</Heading>
        </StyledLink>
      </Banner>
      <BannerRight>
        <Link to="/settings">
          <SettingsNavButton />
        </Link>
      </BannerRight>
    </HeaderWrapper>
  );
}
