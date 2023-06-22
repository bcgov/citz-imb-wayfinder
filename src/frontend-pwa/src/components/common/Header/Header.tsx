/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond
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
} from './header.styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/settings">
          <SettingsNavButton />
        </Link>
        <BackNavButton />
      </div>
      <Banner>
        <Link to="/">
          <Image src={logo} alt="Go to the Home page" />
        </Link>
        <StyledLink href="/">
          <Heading>Wayfinder</Heading>
        </StyledLink>
      </Banner>
    </HeaderWrapper>
  );
}
