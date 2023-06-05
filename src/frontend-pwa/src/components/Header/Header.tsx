/**
 * @summary Reusable BC Gov Header Component
 * @author Dallas Richmond
 */
import logo from '/logo-banner.svg';
import gear from '/gear-icon.svg';
import {
  Link, useNavigate,
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
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <HeaderWrapper>
      <Banner>
        <Image>
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
        <button type="button" onClick={goBack}>Back</button>
      </Link>
    </HeaderWrapper>
  );
}
