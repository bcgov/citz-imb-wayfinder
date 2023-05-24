import {
  FooterWrapper,
  Container,
  List,
  ListItemLink,
} from './footer.styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <List>
          <li><ListItemLink href=".">Home</ListItemLink></li>
          <li><ListItemLink href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</ListItemLink></li>
          <li><ListItemLink href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</ListItemLink></li>
          <li><ListItemLink href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</ListItemLink></li>
          <li><ListItemLink href="https://www2.gov.bc.ca/gov/content/home/copyright">Copyright</ListItemLink></li>
          <li><ListItemLink href="https://github.com/bcgov/citz-imb-wayfinder/issues">Contact Us</ListItemLink></li>
        </List>
      </Container>
    </FooterWrapper>
  );
}
