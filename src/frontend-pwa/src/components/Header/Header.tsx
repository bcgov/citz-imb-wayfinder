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
          <img src="../../assets/images/logo-banner.svg" alt="Go to the Government of British Columbia website" />
        </a>
        <Heading>Wayfinder</Heading>
      </Banner>
    </HeaderWrapper>
  );
}
