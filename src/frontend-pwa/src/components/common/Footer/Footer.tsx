/**
 * @summary Reusable BC Gov Footer Component
 * @author Dallas Richmond
 */
import { useLocation } from 'react-router-dom';
import { SmallNavButton } from '../../appNav';
import { FooterWrapper, Container } from './footer.styles';
import office from '/iconography/FindOfficeWhite.svg';
import service from '/iconography/FindServiceWhite.svg';
import report from '/iconography/ReportWhite.svg';
import home from '/iconography/HomeWhite.svg';
import { footerContent } from '../../../content/content';
import useAppService from '../../../services/app/useAppService';

export default function Footer() {
  const { state } = useAppService();
  const { lang } = state.settings;
  const location = useLocation();
  return (
    <FooterWrapper>
      {location.pathname !== '/'
      && (
      <Container>
        <SmallNavButton
          path="/"
          text={footerContent.home[lang]}
          icon={home}
        />
        <SmallNavButton
          path="/location"
          text={footerContent.offices[lang]}
          icon={office}
        />
        <SmallNavButton
          path="/services"
          text={footerContent.services[lang]}
          icon={service}
        />
        <SmallNavButton
          path="/report"
          text={footerContent.report[lang]}
          icon={report}
        />
      </Container>
      )}
    </FooterWrapper>
  );
}
