/**
 * @summary Reusable BC Gov Footer Component
 * @author Dallas Richmond
 */
import { SmallNavButton } from '../../appNav';
import { FooterWrapper, Container } from './footer.styles';
import office from '/iconography/FindOfficeWhite.svg';
import service from '/iconography/FindServiceWhite.svg';
import report from '/iconography/ReportWhite.svg';
import home from '/iconography/HomeWhite.svg';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <SmallNavButton
          path="/"
          text="Home"
          icon={home}
        />
        <SmallNavButton
          path="/location"
          text="Offices"
          icon={office}
        />
        <SmallNavButton
          path="/services"
          text="Services"
          icon={service}
        />
        <SmallNavButton
          path="/report"
          text="Report"
          icon={report}
        />
      </Container>
    </FooterWrapper>
  );
}
