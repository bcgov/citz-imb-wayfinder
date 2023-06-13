/**
 * @summary The main view for the application
 * @author Dallas Richmond
 */
import NavButton from '../../components/NavButton/NavButton';

import {
  Wrapper,
  ButtonWrapper,
} from './home.styles';
import location from '/geo-alt-fill.svg';
import report from '/newspaper.svg';
import services from '/people-fill.svg';

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
