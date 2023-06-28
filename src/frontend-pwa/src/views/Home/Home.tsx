/**
 * @summary The main view for the application
 * @author Dallas Richmond, LocalNewsTV
 */
import { NavButton } from '../../components/appNav';
import {
  Wrapper,
  ButtonWrapper,
  ViewContainer,
} from './home.styles';
import location from '/iconography/FindOffice.svg';
import report from '/iconography/ReportColor.svg';
import services from '/iconography/FindServiceColor.svg';
import Greeting from '../../components/utility/Greeting/Greeting';

export default function Home() {
  return (
    <ViewContainer>
      <Wrapper>
        <Greeting />
        <ButtonWrapper>
          <NavButton
            path="/location"
            text="Find an office"
            icon={location}
            hex="#DEF3FB"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton
            path="/services"
            text="Find BC services"
            icon={services}
            hex="#EEE0E9"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <NavButton
            path="/report"
            text="Report an event"
            icon={report}
            hex="#FEF2DF"
          />
        </ButtonWrapper>
      </Wrapper>
    </ViewContainer>
  );
}
