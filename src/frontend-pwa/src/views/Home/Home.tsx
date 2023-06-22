/**
 * @summary The main view for the application
 * @author Dallas Richmond, LocalNewsTV
 */
import { NavButton } from '../../components/appNav';

import {
  Wrapper,
  ButtonWrapper,
} from './home.styles';
import location from '/iconography/FindOfficeColor.svg';
import report from '/iconography/ReportColor.svg';
import services from '/iconography/FindServiceColor.svg';

export default function Home() {
  return (
    <Wrapper>
      <ButtonWrapper>
        <NavButton
          path="/location"
          text="Find an Office"
          icon={location}
          hex="#DEF3FB"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <NavButton
          path="/services"
          text="Find BC Services"
          icon={services}
          hex="#EEE0E9"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <NavButton
          path="/report"
          text="Report an Event"
          icon={report}
          hex="#FEF2DF"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
